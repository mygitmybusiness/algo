/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let answer = Array.from({length: temp.length}).fill(0);

    for (let i = 0; i < temp.length; i++) {
        while (stack.length > 0 && temp[i] > temp[stack[stack.length - 1]]) {
            const index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i)
    }

    return answer;
};
