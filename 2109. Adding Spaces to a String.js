/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
 
var addSpaces = function(s, spaces) {
    let result = [];
    let prev = 0;

    for (let spaceIndex of spaces) {
        result.push(s.slice(prev, spaceIndex));
        result.push(" ");
        prev = spaceIndex;
    }

    result.push(s.slice(prev));

    return result.join("");
};
