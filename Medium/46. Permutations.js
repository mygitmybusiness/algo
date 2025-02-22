/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];

    function backtrack(curr) {
        if (curr.length === nums.length) {
            res.push([...curr]);
            return;
        }

        for (let num of nums) {
            if (!curr.includes(num)) {
                curr.push(num);
                
                backtrack(curr);

                curr.pop();
            }
        }
    }

    backtrack([]);

    return res;
};
