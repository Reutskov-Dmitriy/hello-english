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
	{
		questionBeforeSpan: ['Her mom  '],
		questionAfter: [' tired, she did a lot of housework that evening.'],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
	{
		questionBeforeSpan: ['Guests '],
		questionAfter: [' excited and had much fun. '],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
	{
		questionBeforeSpan: ['They '],
		questionAfter: [' happy with their salary so they decided to find new job. '],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
	{
		questionBeforeSpan: ['Mary '],
		questionAfter: [' confused. She didn’t know what to do.  '],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
	{
		questionBeforeSpan: ['The artists '],
		questionAfter: ['really creative, they found an unusual solution. '],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
	{
		questionBeforeSpan: ['I '],
		questionAfter: [' fat in my childhood because I did sport. '],

		answerOptions: ['was', 'were', 'was not', 'were not']

	},
	{
		questionBeforeSpan: ['My friends '],
		questionAfter: [' shy, they liked to perform on the stage. '],

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
	test = document.querySelector('.js-answer');
}

function changeQuestion() {
	if (index < questionArr.length) {
		checkDelete();
		addQuestion(questionArr[index]);
		addAnswer(questionArr[index]);
	}

	index++;
}

// Delete previos question

function checkDelete() {
	if (index > 0) {
		question.removeChild(p);

		while (wrapp.firstChild) {
			wrapp.removeChild(wrapp.firstChild);
		}
	}
}


// Add question 

function addQuestion(value) {
	p = document.createElement('p');
	let span = document.createElement('span');

	p.classList.add('question__text');
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
		document.querySelector('.wrapper').appendChild(divAnswer);

	})
}