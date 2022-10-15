'use strict'
import { addQuestion } from "./module/fun-render-question.js";
import { verbToBePresent } from "./module/phrases-present-simple.js";
import getRandomChunks from "./module/fun-get-random-chunks.js";
import { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount } from "./module/changeAmount.js";
import concatString from "./module/function-concat-sting.js";
import deleteQuestion from "./module/fun-delete-question.js";

const verbsExample = document.getElementById('verbs-example');
const ulField = document.querySelector('.cards-list');
const btnCheck = document.querySelector('.card__btn');
const btnNext = document.querySelector('.btn-next');
const containerCheck = document.querySelector('.card__check')


let index = 0;
let inputAnswer

const chunks = getRandomChunks(verbToBePresent, 10);
console.log(chunks)

generationTask();

function generationTask() {
	btnCheck.setAttribute('id', 'inactive1');
	if (index < chunks[0].length) {
		deleteQuestion(ulField, index);
		addQuestion(chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer', ulField);
		containerCheck.style.bottom = '-30vh';

	} else {
		containerCheck.style.bottom = '-30vh';
		amountDiv.classList.remove('amount--hide');
		amountDiv.classList.add('amount--move');

		return false
	}
}

verbsExample.addEventListener('keydown', checkElement);
verbsExample.addEventListener('click', checkElement);
btnCheck.onclick = checkInsertedAttribute;
btnNext.addEventListener('click', generationTask)

function checkElement(event) {
	if (event.target.closest('.card__answer')) {
		inputAnswer = event.target.closest('.card__answer');
		inputAnswer.onkeydown = () => btnCheck.setAttribute('id', 'active');
		inputAnswer.addEventListener("keyup", confirmKeyEnter(event));

	} else {
		return false
	}

}

function confirmKeyEnter(event) {
	if (event.keyCode === 13) {
		checkInsertedAttribute();
	}
}

function checkInsertedAttribute() {
	const resultBoolean = concatString(inputAnswer.getAttribute('data-answer')) == (concatString(inputAnswer.value));
	changeAmount(resultBoolean, chunks[0][index], 'questionBefore', 'questionAfter', 'correctAnswer')
	index++
}






// 'use strict'
// import getRandomChunks from "./module/create-working-array.js";
// import { verbToBePresent } from "./module/phrases-present-simple.js";

// const verbsExample = document.getElementById('verbs-example');
// const amountDiv = document.querySelector('.amount');
// const markSpan = document.querySelector('.amount__mark');
// const mistakesSpan = document.querySelector('.amount__mistakes');
// let inputAnswer = '';
// let attributeData = '';
// let btnCheck
// let parentInput
// let inputArr = [];
// let mark = 0;
// let mistakes = 0;

// //Remove popup hints
// const inputAll = document.getElementsByTagName('input');
// for (let i = 0; i < inputAll.length; i++) {
// 	inputAll[i].setAttribute('autocomplete', 'off');
// }
// /////////////////////
// verbsExample.addEventListener('keydown', findElement);
// verbsExample.addEventListener('click', findElement);




// function findElement(event) {
// 	if (event.target.closest('.form-verb__answer')) {
// 		inputAnswer = event.target.closest('.form-verb__answer');
// 		amountDiv.style.right = '5px';
// 		attributeData = inputAnswer.getAttribute('data-verb');
// 		parentInput = inputAnswer.parentElement.parentElement;
// 		inputArr = [...parentInput.querySelectorAll(' .form-verb__answer')]
// 		btnCheck = parentInput.lastElementChild;
// 		btnCheck.setAttribute('id', 'active');
// 		btnCheck.onclick = checkVerbForm;
// 		inputAnswer.addEventListener("keyup", confirmKeyEnter(event));
// 	} else {
// 		return false
// 	}

// }

// function confirmKeyEnter(event) {
// 	if (event.keyCode === 13) {
// 		checkVerbForm()
// 	}
// }

// function checkVerbForm() {
// 	let checkBoolean = false;

// 	for (let i = 0; i < inputArr.length; i++) {
// 		let inActive = inputArr[i].getAttribute('data-verb').includes(inputArr[i].value.toLowerCase().trim());

// 		if (inActive && inputArr[i].value !== '') {
// 			checkBoolean = true;
// 			inputArr[i].setAttribute('id', 'inactive2');
// 			markSpan.innerHTML = `Score: ${mark += 2}`;
// 		}
// 		else {
// 			checkBoolean = false;
// 			inputArr[i].setAttribute('id', 'inactive2');
// 			mistakesSpan.innerHTML = `Mistakes: ${mistakes += 1}`;
// 		}
// 	}

// 	if (checkBoolean === true) {
// 		btnCheck.setAttribute('id', 'inactive1');
// 		parentInput.style.backgroundColor = 'rgb(143, 250, 166, 0.5)';
// 	}
// 	else {
// 		parentInput.style.backgroundColor = 'rgb(253, 9, 9, 0.5)';
// 		btnCheck.setAttribute('id', 'inactive1');

// 	}
// }



