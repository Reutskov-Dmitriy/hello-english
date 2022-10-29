export default deleteAnswer;

function deleteAnswer(elem, index) {
	if (index > 0) {
		while (elem.firstChild) {
			elem.removeChild(elem.firstChild);
		}
	}
}