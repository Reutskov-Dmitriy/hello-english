'use strict'
import { questionArr, questionBeforeSpan, questionAfter, answerOptions, correctAnswer } from './module/past-simple-phrases.js';
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from './module/check-insert.js';
import dragAndDrop, { question } from './module/function-drag-and-drop.js';

const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.check__btn');
const btnStart = document.getElementById('button-start');
const containerCheck = document.querySelector('.card__check')
let divAnswer
let tagP
const spanClass = 'drag__empty-field';
const entryField = '.js-question';
let index = 0;

////////////////////////

const sectionDrag = document.querySelector('.drag');
const wrapp = document.querySelector('.wrapper');
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

	if (index <= questionArr.length + 1) {
		checkDelete();
		addQuestion(questionArr[index]);
		addAnswer(questionArr[index]);
	}
	else if (index > questionArr.length) {
		index = 0
	}

	containerCheck.style.bottom = '-30vh';
}

function checkInsertedAttribute() {

	const idCheckAnswer = document.getElementById('check-answer')
	let resultBoolean = idCheckAnswer.getAttribute('data-answer').includes(questionArr[index].correctAnswer[0]);
	changeAmount(resultBoolean)


	index++;
}

// Delete previos question

function checkDelete() {
	const wrapp = document.querySelector('.wrapper');

	if (index > 0) {
		question.removeChild(tagP);

		while (wrapp.firstChild) {
			wrapp.removeChild(wrapp.firstChild);
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
	document.querySelector(entryField).appendChild(tagP)
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

		document.querySelector('.wrapper').appendChild(divAnswer);

	})
}

// Drag and drop phrases and words

sectionDrag.addEventListener('mousedown', findElem);
sectionDrag.addEventListener('touchstart', findElem);
wrapp.ondragover = allowDrop;


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



