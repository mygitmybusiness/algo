/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    let wcs = (n) => {
        if (n == numRows) return;

        let curr = Array.from({length: n + 1}).map(() => 1);

        for (let i = 1; i < n; i++) {
            curr[i] = res[n - 1][i - 1] + res[n - 1][i];
        }
        res.push(curr);

        wcs(n + 1);
    }

    wcs(0);

    return res;
};
