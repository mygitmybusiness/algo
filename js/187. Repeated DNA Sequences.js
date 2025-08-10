/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let sequence = new Set();
    let res = new Set();

    for (let i = 0; i <= s.length - 10; i++) {
        let current = s.slice(i, i + 10);

        if (sequence.has(current)) res.add(current);

        sequence.add(current);
    }

    return [...res.values()];
};
