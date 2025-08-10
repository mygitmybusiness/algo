/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0; // lower bound
    let right = nums.length - 1; // upper bound

    // <= is a must
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // math floor, not ceil

        if (nums[mid] < target) {
            left = mid + 1; // correction right
        } else if (nums[mid] > target) {
            right = mid - 1; // correction left
        } else {
            return mid;
        }
    }

    return -1;
};
