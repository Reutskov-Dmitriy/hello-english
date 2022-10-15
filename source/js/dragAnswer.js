'use strict'
import { renderQuestions } from "./module/fun-render-question.js";
import { renderAnswers } from "./module/fun-render-answer.js";
import { toBePastArr } from './module/phrases-past-simple.js';
import getRandomChunks from "./module/fun-get-random-chunks.js";

import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import allowDragAndDrop from './module/function-drag-and-drop.js';
import concatString from './module/function-concat-sting.js';

const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const btnStart = document.getElementById('button-start');
const containerCheck = document.querySelector('.card__check')
let tagP
const spanClass = 'drag__empty-field';
let index = 0;

////////////////////////

const sectionDrag = document.querySelector('.drag');
const answersList = document.querySelector('.js-answers');
const ulField = document.querySelector('.js-question');

const chunks = getRandomChunks(toBePastArr, 10);

let emptyField, blockAnswer


btnStart.onclick = startTask;
btnNext.onclick = changeQuestion;
btnCheck.onclick = checkInsertedAttribute;

function startTask() {
	btnStart.setAttribute('id', 'inactive1')
	checkDelete();
	index = 0;
	changeQuestion();
	amountDiv.style.right = '5px';
}

function changeQuestion() {
	btnCheck.classList.add('inactive');
	console.log(chunks[0][index])
	if (index < chunks[0].length) {
		checkDelete();
		renderQuestions(chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer', ulField,);
		renderAnswers(chunks[0][index], 'answerOptions', answersList);

		allowDragAndDrop();
	}
	else if (index > toBePastArr.length) {
		index = 0
	}

	containerCheck.style.bottom = '-30vh';
}

function checkInsertedAttribute() {
	const correct = concatString(toBePastArr[index].correctAnswer[0])
	const idCheckAnswer = document.getElementById('check-answer')
	let resultBoolean = concatString(idCheckAnswer.getAttribute('data-answer')) == (correct);
	changeAmount(resultBoolean, chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer')
	index++;
}

// Delete previos question

function checkDelete() {
	const answersList = document.querySelector('.js-answers');

	if (index > 0) {
		question.removeChild(tagP);

		while (answersList.firstChild) {
			answersList.removeChild(answersList.firstChild);
		}
	}
}





// Drag and drop phrases and words







