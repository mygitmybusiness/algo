function largestPerimeter(nums: number[]): number {
    // a + b > c & a + c > b & b + c > a.

    nums.sort((a, b) => a - b);

    for (let i = nums.length - 3; i >= 0; --i) {
        if (nums[i] + nums[i + 1] > nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
};
