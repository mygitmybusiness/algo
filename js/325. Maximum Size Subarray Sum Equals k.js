/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let indices = new Map();
    let prefixSum = 0;
    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (prefixSum == k) {
            longest = i + 1;
        }

        if (indices.has(prefixSum - k)) {
            longest = Math.max(longest, i - indices.get(prefixSum - k));
        }

        if (!indices.has(prefixSum)) {
            indices.set(prefixSum, i);
        }
    }

    return longest;
};
