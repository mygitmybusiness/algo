/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let stack = [];

    for (let point of points) {
        let distance = Math.sqrt(Math.pow(point[0] - 0, 2) + Math.pow(point[1] - 0, 2));
        
        stack.push({
            'point': point,
            'distance': distance
        });
    }

    stack.sort((a, b) => a.distance - b.distance);

    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(stack[i].point);
    }

    return result;
};
