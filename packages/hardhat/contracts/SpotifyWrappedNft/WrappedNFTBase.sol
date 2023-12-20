// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract WrappedNFTBase is ERC721, ERC721URIStorage, ERC721Burnable, Ownable  {
   uint256 private _nextTokenId;
   uint256 public  maxSupply;
   uint256 public  mintPrice;

   constructor(string memory _name, string memory _symbol,  uint256 _maxSupply , uint256 _mintPrice) 
     ERC721(_name, _symbol) 
     Ownable(msg.sender)
   {
       maxSupply = _maxSupply;
       mintPrice = _mintPrice;
   }

    function safeMint(address to, string memory uri) public onlyOwner payable {
      require(msg.value == mintPrice, "!mintPrice");
      require(_nextTokenId <= maxSupply, "Max Supply Reached");
      uint256 tokenId = _nextTokenId++;
      _safeMint(to, tokenId);
      _setTokenURI(tokenId, uri);
    }
   
    function tokenURI(uint256 tokenId) public view  override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
