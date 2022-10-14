"use strickt"

export { addAnswer, renderAnswer };



// Render answer
function addAnswer(arr, key, keyCorrect, field) {
	arr.forEach(element => {

		let divAnswer = document.createElement('div');
		let pAnswer = document.createElement('p')

		divAnswer.setAttribute('draggable', 'true');
		divAnswer.classList.add('drag__answer');
		divAnswer.classList.add('js-correct');
		divAnswer.setAttribute('data-answer', element[keyCorrect]);

		divAnswer.prepend(pAnswer);
		pAnswer.classList.add('answer__text');
		pAnswer.innerHTML = element[key];

		field.appendChild(divAnswer);

	});
}



function renderAnswer(arr, key, field) {
	arr.forEach((e) => {
		e[key].forEach((elem) => {
			let divAnswer = document.createElement('div');
			let pAnswer = document.createElement('p')

			divAnswer.setAttribute('draggable', 'true');
			divAnswer.classList.add('drag__answer');
			divAnswer.classList.add('js-answer');
			divAnswer.setAttribute('data-answer', elem);

			divAnswer.prepend(pAnswer);
			pAnswer.classList.add('answer__text');
			pAnswer.innerHTML = elem;
			field.appendChild(divAnswer);
		})



	})
}