console.log('\'Allo \'Allo!');
window.addEventListener('load', function() {
console.log('APP started');
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    //console.log("MetaMask detected!!");
    setData("log","MetaMask!! detected");
  } else {
    //console.log('Injected web3 Not Found!!!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    var provider = document.getElementById('provider_url').value;
    window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
    setData("log","Other Provider detected");
  }
  var acc=doGetAccounts();
  setData('accInfo',acc);
  console.log("set up of acc info done");
});

function doDeployContract(){
	console.log("trying to doDeployContract");
	var acc=doGetAccounts();
setData('accInfo',acc);
console.log("in do deploy");
var houseappContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"p","type":"uint256"},{"name":"fs","type":"bool"}],"name":"createHouse","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getTotalNumberOfHouses","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"i","type":"uint256"}],"name":"this_house_belongs_to","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"i","type":"uint256"}],"name":"is_this_house_for_sale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"i","type":"uint256"}],"name":"buy_house","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"total_number_of_houses","type":"uint256"}],"name":"TNH","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"}],"name":"HBE","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner_address","type":"address"}],"name":"THBT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"house_id","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"CHE","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"verdict","type":"bool"}],"name":"ITHFS","type":"event"}]);
var houseapp = houseappContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b61002d60018061008f64010000000002610197176401000000009004565b61004c6002600161008f64010000000002610197176401000000009004565b61006b6008600161008f64010000000002610197176401000000009004565b61008a604d600061008f64010000000002610197176401000000009004565b61027f565b60008081548092919060010191905055506080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020016000548152602001821515815250600260008054815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555090505060011515600260008054815260200190815260200160002060030160009054906101000a900460ff161515141561020657600260008054815260200190815260200160002060030160009054906101000a900460ff1660016000600260008054815260200190815260200160002060020154815260200190815260200160002060006101000a81548160ff0219169083151502179055505b7f73bab136d6d96694794e26fc2ca6b9b0f2a1ea8e79650e18639bb2987cf7c8a66000548333604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050565b61081d8061028e6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063215daf89146100725780635431e8fa146100a057806394c1d21a146100c9578063a9de1bfb1461012c578063cde71b9f14610167575b600080fd5b341561007d57600080fd5b61009e60048080359060200190919080351515906020019091905050610197565b005b34156100ab57600080fd5b6100b3610387565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100ea60048080359060200190919050506103bf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013757600080fd5b61014d6004808035906020019091905050610514565b604051808215151515815260200191505060405180910390f35b61017d6004808035906020019091905050610604565b604051808215151515815260200191505060405180910390f35b60008081548092919060010191905055506080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020016000548152602001821515815250600260008054815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555090505060011515600260008054815260200190815260200160002060030160009054906101000a900460ff161515141561030e57600260008054815260200190815260200160002060030160009054906101000a900460ff1660016000600260008054815260200190815260200160002060020154815260200190815260200160002060006101000a81548160ff0219169083151502179055505b7f73bab136d6d96694794e26fc2ca6b9b0f2a1ea8e79650e18639bb2987cf7c8a66000548333604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050565b600080547f267820cd95f5dc0c2abb4551079b4ff700eef3dc8dedee571943df066d3061c360405160405180910390a2600054905090565b60008060005483111561043b57600090507f89d01a0fbff9930fba6af7583962fa44bfa45d3cb48b5d5d4672453c5070d29781604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a180915061050e565b7f89d01a0fbff9930fba6af7583962fa44bfa45d3cb48b5d5d4672453c5070d2976002600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16002600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505b50919050565b60008060005483111561056957600090507f507e6348b6fdaeb2973bba5b4cdafdbcbb5fe2692b331a75e5067616e4a9687981604051808215151515815260200191505060405180910390a1600091506105fe565b600054831115156105fd577f507e6348b6fdaeb2973bba5b4cdafdbcbb5fe2692b331a75e5067616e4a968796002600085815260200190815260200160002060030160009054906101000a900460ff16604051808215151515815260200191505060405180910390a16002600084815260200190815260200160002060030160009054906101000a900460ff1691506105fe565b5b50919050565b60008060008060009250349150339050600015156001600087815260200190815260200160002060009054906101000a900460ff1615151415610684577fc45756ca18515398cb68c84487d50bf04f62f3d843b99451406113414a38ed2f83604051808215151515815260200191505060405180910390a18293506107e9565b60026000868152602001908152602001600020600101548210156106e5577fc45756ca18515398cb68c84487d50bf04f62f3d843b99451406113414a38ed2f83604051808215151515815260200191505060405180910390a18293506107e9565b6002600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050505060019250806002600087815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc45756ca18515398cb68c84487d50bf04f62f3d843b99451406113414a38ed2f83604051808215151515815260200191505060405180910390a18293505b5050509190505600a165627a7a723058202b14457da5a19570465005f15f990b4339463f31d1df235784afb1038c52ecce0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    setData('txHash',contract.transactionHash);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
         setData('contract_hash',contract.address);
    }
 });



}

function setData(docElementId, html) {
       document.getElementById(docElementId).innerHTML = html;
    }



 function doGetAccounts() {	
console.log("in do get accounts");
  web3.eth.getAccounts(function(error,result){
if(error)
	console.log('error');	
else
{
	var acc=result;
}
console.log("hey I am in do get accounts");
setData('accInfo',acc);
return acc;
  });
}

function getNum()
{
	 console.log("in getNum");
	 var a = document.getElementById("contract_hash");
	var acnt=document.getElementById("accInfo");
    var instance = createContractInstance(a.textContent);
    var    txnObject = {
        from: acnt.textContent,
        gas: 4700000
    }
    instance.getTotalNumberOfHouses.sendTransaction(txnObject,function(error, result)  {
            console.log('RECVED>>',error,result);   
            if(error){
                console.log("error somewhere");
            } else {
                console.log("success");
            }
        });
}
function setNum()
{
	var a = document.getElementById("contract_hash");
	var acnt=document.getElementById("accInfo");
    var instance = createContractInstance(a.textContent);
    var    txnObject = {
        from: acnt.textContent,
        gas: 4400000
    }
	console.log("in setNum");
	instance.setNum.sendTransaction(200203628,txnObject,function(error, result)  {
            console.log('RECVED>>>>><<<<<',error,result);   
            if(error){
                console.log("in error");
            } else {
            	console.log("not in error");            
            }
        });
}

function  createContractInstance(addr){
var abiD=[ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "house_id", "type": "uint256" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" } ], "name": "CHE", "type": "event" }, { "constant": false, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "this_house_belongs_to", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "status", "type": "bool" } ], "name": "HBE", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "verdict", "type": "bool" } ], "name": "ITHFS", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner_address", "type": "address" } ], "name": "THBT", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "total_number_of_houses", "type": "uint256" } ], "name": "TNH", "type": "event" }, { "constant": false, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "is_this_house_for_sale", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "buy_house", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "p", "type": "uint256" }, { "name": "fs", "type": "bool" } ], "name": "createHouse", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getTotalNumberOfHouses", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
	var    contract = web3.eth.contract(abiD);
	var    instance = contract.at(addr);



	var TNH=instance.TNH();
	TNH.watch(function(error, result){
        if(error){
            console.error('Contract Event Error');
        } else {
            console.log("TNH watcher triggered");
            console.log(result);
            var created_string="Total number of houses in the present world is: "+result.args.total_number_of_houses;
            setData('event_panel',created_string);
        }
    });


    var THBT=instance.THBT();
	THBT.watch(function(error, result){
        if(error){
            console.error('Contract Event Error');
        } else {
            console.log("THBT watcher triggered");
            console.log(result);
            var created_string="This house belongs to: "+result.args.owner_address;
            setData('event_panel',created_string);
        }
    });


    var ITHFS=instance.ITHFS();
	ITHFS.watch(function(error, result){
        if(error){
            console.error('Contract Event Error');
        } else {
            console.log("ITHFS watcher triggered");
            console.log(result);
            var refined_result=result.args.verdict;
            if(refined_result==true)
            var created_string="Yes this house is for sale!";
            if(refined_result==false)
            var created_string="No, this house is not for sale!";
            setData('event_panel',created_string);
        }
    });


    return instance;
    }
    
    function kiska_ghar(){
        console.log("in kiskaGhar");
	 var a = document.getElementById("contract_hash");
	var acnt=document.getElementById("accInfo");
    var instance = createContractInstance(a.textContent);
    var    txnObject = {
        from: acnt.textContent,
        gas: 4700000
    }
    var input=document.getElementById("myNumber").value;
    setData('demo',input);
    instance.this_house_belongs_to.sendTransaction(input,txnObject,function(error, result)  {
            console.log('RECVED>>',error,result);   
            if(error){
                console.log("error kiska_ghar");
            } else {
                console.log("success_kiska_ghar");
            }
        });
    }

function bechega_kya(){
    console.log("in bechega_kya");
    var a = document.getElementById("contract_hash");
   var acnt=document.getElementById("accInfo");
   var instance = createContractInstance(a.textContent);
   var    txnObject = {
       from: acnt.textContent,
       gas: 4700000
   }
   var input=document.getElementById("saleNumber").value;
   setData('demo',input);
   instance.is_this_house_for_sale.sendTransaction(input,txnObject,function(error, result)  {
           console.log('RECVED>>',error,result);   
           if(error){
               console.log("error bechega_kya");
           } else {
               console.log("success bechega_kya");
           }
       });
}

function    setExecuteResultUI(callType,functionName, parameter, return_value, txHash, error){
    var detail = callType+':'+functionName+'('+parameter+')';
    if(error)  detail += ' FAILED '+return_value;
    else detail += 'Successful';
    console.log('hua 1');
}