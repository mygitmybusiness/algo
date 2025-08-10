/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];

        while (1 + i < nums.length && nums[i] + 1 == nums[1 + i]) {
            i++;
        }

        if (start != nums[i]) {
            ranges.push(start + '->' + nums[i]);
        } else {
            ranges.push(String(start));
        }
    }

    return ranges;
};
