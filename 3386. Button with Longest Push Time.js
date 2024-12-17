/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    var node = events[0];
    var longestTime = node[1];

    for (var i = 1; i < events.length; i++) {
        var currentTime = events[i][1] - events[i - 1][1];
        
        if (currentTime > longestTime) {
            longestTime = currentTime;
            node = events[i];
        } if (currentTime == longestTime) {
            if (node[0] > events[i][0]) node = events[i];
        }
    }

    return node[0];
};
