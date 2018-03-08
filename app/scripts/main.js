var houseapp;
var house;
var houseIndex
console.log('\'Allo \'Allo!');
window.addEventListener('load', function () {
  console.log('APP started');
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    //console.log("MetaMask detected!!");
    console.log("log", "MetaMask!! detected");
  } else {
    //console.log('Injected web3 Not Found!!!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    var provider = document.getElementById('provider_url').value;
    window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
    setData("log", "Other Provider detected");
  }
  //var acc=doGetAccounts();
  setData('accInfo', web3.eth.accounts[0]);
  console.log("set up of acc info done");
});

function doDeployContract() {
  console.log("trying to doDeployContract");
  //var acc=doGetAccounts();
  setData('accInfo', web3.eth.accounts[0]);
  console.log("in do deploy");
  var track = "https://ropsten.etherscan.io/tx/";
  var houseappContract = web3.eth.contract([{ "constant": false, "inputs": [{ "name": "p", "type": "uint256" }, { "name": "fs", "type": "bool" }], "name": "createHouse", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getHouse", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "getTotalNumberOfHouses", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "i", "type": "uint256" }], "name": "this_house_belongs_to", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "i", "type": "uint256" }], "name": "is_this_house_for_sale", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "i", "type": "uint256" }], "name": "buy_house", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "total_number_of_houses", "type": "uint256" }], "name": "TNH", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "status", "type": "bool" }], "name": "HBE", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "owner_address", "type": "address" }], "name": "THBT", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "house_id", "type": "uint256" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" }], "name": "CHE", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "verdict", "type": "bool" }], "name": "ITHFS", "type": "event" }]);
  houseapp = houseappContract.new(
    {
      from: web3.eth.accounts[0],
      data: '6060604052341561000f57600080fd5b61002d60018061008f64010000000002610217176401000000009004565b61004c6002600161008f64010000000002610217176401000000009004565b61006b6008600161008f64010000000002610217176401000000009004565b61008a604d600061008f64010000000002610217176401000000009004565b61027f565b60008081548092919060010191905055506080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020016000548152602001821515815250600260008054815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555090505060011515600260008054815260200190815260200160002060030160009054906101000a900460ff161515141561020657600260008054815260200190815260200160002060030160009054906101000a900460ff1660016000600260008054815260200190815260200160002060020154815260200190815260200160002060006101000a81548160ff0219169083151502179055505b7f73bab136d6d96694794e26fc2ca6b9b0f2a1ea8e79650e18639bb2987cf7c8a66000548333604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050565b6109218061028e6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063215daf891461007d5780633107c99d146100ab5780635431e8fa1461012057806394c1d21a14610149578063a9de1bfb146101ac578063cde71b9f146101e7575b600080fd5b341561008857600080fd5b6100a960048080359060200190919080351515906020019091905050610217565b005b34156100b657600080fd5b6100cc6004808035906020019091905050610407565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390f35b341561012b57600080fd5b61013361048b565b6040518082815260200191505060405180910390f35b341561015457600080fd5b61016a60048080359060200190919050506104c3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b757600080fd5b6101cd6004808035906020019091905050610618565b604051808215151515815260200191505060405180910390f35b6101fd6004808035906020019091905050610708565b604051808215151515815260200191505060405180910390f35b60008081548092919060010191905055506080604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020016000548152602001821515815250600260008054815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555090505060011515600260008054815260200190815260200160002060030160009054906101000a900460ff161515141561038e57600260008054815260200190815260200160002060030160009054906101000a900460ff1660016000600260008054815260200190815260200160002060020154815260200190815260200160002060006101000a81548160ff0219169083151502179055505b7f73bab136d6d96694794e26fc2ca6b9b0f2a1ea8e79650e18639bb2987cf7c8a66000548333604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050565b60008060006002600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660026000868152602001908152602001600020600101546002600087815260200190815260200160002060030160009054906101000a900460ff169250925092509193909250565b600080547f267820cd95f5dc0c2abb4551079b4ff700eef3dc8dedee571943df066d3061c360405160405180910390a2600054905090565b60008060005483111561053f57600090507f89d01a0fbff9930fba6af7583962fa44bfa45d3cb48b5d5d4672453c5070d29781604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1809150610612565b7f89d01a0fbff9930fba6af7583962fa44bfa45d3cb48b5d5d4672453c5070d2976002600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16002600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505b50919050565b60008060005483111561066d57600090507f507e6348b6fdaeb2973bba5b4cdafdbcbb5fe2692b331a75e5067616e4a9687981604051808215151515815260200191505060405180910390a160009150610702565b60005483111515610701577f507e6348b6fdaeb2973bba5b4cdafdbcbb5fe2692b331a75e5067616e4a968796002600085815260200190815260200160002060030160009054906101000a900460ff16604051808215151515815260200191505060405180910390a16002600084815260200190815260200160002060030160009054906101000a900460ff169150610702565b5b50919050565b60008060008060009250349150339050600015156001600087815260200190815260200160002060009054906101000a900460ff1615151415610788577fc45756ca18515398cb68c84487d50bf04f62f3d843b99451406113414a38ed2f83604051808215151515815260200191505060405180910390a18293506108ed565b60026000868152602001908152602001600020600101548210156107e9577fc45756ca18515398cb68c84487d50bf04f62f3d843b99451406113414a38ed2f83604051808215151515815260200191505060405180910390a18293506108ed565b6002600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050505060019250806002600087815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc45756ca18515398cb68c84487d50bf04f62f3d843b99451406113414a38ed2f83604051808215151515815260200191505060405180910390a18293505b5050509190505600a165627a7a72305820e6bdb0ec3e6be6765ec276b7dcd5cd5e4edf8859be38d8782117a5c0649d8e4a0029',
      gas: '4700000'
    }, function (e, contract) {
      console.log(e, contract);
      $("#hiddenContract").removeClass("hidden");
      track += contract.transactionHash;
      var a = document.getElementById("contractHash");
      a.href = track;
      //a.innerText = track;
      setData('txHash', contract.transactionHash);
      if (typeof contract.address !== 'undefined') {
        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        setData('contract_hash', contract.address);
        getNum();
        $("#contractHash").addClass("hidden");
        $("#hiddenContractDiv").removeClass("hidden");
      }
    });


}

function createHouses(houseIndex) {
  var element = $("#houseRows");
  var row;
  var id;
  var hid;
  for (var i = 1; i <= houseIndex; i++)
  {
    var newRow = document.createElement('div');
    newRow.id = 'r-' + i;
    newRow.className = 'row';
    element.append(newRow);
    id = "#r-" + i;
    row = $(id);
    hid = "#h-" + i;
    //element.append("<div class='row'>");
    row.append("<div class='col-md-2'>House ID:")
    var newDiv = document.createElement('div');
    newDiv.id = 'h-' + i;
    newDiv.className = 'col-md-1 getDetails';
    newDiv.innerHTML = i;
    row.append(newDiv);
    //var newDetails = document.createElement('div');
    //newDetails.id = i;
    //newDetails.className = 'col-md-3'
    //newDetails.append("<button onclick='get_house_details()'>Get Details");
    //row.append(newDetails);
    row.append("<div class='col- md - 2'><button onclick='get_house_details()'>Get Price");
    row.append("<div class='col-md-1 hidden price'>");
    row.append("<div class='col- md - 2'><button onclick='kiska_ghar()'>Owner?</button></div>");
    row.append("<div id='buyHouseButton' class='col-md-2 hidden buyButton'><button onblur='hide_button()' onclick='ghar_kharid()'>Buy House");
  }
}

function hide_button() {
  $('.buyButton').addClass("hidden");
  $('.price').addClass("hidden");
}

function setData(docElementId, html) {
  document.getElementById(docElementId).innerHTML = html;
}



function doGetAccounts() {
  console.log("in do get accounts");
  web3.eth.getAccounts(function (error, result) {
    if (error)
      console.log('error');
    else {
      var acc = result;
    }
    console.log("hey I am in do get accounts");
    setData('accInfo', acc);
    return acc;
  });
}

function getNum() {
  //var account = web3.eth.accounts[0];
  //if (web3.eth.accounts[0] !== account) {
  //  account = web3.eth.accounts[0];
  //}
  //console.log("in getNum");
  //var a = document.getElementById("contract_hash");
  //var acnt = document.getElementById("accInfo");
  //var instance = createContractInstance(a.textContent);
  //var txnObject = {
  //  from: account,
  //  gas: 4700000
  //}
  //instance.getTotalNumberOfHouses.sendTransaction(txnObject, function (error, result) {
  //  console.log('RECVED>>', error, result);
  //  if (error) {
  //    console.log("error somewhere");
  //  } else {
  //    console.log("success");
  //  }
  //});
  houseapp.getTotalNumberOfHouses.call(function (error, result) {
    if (error) {
      console.log("could not get the number of houses");
    }
    else {
      houseIndex = result["c"][0];
      createHouses(houseIndex);
    }
  });
}
function setNum() {
  var account = web3.eth.accounts[0];
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
  }
  var a = document.getElementById("contract_hash");
  var acnt = document.getElementById("accInfo");
  var instance = createContractInstance(a.textContent);
  var txnObject = {
    from: account,
    gas: 4400000
  }
  console.log("in setNum");
  instance.setNum.sendTransaction(200203628, txnObject, function (error, result) {
    console.log('RECVED>>>>><<<<<', error, result);
    if (error) {
      console.log("in error");
    } else {
      console.log("not in error");
    }
  });
}

function createContractInstance(addr) {
  var abiD = [{ "constant": false, "inputs": [{ "name": "p", "type": "uint256" }, { "name": "fs", "type": "bool" }], "name": "createHouse", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getHouse", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "getTotalNumberOfHouses", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "i", "type": "uint256" }], "name": "this_house_belongs_to", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "i", "type": "uint256" }], "name": "is_this_house_for_sale", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "i", "type": "uint256" }], "name": "buy_house", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "total_number_of_houses", "type": "uint256" }], "name": "TNH", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "status", "type": "bool" }], "name": "HBE", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "owner_address", "type": "address" }], "name": "THBT", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "house_id", "type": "uint256" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" }], "name": "CHE", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "verdict", "type": "bool" }], "name": "ITHFS", "type": "event" }];
  var contract = web3.eth.contract(abiD);
  var instance = contract.at(addr);



  var TNH = instance.TNH();
  TNH.watch(function (error, result) {
    if (error) {
      console.error('Contract Event Error');
    } else {
      console.log("TNH watcher triggered");
      console.log(result);
      var created_string = "Total number of houses in the present world is: " + result.args.total_number_of_houses;
      setData('event_panel', created_string);
    }
  });


  var THBT = instance.THBT();
  THBT.watch(function (error, result) {
    if (error) {
      console.error('Contract Event Error');
    } else {
      console.log("THBT watcher triggered");
      console.log(result);
      var created_string = "This house belongs to: " + result.args.owner_address;
      setData('event_panel', created_string);
    }
  });


  var ITHFS = instance.ITHFS();
  ITHFS.watch(function (error, result) {
    if (error) {
      console.error('Contract Event Error');
    } else {
      console.log("ITHFS watcher triggered");
      console.log(result);
      var refined_result = result.args.verdict;
      if (refined_result == true)
        var created_string = "Yes this house is for sale!";
      if (refined_result == false)
        var created_string = "No, this house is not for sale!";
      setData('event_panel', created_string);
    }
  });


  var HBE = instance.HBE();
  HBE.watch(function (error, result) {
    if (error) {
      console.error('Contract Event Error');
    } else {
      console.log("HBE watcher triggered");
      console.log(result);
      var refined_result = result.args.status;
      if (refined_result == true)
        var created_string = "Congrats! You bought the house!";
      if (refined_result == false)
        var created_string = "Something went wrong, house not bought!";
      setData('event_panel', created_string);
    }
  });
  var CHE = instance.CHE();
  CHE.watch(function (error, result) {
    if (error) {
      console.error('Contract Event Error');
    } else {
      console.log("CHE watcher triggered");
      console.log(result);
      var refined_result1 = result.args.house_id;
      var refined_result2 = result.args.price;
      var refined_result3 = result.args.owner;
      var created_string = "New House created with id#" + refined_result1;
      setData('event_panel', created_string);
    }
  });


  return instance;
}

function kiska_ghar() {
  var eventTarget = event.target;
  var houseID = eventTarget.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
  var account = web3.eth.accounts[0];
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
  }
  console.log("in kiskaGhar");
  var a = document.getElementById("contract_hash");
  var acnt = document.getElementById("accInfo");
  var instance = createContractInstance(a.textContent);
  var txnObject = {
    from: account,
    gas: 4700000
  }
  //var input = document.getElementById("myNumber").value;
  houseapp.this_house_belongs_to.sendTransaction(parseInt(houseID), txnObject, function (error, result) {
    console.log('RECVED>>', error, result);
    if (error) {
      console.log("error kiska_ghar");
    } else {
      console.log("success_kiska_ghar");
      //$(eventTarget).parent().siblings('.owner').removeClass('hidden');
      //$(eventTarget).parent().siblings('.owner').text(result);
    }
  });
}

function bechega_kya() {
  var account = web3.eth.accounts[0];
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
  }
  console.log("in bechega_kya");
  var a = document.getElementById("contract_hash");
  var acnt = document.getElementById("accInfo");
  var instance = createContractInstance(a.textContent);
  var txnObject = {
    from: account,
    gas: 4700000
  }
  var input = document.getElementById("saleNumber").value;
  instance.is_this_house_for_sale.sendTransaction(input, txnObject, function (error, result) {
    console.log('RECVED>>', error, result);
    if (error) {
      console.log("error bechega_kya");
    } else {
      console.log("success bechega_kya");
    }
  });
}

function ghar_kharid() {
  var account = web3.eth.accounts[0];
  var houseValue = house[1]["c"] * 1000000000000000000;
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
  }
  console.log("in ghar_kharid");
  var a = document.getElementById("contract_hash");
  var acnt = document.getElementById("accInfo");
  //var instance = createContractInstance(a.textContent);
  var txnObject = {
    from: account,
    //to: '0x5b340172816C63683733F5b30106495DCBc9D85D',
    gas: 4400000,
    //gasPrice: 200000*4400000,
    value: houseValue
  }
  var input = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
  houseapp.buy_house.sendTransaction(parseInt(input), txnObject, function (error, result) {
    console.log('RECVED>>', error, result);
    if (error) {
      console.log("error ghar_kharid");
    } else {
      console.log("success ghar_kharid");
    }
  });
}
function ghar_bana() {
  var account = web3.eth.accounts[0];
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
  }
  console.log("in ghar_bana");
  var a = document.getElementById("contract_hash");
  var acnt = document.getElementById("accInfo");
  var instance = createContractInstance(a.textContent);
  var txnObject = {
    from: account,
    gas: 4700000
  }
  var input1 = document.getElementById("priceNumber").value;
  var input2 = document.getElementById("for_sale_flag").value;
  instance.createHouse(input1, input2, txnObject, function (error, result) {
    console.log('RECVED>>', error, result);
    if (error) {
      console.log("error ghar_bana");
    } else {
      console.log("success ghar_bana");
    }
  });
}

function get_house_details(e) {
  //var houseID = document.getElementById("houseNumber").value;
  var eventTarget = event.target;
  var houseID = eventTarget.parentElement.previousElementSibling.innerText;
  houseapp.getHouse.call(parseInt(houseID), function (error, result) {
    if (error) {
      console.log("could not get houses");
    }
    else {
      house = result;
      console.log(house);
      $(eventTarget).parent().siblings('.price').removeClass('hidden');
      $(eventTarget).parent().siblings('.price').text(house[1]["c"]);
      //$(eventTarget).parent().siblings('.owner').removeClass('hidden');
      //$(eventTarget).parent().siblings('.owner').text(house[0]);
      $(eventTarget).parent().siblings('.buyButton').removeClass('hidden');
    }
  });
}
