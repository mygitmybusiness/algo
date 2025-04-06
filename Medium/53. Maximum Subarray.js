function maxSubArray(nums: number[]): number {
    let slide = nums[0];
    let maxSlide = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        slide = Math.max(nums[i], slide + nums[i]);
        maxSlide = Math.max(maxSlide, slide);
    }

    return maxSlide;
};
