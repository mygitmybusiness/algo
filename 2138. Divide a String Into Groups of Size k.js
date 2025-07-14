/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let res = [];

    let i = 0;
    while ( i < s.length) {
        let j = i;
        let currStr = '';

        while (j < i + k) {
            currStr += s[j] || fill;
            j++;
        }

        res.push(currStr);
        i = j;
    }

    return res;
};
