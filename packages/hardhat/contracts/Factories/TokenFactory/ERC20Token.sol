// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract ERC20Token is ERC20,Ownable {
    bool public limited;
    uint256 public maxHoldingAmount;
    uint256 public minHoldingAmount;
    address public pairPool;
    mapping(address => bool) public blacklists;

    constructor(string memory _name, string memory _symbol,uint256 _totalSupply, address _owner) Ownable(_owner)  ERC20(_name, _symbol) {
        _mint(msg.sender, _totalSupply);
    }

    function blacklist(address _address, bool _isBlacklisting) external onlyOwner {
        blacklists[_address] = _isBlacklisting;
    }

    function setRule(bool _limited, address _pairPool, uint256 _maxHoldingAmount, uint256 _minHoldingAmount) external onlyOwner {
        limited = _limited;
        pairPool = _pairPool;
        maxHoldingAmount = _maxHoldingAmount;
        minHoldingAmount = _minHoldingAmount;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    )  internal virtual {
        require(!blacklists[to] && !blacklists[from], "Blacklisted");

        if (pairPool == address(0)) {
            require(from == owner() || to == owner(), "trading is not started");
            return;
        }

        if (limited && from == pairPool) {
            require(super.balanceOf(to) + amount <= maxHoldingAmount && super.balanceOf(to) + amount >= minHoldingAmount, "Forbid");
        }
    }

    function burn(uint256 value) external onlyOwner {
        _burn(msg.sender, value);
    }
}
