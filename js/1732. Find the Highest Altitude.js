/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let h = 0;

    gain.reduce((el, accum) => {
        let r = el + accum;
        h = Math.max(h, r);
        return r;
    }, 0);

    return h;
};