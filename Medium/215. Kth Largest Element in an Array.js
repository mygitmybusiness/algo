/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pq = PriorityQueue.fromArray(nums, (a, b) => a - b);

    return pq.toArray()[pq.size() - k]
};
