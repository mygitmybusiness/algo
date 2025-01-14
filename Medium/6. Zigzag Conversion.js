/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let map = new Map();
    let isUp = false;
    let counter = numRows;

    for (var i = 0; i < s.length; i++) {
        if (counter == 1) isUp = true;
        if (counter == numRows) isUp = false;

        if (map.has(counter)) map.set(counter, map.get(counter) + s[i].toString());
        else map.set(counter, s[i].toString());

        if (isUp) counter++;
        else counter--;
    }

    let res = '';

    map.forEach((val) => {
        res += val;
    })

    return res;
};
