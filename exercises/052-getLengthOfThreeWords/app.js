function getLength(word) {
  return word.length
}

function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var result = getLength(word1) + getLength(word2) + getLength(word3)
  return result
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);

module.exports = {
  getLengthOfThreeWords,
}