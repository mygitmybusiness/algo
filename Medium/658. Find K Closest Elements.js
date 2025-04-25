/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {
        const cL = Math.abs(arr[left] - x);
        const cR = Math.abs(arr[right] - x);

        if (cL < cR || (cL == cR && arr[left] < arr[right])) {
            right--;
        } else {
            left++;
        }
    }

    return arr.slice(left, right + 1);
};
