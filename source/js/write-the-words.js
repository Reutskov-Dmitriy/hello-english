'use strict'
// import { workArr } from "./add-arr.js";
import { formVerbFuture } from "./module/phrases-future-simple.js";
import { prepositionsArr } from "./module/phrases-prepositions.js";
import { toBePastArr, formVerbPast } from "./module/phrases-past-simple.js";
import { verbToBePresent, correctOptionsPresent } from "./module/phrases-present-simple.js";
import { addQuestion } from "./module/fun-render-question.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import concatString from "./module/function-concat-sting.js";
import deleteQuestion from "./module/fun-delete-question.js";

const verbsExample = document.getElementById('verbs-example');
const ulField = document.querySelector('.cards-list');
const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const containerCheck = document.querySelector('.card__check');
const arrCards = document.querySelectorAll('.card')
let chunks, inputAnswer
let index = 0;



// The function selects an array with tasks
arrCards.forEach((elem) => { selectArr(elem) })
function selectArr(elem) {
	if (elem.classList.contains('js-arrPresent')) {
		chunks = getRandomChunks(verbToBePresent, 10);
	}
	else if (elem.classList.contains('js-arrFuture')) {
		chunks = getRandomChunks(formVerbFuture, 10);
	}
	else if (elem.classList.contains('js-arrPast')) {
		chunks = getRandomChunks(formVerbPast, 10);
	}
	else if (elem.classList.contains('js-arrPrepositions')) {
		chunks = getRandomChunks(prepositionsArr, 10);
	}
}

generationTask();

function generationTask() {
	btnCheck.setAttribute('id', 'inactive1');
	if (index < chunks[0].length) {
		deleteQuestion(ulField, index);
		addQuestion(chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer', ulField);
		containerCheck.style.bottom = '-30vh';

	} else {
		containerCheck.style.bottom = '-30vh';
		amountDiv.classList.remove('amount--hide');
		amountDiv.classList.add('amount--move');
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




