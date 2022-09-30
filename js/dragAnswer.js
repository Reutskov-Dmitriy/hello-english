'use strict'
const sectionDrag = document.querySelector('.drag');
const question = document.querySelector('.js-question');
const wrapp = document.querySelector('.wrapper');
let emptyField
let blockAnswer
let test

sectionDrag.addEventListener('mousedown', findElem);
// sectionDrag.addEventListener('touchstart', findElem);
// wrapp.ondragover = allowDrop;

function allowDrop(event) {
	event.preventDefault();
}

function findElem(event) {
	emptyField = document.querySelector('.drag__empty-field');


	if (event.target.closest('.js-answer')) {
		blockAnswer = event.target.closest('.js-answer');
	} else {
		return false
	}


	const dragStart = function () {
		console.log('dragstart')
		setTimeout(() => {
			this.classList.add('hide');
		}, 0)
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

	function myToush(e) {
		e.preventDefault();
		console.log('touch')
	}


}




