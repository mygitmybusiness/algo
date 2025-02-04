/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let arr = [];

    while (n > 0) {
        arr.push(n);
        n--;
    }

    arr.sort();

    return arr;
};
