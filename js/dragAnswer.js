'use strict'
import { questionArr, questionBeforeSpan, questionAfter, answerOptions, correctAnswer } from './module/past-simple-phrases.js';
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from './module/check-insert.js';
import dragAndDrop, { question, scoreForCheck } from './module/function-drag-and-drop.js';

const btnNext = document.querySelector('.card__btn');
const btnStart = document.getElementById('btn-start');
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

function startTask() {
	btnNext.setAttribute('id', 'active');
	checkDelete();
	index = 0;
	changeQuestion();
	amountDiv.style.right = '5px';
}

function changeQuestion() {
	if (index <= questionArr.length + 1) {
		checkDelete();
		addQuestion(questionArr[index]);
		addAnswer(questionArr[index]);
	}
	else if (index > questionArr.length) {

	}


	index++;
}

function checkInsertedAttribute() {
	if (scoreForCheck > 0) {
		const idCheckAnswer = document.getElementById('check-answer')
		changeAmount(idCheckAnswer.getAttribute('data-answer').includes(questionArr[index].correctAnswer[0]))
	}
}

// Delete previos question

function checkDelete() {
	const wrapp = document.querySelector('.wrapper');
	const question = document.querySelector('.js-question');

	if (index > 0 && !checkInsertedAttribute()) {
		question.removeChild(tagP);

		while (wrapp.firstChild) {
			wrapp.removeChild(wrapp.firstChild);
		}
	}
}


// Add question 

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



