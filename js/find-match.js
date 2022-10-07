"use strict"

// import addAnswer from "./module/fun-render-answer.js";
import { phrasesPresentArr, phrasesPiece1, phrasesPiece2, correctAnswer } from "./module/phrases-match-present.js";
import createWorkingArr, { workingPhrasesPiece1 } from "./module/create-working-array.js";

const answersList = document.querySelector('.js-answers');
const phrasesList = document.querySelector('.js-phrases');
console.log(phrasesPresentArr[0].phrasesPiece1)

const workingArr = createWorkingArr(phrasesPresentArr, phrasesPiece1);

addAnswer(workingArr, answersList)
addAnswer(workingArr, phrasesList)

// Render answer
function addAnswer(arr, key, field) {
	arr.forEach(element => {
		element.workingPhrasesPiece1.forEach(el => {
			let divAnswer = document.createElement('div');
			let pAnswer = document.createElement('p')

			divAnswer.setAttribute('draggable', 'true');
			divAnswer.classList.add('drag__answer');
			divAnswer.classList.add('js-answer');
			divAnswer.setAttribute('data-answer', el);

			divAnswer.prepend(pAnswer);
			pAnswer.classList.add('answer__text');
			pAnswer.innerHTML = el;

			field.appendChild(divAnswer);

		});

	});

	console.log(phrasesPresentArr)
}