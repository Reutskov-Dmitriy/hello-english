'use strict'
import { addQuestion } from "./module/fun-render-question.js";
import { formVerbFuture } from "./module/phrases-future-simple.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import concatString from "./module/function-concat-sting.js";
import deleteQuestion from "./module/fun-delete-question.js";

const verbsExample = document.getElementById('verbs-example');
const ulField = document.querySelector('.cards-list');
const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const containerCheck = document.querySelector('.card__check')


let index = 0;
let inputAnswer

const chunks = getRandomChunks(formVerbFuture, 10);
console.log(chunks)

generationTask();

function generationTask() {
	btnCheck.setAttribute('id', 'inactive1');
	if (index < chunks[0].length) {
		deleteQuestion(ulField, index);
		addQuestion(chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer', ulField);
		containerCheck.style.bottom = '-30vh';

	} else {
		containerCheck.style.bottom = '-30vh';
		amountDiv.style.right = '5px';
		return false
	}
}

verbsExample.addEventListener('keydown', checkElement);
verbsExample.addEventListener('click', checkElement);
btnCheck.onclick = checkInsertedAttribute;
btnNext.addEventListener('click', generationTask)

function checkElement(event) {
	if (event.target.closest('.card__answer')) {
		inputAnswer = event.target.closest('.card__answer');
		inputAnswer.onkeydown = () => btnCheck.setAttribute('id', 'active');
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
	changeAmount(resultBoolean, chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer')
	index++
}




