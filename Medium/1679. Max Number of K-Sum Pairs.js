/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    let map = new Map();

    for (let num of nums) {
        let complement = k - num;
        
        if (map.has(complement) && map.get(complement) > 0) {
            map.set(complement, map.get(complement) - 1);
            count++;
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return count;
};
