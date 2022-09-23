'use strict'

const sectionDrag = document.querySelector('.drag');
const question = document.querySelector('.js-question');
const wrapp = document.querySelector('.wrapper');
let blockAnswer;

sectionDrag.addEventListener('mousedown', findElem);
wrapp.ondragover = allowDrop

function allowDrop(event) {
	event.preventDefault();
}

function findElem(event) {
	if (event.target.closest('.js-answer')) {
		blockAnswer = event.target.closest('.js-answer');
		blockAnswer.setAttribute('id', 'hoverd')
		console.log(blockAnswer);
	}

}

blockAnswer.addEventListener('dragstart', dragStart);

function dragStart() {
	// event.dataTransfer.setData('id', event.target.id);
	console.log(drag);

}

