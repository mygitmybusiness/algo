/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    k = k % nums.length;

    if (k == 0) return nums;

    reverse(nums, 0, nums.length - 1);

    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    return nums;
}

const reverse = (arr, start, end) => {
    while (start < end) {
        let tmp = arr[end];
        arr[end] = arr[start];
        arr[start] = tmp;

        start++;
        end--;
    }
}
