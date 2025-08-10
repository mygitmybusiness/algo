/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentenceArr = sentence.split(' ');

    for (var i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
};
