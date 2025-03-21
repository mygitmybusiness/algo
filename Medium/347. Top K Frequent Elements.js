/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let sort = [...freq].sort((a, b) => b[1] - a[1]);

    let res = sort.slice(0, k);

    for (let i in res) {
        res[i] = res[i][0];
    }

    return res;
};
