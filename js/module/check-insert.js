'use strict'
export { amountDiv, markSpan, mistakesSpan, mark, mistakes, changeAmount };

const amountDiv = document.querySelector('.amount');
const markSpan = document.querySelector('.amount__mark');
const mistakesSpan = document.querySelector('.amount__mistakes');
let mark = 0;
let mistakes = 0;




// This function checks the inserted element (true & false)



function changeAmount(boolean) {
	let checkBoolean = false;
	let parentInput = emptyField.parentElement.parentElement;

	if (!boolean) {
		checkBoolean = false;
		mistakesSpan.innerHTML = `Mistakes: ${mistakes += 1}`;

	}
	else {
		checkBoolean = true;
		markSpan.innerHTML = `Score: ${mark += 1}`;

	}

	if (checkBoolean === true) {
		parentInput.style.backgroundColor = 'rgb(143, 250, 166, 0.5)';
	}
	else {
		parentInput.style.backgroundColor = 'rgb(253, 9, 9, 0.5)';

	}
}


