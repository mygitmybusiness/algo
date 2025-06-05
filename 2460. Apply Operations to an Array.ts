function applyOperations(nums: number[]): number[] {
    let i = 0;
    const n = nums.length;

    // traverse an array
    for (let j = 0; j < n; j++) {
        if (nums[j] === 0) continue; // continue on ZEROes

        // if curr == next -> curr * 2
        if (j + 1 < n && nums[j] === nums[j + 1]) {
            nums[i++] = nums[j] * 2;
            j++; // pass next elem
        } else {
            nums[i++] = nums[j]; // copy next elem
        }
    }

    // fill end with 0s
    while (i < n) {
        nums[i++] = 0;
    }

    return nums;
}
