/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let meetings = [];

    for (let [start, end] of intervals) {
        meetings.push(['s', start], ['e', end]);
    }

    meetings.sort((a, b) => {
        if (a[1] == b[1]) {
            if (a[0] == 'e') {
                return -1;
            } else {
                return 1;
            }
        } 

        let res = a[1] - b[1];

        return res;
    });

    console.log(meetings);

    let rooms = [];
    let maxRooms = rooms.length;

    for (let [event, time] of meetings) {
        if (event == 's') {
            rooms.push(time);
        } else {
            rooms.pop();
        }

        maxRooms = Math.max(maxRooms, rooms.length);
    }

    return maxRooms;
};