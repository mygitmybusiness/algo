/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let chars = new Map();

    for (let i = 0; i < word.length; i++) {
        if (chars.has(word[i]) && i > 0 && word[i - 1] != word[i]) continue;
        chars.set(word[i], (chars.get(word[i]) || 0) + 1);
    }

    let res = [...chars.values()];
    let ans = 1;

    for (let i = 0; i < res.length; i++) {
        if (res[i] > 1) ans += res[i] - 1;
    }

    return ans;
};