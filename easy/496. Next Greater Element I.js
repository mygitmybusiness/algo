/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = [];

    for (let i = 0; i < nums1.length; i++) {
        let currentNumber = nums1[i];
        let num = nums2.indexOf(currentNumber) + 1;
        let next = -1;

        for (let j = num; j < nums2.length; j++) {
            if (nums2[j] > currentNumber) {
                next = nums2[j];
                break;
            }
        }

        res.push(next);
    }

    return res;
};
