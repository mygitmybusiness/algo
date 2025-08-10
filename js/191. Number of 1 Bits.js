/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let bitNum = n.toString(2).split('').filter(x => x == '1').length;

    return bitNum; 
};
