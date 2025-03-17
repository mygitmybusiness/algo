/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let hashmap = new Map();
    let count = 0;
    let res = 0;
    
    hashmap.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count--;
        }

        if (hashmap.has(count)) {
            res = Math.max(res, i - hashmap.get(count));
        } else {
            hashmap.set(count, i);
        }
    }
    return res;
};
