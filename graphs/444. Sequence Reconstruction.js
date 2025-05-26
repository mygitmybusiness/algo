/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function (nums, sequences) {
    const dependencyMap = new Map();
    for (const list of sequences) {
        for (let i = 1; i < list.length; ++i) {
            const prev = list[i - 1];
            const curr = list[i];
            if (!dependencyMap.has(prev)) {
                dependencyMap.set(prev, new Set());
            }
            dependencyMap.get(prev).add(curr);
        }
    }

    let i = nums.length - 1;
    //if the last element has a dependency this sequence can't be correct
    if (dependencyMap.get(nums[i]) !== undefined) {
        return false;
    }

    //ensure the previous number in the sequence has a dependency on the next as this will ensure it must be in sequence
    let prevNumDependencies = dependencyMap.get(nums[i - 1]);
    while (i >= 1) {
        //if the previous number has no dependencies, the sequence can't be enforced therefore it's invalid
        if (prevNumDependencies === undefined) {
            return false;
        }
        //if the previous number doesn't have the next number they can't be in an enforced sequence
        if (!prevNumDependencies.has(nums[i])) {
            return false;
        }
        --i;
        prevNumDependencies = dependencyMap.get(nums[i - 1]);
    }
    
    return true;
};
