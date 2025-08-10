/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var n = 0,
        unique = null;

    while (n < nums.length) {
        var i = 0,
            unique = nums[n];

        while (i < nums.length) {
            if (nums[i] == unique && i !== n) {
                unique = null;
                break;
            }

            i++;
        }

        if (unique !== null) return unique;

        n++;
    }
};
