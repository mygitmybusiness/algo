/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(' ').reverse();
    let res = [];

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim();

        if (words[i].length !== 0) {
            res.push(words[i]);
        }
    }

    return res.join(' ');
};
