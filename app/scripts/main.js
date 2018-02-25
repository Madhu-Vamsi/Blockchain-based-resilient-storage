console.log('\'Allo \'Allo!');
window.addEventListener('load', function() {
console.log('APP started');
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    //console.log("MetaMask detected!!");
    setData("log","MetaMask detected");
  } else {
    //console.log('Injected web3 Not Found!!!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    var provider = document.getElementById('provider_url').value;
    window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
    setData("log","Other Provider detected");
  }
  //var value=doGetAccounts();
  //var value='logs';
  //setData("log",value);
  var acc=doGetAccounts();
  setData('accInfo',acc);
  console.log("set up of acc info done");
});

function doDeployContract(){
	console.log("trying to doDeployContract");
	var acc=doGetAccounts();
  setData('accInfo',acc);
	//var accounts=doGetAccounts();
	
	console.log("in do deploy");
	//console.log(acc);
// 	var contract=web3.eth.contract(
// ======= ./interact.sol:sample =======
// Contract JSON ABI 
// [{"constant":false,"inputs":[],"name":"getNum","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"setNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"caller","type":"address"},{"indexed":true,"name":"oldNum","type":"bytes32"},{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberSetEvent","type":"event"}]
// );
// 	var abiDefinition = JSON.parse(abiDefinitionString);
// 	console.log("contract abi");
// 	console.log(abiDefinition);


var x = 5;/* var of type uint256 here */ ;
var sampleContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"getNum","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"setNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"caller","type":"address"},{"indexed":true,"name":"oldNum","type":"bytes32"},{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberSetEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberGetEvent","type":"event"}]);
var sample = sampleContract.new(
   x,
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b6040516020806101b083398101604052808051906020019091905050806000819055505061016e806100426000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806367e0badb14610051578063cd16ecbf1461007a575b600080fd5b341561005c57600080fd5b61006461009d565b6040518082815260200191505060405180910390f35b341561008557600080fd5b61009b60048080359060200190919050506100dc565b005b60008054600102600019167f806b74764459bc329637dea1b7c07cbbed4298e1841969862c6c5cbddc65f25460405160405180910390a2600054905090565b600080549050816000819055506000546001026000191681600102600019163373ffffffffffffffffffffffffffffffffffffffff167f108fd0bf2253f6baf35f111ba80fb5369c2e004b88e36ac8486fcee0c87e61ce60405160405180910390a450505600a165627a7a72305820a4d1f15c0017fe562be604fcd26a6b18c340468e2aef7c8bdbb066aa5a98de000029', 
     gas: '4400000'
   }, function (e, contract){
    console.log(e, contract);
    setData('txHash',contract.transactionHash);

    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
         setData('contract_hash',contract.address);
    }
 })



}

function setData(docElementId, html) {
       document.getElementById(docElementId).innerHTML = html;
    }



 function doGetAccounts() {	
console.log("in do get accounts");
  web3.eth.getAccounts(function(error,result){
  //	console.log("hello");
if(error)
	console.log('error');
	
else
{
	var acc=result;
	//setData('accountsSection',accounts);
	// var aa=web3.eth.getBalance(accounts);
	// console.log("aa");
	// console.log(aa);

}
console.log("hey I am in do get accounts");
//console.log(typeOf, accounts);
//console.log(typeof 'acc');
//console.log(acc.length);
//console.log(acc);
setData('accInfo',acc);
return acc;
  });

}

function getNum()
{
	// var abiD=[{"constant":false,"inputs":[],"name":"getNum","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"setNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"caller","type":"address"},{"indexed":true,"name":"oldNum","type":"bytes32"},{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberSetEvent","type":"event"}];
	// var a = document.getElementById("contract_hash");
	// //console.log(typeof,a);
	// console.log(a.textContent);
	 console.log("in getNum");
	 var a = document.getElementById("contract_hash");
	var acnt=document.getElementById("accInfo");
    // creating the cntract instance
    var instance = createContractInstance(a.textContent);
    var    txnObject = {
        from: acnt.textContent,
        gas: 4700000
    }
    // instance.getNum.call({},web3.eth.defaultBlock, function(error,result){
    //         setExecuteResultUI('Call','getNum','',result,'',false);
    //     });

    instance.getNum.sendTransaction(txnObject,function(error, result)  {

            console.log('RECVED>>',error,result);   
            if(error){
                setExecuteResultUI('Send Transaction:   ','getNum','',error,'',true);
            } else {
                setExecuteResultUI('Send Transaction:   ','getNum','',result,result,false);
            }
        });

	// console.log("in getNum");
	// instance.getNum.sendTransaction(txnObject,function(error, result)  {

 //            console.log('RECVED>>',error,result);   
 //            if(error){
 //                console.log("in error");
 //                //setExecuteResultUI('Send Transaction:   ',funcName,'',error,'',true);
 //            } else {
 //            	console.log("not in error");
 //                //setExecuteResultUI('Send Transaction:   ',funcName,parameterValue,result,result,false);
 //            	 setExecuteResultUI('Send Transaction:   ','getNum','',result,result,false);
 //            }
 //        });

}


function setNum()
{

	var a = document.getElementById("contract_hash");
	var acnt=document.getElementById("accInfo");
    // creating the cntract instance
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
                //setExecuteResultUI('Send Transaction:   ',funcName,'',error,'',true);
            } else {
            	console.log("not in error");
                //setExecuteResultUI('Send Transaction:   ',funcName,parameterValue,result,result,false);
            
            }
        });





}

function  createContractInstance(addr){
var abiD=[{"constant":false,"inputs":[],"name":"getNum","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"setNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"caller","type":"address"},{"indexed":true,"name":"oldNum","type":"bytes32"},{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberSetEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberGetEvent","type":"event"}];
	var    contract = web3.eth.contract(abiD);
	var    instance = contract.at(addr);



	var eventWatcher=instance.NumberSetEvent();
	eventWatcher.watch(function(error, result){
        if(error){
            console.error('Contract Event Error');
        } else {
           
        //    console.log("Event.watch="+JSON.stringify(result))
            // increment the count watch_instance_event_count
            //contractEventCounter++;
            console.log("watcher triggered");
            console.log(result);
            setData('event_panel',result.args.newNum);

            //addEventListItem('watch_contract_events_list',result,5);
        }
    });

    return instance;
	}

function    setExecuteResultUI(callType,functionName, parameter, return_value, txHash, error){
    var detail = callType+':'+functionName+'('+parameter+')';
    if(error)  detail += ' FAILED '+return_value;
    else detail += 'Successful';
    console.log('hua 1');
    // setData('invoke_details',detail,(error));

    // setData('invoke_return_value',return_value,(error));

    // console.log('return_value=',return_value)

    // setData('invoke_contracttransactionhash', txHash, false);
    // //invoke_contracttransactionhash_link
    // setEtherscanIoLink('invoke_contracttransactionhash_link', 'tx', txHash);
}