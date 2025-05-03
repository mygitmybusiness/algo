/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
    const next = [];

    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            next.push(currentState.substring(0, i) + "--" + currentState.substring(i + 2));
        }
    }

    return next;
};
