// var accounts = {checkings :{
// 	balance = 0;
// 	deposit = function (amount) {
// 		accounts.checkings.balance = accounts.checkings.balance + amount;
// 	}
// withdraw = function(amount) {
	//	if(amount <= checkings.balance) {
// 		accounts.checkings.balance = accounts.checkings.balance - amount;
//  }
// else {return false;}
//	}
// }, savings : {}}



var savingBalance = 0;
var checkingBalance = 0;
function changeBg (){
	if(savingBalance === 0 && checkingBalance === 0) {
		document.body.style.backgroundColor = "red";	
			}
			else
			{
		document.body.style.backgroundColor = "gray";				
			}}
function checkInput()
{
	if(document.getElementById('savingMoney').value!= '') {
		var input = document.getElementById('savingMoney').value;
		if(isNaN(input)){
			alert('Enter Only Numbers');
			return false;
		}
		return true;
	}
	if(document.getElementById('checkingMoney').value!= '') {
		var input = document.getElementById('checkingMoney').value;
		if(isNaN(input)){
			alert('Enter Only Numbers');
			return false;
		}
		return true;
	}
}
function deposit() {
	if(!checkInput()) {
		document.getElementById('savingMoney').value = '';
		document.getElementById('checkingMoney').value = '';
		return;
	}
	if(document.getElementById('savingMoney').value == '' && document.getElementById('checkingMoney').value == '') {
		alert('No Input!');
		return;
	}
	else if(document.getElementById('savingMoney').value != '') {
	var Money = parseInt(document.getElementById('savingMoney').value);
	savingBalance = savingBalance+ Money;
	console.log(Money);
	console.log('savingBalance>>>>>>>>'+savingBalance);
	document.getElementById('savingMoney').value = '';
	document.getElementById('savingsBalanceSpan').innerHTML = savingBalance;
	changeBg();
	return savingBalance;
}
	else if (document.getElementById('checkingMoney').value != ''){
		var Money = parseInt(document.getElementById('checkingMoney').value);
	checkingBalance = checkingBalance+ Money;
	console.log(Money);
	console.log('checkingBalance>>>>>'+checkingBalance);
	document.getElementById('checkingMoney').value = '';
	document.getElementById('checkingBalanceSpan').innerHTML = checkingBalance;
	changeBg();
	return checkingBalance;
	}
}
function withdraw() {
	if(!checkInput()) {
		document.getElementById('savingMoney').value = '';
		document.getElementById('checkingMoney').value = '';
		return;
	}
	if (document.getElementById('savingMoney').value == '' && document.getElementById('checkingMoney').value == '') {
		alert('No Input!');
		return;
	}

	else if(document.getElementById('savingMoney').value != '') {
	var Money = parseInt(document.getElementById('savingMoney').value);
	
	if(Money > (savingBalance+checkingBalance)){
		document.getElementById('savingMoney').value = '';
		alert('Exceeded limit');

		return;
	}
	else {
		if(Money > savingBalance) {
			var overdrawn;
			overdrawn = Money - savingBalance;
			savingBalance = 0;
			checkingBalance = checkingBalance - overdrawn;
			document.getElementById('savingsBalanceSpan').innerHTML = savingBalance;
			document.getElementById('checkingBalanceSpan').innerHTML = checkingBalance;
			document.getElementById('savingMoney').value = '';
			changeBg();
			return checkingBalance;
		}
		else {
	console.log("savingBalance>>>>>>>"+savingBalance);
	savingBalance = savingBalance - Money;
	document.getElementById('savingMoney').value = '';
	document.getElementById('savingsBalanceSpan').innerHTML = savingBalance;
	changeBg();
		return savingBalance;
	}
	}
	
}

else if(document.getElementById('checkingMoney').value != '') {
	var Money = parseInt(document.getElementById('checkingMoney').value);
	
	if(Money > (savingBalance+checkingBalance)){
		document.getElementById('checkingMoney').value = '';
		alert('Exceeded limit');

		return;
	}
	else {
		if(Money > checkingBalance) {
			var overdrawn;
			overdrawn = Money - checkingBalance;
			checkingBalance = 0;
			savingBalance = savingBalance - overdrawn;
			document.getElementById('checkingBalanceSpan').innerHTML = savingBalance;
			document.getElementById('savingsBalanceSpan').innerHTML = checkingBalance;
			document.getElementById('checkingMoney').value = '';
			changeBg();
			return checkingBalance;
		}
		else {
	console.log(checkingBalance);
	checkingBalance = checkingBalance - Money;
	document.getElementById('checkingMoney').value = '';
	document.getElementById('checkingBalanceSpan').innerHTML = checkingBalance;
	changeBg();
	return checkingBalance;
			}
	}
	
}

}
document.getElementById('depositSaving').addEventListener('click',deposit);
document.getElementById('withdrawSaving').addEventListener('click',withdraw);
document.getElementById('depositChecking').addEventListener('click',deposit);
document.getElementById('withdrawChecking').addEventListener('click',withdraw);