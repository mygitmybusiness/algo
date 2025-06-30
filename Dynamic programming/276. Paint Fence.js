/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n == 1) return k;
    if (n == 2) return k * k;

    let totalWays = Array.from({length: n + 1}).fill(0);
    totalWays[1] = k;
    totalWays[2] = k * k;

    for (let i = 3; i <= n; i++) {
        totalWays[i] = (k - 1) * (totalWays[i - 1] + totalWays[i - 2]);
    }

    return totalWays[n];
};
