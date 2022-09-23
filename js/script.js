'use strict'

const verbsExample = document.getElementById('verbs-example');
const amountDiv = document.querySelector('.amount');
const markSpan = document.querySelector('.amount__mark');
const mistakesSpan = document.querySelector('.amount__mistakes');
let inputAnswer = '';
let attributeData = '';
let btnCheck
let parentInput
let inputArr = [];
let mark = 0;
let mistakes = 0;

//Remove popup hints
const inputAll = document.getElementsByTagName('input');
for (let i = 0; i < inputAll.length; i++) {
	inputAll[i].setAttribute('autocomplete', 'off');
}
/////////////////////
verbsExample.addEventListener('keydown', findElement);
verbsExample.addEventListener('click', findElement);


function findElement(event) {
	if (event.target.closest('.form-verb__answer')) {
		inputAnswer = event.target.closest('.form-verb__answer');
		amountDiv.style.right = '5px';
		attributeData = inputAnswer.getAttribute('data-verb');
		parentInput = inputAnswer.parentElement.parentElement;
		inputArr = [...parentInput.querySelectorAll(' .form-verb__answer')]
		btnCheck = parentInput.lastElementChild;
		btnCheck.setAttribute('id', 'active');
		btnCheck.onclick = checkVerbForm;
		inputAnswer.addEventListener("keyup", confirmKeyEnter(event));
	}
}

function confirmKeyEnter(event) {
	if (event.keyCode === 13) {
		checkVerbForm()
	}
}

function checkVerbForm() {
	let checkBoolean = false;

	for (let i = 0; i < inputArr.length; i++) {
		let inActive = inputArr[i].getAttribute('data-verb').includes(inputArr[i].value.toLowerCase().trim());

		if (inActive && inputArr[i].value !== '') {
			checkBoolean = true;
			inputArr[i].setAttribute('id', 'inactive2');
			markSpan.innerHTML = `Score: ${mark += 2}`;
		}
		else {
			checkBoolean = false;
			inputArr[i].setAttribute('id', 'inactive2');
			mistakesSpan.innerHTML = `Mistakes: ${mistakes += 1}`;
		}
	}

	if (checkBoolean === true) {
		btnCheck.setAttribute('id', 'inactive1');
		parentInput.style.backgroundColor = 'rgb(143, 250, 166, 0.5)';
	}
	else {
		parentInput.style.backgroundColor = 'rgb(253, 9, 9, 0.5)';
		btnCheck.setAttribute('id', 'inactive1');

	}
}



