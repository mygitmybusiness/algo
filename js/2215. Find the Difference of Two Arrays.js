/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);    
    nums2.forEach(i => set1.delete(i));

    let set2 = new Set(nums2);
    nums1.forEach(i => set2.delete(i));

    return [[...set1], [...set2]];
};
