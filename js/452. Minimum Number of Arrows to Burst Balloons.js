/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (!points.length) return 0;

    points = points.sort((a, b) => a[1] - b[1]);

    let count = 1;

    let nextBaloon = points[0][1];

    for (let [currentStart, currentEnd] of points) {
        if (nextBaloon < currentStart) {
            count++;
            nextBaloon = currentEnd;
        }
    }

    return count;
};
