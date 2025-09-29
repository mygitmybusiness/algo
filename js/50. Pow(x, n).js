/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1;
    
    if (n < 0) {
        n = -1 * n;
        x = 1.0 / x;
    }

    let result = 1;
    while (n !== 0) {
        // If 'n' is odd we multiply result with 'x' and reduce 'n' by '1'.
        if (n % 2 === 1) {
            result *= x;
            n -= 1;
        }
        // We square 'x' and reduce 'n' by half, x^n => (x^2)^(n/2).
        x *= x;
        n = Math.floor(n / 2);
    }
    return result;
};