/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let n = Math.ceil(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let newNum = map.get(nums[i]) + 1;
            map.set(nums[i], newNum);
        }
        else map.set(nums[i], 1);

        if (map.get(nums[i]) >= n) return nums[i]; 
    }
};

