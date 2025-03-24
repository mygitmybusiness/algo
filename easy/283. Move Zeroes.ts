/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    const N = nums.length;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            i--;
        }
    }

    while (nums.length < N) nums.push(0);
};
