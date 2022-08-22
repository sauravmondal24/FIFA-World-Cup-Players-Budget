function setPlayersName(eventId, nameId) {
	let value = document
		.getElementById(eventId)

		.addEventListener('click', function () {
			let listContainer = document.getElementById('list-container');

			let li = document.createElement('li');
			li.classList.add('list-group-item', 'item');
			let nameElement = document.getElementById(nameId);
			let nameValue = nameElement.innerText;
			li.innerText = nameValue;
			listContainer.appendChild(li);
		});

	return value;
}

function getInputValueById(elementID) {
	let parPlayerRate = document.getElementById(elementID);
	let parPlayerRateValue = parseFloat(parPlayerRate.value);
	return parPlayerRateValue;
}

function setElementValueById(IdName, values) {
	let setTotalCost = document.getElementById(IdName);
	setTotalCost.innerText = values;
}

function btnDisable(eventId) {
	let btnDisabled = document.getElementById(eventId);

	btnDisabled.setAttribute('disabled');
}
