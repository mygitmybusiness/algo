/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let max = 0;
    let dp = Array.from({length: arr.length}, () => Array.from({length: arr.length}));
    let valToIndex = new Map();

    for (let i in arr) {
        valToIndex.set(arr[i], i);

        for (let j = 0; j < i; j++) {
            let diff = arr[i] - arr[j];
            let prevIndex = valToIndex.get(diff) || -1;

            if (diff < arr[j] && prevIndex >= 0) dp[j][i] = dp[prevIndex][j] + 1;
            else dp[j][i] = 2;

            max = Math.max(max, dp[j][i]);
        }
    }

    return max > 2 ? max : 0;
};
