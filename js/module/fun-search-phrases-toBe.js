export default searchPhrasesToBe;
//Функция поиска предложений с формой глагола to be 
function searchPhrasesToBe(text) {
	return text.match(/([A-Z]{1}|[A-Z]{1}\w+)\s+(was|were|is|am|are|was not|were not|isn't|aren't)\s+[^.]+[.]{1}/g)
}