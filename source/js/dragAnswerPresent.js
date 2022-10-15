'use strict'

import { correctOptionsPresent } from "./module/phrases-present-simple.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";
import { renderQuestionFieldDiv } from "./module/fun-render-question.js";
import { renderAnswers } from "./module/fun-render-answer.js";
import allowDragAndDrop from "./module/function-drag-and-drop.js";
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import deleteQuestion from "./module/fun-delete-question.js";
import deleteAnswer from "./module/fun-delete-answer.js";
import concatString from "./module/function-concat-sting.js";

const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const btnStart = document.getElementById('btn-start');
const containerCheck = document.querySelector('.card__check')

const sectionDrag = document.querySelector('.drag');
const question = document.querySelector('.js-question');
const answersList = document.querySelector('.js-answers');
let emptyField, blockAnswer
let index = 0;


btnStart.onclick = startTask;
btnNext.onclick = generationTask;
btnCheck.onclick = checkInsertedAttribute;

function startTask() {
	btnStart.setAttribute('id', 'inactive1')
	deleteQuestion(question, index);
	deleteAnswer(answersList, index)
	index = 0;
	changeAmount();
	generationTask();
	amountDiv.style.right = '5px';
}

function generationTask() {

	if (index == 0 || index < 10) {

		const chunks = getRandomChunks(correctOptionsPresent, 1);

		deleteQuestion(question, index);
		deleteAnswer(answersList, index)
		renderQuestionFieldDiv(chunks[0], 'questionBefore', 'questionAfter', 'correctAnswer', question);
		renderAnswers(chunks[0], 'answerOptions', answersList)
	}
	else {
		btnStart.setAttribute('id', 'active1')

		return
	}
	containerCheck.style.bottom = '-30vh';

}
function checkInsertedAttribute() {
	const resultBoolean = concatString(emptyField.getAttribute('data-answer')) == concatString(blockAnswer.getAttribute('data-answer'));
	changeAmount(resultBoolean)
	index++;
}


// Drag and drop phrases and words

sectionDrag.addEventListener('mousedown', findElem);
sectionDrag.addEventListener('touchstart', findElem);
answersList.ondragover = allowDrop;




function findElem(event) {
	emptyField = document.querySelector('.drag__empty-field');


	if (event.target.closest('.js-answer')) {
		blockAnswer = event.target.closest('.js-answer');
	} else {
		return false
	}

	allowDragAndDrop(event, blockAnswer, emptyField);

}
