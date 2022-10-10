"use strict"

import addAnswer from "./module/fun-render-answer.js";
import { phrasesPresentArr } from "./module/phrases-match-present.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";


const wordsList = document.querySelector('.js-answers');
const phrasesList = document.querySelector('.js-phrases');
const amountDiv = document.querySelector('.amount');
const scoreSpan = document.querySelector('.amount__mark');
const mistakesSpan = document.querySelector('.amount__mistakes');
let hasActiveCard = false;
let firstCard, secondCard, correct
let index = 0;
let mark = 0;
let mistakes = 0;

const chunks = getRandomChunks(phrasesPresentArr, 10);
// Render answers
renderTask();

function renderTask() {
	if (index < chunks.length) {

		addAnswer(chunks[index], 'phrasesPiece1', 'correctAnswer', wordsList)
		addAnswer(chunks[index], 'phrasesPiece2', 'correctAnswer', phrasesList)
		////////
		findElement();
	} else {
		amountDiv.style.right = "5px";
		return
	}
	index++;
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
		scoreSpan.innerHTML = `Score: ${mark += 1}`;

		disableCards();
	} else {
		mistakesSpan.innerHTML = `Mistakes: ${mistakes += 1}`;

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
	changePhrases();
}
function changePhrases() {
	const newCorrect = [...correct]

	if (newCorrect.every(elem => elem.classList.contains('inactive-card'))) {
		removeElements(wordsList);
		removeElements(phrasesList);
		renderTask();
	}
}

function removeElements(elem) {
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild)
	}
}