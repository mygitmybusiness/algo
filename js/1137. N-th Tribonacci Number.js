/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n < 3) return n > 0 ? 1 : 0;

    let a = 0, b = 1, c = 1;

    for (let i = 0; i < n - 2; i++) {
        let tmp = a + b + c;
        a = b;
        b = c;
        c = tmp;
    }

    return c;
};
