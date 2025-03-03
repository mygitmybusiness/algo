/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let sort = nums.sort((a, b) => a - b).slice();
    let median = Math.floor((nums.length + 1) / 2);
    let j = median - 1;
    let k = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            nums[i] = sort[j--]
        } else {
           nums[i] = sort[k--]
        }
    }
};
