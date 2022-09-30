'use strict'

const btnNext = document.querySelector('.card__btn')
const btnStart = document.getElementById('btn-start')
let p
let divAnswer
const spanClass = 'drag__empty-field'
const entryField = '.js-question'
let index = 0;
const questionArr = [
	{
		questionBeforeSpan: ['The weather '],
		questionAfter: [' nice yesterday. We organized a cool party in our garden.'],
		answerOptions: ['was', 'were', 'was not', 'were not', 'am']

	},
	{
		questionBeforeSpan: ['His boss  '],
		questionAfter: [' so angry that he fired him. '],
		answerOptions: ['was', 'were', 'was not', 'is']

	},

	{
		questionBeforeSpan: ['That picture '],
		questionAfter: [' cheap, I spent a lot of money to buy it.'],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
]

btnStart.onclick = startTask;
btnNext.onclick = changeQuestion;

function startTask() {
	btnNext.setAttribute('id', 'active');
	checkDelete();
	index = 0;
	changeQuestion();
}

function changeQuestion() {
	checkDelete();
	addQuestion(questionArr[index]);
	addAnswer(questionArr[index]);;
	index++;

}

function checkDelete() {
	if (index > 0) {
		question.removeChild(p);

		while (wrapp.firstChild) {
			wrapp.removeChild(wrapp.firstChild);
			console.log(divAnswer)
		}
	}
}




function addQuestion(value) {
	p = document.createElement('p');
	let span = document.createElement('span');

	p.classList.add('.question__text');
	p.prepend(span);
	span.classList.add(spanClass);
	span.before(value.questionBeforeSpan)
	span.after(value.questionAfter)
	document.querySelector(entryField).appendChild(p)
}
function addAnswer(value) {
	value.answerOptions.forEach((e) => {
		divAnswer = document.createElement('div');
		let pAnswer = document.createElement('p')

		divAnswer.setAttribute('draggable', 'true');
		divAnswer.classList.add('drag__answer');
		divAnswer.classList.add('js__answer');
		divAnswer.prepend(pAnswer);
		pAnswer.classList.add('answer__text');
		pAnswer.innerHTML = e;
		console.log(e)
		document.querySelector('.wrapper').appendChild(divAnswer);

	})
}