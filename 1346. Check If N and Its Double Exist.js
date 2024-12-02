/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (i in arr) {
        for (j in arr) {
            if (arr[i] == arr[j] * 2 && i != j) return true;
        }
    }

    return false;
};