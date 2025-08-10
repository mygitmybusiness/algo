/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let xScores = [];

    for (let i in operations) {
        if (operations[i] == '+') {
            xScores.push(xScores.at(-1) + xScores.at(-2));
        } else if (operations[i] == 'D') {
            xScores.push(xScores.at(-1) * 2);
        } else if (operations[i] == 'C') {
            xScores.pop();
        } else {
            xScores.push(Number(operations[i]));
        }
    }

    return xScores.reduce((val, acc) => val + acc, 0);
};
