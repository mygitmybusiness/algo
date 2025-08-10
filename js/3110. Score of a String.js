/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let arr = s.split('');
    let map = [];

    for (let char of s) {
        map.push(char.charCodeAt(0));
    }

    let res = 0;

    for (let i = 0; i < map.length - 1; i++) {
        res += Math.abs(map[i] - map[i + 1]);
    }

    return res;
};
