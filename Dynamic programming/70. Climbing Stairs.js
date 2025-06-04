/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let recursuion = (i, n) => {
        if (i > n) return 0;
        if (i == n) return 1;

        return recursuion(i + 1, n) + recursuion(i + 2, n);
    }

    return recursuion(0, n);
};
