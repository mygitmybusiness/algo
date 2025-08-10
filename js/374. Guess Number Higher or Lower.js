/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let upperBound = n;
    let lowerBound = 1;
    let mid = Math.floor((upperBound + lowerBound) / 2);
    let result = guess(mid);
    
    while (result != 0) {
        if (result === 1) {
            lowerBound = mid + 1;
            mid = Math.floor((upperBound + lowerBound) / 2);
        } else if (result == -1) {
            upperBound = mid - 1;
            mid = Math.floor((upperBound + lowerBound) / 2);
        }

        result = guess(mid);
    }

    return mid;
};
