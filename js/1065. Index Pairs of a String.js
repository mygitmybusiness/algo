/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    let i = 0,
        output = [];
    
    while (i < words.length) {
        let word = words[i];
        let start = text.indexOf(word);

        while (start != -1) {
            let end = start + word.length - 1;
            output.push([start, end]);
            start = text.indexOf(word, start + 1);
        }

        i++;
    }

    output.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    return output;
};
