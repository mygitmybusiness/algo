/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let map = new Map();
    let rank = 1;

    for (var i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] > sorted[i - 1]) {
            rank++;
        }

        map.set(sorted[i], rank);
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i] = map.get(arr[i]);
    }

    return arr;
};
