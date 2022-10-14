export default dragAndDrop;
export { question };

const question = document.querySelector('.js-question');
const btnCheck = document.querySelector('.card__btn');
const answersList = document.querySelector('.js-answers');


function dragAndDrop(event, blockAnswer, emptyField) {

	const dragStart = function () {
		setTimeout(() => {
			this.classList.add('hide');
		}, 0)
		// this.classList.add('hide');

	}

	const dragEnd = function () {
		this.classList.remove('hide');

	}

	blockAnswer.addEventListener('dragstart', dragStart);
	blockAnswer.addEventListener('dragend', dragEnd);
	// blockAnswer.addEventListener('touchstart', myToush);


	question.addEventListener('dragover', dragOver);
	question.addEventListener('dragenter', dragEnter);
	question.addEventListener('dragleave', dragLeave);
	emptyField.addEventListener('dragenter', dragEnterField);
	emptyField.addEventListener('drop', dragDrop);
	answersList.addEventListener('drop', dragDropBack);

	function dragOver(event) {
		event.preventDefault();
	}

	function dragEnter(event) {
		event.preventDefault();
		this.classList.add('stuck')
	}

	function dragEnterField(event) {
		event.preventDefault();
		this.classList.add('stuck')
	}

	function dragLeave() {
		this.classList.remove('stuck')
	}

	function dragDrop(event) {

		this.append(blockAnswer)
		this.classList.remove('stuck')
		blockAnswer.setAttribute('id', 'check-answer')
		btnCheck.setAttribute('id', 'active');
	}

	function dragDropBack(event) {

		this.append(blockAnswer)
		this.classList.remove('stuck')
		blockAnswer.setAttribute('id', 'none')

		btnCheck.setAttribute('id', 'inactive1');

	}

	function myToush(e) {
		e.preventDefault();
	}

}
