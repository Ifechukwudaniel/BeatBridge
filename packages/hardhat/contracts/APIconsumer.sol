//SPDX-License-Identifier Mit 
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

///Need to change for API call

contract APIConsumer is ChainlinkClient, ERC1155 {
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    uint256 private score;
    string public ipfsData; //Declaring the ipfsData variable

    address public owner;  // Declare the owner variable

    constructor(
        address _oracle,
        bytes32 _jobId,
        uint256 _fee,
        address _link
    ) ERC1155("") {
        if (_link == address(0)) {
            setPublicChainlinkToken();
        } else {
            setChainlinkToken(_link);
        }
        oracle = _oracle;
        jobId = _jobId;
        fee = _fee;
        owner = msg.sender; // Set the contract deployer as the owner
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

///score needs to be changed to proper param
    function requestScore(string memory url, string memory path) public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        request.add("get", url);
        request.add("path", path);
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, uint256 _score) public recordChainlinkFulfillment(_requestId) {
        score = _score;
    }
/// Require statement need to be changed for param/api call
    function mint(address to, uint256 id, uint256 amount, bytes memory data) public {
        require(score > 50, "Score is not high enough to mint tokens");
        _mint(to, id, amount, data);
        _setURI(id, ipfsData);  // set token URI to ipfsData after minting

    }
    
    function updateIPFSData(string memory newIPFSData) public onlyOwner {
        ipfsData = newIPFSData;
    }

}
