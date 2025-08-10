/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = Array.from({length: nums.length}).map(() => 0);
    dp[0] = nums[0] || 0;
    dp[1] = nums[1] || 0;

    for (let i = 2; i < dp.length; i++) {
        dp[i] = nums[i] + Math.max((dp[i - 2]) || 0, (dp[i - 3] || 0));
    }

    return Math.max(...dp);
};
