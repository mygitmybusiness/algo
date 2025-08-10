/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    let arr = new Array();
    let n = 0;
    
    while (n < rowSum.length) {
        arr.push([]);

        let i = 0;

        while (i < colSum.length) {
            arr[n].push(Math.min(rowSum[n], colSum[i]));

            rowSum[n] -= arr[n][i];
            colSum[i] -= arr[n][i];

            i++;
        }

        n++;
    }

    return arr;
};
