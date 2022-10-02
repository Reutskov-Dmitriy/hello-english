export default dragAndDrop;
export { question, scoreForCheck };

const question = document.querySelector('.js-question');
let scoreForCheck = 0;
function dragAndDrop() {
	let resultDrop

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
		scoreForCheck++;
		blockAnswer.setAttribute('id', 'check-answer')
		console.log(scoreForCheck)
	}

	function myToush(e) {
		e.preventDefault();
	}


}
