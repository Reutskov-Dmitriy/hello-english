'use strict'
export { verbToBePresent, correctOptionsPresent };

const verbToBePresent = [
	{
		questionBefore: ['My sister '],
		questionAfter: [' an English teacher. She knows English well.'],
		correctAnswer: ['is']

	},
	{
		questionBefore: ['His boss  '],
		questionAfter: [' kind. He likes people. '],
		correctAnswer: ['is']

	},

	{
		questionBefore: [' Her little brother  '],
		questionAfter: [' very funny. He is so boring.'],

		correctAnswer: ['is not']

	},
	{
		questionBefore: [' I  '],
		questionAfter: [' a serious person. I like to have fun.'],

		correctAnswer: ['am not']

	},
	{
		questionBefore: ['Their neighbors '],
		questionAfter: [" so talkative. They can't be quiet. "],

		correctAnswer: ['are']

	},
	{
		questionBefore: ['They '],
		questionAfter: [' football players. They are not musicians. '],

		correctAnswer: ['are']

	},
	{
		questionBefore: [' I '],
		questionAfter: [' a friendly person. I like to make friends. '],

		correctAnswer: ['am']

	},
	{
		questionBefore: ['His friends '],
		questionAfter: ['my friends. I trust them. '],

		correctAnswer: ['are']

	},
	{
		questionBefore: ['We '],
		questionAfter: [' the winners. That prize is ours. '],

		correctAnswer: ['are']

	},
	{
		questionBefore: ['It '],
		questionAfter: [' hot, you should put on a coat. '],

		correctAnswer: ['is not']

	},


]

const correctOptionsPresent = [
	{
		questionBefore: ['Molly '],
		questionAfter: [' in a bank '],
		answerOptions: ['work', 'works', 'can', 'should'],
		correctAnswer: ['works']
	},

	{
		questionBefore: ['My dad '],
		questionAfter: [' a mechanic. '],
		answerOptions: ['Were', 'works', 'can', 'should'],
		correctAnswer: ['works']
	},

	{
		questionBefore: ['Tom and Mark '],
		questionAfter: [' well.'],
		answerOptions: ['Plays', 'Runs', 'Sing ', 'Is cooking'],
		correctAnswer: ['Sing ']
	},

	{
		questionBefore: ['I '],
		questionAfter: [' become an artist.'],
		answerOptions: ["Doesn't want to", "Don't want", 'Want', "Don't want to"],
		correctAnswer: ["Don't want to"]
	},

	{
		questionBefore: ['My granny  '],
		questionAfter: ['eggs for breakfast. '],
		answerOptions: ['Fry', 'Frys', 'Fries ', 'Is friing'],
		correctAnswer: ['Fries']
	},

	{
		questionBefore: ['He  '],
		questionAfter: [' tall boy.'],
		answerOptions: ['Is a ', 'Is an', 'Is', "isn't"],
		correctAnswer: ['Is a ']
	},

	{
		questionBefore: ['Those mice  '],
		questionAfter: [' small. '],
		answerOptions: ['Is', 'Am', "Aren't ", 'Are a'],
		correctAnswer: ["Aren't "]
	},

	{
		questionBefore: ['You have to clean your  '],
		questionAfter: [' every day.'],
		answerOptions: ['Tooth', 'Teethes', 'Toothes', 'Teeth '],
		correctAnswer: ['Teeth ']
	},

	{
		questionBefore: ['Those '],
		questionAfter: [' nice people.'],
		answerOptions: ['Is', 'Are a', 'Are  ', 'Was'],
		correctAnswer: ['Are']
	},

	{
		questionBefore: ['He can  '],
		questionAfter: [' the piano well. '],
		answerOptions: ['Play  ', 'To play', 'Playing', 'plays'],
		correctAnswer: ['Play ']
	},
]



