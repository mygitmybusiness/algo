/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [1];

    for (var i = 1; i < nums.length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    let R = 1;

    for (var i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;
        R *= nums[i];
    }

    return answer;
};
