'use strict'
import { renderQuestions } from "./module/fun-render-question.js";
import { renderAnswers } from "./module/fun-render-answer.js";
import { toBePastArr } from './module/phrases-past-simple.js';
import getRandomChunks from "./module/fun-get-random-chunks.js";

import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import { allowDragAndDrop, draggedAnswer, emptyField } from './module/function-drag-and-drop.js';
import concatString from './module/function-concat-sting.js';
import deleteQuestion from "./module/fun-delete-question.js";
import deleteAnswer from "./module/fun-delete-answer.js";
import { correctOptionsPresent } from "./module/phrases-present-simple.js";
import { phrasesPictureBathroom } from "./module/phrases-for-pictures.js";
import { phrasesPrepositionsInterior } from "./module/phrases-prepositions.js";



const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const btnStart = document.querySelector('.btn__start');
const containerCheck = document.querySelector('.card__check')
const answersList = document.querySelector('.js-answers');
const ulField = document.querySelector('.js-question');
const card = document.querySelector('.card')
let chunks
let index = 0;

// The function selects an array with tasks
selectArr(card)
function selectArr(elem) {
	if (elem.classList.contains('js-arrPresent')) {
		chunks = getRandomChunks(correctOptionsPresent, 10);
	}
	else if (elem.classList.contains('js-prases_interior')) {
		chunks = getRandomChunks(phrasesPrepositionsInterior, 10);
	}
	else if (elem.classList.contains('js-arrPast')) {
		chunks = getRandomChunks(toBePastArr, 10);
	}
	else if (elem.classList.contains('js-prases_batheroom')) {
		chunks = getRandomChunks(phrasesPictureBathroom, 10);
	}
}


btnStart.onclick = startTask;
btnNext.onclick = changeQuestion;
btnCheck.onclick = checkInsertedAttribute;

function startTask() {
	btnStart.classList.remove('active');
	btnStart.classList.add('inactive');
	deleteQuestion(ulField, index);
	deleteAnswer(answersList, index);
	index = 0;
	changeQuestion();

}

function changeQuestion() {
	btnCheck.classList.remove('active');
	btnCheck.classList.add('inactive');
	if (index < chunks[0].length) {
		deleteQuestion(ulField, index);
		deleteAnswer(answersList, index);
		renderQuestions(chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer', ulField,);
		renderAnswers(chunks[0][index], 'answerOptions', answersList);

		allowDragAndDrop();
	}
	else {
		amountDiv.classList.remove('amount--hide');
		amountDiv.classList.add('amount--move');
		index = 0
	}
	containerCheck.style.bottom = '-30vh';
}

function checkInsertedAttribute() {
	const resultBoolean = concatString(draggedAnswer.getAttribute('data-answer')) == concatString(emptyField.getAttribute('data-answer'));
	changeAmount(resultBoolean, chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer')
	index++;
}















