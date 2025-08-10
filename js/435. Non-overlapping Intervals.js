/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // Sort by upper bound
    let count = 0;
    let k = Number.MIN_SAFE_INTEGER; // delimiter

    for (let i = 0; i < intervals.length; i++) {
        let a = intervals[i][0];
        let b = intervals[i][1];

        if (a >= k) k = b; // if current lower bound >= delimiter
        else count++;
    }

    return count;
};
