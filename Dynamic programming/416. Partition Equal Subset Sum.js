/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, val) => acc + val, 0);

    if (sum % 2) return false;

    const target = sum / 2;

    let dp = new Set([0]);

    for (let i = 0; i < nums.length; i++) {
        let vals = [...dp.values()];

        for (let j = 0; j < vals.length; j++) {
            dp.add(nums[i] + vals[j]);
        }
    }

    return dp.has(target);
};
