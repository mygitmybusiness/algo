/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    let events = [];

    for (let i in intervals) {
        events.push(['s', intervals[i][0]], ['e', intervals[i][1]]);
    }

    events.sort((a, b) => {
        // Compare by value (second element)
        if (a[1] !== b[1]) return a[1] - b[1];

        // If values are equal, prioritize subarray containing 'e'
        if (a[0] === 'e' && b[0] !== 'e') return -1;
        if (b[0] === 'e' && a[0] !== 'e') return 1;

        return 0; // Otherwise, maintain relative order
    });

    let rooms = 0;
    let maxRooms = 0;

    for (let [e, val] of events) {
        e == 's' ? rooms++ : rooms--;
        maxRooms = Math.max(maxRooms, rooms);
    }

    return maxRooms;
};
