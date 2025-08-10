/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let counter = 0;
    let combo = new Map();

    for (var i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            combo.set(i, s[i]);
        }

        let first = combo.entries().next().value;

        if (first && Math.abs(first[0] - i) >= k) {
            combo.delete(first[0]);
        }

        counter = Math.max(combo.size, counter);
    }

    return counter;
};
