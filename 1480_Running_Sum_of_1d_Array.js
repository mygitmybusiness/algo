/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var iterationSum = 0;
    var runningSum = [];

    for (var i = 0; i < nums.length; i++) {
        iterationSum += nums[i];
        runningSum[i] = iterationSum;
    }

    return runningSum;
};