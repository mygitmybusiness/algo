/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, right;
    let k = 1;

    for (right = 0; right < nums.length; right++) {
        if (nums[right] == 0) k--;

        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }

    return right - left - 1;
};
