/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if (arr.length <= 1) return false;

    var sorted = arr.sort((a, b) => b - a);
    var prog = null;

    for (var i = 1; i < sorted.length; i++) {
        if (prog == null) prog = sorted[i] - sorted[i-1];
        if ((sorted[i] - sorted[i-1]) != prog) return false;
    }

    return true;
};
