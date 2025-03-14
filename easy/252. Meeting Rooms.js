/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    let meetings = intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < meetings.length; i++) {
        if (meetings[i - 1][1] > meetings[i][0]) return false;
    }

    return true;
};
