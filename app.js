var savingBalance = 0;
var checkingBalance = 0;
function deposit() {
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
	return savingBalance;
}
	else if (document.getElementById('checkingMoney').value != ''){
		var Money = parseInt(document.getElementById('checkingMoney').value);
	checkingBalance = checkingBalance+ Money;
	console.log(Money);
	console.log('checkingBalance>>>>>'+checkingBalance);
	document.getElementById('checkingMoney').value = '';
	return checkingBalance;
	}
}
function withdraw() {
	if (document.getElementById('savingMoney').value == '' && document.getElementById('checkingMoney').value == '') {
		alert('No Input!');
		return;
	}
	else if(document.getElementById('savingMoney').value != '') {
	var Money = parseInt(document.getElementById('savingMoney').value);
	savingBalance = savingBalance - Money;
	console.log(savingBalance);
	document.getElementById('savingMoney').value = '';
	return savingBalance;
}
else if(document.getElementById('checkingMoney').value != '') {
	var Money = parseInt(document.getElementById('checkingMoney').value);
	checkingBalance = checkingBalance - Money;
	console.log(checkingBalance);
	document.getElementById('checkingMoney').value = '';
	return savingBalance;
}

}
document.getElementById('depositSaving').addEventListener('click',deposit);
document.getElementById('withdrawSaving').addEventListener('click',withdraw);
document.getElementById('depositChecking').addEventListener('click',deposit);
document.getElementById('withdrawChecking').addEventListener('click',withdraw);