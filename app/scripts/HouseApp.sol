pragma solidity ^0.4.2;
contract HouseApp {
    event TNH(uint indexed total_number_of_houses);
    event HBE(bool status);
    event THBT(address owner_address);
    event CHE(uint house_id,uint price,address owner);
    event ITHFS(bool verdict);
    struct House{
        address owner;
        uint price;
        uint id;
        bool for_sale;
    }
    uint total_houses;
    mapping(uint=>bool)is_the_house_for_sale;
    mapping(uint=>House)full_house_info;
  function HouseApp(){
     createHouse(1,true);
     createHouse(2,true);
     createHouse(8,true);
     createHouse(77,false);
    
  }
  function getTotalNumberOfHouses() returns (uint){
      TNH(total_houses);
      return total_houses;
  }
  
  
  function createHouse(uint p,bool fs)
  {
      total_houses++;
        full_house_info[total_houses]=House(
          {
              
                owner: msg.sender,
                price: p,
                id:total_houses,
                for_sale:fs
          }
          );
             
    if(full_house_info[total_houses].for_sale==true)
    {
        is_the_house_for_sale[full_house_info[total_houses].id]=full_house_info[total_houses].for_sale;
    }
    CHE(total_houses,p,msg.sender);
  }
  function buy_house(uint i) public payable returns(bool){
      bool status=false;
      var money_amount=msg.value;
      var buyer_address=msg.sender;
      if(is_the_house_for_sale[i]==false){
          HBE(status);
        return status;  
      }
        
        
        else if(money_amount<full_house_info[i].price)
        {
            HBE(status);
            return status;
        }
        else
        {
            full_house_info[i].owner.send(money_amount); //transfer money to owner
            status=true;  //update status
            full_house_info[i].owner=buyer_address; //update owner to buyer
            HBE(status);
            return status;
        }
  }
  function this_house_belongs_to(uint i) public returns(address){
      if(i>total_houses){
          address temp;
          temp=0x0000000000000000000000000000000000000000;
          THBT(temp);
          return temp;
      }
      THBT(full_house_info[i].owner);
      return full_house_info[i].owner;
  }
  
  function is_this_house_for_sale(uint i) returns (bool){
      if(i>total_houses)
      {
      bool verdict= false;
      ITHFS(verdict);
      return false;
      }
      if(i<=total_houses)
      {
          ITHFS(full_house_info[i].for_sale);
          return full_house_info[i].for_sale;
      }
  }

 function getHouse(uint id) public constant returns(address, uint,bool) {
        return (full_house_info[id].owner, full_house_info[id].price, full_house_info[id].for_sale);
    }
  
} 