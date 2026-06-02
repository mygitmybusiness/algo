function maximumTeamSize(startTime: number[], endTime: number[]): number {
    const upperBound = (arr, target) => {
        let l = 0;
        let r = arr.length;
        
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (arr[m] <= target) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }

    const lowerBound = (arr, target) => {
        let l = 0;
        let r = arr.length;
        
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (arr[m] < target) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }

    const n = startTime.length;
    
    const sortedStart = [...startTime].sort((a, b) => a - b);
    const sortedEnd = [...endTime].sort((a, b) => a - b);
    
    let max = 0;
    
    for (let i = 0; i < n; i++) {
        const a = upperBound(sortedStart, endTime[i]);
        const b = lowerBound(sortedEnd, startTime[i]);
        
        max = Math.max(max, a - b);
    }
    
    return max;
};
