/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let k = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[k]) 
            nums[++k] = nums[j];
    }
    return ++k;
};
