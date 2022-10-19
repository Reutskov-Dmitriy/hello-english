
export { draggedAnswer, emptyField, allowDragAndDrop }
const btnCheck = document.querySelector('.card__btn');
const answersList = document.querySelector('.js-answers');
const container = document.querySelector('.container');
let draggedAnswer, emptyField, touch, elemAppend


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
		blockAnswer.addEventListener('touchmove', touchMove);
		blockAnswer.addEventListener('touchend', touchDrop);
	}


	const dragOver = function (event) {
		event.preventDefault();
	}

	const dragEnter = function (event) {
		event.preventDefault();
		this.classList.add('active-card')
	}


	function dragLeave() {
		this.classList.remove('active-card')
	}

	function dragDrop() {
		this.append(draggedAnswer)
		this.classList.remove('active-card')
		draggedAnswer.setAttribute('id', 'check-answer')
		btnCheck.classList.remove('inactive');
		btnCheck.classList.add('active');
	}

	function dragDropBack() {
		this.append(draggedAnswer)
		this.classList.remove('active-card')
		if (this.append(draggedAnswer)) {
			btnCheck.classList.remove('active');
			btnCheck.classList.add('inactive');
		}
	}

	sells.forEach((sell) => {
		sell.addEventListener('dragover', dragOver);
		sell.addEventListener('dragenter', dragEnter);
		sell.addEventListener('dragleave', dragLeave);
		sell.addEventListener('drop', dragDrop);
		sell.addEventListener('drop', dragDropBack);
	})

	function touchMove(event) {
		event.preventDefault()
		draggedAnswer = this;
		touch = event.targetTouches[0];
		this.classList.add('drag__answer--position');
		this.style.top = `${touch.pageY - container.offsetTop - (this.offsetHeight / 2)}px`;
		this.style.left = `${touch.pageX - container.offsetLeft - (this.offsetWidth / 2)}px`;

		sells.forEach((sell) => {
			checkCoordinates(sell);
		})

	}
}

console.log(container.getBoundingClientRect())
//Function to check the coordinates of two elements
function checkCoordinates(elem) {
	if (
		draggedAnswer.getBoundingClientRect().right - (draggedAnswer.offsetWidth / 2) > elem.getBoundingClientRect().left &&
		draggedAnswer.getBoundingClientRect().top + (draggedAnswer.offsetHeight / 2) < elem.getBoundingClientRect().bottom &&
		draggedAnswer.getBoundingClientRect().left + (draggedAnswer.offsetWidth / 2) < elem.getBoundingClientRect().right &&
		draggedAnswer.getBoundingClientRect().bottom - (draggedAnswer.offsetHeight / 2) > elem.getBoundingClientRect().top
	) {
		elemAppend = elem;
		elem.classList.add('active-card')
	} else {
		elem.classList.remove('active-card')
	}
}

function touchDrop() {
	if (elemAppend.classList.contains('active-card')) {
		elemAppend.append(this);
		elemAppend.classList.remove('active-card')
		this.style.top = `${elemAppend.offsetTop}px`;
		this.style.left = `${elemAppend.offsetLeft}px`;
		this.setAttribute('id', 'check-answer')
		btnCheck.classList.remove('inactive');
		btnCheck.classList.add('active');
	}
	else {
		this.style.top = `${elemAppend.offsetTop}px`;
		this.style.left = `${elemAppend.offsetLeft}px`;

	}
}
