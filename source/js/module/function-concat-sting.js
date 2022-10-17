export default concatString;

//function concatenates lowercase strings

function concatString(string) {
	return ((string.toLowerCase()).match(/[^,|\-|.|:|;| |"|'|?|!]/g)).join('')
}

//((('Was not').match(/\S/g)).join("")).toLowerCase()  //'wasnot'