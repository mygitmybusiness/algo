/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
    const N = nums.length;

    let i = 0;
    let zeroes = 0;
    let twos = 0;

    while (i < N) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            zeroes += 1;
        } else if (nums[i] == 2) {
            nums.splice(i, 1);
            twos += 1;
        } else {
            i++;
        }
    }

    while (zeroes > 0) {
        nums.unshift(0);
        zeroes -= 1;
    }

    while (twos > 0) {
        nums.push(2);
        twos -= 1;
    }
};
