/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let leftSum = 0;
    let rightSum = 0;
    let megaSum = [...nums];
    let leftMostIndex = -1;

    while (i < nums.length && j >= 0) {
        if (Array.isArray(megaSum[i])) {
            megaSum[i].push(leftSum);

            if (megaSum[i][0] == megaSum[i][1]) {
                leftMostIndex = leftMostIndex == -1 ? i : Math.min(leftMostIndex, i);
            }
        } else {
            megaSum[i] = [leftSum];
        }

        if (Array.isArray(megaSum[j])) {
            megaSum[j].push(rightSum);

            if (megaSum[j][0] == megaSum[j][1]) {
                leftMostIndex = leftMostIndex == -1 ? j : Math.min(leftMostIndex, j);
            }
        } else {
            megaSum[j] = [rightSum];
        }

        leftSum += nums[i];
        rightSum += nums[j];

        i++;
        j--;
    }

    return leftMostIndex;
};
