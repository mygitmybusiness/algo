/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    let i = 0;

    while (i < numRows) {
        let n = 0;

        res.push([]);

        while (n <= i) {
            if (n == 0 || n == i) {
                res[i].push(1);
            } else {
                if (res[i - 1].length) {
                    res[i].push(res[i - 1][n - 1] + res[i - 1][n]);
                }
            }
            
            n++;
        }

        i++;
    }

    return res;
};
