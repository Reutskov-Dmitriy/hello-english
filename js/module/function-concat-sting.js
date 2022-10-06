export default concatString;

//function concatenates lowercase strings

function concatString(string) {
	return ((string.toLowerCase()).match(/\S/g)).join('')
}

//((('Was not').match(/\S/g)).join("")).toLowerCase()  //'wasnot'