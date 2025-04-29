
var TwoSum = function() {
    this.nums = [];

    return this;
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.nums.push(number);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    const pairs = new Map();

    for (let n of this.nums) {
        if (pairs.has(value - n)) return true;
        pairs.set(n, value - n);
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
