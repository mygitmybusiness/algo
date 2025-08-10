/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let combs = {'0': 1};

    for (let total = 1; total < target + 1; total++) {
        combs[String(total)] = 0;

        for (let n of nums) {
            combs[total] += combs[String(total - n)] || 0;
        }
    }

    console.log(combs);
    return combs[String(target)];
};
