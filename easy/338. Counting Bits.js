/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const res = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        res[i] = res[Math.floor(i / 2)] + (i % 2);
    }

    return res;
};

// Goal: Compute the number of 1s in the binary representation of every number from 0 to n.
// Logic: Use the formula:
// ans[i]=ans[i/2]+(i%2)
// i / 2 shifts the binary representation of i to the right by 1 bit.
// i % 2 determines if the least significant bit is 1.
// Use previously computed results in ans to avoid redundant calculations.

// Time complexity:O(n)
// Space complexity:O(n)
