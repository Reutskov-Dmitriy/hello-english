'use strict'
import renderQuestion from "./module/fun-render-question.js";
import { verbToBePresent } from "./module/present-simple-verb.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import concatString from "./module/function-concat-sting.js";

const verbsExample = document.getElementById('verbs-example');
const ulField = document.querySelector('.cards-list');
const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const containerCheck = document.querySelector('.card__check')


let index = 0;
let inputAnswer

generationTask();

function generationTask() {
	const chunks = getRandomChunks(verbToBePresent, 1);

	deleteQuestion();
	renderQuestion(chunks[0], 'questionBefore', 'questionAfter', 'answerOptions', ulField);
	containerCheck.style.bottom = '-30vh';


}

verbsExample.addEventListener('keydown', checkElement);
verbsExample.addEventListener('click', checkElement);
btnCheck.onclick = checkInsertedAttribute;
btnNext.addEventListener('click', generationTask)




function checkElement(event) {
	if (event.target.closest('.card__answer')) {
		inputAnswer = event.target.closest('.card__answer');
		inputAnswer.onkeydown = () => btnCheck.setAttribute('id', 'active');

		amountDiv.style.right = '5px';
		btnNext
		inputAnswer.addEventListener("keyup", confirmKeyEnter(event));

	} else {
		return false
	}

}

function confirmKeyEnter(event) {
	if (event.keyCode === 13) {
		checkInsertedAttribute();
	}
}

function checkInsertedAttribute() {
	const resultBoolean = concatString(inputAnswer.getAttribute('data-answer')) == (concatString(inputAnswer.value));
	changeAmount(resultBoolean)
	index++;
}

function deleteQuestion() {
	if (index > 0) {
		while (ulField.firstChild) {
			ulField.removeChild(ulField.firstChild);
		}
	}
}



