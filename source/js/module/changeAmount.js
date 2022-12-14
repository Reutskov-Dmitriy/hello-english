'use strict'
export { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount };

const amountDiv = document.querySelector('.amount');
const markSpan = document.querySelector('.amount__mark');
const mistakesSpan = document.querySelector('.amount__mistakes');
let mark = 0;
let mistakes = 0;
const containerCheck = document.querySelector('.card__check')
const textAnswer = document.querySelector('.check__title')
const btnNext = document.querySelector('.btn-next');
const tagP = document.querySelector('.check__answer');


// This function checks the inserted element (true & false)

function changeAmount(boolean, arr, key1, key2, correctAnswer) {
	let checkBoolean

	if (boolean !== true) {
		checkBoolean = false;

		containerCheck.setAttribute('id', 'wrong');
		textAnswer.innerHTML = 'Wrong';
		tagP.innerHTML = ` ${arr[key1]} ${arr[correctAnswer]} ${arr[key2]}`;
		btnNext.style.backgroundColor = 'rgb(253, 9, 9)';
		mistakesSpan.innerHTML = `Mistakes: ${mistakes += 1}`;
	}
	else {
		checkBoolean = true;
		containerCheck.setAttribute('id', 'right');
		textAnswer.innerHTML = 'Right'
		btnNext.style.backgroundColor = 'rgb(70, 199, 98)';
		tagP.innerHTML = ' '
		markSpan.innerHTML = `Score: ${mark += 1}`;
	}


	containerCheck.style.bottom = '0';

}


