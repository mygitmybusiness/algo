/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    s = s.split('');
    let letters = new Map();

    for (let char of s) {
        letters.set(char, (letters.get(char) || 0) + 1);
    }

    for (let i in s) {
        if (letters.get(s[i]) == 1) return Number(i);
    }

    return -1;
};
