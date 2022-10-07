'use strict'
export default createWorkingArr;
export { workingPhrasesPiece1 };


let workingPhrasesPiece1

function createWorkingArr(arr, key1) {
	let workingArr = [];
	workingPhrasesPiece1 = key1;
	let newArr = [];
	for (let i = 0; i < 10; i++) {
		newArr.push(arr.slice(i, i + 1))

	}
	while (newArr.length > 0) {
		const numRandom = Math.floor(Math.random() * newArr.length);
		workingArr.push(newArr.splice(numRandom, 1))
	}
	return workingArr
}

