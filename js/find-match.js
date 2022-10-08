"use strict"

import addAnswer from "./module/fun-render-answer.js";
import { phrasesPresentArr } from "./module/phrases-match-present.js";
import getRandomChunks from "./module/create-working-array.js";

const answersList = document.querySelector('.js-answers');
const phrasesList = document.querySelector('.js-phrases');
const cardsList = document.getElementById('js-cardList');
let hasActiveCard = false;
let firstCard, secondCard, correct

const chunks = getRandomChunks(phrasesPresentArr, 10);
// Render answers
renderTask();

function renderTask() {
	addAnswer(chunks[0], 'phrasesPiece1', 'correctAnswer', answersList)
	addAnswer(chunks[0], 'phrasesPiece2', 'correctAnswer', phrasesList)
	////////
	findElement();
}



function findElement() {

	correct = document.querySelectorAll('.js-correct');
	correct.forEach(elem => elem.addEventListener('click', toggleActive));


}
function toggleActive() {
	this.classList.add('active-card');
	if (!hasActiveCard) {
		hasActiveCard = true;
		firstCard = this
		return
	}
	secondCard = this;
	hasActiveCard = false;
	checkMatch();
}

function checkMatch() {
	if (firstCard.dataset.answer === secondCard.dataset.answer) {

		disableCards();
	} else {
		firstCard.classList.remove('active-card');
		secondCard.classList.remove('active-card');

	}
}
function disableCards() {
	firstCard.removeEventListener('click', toggleActive);
	secondCard.removeEventListener('click', toggleActive);
	firstCard.classList.remove('active-card');
	secondCard.classList.remove('active-card');
	secondCard.classList.add('inactive-card');
	firstCard.classList.add('inactive-card');
	checkInactive();
}
function checkInactive() {
	const newCorrect = [...correct]

	if (newCorrect.every(elem => elem.classList.contains('inactive-card'))) {
		removeElements(answersList)
		renderTask();
	}
}

function removeElements() {
	while (this.firstChild) {
		this.removeChild(this.firstChild)
	}
}