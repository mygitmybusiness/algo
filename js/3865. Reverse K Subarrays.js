/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var reverseSubarrays = function(nums, k) {
    let limit = nums.length / k;

    let i = 0;

    while (i < nums.length) {
        let l = i;
        let r = l + limit - 1;
        
        while (l < r) {
            let tmp = nums[l];
            nums[l] = nums[r];
            nums[r] = tmp;

            l++;
            r--;
        }

        i += limit;
    }

    return nums;
};