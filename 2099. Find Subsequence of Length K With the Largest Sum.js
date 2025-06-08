/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let n = nums.length;

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push({index: i, value: nums[i]})
    }

    arr.sort((a, b) => b.value - a.value);

    let biggest = arr.slice(0, k);

    biggest.sort((a, b) => a.index - b.index);

    let res = [];

    for (let num of biggest) {
        res.push(num.value);
    }

    return res;
};