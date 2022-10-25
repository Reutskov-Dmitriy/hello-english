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
		answerOptions: ['were', 'works', 'can', 'should'],
		correctAnswer: ['works']
	},

	{
		questionBefore: ['Tom and Mark '],
		questionAfter: [' well.'],
		answerOptions: ['plays', 'runs', 'sing ', 'is cooking'],
		correctAnswer: ['sing ']
	},

	{
		questionBefore: ['I '],
		questionAfter: [' become an artist.'],
		answerOptions: ["doesn't want to", "don't want", 'want', "don't want to"],
		correctAnswer: ["don't want to"]
	},

	{
		questionBefore: ['My granny  '],
		questionAfter: ['eggs for breakfast. '],
		answerOptions: ['fry', 'frys', 'fries ', 'is friing'],
		correctAnswer: ['fries']
	},

	{
		questionBefore: ['He  '],
		questionAfter: [' tall boy.'],
		answerOptions: ['is a ', 'is an', 'is', "isn't"],
		correctAnswer: ['is a ']
	},

	{
		questionBefore: ['Those mice  '],
		questionAfter: [' small. '],
		answerOptions: ['is', 'am', "aren't ", 'are a'],
		correctAnswer: ["aren't "]
	},

	{
		questionBefore: ['You have to clean your  '],
		questionAfter: [' every day.'],
		answerOptions: ['tooth', 'teethes', 'toothes', 'teeth '],
		correctAnswer: ['teeth ']
	},

	{
		questionBefore: ['Those '],
		questionAfter: [' nice people.'],
		answerOptions: ['is', 'are a', 'are  ', 'was'],
		correctAnswer: ['are']
	},

	{
		questionBefore: ['He can  '],
		questionAfter: [' the piano well. '],
		answerOptions: ['play  ', 'to play', 'playing', 'plays'],
		correctAnswer: ['play ']
	},
]



