/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let nums = [1];

    let p1 = 0, p2 = 0, p3 = 0;

    for (let i = 1; i <= n; i++) {
        let candidate = Math.min(nums[p1] * 2, nums[p2] * 3, nums[p3] * 5);
        nums.push(candidate);
        if (nums[p1] * 2 == candidate) p1++;
        if (nums[p2] * 3 == candidate) p2++;
        if (nums[p3] * 5 == candidate) p3++;
    }


    return nums[n - 1];
};
