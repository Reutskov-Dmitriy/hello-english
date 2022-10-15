"use strickt"

export { renderQuestions, addQuestion };



// Render Questions 
function renderQuestions(arr, key1, key2, keyCorrect, field) {

	const tagLi = document.createElement('li');
	const tagP = document.createElement('p');
	const tagAnswer = document.createElement('span');

	tagLi.classList.add('card');
	tagP.classList.add('question__text');
	tagLi.prepend(tagP);
	tagP.prepend(tagAnswer);
	tagAnswer.classList.add('drag__empty-field');
	tagAnswer.before(arr[key1])
	tagAnswer.after(arr[key2])
	tagAnswer.setAttribute('data-answer', arr[keyCorrect]);
	field.appendChild(tagLi);



}

//// ADD Question 

function addQuestion(arr, key1, key2, keyCorrect, field) {
	const tagLi = document.createElement('li');
	const tagP = document.createElement('p');
	const tagAnswer = document.createElement('input');


	tagLi.classList.add('card');
	tagP.classList.add('question__text');
	tagLi.prepend(tagP);
	tagP.prepend(tagAnswer);
	tagAnswer.classList.add('card__answer');
	tagAnswer.setAttribute('autocomplete', 'off');//Remove popup hints

	tagAnswer.before(arr[key1])
	tagAnswer.after(arr[key2])
	tagAnswer.setAttribute('data-answer', arr[keyCorrect]);
	field.appendChild(tagLi);

}

