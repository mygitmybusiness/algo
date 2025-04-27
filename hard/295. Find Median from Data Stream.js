
function MedianFinder() {
    this.arr = [];

    return this;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.arr.length === 0) {
        this.arr.push(num);
        return;
    }

    let l = 0;
    let r = this.arr.length;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (num > this.arr[mid]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    this.arr.splice(l, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const mid = Math.floor(this.arr.length / 2);
    return (this.arr.length & 1) === 1
        ? this.arr[mid]
        : (this.arr[mid] + this.arr[mid - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
