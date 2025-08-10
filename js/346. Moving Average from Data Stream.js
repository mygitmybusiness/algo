/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.values = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.values.push(val);

    while (this.values.length > this.size) {
        this.values.shift();
    }

    let res = this.values.reduce((acc, val) => acc + val, 0);

    return res / this.values.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
