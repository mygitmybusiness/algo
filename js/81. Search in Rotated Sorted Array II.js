/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            start = i;
        }
    }

    let s = nums.slice(0, start);
    let e = nums.slice(start, nums.length);

    let newArr = e.concat(s);

    let l = 0;
    let r = newArr.length - 1;
    let m = Math.floor((l + r) / 2);

    while (l <= r) {
        if (newArr[m] == target) {
            return true;
        } else if (newArr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }

        m = Math.floor((l + r) / 2);
    }

    return false;
};
