/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    const allIntervals = [];

    for (let employee of schedule) {
        for (let interval of employee) {
            allIntervals.push(interval);
        }
    }

    allIntervals.sort((a, b) => a.start - b.start);

    let i = 0;
    while (i < allIntervals.length - 1) {
        if (allIntervals[i].end >= allIntervals[i + 1].start) {
            let l = Math.min(allIntervals[i].start, allIntervals[i + 1].start);
            let r = Math.max(allIntervals[i].end, allIntervals[i + 1].end);
            let mergedInterval = {start: l, end: r};
            allIntervals.splice(i + 1, 1);
            allIntervals[i] = mergedInterval;
        } else {
            i++;
        }
    }

    let freeIntervals = [];

    for (let i = 0; i < allIntervals.length - 1; i++) {
        let newInterval = {start: allIntervals[i].end, end: allIntervals[i + 1].start};
        freeIntervals.push(newInterval);
    }

    return freeIntervals;
};
