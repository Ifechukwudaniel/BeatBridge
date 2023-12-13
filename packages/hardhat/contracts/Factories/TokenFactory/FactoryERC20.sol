// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "./ERC20Token.sol";

contract FactoryERC20 {
    
    address[] public deployedTokens;
    mapping(address => address)  tokenToOwner;

    event DeployedToken( address indexed tokenAddress, uint256 date );
    
    function deploy(
        string memory _name,string memory _symbol,  uint256 _totalSupply
    ) external {
        ERC20Token newToken = new ERC20Token(_name,_symbol,_totalSupply, msg.sender);
        newToken.transferOwnership(msg.sender);
        deployedTokens.push(address(newToken));
        tokenToOwner[msg.sender] = address(newToken);
        emit DeployedToken(address(newToken),block.timestamp);
    }

    function collectionCount() external view returns(uint256) {
        return deployedTokens.length;
    }

    function getTokenOwner(address tokenOwnerAddress) external view returns(address) {
        return tokenToOwner[tokenOwnerAddress];
    }
}
