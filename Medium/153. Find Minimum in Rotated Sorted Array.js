/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1;
    let min = nums[0];

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        min = Math.min(nums[l], nums[r], nums[mid], min);

        if (nums[mid] >= nums[l]) {
            l = mid + 1;
        }

        if (nums[mid] <= nums[r]) {
            r = mid - 1;
        }        
    }

    return min;
};
