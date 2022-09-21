'use strict'

const verbsExample = document.getElementById('verbs-example');
let inputAnswer = '';
let inputAnswerNext
let inputAnswerPrevious
let attributeData = '';
let btnCheck
let parentInput

verbsExample.addEventListener('keydown', findElement);
verbsExample.addEventListener('click', findElement);


function findElement(event) {
	if (event.target.closest('.form-verb__answer')) {
		inputAnswer = event.target.closest('.form-verb__answer');
		attributeData = inputAnswer.getAttribute('data-verb');
		inputAnswerPrevious = inputAnswer.previousElementSibling
		inputAnswerNext = inputAnswer.nextElementSibling
		parentInput = inputAnswer.parentElement.parentElement;
		btnCheck = parentInput.lastElementChild
		btnCheck.setAttribute('id', 'active');
		btnCheck.onclick = checkVerbForm

	}
}


function checkVerbForm() {
	if (attributeData.includes(inputAnswer.value.toLowerCase().trim())) {
		parentInput.style.backgroundColor = 'rgb(143, 250, 166, 0.5)';
	} else {
		parentInput.style.backgroundColor = 'rgb(253, 9, 9, 0.5)';
		btnCheck.setAttribute('id', 'inactive1');
		inputAnswer.setAttribute('id', 'inactive2');
	}
}

function check