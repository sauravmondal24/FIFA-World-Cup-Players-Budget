// All Player Expenses Calculation

function calculatePlayerTotal() {
	let allPlayers = 0;
	let listContainer = document.getElementById('list-container');
	allPlayers = listContainer.childNodes.length;

	let allPlayerCost = getInputValueById('par-player-rate');

	let playerExpenses = allPlayers * allPlayerCost;

	setElementValueById('players-total-cost', playerExpenses);

	return playerExpenses;
}

document.getElementById('calculator').addEventListener('click', function () {
	calculatePlayerTotal();
});

// Total Amount Calculation

document.getElementById('final-amount').addEventListener('click', function () {
	const playerExpenses = calculatePlayerTotal();
	let managerAmount = getInputValueById('manager');
	let coachAmount = getInputValueById('coach');
	let totalAmount = playerExpenses + managerAmount + coachAmount;
	setElementValueById('total-amount', totalAmount);
});
