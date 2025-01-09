/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    var map = new Map();

    for (var i of nums) {
        map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
    }

    let arr = Array.from(map).sort((a, b) => {
        if (a[1] == b[1]) {
            
            return b[0] - a[0];
        } 
        
        return a[1] - b[1];
    });

    let res = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i][1]; j++) {
            res.push(arr[i][0])
        }
    }

    return res;
};
