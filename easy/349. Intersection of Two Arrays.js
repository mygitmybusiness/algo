/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a = new Set(nums1);
    let b = new Set(nums2);

    return [...a].filter(item => b.has(item));
};
