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


const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const btnStart = document.getElementById('button-start');
const containerCheck = document.querySelector('.card__check')
const answersList = document.querySelector('.js-answers');
const ulField = document.querySelector('.js-question');
const chunks = getRandomChunks(toBePastArr, 10);
let index = 0;


btnStart.onclick = startTask;
btnNext.onclick = changeQuestion;
btnCheck.onclick = checkInsertedAttribute;

function startTask() {
	btnStart.setAttribute('id', 'inactive1')
	deleteQuestion(ulField, index);
	deleteAnswer(answersList, index);
	index = 0;
	changeQuestion();
	amountDiv.style.right = '5px';
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
	else if (index > toBePastArr.length) {
		index = 0
	}
	containerCheck.style.bottom = '-30vh';
}

function checkInsertedAttribute() {
	const resultBoolean = concatString(draggedAnswer.getAttribute('data-answer')) == concatString(emptyField.getAttribute('data-answer'));
	changeAmount(resultBoolean, chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer')
	index++;
}















