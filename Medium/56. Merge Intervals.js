/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let i = 0;

    intervals.sort((a, b) => a[0] - b[0]);

    while (i < intervals.length - 1) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            console.log('Intersection: ' + intervals[i] + ' & ' + intervals[i + 1]);
            let start = Math.min(intervals[i][0], intervals[i + 1][0]);
            let end = Math.max(intervals[i][1], intervals[i + 1][1]);

            intervals[i] = [start, end];

            intervals.splice(i + 1, 1);
        } else {
            i++;
        }
    }

    return intervals;
};
