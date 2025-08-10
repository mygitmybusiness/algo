/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    let backtrack = (path, index) => {
        res.push(path);

        for (let i = index; i < nums.length; i++) {
            backtrack([...path, nums[i]], i + 1);
        }
    }

    backtrack([], 0);

    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let res = [];

    function recursiveHelper(sub, i) {

        if (i === nums.length) {
            res.push([...sub])
            return
        }
        sub.push(nums[i])
        recursiveHelper(sub, i + 1);
        sub.pop()
        recursiveHelper(sub, i + 1);
    }
    recursiveHelper([],0)
    return res
}
