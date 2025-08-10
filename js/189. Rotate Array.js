/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums === null || nums.length === 0) {
        return;
    }
    k = k % nums.length;
    if (k === 0) {
        return;
    }

    nums.reverse();

    reverse(nums, 0, k - 1); // reverse back slice
    reverse(nums, k, nums.length - 1); // reverse back else
};

const reverse = (arr, s, e) => {
    while (s < e) {
        let tmp = arr[s];
        arr[s] = arr[e];
        arr[e] = tmp;

        s++;
        e--;
    }
}
