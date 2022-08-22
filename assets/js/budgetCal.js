function getInputValueById(elementID) {
	let parPlayerRate = document.getElementById(elementID);
	let parPlayerRateValue = parseFloat(parPlayerRate.value);
	return parPlayerRateValue;
}

function setElementValueById(IdName, values) {
	let setTotalCost = document.getElementById(IdName);
	setTotalCost.innerText = values;
}

document.getElementById('calculator').addEventListener('click', function () {
	let allPlayers = 5;

	let allPlayerCost = getInputValueById('par-player-rate');

	let playerExpenses = allPlayers * allPlayerCost;

	console.log(playerExpenses);

	setElementValueById('players-total-cost', playerExpenses);
});

document.getElementById('final-amount').addEventListener('click', function () {
	let playerCost = document.getElementById('players-total-cost');
	let playerCostValue = parseFloat(playerCost.innerText);

	let managerAmount = getInputValueById('manager');
	let coachAmount = getInputValueById('coach');

	let totalAmount = playerCostValue + managerAmount + coachAmount;

	setElementValueById('total-amount', totalAmount);
});
