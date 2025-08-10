/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let ans of strs) {
        let sortedAns = ans.split('').sort().join('');

        if (map.has(sortedAns)) {
            map.set(sortedAns, [...map.get(sortedAns), ans]); // ?
        } else {
            map.set(sortedAns, [ans]);
        }
    }

    return [...map.values()];
};
