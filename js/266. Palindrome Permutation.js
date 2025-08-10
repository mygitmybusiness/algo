/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let counts = new Map();

    for (let char of s) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    let nums = [...counts.values()];

    let uneven = false;

    for (let n of nums) {
        if (n % 2 != 0) {
            if (uneven) return false;
            uneven = true;
        }
    }

    return true;
};
