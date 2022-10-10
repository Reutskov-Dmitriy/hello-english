"use strickt"

export default renderQuestion;



// Render Question
function renderQuestion(arr, key1, key2, keyCorrect, field) {
	arr.forEach(element => {
		let tagLi = document.createElement('li');
		let tagP = document.createElement('p');
		let inputAnswer = document.createElement('input');

		tagLi.classList.add('card');
		tagP.classList.add('question__text');
		tagLi.prepend(tagP);
		tagP.prepend(inputAnswer);
		inputAnswer.classList.add('card__answer');
		inputAnswer.setAttribute('autocomplete', 'off');//Remove popup hints
		inputAnswer.before(element[key1])
		inputAnswer.after(element[key2])
		inputAnswer.setAttribute('data-answer', element[keyCorrect]);
		field.appendChild(tagLi);

	});
}