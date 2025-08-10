/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// TEST CASES:

// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// 3
// [[5, 10, 15], [20, 25, 30], [35, 40, 45]]
// 25
// [[1, 5, 9], [14, 20, 23], [30, 34, 60]]
// 15
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// 13
// [[1]]
// 0
// [[1]]
// 2
var searchMatrix = function(matrix, target) {
    let l = 0, r = matrix.length;
    let range;

    while (l <= r) {
        let mid = Math.floor((r + l) / 2);

        if (!matrix[mid]) return false;

        if (matrix[mid].at(0) <= target && 
            matrix[mid].at(-1) >= target
        ) {
            range = matrix[mid];
            break;
        }

        if (matrix[mid].at(0) > target) r = mid - 1;
        if (matrix[mid].at(-1) < target) l = mid + 1;
    }

    if (!range) return false;

    l = 0;
    r = range.length - 1;

    while (l <= r) {
        let mid = Math.floor((r + l) / 2);

        if (range[mid] == target) return true;

        if (range[mid] > target) r = mid - 1;
        if (range[mid] < target) l = mid + 1;
    }

    return false;
};
