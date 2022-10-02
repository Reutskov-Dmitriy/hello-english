'use strict'

export default renderQuestion
// Add question 

function renderQuestion(value, parentClass, childClass, entryFieldClass) {
	let tagParent = document.createElement('p');
	let tagChild = document.createElement('span');

	tagParent.classList.add(parentClass);
	tagParent.prepend(tagChild);
	tagChild.classList.add(childClass);
	tagChild.before(value.questionBeforeSpan)
	tagChild.after(value.questionAfter)
	document.querySelector(entryFieldClass).appendChild(tagParent)
}