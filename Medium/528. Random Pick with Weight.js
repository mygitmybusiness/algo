/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefix = [];
    let total = 0;

    for (let x of w) {
        this.prefix.push(total += x);
    }

    this.total = total;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(Math.random() * this.total);
    let l = 0;
    let r = this.prefix.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (target < this.prefix[mid]) r = mid;
        else l = mid + 1;
    }

    return l;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
