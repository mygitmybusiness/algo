/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    const minI = Number.MAX_SAFE_INTEGER;
    let maxNums = [];

    for (let num of nums) {
        if (maxNums.length > 0) {
            maxNums.push(Math.max(maxNums.at(-1), num));
            continue;
        }

        maxNums.push(num);
    }

    let minNums = Array.from({length: nums.length}).map(() => null);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i < nums.length - 1) {
            minNums[i] = Math.min(nums[i], minNums[i + 1]);
            continue;
        }

        minNums[i] = nums[i];
    }

    let minIndex = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (maxNums[i] - minNums[i] <= k) {
            minIndex =  Math.min(i, minIndex);
        }
    }

    return minIndex == Number.MAX_SAFE_INTEGER ? -1 : minIndex;
};