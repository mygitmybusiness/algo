/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let i = 0, j = height.length - 1;

    while (i < j) {
        let shortestLine = Math.min(height[i], height[j]);
        let currentArea = shortestLine * (j - i);
            maxArea = Math.max(currentArea, maxArea);

        if (shortestLine == height[j]) {
            j--;
        } else if(shortestLine == height[i]) {
            i++;
        }
    }

    return maxArea;
};
