/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let strongestPair = 0;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                let xor = nums[i] ^ nums[j];

                strongestPair = Math.max(parseInt(xor), strongestPair);
            }
        }
    }

    return strongestPair;
};