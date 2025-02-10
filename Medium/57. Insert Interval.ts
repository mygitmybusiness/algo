function insert(intervals: number[][], newInterval: number[]): number[][] {
    let n = intervals.length,
    i = 0,
    res = [];

// Case 1: No overlapping before merging intervals
while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
}

// Case 2: Overlapping and merging intervals
while (i < n && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
}
res.push(newInterval);

// Case 3: No overlapping after merging newInterval
while (i < n) {
    res.push(intervals[i]);
    i++;
}

return res;
};
