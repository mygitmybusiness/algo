/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 1) return 1;
    nums = [...new Set(nums).values()].sort((a, b) => a - b);

    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        let last = nums[i];
        let k = i + 1;
        let count = 1;

        while (nums[k] - last == 1) {
            last = nums[k];
            i = k;
            k++;
            count++;
        }
        
        longest = Math.max(longest, count);
    }

    return longest;
};
