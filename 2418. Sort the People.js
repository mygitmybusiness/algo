/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = new Map(heights.map((item, index) => [index, heights[index]]));
    map = [...map.entries()].sort((a, b) => b[1] - a[1]);

    let res = map.map((item, index) => names[item[0]]);

    return res;
};
