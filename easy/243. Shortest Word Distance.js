/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let a = null, b = null;
    let dist = wordsDict.length;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            a = i;
            console.log('A: ' + a);
        }

        if (wordsDict[i] == word2) {
            b = i;
            console.log('B: ' + b);
        }

        if (a != null && b != null) {
            dist = Math.min(Math.abs(a - b), dist);
        }
    }

    return dist;
};
