function maxRequests(
    requests: number[][], 
    k: number, 
    window: number
): number {
    let calls = new Map();
    let numberOfCalls: number = 0;

    requests.sort((a, b) => a[1] - b[1]);

    for (let [user, time] of requests) {
        if (!calls.has(user)) {
            calls.set(user, [time]);
            numberOfCalls += 1;
        } else {
            if (calls.get(user).length >= k) {
                if (calls.get(user)[0] + window >= time) {
                    continue;
                } else {
                    calls.set(user, [...calls.get(user).slice(1), time]);
                    numberOfCalls += 1;
                }
            } else {
                calls.set(user, [...calls.get(user), time]);
                numberOfCalls += 1;
            }
        }
    }

    return numberOfCalls;
};