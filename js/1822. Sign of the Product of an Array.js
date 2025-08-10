/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var product = nums[0];

    for (var i = 1; i < nums.length; i++) {
        product = product * nums[i]
    }

    if (product > 0) {
        return 1;
    } else if (product < 0) {
        return -1
    } else {
        return 0;
    }
};
