/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums[0] >= nums.length) return true;

    let dists = Array.from({length: nums.length}).map(() => 0);
    let leap = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leap >= 0) dists[i] = 1;
        else return false;

        leap = Math.max(leap, nums[i]);

        leap--;
    }

    return true;
};
