
export { draggedAnswer, emptyField, allowDragAndDrop }
const btnCheck = document.querySelector('.card__btn');
const answersList = document.querySelector('.js-answers');
let draggedAnswer
let emptyField
function allowDragAndDrop() {
	const sells = document.querySelectorAll('.js-sell')
	emptyField = document.querySelector('.drag__empty-field')
	const dragStart = function () {
		draggedAnswer = this
		setTimeout(() => {
			this.classList.add('hide');
		}, 0)
	}

	const dragEnd = function () {
		this.classList.remove('hide');
	}

	for (const blockAnswer of answersList.children) {
		blockAnswer.addEventListener('dragstart', dragStart);
		blockAnswer.addEventListener('dragend', dragEnd);
	}


	const dragOver = function (event) {
		console.log("over")
		event.preventDefault();
	}

	const dragEnter = function (event) {
		console.log("enter")

		event.preventDefault();
		this.classList.add('stuck')
	}


	function dragLeave() {
		this.classList.remove('stuck')
	}

	function dragDrop() {
		this.append(draggedAnswer)
		this.classList.remove('stuck')
		draggedAnswer.setAttribute('id', 'check-answer')
		btnCheck.classList.remove('inactive');
		btnCheck.classList.add('active');
	}

	function dragDropBack() {
		this.append(draggedAnswer)
		this.classList.remove('stuck')
		btnCheck.classList.remove('active');
		btnCheck.classList.add('inactive');

		// btnCheck.setAttribute('id', 'inactive1');

	}

	sells.forEach((sell) => {
		sell.addEventListener('dragover', dragOver);
		sell.addEventListener('dragenter', dragEnter);
		sell.addEventListener('dragleave', dragLeave);
		sell.addEventListener('drop', dragDrop);
		sell.addEventListener('drop', dragDropBack);
	})

}
