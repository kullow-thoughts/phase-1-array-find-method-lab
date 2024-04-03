// code your solution here
const superBowlWin = (array) => {
    const yearWon = array.find(
        function(element) {
            return element.result === 'w'
        }
    )
}
if (yearWon) {
    return yearWon.year;
} else {
    return undefined;
}