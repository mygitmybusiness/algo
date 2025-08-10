/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function(currentState) {
    var n = currentState.length;

    for (let i = 0; i < n - 1; i++) {
        if (currentState[i] == '+' && currentState[i + 1] == '+') {
            if (!(canWin(currentState.slice(0, i) + '--' + currentState.slice(i + 2)))) return true;
        }
    }

    return false;
};
