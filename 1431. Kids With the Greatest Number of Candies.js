/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var result = [];
    let maxCandies = Math.max(...candies)

    for (var i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxCandies);
    }

    return result;
};
