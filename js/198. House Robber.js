/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) return nums[0];

    const SUM = Array(nums.length).fill(0);

    SUM[0] = nums[0];
    SUM[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        SUM[i] = Math.max(SUM[i - 1], nums[i] + SUM[i - 2]);
    }

    return SUM[nums.length - 1];
};
