pragma solidity ^0.4.4;

contract Adoptions {
	address[16] public adopters;
	function adopt(uint petId) public returns (uint) {
		require(petId>=0 && petId<=15);
		adopters[petId] = msg.sender;
		return petId;
	}
	function getAdopters() public returns (address [16]) {
		return adopters;
	}
}