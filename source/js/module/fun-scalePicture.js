"use strict"
export default scalePicture;

// zoom function

function scalePicture() {
	if (document.querySelector('.card__picture')) {
		const picture = document.querySelector('.card__picture');
		picture.onclick = function () {
			if (!this.classList.contains('card__picture--scale')) {
				picture.classList.add('card__picture--scale');

			} else {
				picture.classList.remove('card__picture--scale');

			}
		}

	}
}