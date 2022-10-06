'use strict'
export default createWorkingArr

function createWorkingArr(arr) {
	let workingArr = [];

	for (let i = 0; i <= 10; i++) {
		const numRandom = Math.floor(Math.random() * arr.length);
		workingArr.push(arr.slice(numRandom, numRandom + 1))
	}
	return workingArr
}