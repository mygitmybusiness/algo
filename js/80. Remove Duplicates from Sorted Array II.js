/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (map.get(nums[i]) >= 2) {
                nums.splice(i, 1);
                i--;
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        } else {
            map.set(nums[i], 1);
        }
    }

    return nums.length;
};
