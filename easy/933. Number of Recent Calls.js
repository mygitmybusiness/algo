
var RecentCounter = function() {
    this.recentRequests = [];

    return this;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.recentRequests.push(t);

    while (this.recentRequests.at(0) < t - 3000) {
        this.recentRequests.shift();
    }

    return this.recentRequests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
