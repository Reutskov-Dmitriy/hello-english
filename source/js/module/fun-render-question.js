"use strickt"

export { renderQuestions, addQuestion };



// Render Questions 
function renderQuestions(arr, key1, key2, keyCorrect, tagAnswer, field) {
	arr.forEach(element => {
		const tagLi = document.createElement('li');
		const tagP = document.createElement('p');
		const tagAnswer = document.createElement('input');

		tagLi.classList.add('card');
		btnCheck.classList.add('btn');
		tagP.classList.add('question__text');
		tagLi.prepend(tagP);
		tagLi.prepend(btnCheck);
		tagP.prepend(tagAnswer);
		tagAnswer.classList.add('card__answer');
		tagAnswer.setAttribute('autocomplete', 'off');//Remove popup hints
		tagAnswer.before(element[key1])
		tagAnswer.after(element[key2])
		tagAnswer.setAttribute('data-answer', element[keyCorrect]);
		field.appendChild(tagLi);


	});
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
	tagAnswer.before(arr[key1])
	tagAnswer.after(arr[key2])
	tagAnswer.setAttribute('data-answer', arr[keyCorrect]);
	field.appendChild(tagLi);

}

