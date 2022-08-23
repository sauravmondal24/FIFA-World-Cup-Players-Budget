// Players Name set function

function setPlayersName(eventId, nameId) {
	let value = document
		.getElementById(eventId)

		.addEventListener('click', function () {
			let listContainer = document.getElementById('list-container');

			let li = document.createElement('li');

			li.classList.add('list-group-item', 'item', 'my-1');

			let nameElement = document.getElementById(nameId);
			let nameValue = nameElement.innerText;
			li.innerText = nameValue;

			if (listContainer.childNodes.length < 5) {
				listContainer.appendChild(li);
			} else {
				alert('You have already selected 5 players');
			}

			// disable button setup

			let buttonDisable = document.getElementById(eventId);
			buttonDisable.setAttribute('disabled', '');
		});

	return value;
}

// Input value Get Function

function getInputValueById(elementID) {
	let parPlayerRate = document.getElementById(elementID);
	let parPlayerRateValue = parseFloat(parPlayerRate.value);
	return parPlayerRateValue;
}

// Text element value set Function

function setElementValueById(IdName, values) {
	let setTotalCost = document.getElementById(IdName);
	setTotalCost.innerText = values;
}
