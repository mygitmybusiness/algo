/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let max = nums.length;
    
    for (var i = 0; i < max; i++) {
        for ( var j = 0; j < max; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j];
            };
        }
    }
};

twoSum([3,2,4], 6);