"use strickt"

export default addAnswer;



// Render answer
function addAnswer(arr, key, field) {
	// console.log(key)
	arr.key.forEach((e) => {
		divAnswer = document.createElement('div');
		let pAnswer = document.createElement('p')

		divAnswer.setAttribute('draggable', 'true');
		divAnswer.classList.add('drag__answer');
		divAnswer.classList.add('js-answer');
		divAnswer.setAttribute('data-answer', e);

		divAnswer.prepend(pAnswer);
		pAnswer.classList.add('answer__text');
		pAnswer.innerHTML = e;

		field.appendChild(divAnswer);

	})
}