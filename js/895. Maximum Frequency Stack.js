
var FreqStack = function() {
    this.stack = [];
    this.fMap = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.fMap[val] = this.fMap[val] ? this.fMap[val] + 1 : 1;

    const freq = this.fMap[val];

    if (this.stack.length < freq) {
        this.stack.push([val]);
    } else {
        this.stack[freq - 1].push(val);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let last = this.stack.at(-1);
    let res = last.pop();
    
    if (last.length == 0) this.stack.pop();

    this.fMap[res] -= 1;
    return res;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
