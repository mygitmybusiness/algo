/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let min = 1;

    let u = new Set(nums);

    while (u.has(min)) {
        min++;
    }

    return min;
};
