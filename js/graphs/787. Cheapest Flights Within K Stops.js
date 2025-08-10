/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = Array.from({length: n}).fill(Number.MAX_SAFE_INTEGER);
    dist[src] = 0;

    for (let i = 0; i <= k; i++) {
        let tmp = [...dist];

        for (let flight of flights) {
            if (dist[flight[0]] != Number.MAX_SAFE_INTEGER) {
                tmp[flight[1]] = Math.min(tmp[flight[1]], dist[flight[0]] + flight[2])
            }
        }

        dist = tmp;
    }

    return dist[dst] == Number.MAX_SAFE_INTEGER ? -1 : dist[dst];
};
