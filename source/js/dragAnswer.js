'use strict'
import { toBePastArr } from './module/phrases-past-simple.js';
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import dragAndDrop, { question } from './module/function-drag-and-drop.js';
import concatString from './module/function-concat-sting.js';

const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const btnStart = document.getElementById('button-start');
const containerCheck = document.querySelector('.card__check')
let divAnswer
let tagP
const spanClass = 'drag__empty-field';
let index = 0;

////////////////////////

const sectionDrag = document.querySelector('.drag');
const answersList = document.querySelector('.js-answers');
let emptyField
let blockAnswer

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
	btnCheck.setAttribute('id', 'inactive1');

	if (index <= toBePastArr.length + 1) {
		checkDelete();
		addQuestion(toBePastArr[index]);
		addAnswer(toBePastArr[index]);
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
	changeAmount(resultBoolean)
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


// Render question 

function addQuestion(value) {
	tagP = document.createElement('p');
	let span = document.createElement('span');

	tagP.classList.add('question__text');
	tagP.prepend(span);
	span.classList.add(spanClass);
	span.before(value.questionBeforeSpan)
	span.after(value.questionAfter)
	document.querySelector('.js-question').appendChild(tagP)
}
// Render answer
function addAnswer(value) {
	value.answerOptions.forEach((e) => {
		divAnswer = document.createElement('div');
		let pAnswer = document.createElement('p')

		divAnswer.setAttribute('draggable', 'true');
		divAnswer.classList.add('drag__answer');
		divAnswer.classList.add('js-answer');
		divAnswer.setAttribute('data-answer', e);

		divAnswer.prepend(pAnswer);
		pAnswer.classList.add('answer__text');
		pAnswer.innerHTML = e;

		document.querySelector('.answers-list').appendChild(divAnswer);

	})
}

// Drag and drop phrases and words

sectionDrag.addEventListener('mousedown', findElem);
sectionDrag.addEventListener('touchstart', findElem);
answersList.ondragover = allowDrop;


function allowDrop(event) {
	event.preventDefault();
}

function findElem(event) {
	window.emptyField = emptyField = document.querySelector('.drag__empty-field');


	if (event.target.closest('.js-answer')) {
		window.blockAnswer = blockAnswer = event.target.closest('.js-answer');
	} else {
		return false
	}

	dragAndDrop(event);


}



