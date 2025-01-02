/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (n * m !== original.length) return [];

    let g = 0;
    let i = 0;
    
    let arr = [];

    while (arr.length < m) {
        arr.push([]);
        
        while (arr[i].length < n) {
            arr[i].push(original[g]);
            g++;
        }

        i++;
    }
    
    return arr;
};