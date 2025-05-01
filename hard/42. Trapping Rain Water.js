/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let ans = 0;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            ans += leftMax - height[left];
            ++left;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            ans += rightMax - height[right];
            --right;
        }
    }

    return ans;
};
