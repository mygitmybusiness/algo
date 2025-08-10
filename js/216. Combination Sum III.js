/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function(k, n) {
    let res = [];

    const dfs = (start, sum, path) => {
        // Set boundaries
        if (sum > n || path.length > k) return;

        // Valid path
        if (sum == n && path.length == k) {
            res.push([...path]);
            return;
        }

        // Iterate through remaining numbers
        for (let i = start; i <= 9; i++) {
            path.push(i);

            dfs(i + 1, sum + i, path);
            path.pop(); // remove last for backtrack
        }
    }

    dfs(1, 0, []);

    return res;
};
