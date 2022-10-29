'use strict'
export default getRandomChunks;


function getRandomChunks(arr, length) {
	const newArr = arr.slice();
	const chunks = [];
	while (newArr.length) {
		const chunk = [];
		for (let i = 0; i < length && newArr.length; i++) {
			const index = Math.floor(Math.random() * newArr.length)
			chunk.push(...newArr.splice(index, 1))
		}
		chunks.push(chunk);
	}
	return chunks

}



