/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length <= 1) return true;

    var prev;
    var sign = null;

    for (var i = 1; i < nums.length; i++) {
        prev = nums[i - 1];

        if (nums[i] == prev) continue;

        if (sign == null) {
            nums[i] > prev ? sign = '>' : sign = '<';
            continue;
        }
        
        if (nums[i] > prev && sign !== '>') {
            return false;
        }

        if (nums[i] < prev && sign !== '<') {
            return false;
        }
    }

    return true;
};
