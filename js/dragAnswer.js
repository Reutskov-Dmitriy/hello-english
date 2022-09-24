'use strict'

const sectionDrag = document.querySelector('.drag');
const question = document.querySelector('.js-question');
const emptyField = document.querySelector('.js-field');
const wrapp = document.querySelector('.wrapper');
let blockAnswer;

sectionDrag.addEventListener('mousedown', findElem);
wrapp.ondragover = allowDrop;

function allowDrop(event) {
	event.preventDefault();
}

function findElem(event) {
	if (event.target.closest('.js-answer')) {
		blockAnswer = event.target.closest('.js-answer');
		// blockAnswer.setAttribute('id', 'stuck')

	}

	console.log(blockAnswer);

	const dragStart = function () {
		// event.dataTransfer.setData('id', event.target.id);
		setTimeout(() => {
			this.classList.add('hide');
		}, 0)
	}
	const dragEnd = function () {
		this.classList.remove('hide');
	}

	blockAnswer.addEventListener('dragstart', dragStart);
	blockAnswer.addEventListener('dragend', dragEnd);


	question.addEventListener('dragover', dragOver);
	question.addEventListener('dragenter', dragEnter);
	question.addEventListener('dragleave', dragLeave);
	emptyField.addEventListener('dragenter', dragEnterField);
	emptyField.addEventListener('drop', dragDrop);

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

	function dragDrop() {

		this.append(blockAnswer)
		this.classList.remove('stuck')

	}


}




