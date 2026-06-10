/**
 * @param {number[][]} events
 */
var EventManager = function(events) {
    this.maxHeap = new MaxPriorityQueue({
    compare: (a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1]; // higher priority first
        }
        return a[0] - b[0]; // smaller eventId first
        }
    });

    this.map = {};

    for (const event of events) {
        this.maxHeap.enqueue(event);
        this.map[event[0]] = event[1];
    }
};

/** 
 * @param {number} eventId 
 * @param {number} newPriority
 * @return {void}
 */
EventManager.prototype.updatePriority = function(eventId, newPriority) {
    this.maxHeap.enqueue([eventId, newPriority]);
    this.map[eventId] = newPriority;
};

/**
 * @return {number}
 */
EventManager.prototype.pollHighest = function() {
    while (!this.maxHeap.isEmpty()) {
        let front = this.maxHeap.front();
        this.maxHeap.dequeue();

        if(this.map[front[0]] == front[1]){
            delete this.map[front[0]];
            return front[0];
        }
    }

    return -1;
};

/** 
 * Your EventManager object will be instantiated and called as such:
 * var obj = new EventManager(events)
 * obj.updatePriority(eventId,newPriority)
 * var param_2 = obj.pollHighest()
 */