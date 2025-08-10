/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let setA = new Set();
    let setB = new Set(Array.from({length: grid.length * grid[0].length}, (_, i) => i + 1));

    let res = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (setA.has(grid[row][col])) res.push(grid[row][col]);
            setA.add(grid[row][col]);
        }
    }

    for (let num of [...setB]) {
        if (!setA.has(num)) res.push(num)
    }

    return res;
};