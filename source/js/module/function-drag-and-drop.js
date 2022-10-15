export default allowDragAndDrop;
export { question };

const question = document.querySelector('.js-question');
const btnCheck = document.querySelector('.card__btn');
const answersList = document.querySelector('.js-answers');


function allowDragAndDrop() {
	const emptyField = document.querySelector('.drag__empty-field')
	const dragStart = function () {
		draggedAnswer = this
		setTimeout(() => {
			this.classList.add('hide');
		}, 0)
	}

	const dragEnd = function () {
		this.classList.remove('hide');
	}

	let draggedAnswer


	for (const blockAnswer of answersList.children) {



		blockAnswer.addEventListener('dragstart', dragStart);
		blockAnswer.addEventListener('dragend', dragEnd);
	}
	// blockAnswer.addEventListener('touchstart', myToush);


	answersList.addEventListener('dragover', dragOver);
	question.addEventListener('dragenter', dragEnter);
	question.addEventListener('dragleave', dragLeave);
	emptyField.addEventListener('dragenter', dragEnterField);
	emptyField.addEventListener('drop', dragDrop);
	answersList.addEventListener('drop', dragDropBack);

	function dragOver(event) {
		event.preventDefault();
	}

	function dragEnter() {
		this.classList.add('stuck')
	}

	function dragEnterField() {
		this.classList.add('stuck')
	}

	function dragLeave() {
		this.classList.remove('stuck')
	}

	function dragDrop() {
		this.append(draggedAnswer)
		this.classList.remove('stuck')
		draggedAnswer.setAttribute('id', 'check-answer')
		btnCheck.setAttribute('id', 'active');
	}

	function dragDropBack() {

		this.append(draggedAnswer)
		this.classList.remove('stuck')
		draggedAnswer.setAttribute('id', 'none')

		btnCheck.setAttribute('id', 'inactive1');

	}

	// function myTouch(event) {
	// 	event.preventDefault();
	// }

}
