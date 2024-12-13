/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var memo = {};

    for (var i = 0; i < nums.length; i++) {
        if (!memo[nums[i]]) {
            memo[nums[i]] = 1;
        } else {
            return true;
        }
    }

    return false;
};
