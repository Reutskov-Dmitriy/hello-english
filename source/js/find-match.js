"use strict"

import { addAnswer } from "./module/fun-render-answer.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";
import { phrasesPresentArr } from "./module/phrases-match-present.js";
import { phrasesPictureKitchen, phrasesPictureBedroom, phrasesPictureMap } from "./module/phrases-for-pictures.js";


const wordsList = document.querySelector('.js-answers');
const phrasesList = document.querySelector('.js-phrases');
const amountDiv = document.querySelector('.amount');
const markSpan = document.querySelector('.amount__mark');
const mistakesSpan = document.querySelector('.amount__mistakes');
const card = document.querySelector('.card')

let hasActiveCard = false;
let firstCard, secondCard, correct, chunks, chunks2
let index = 0;
let mark = 0;
let mistakes = 0;



selectArr(card)
function selectArr(elem) {
	if (elem.classList.contains('js-phrasesPresentMatch')) {
		chunks = getRandomChunks(phrasesPresentArr, 14);
		chunks2 = getRandomChunks(phrasesPresentArr, 14);
	}
	else if (elem.classList.contains('js-prases_bedroom')) {
		chunks = getRandomChunks(phrasesPictureBedroom, 10);
		chunks2 = getRandomChunks(phrasesPictureBedroom, 10);

	}
	else if (elem.classList.contains('js-arrPast')) {
		chunks = getRandomChunks(toBePastArr, 10);
	}
	else if (elem.classList.contains('js-prases_kitchen')) {
		chunks = getRandomChunks(phrasesPictureKitchen, 10);
		chunks2 = getRandomChunks(phrasesPictureKitchen, 10);

	}
	else if (elem.classList.contains('js-prases_map')) {
		chunks = getRandomChunks(phrasesPictureMap, 10);
		chunks2 = getRandomChunks(phrasesPictureMap, 10);

	}
}

// Render answers
renderTask();

function renderTask() {
	if (index < chunks.length) {

		addAnswer(chunks2[index], 'phrasesPiece1', 'correctAnswer', wordsList)
		addAnswer(chunks[index], 'phrasesPiece2', 'correctAnswer', phrasesList)
		findElement();
	} else {
		amountDiv.classList.remove('amount--hide');
		amountDiv.classList.add('amount--move');
		return
	}
	index++;
}



function findElement() {

	correct = document.querySelectorAll('.js-correct');
	correct.forEach(elem => elem.addEventListener('click', toggleActive));


}
function toggleActive() {
	if (!hasActiveCard) {
		this.classList.add('active-card');
		hasActiveCard = true;
		firstCard = this
		return
	}
	if (this.classList.contains('active-card') && firstCard) {
		hasActiveCard = false;
		this.classList.remove('active-card');
		return
	}
	secondCard = this;
	hasActiveCard = false;
	checkMatch();
}

function checkMatch() {
	if (firstCard.dataset.answer === secondCard.dataset.answer) {
		markSpan.innerHTML = `Score: ${mark += 1}`;
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


if (document.querySelector('.card__picture')) {
	const picture = document.querySelector('.card__picture');
	picture.onclick = function () {
		if (!this.classList.contains('card__picture--scale')) {
			picture.classList.add('card__picture--scale');

		} else {
			picture.classList.remove('card__picture--scale');

		}
	}

}


