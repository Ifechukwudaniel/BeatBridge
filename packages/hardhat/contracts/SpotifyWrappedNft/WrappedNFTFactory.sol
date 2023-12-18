// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "./WrappedNFTBase.sol";

contract WrappedNFTFactory {
    
    address[] public colections;
    mapping(address => address)  colectionToOwner;

    event DeployedCollection( address indexed colection, uint256 date);
    
    function deploy(
        string memory _name,string memory _symbol, uint256 _maxSupply, uint256 _mintPrice
    ) external {
        WrappedNFTBase newCollection = new WrappedNFTBase(_name,_symbol, _maxSupply, _mintPrice);
        newCollection.transferOwnership(msg.sender);
        colections.push(address(newCollection));
        colectionToOwner[msg.sender] = address(newCollection);
        emit DeployedCollection(address(newCollection),block.timestamp);
    }

    function collectionCount() external view returns(uint256) {
        return colections.length;
    }

    function getCollectionOwner(address userAddress) external view returns(address) {
        return colectionToOwner[userAddress];
    }
}
