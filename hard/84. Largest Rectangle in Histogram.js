/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [-1];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (
            stack[stack.length - 1] != -1 &&
            heights[stack[stack.length - 1]] >= heights[i]
        ) {
            let currenHeight = heights[stack.pop()];
            let currentWidth = i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, currenHeight * currentWidth);
        }

        stack.push(i);
    }

    while (stack[stack.length - 1] != -1) {
        let currenHeight = heights[stack.pop()];
        let currentWidth = heights.length - stack[stack.length - 1] - 1;

        maxArea = Math.max(maxArea, currenHeight * currentWidth);
    }

    return maxArea;
};
