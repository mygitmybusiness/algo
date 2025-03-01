/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    if (edges.length !== n - 1) return false;

    const adjacency = Array.from({ length: n }, () => []);

    for (const [x, y] of edges) {
        adjacency[x].push(y);
        adjacency[y].push(x);
    }

    const visited = new Set();
    const stack = [0];

    visited.add(0);

    while (stack.length > 0) {
        const node = stack.pop();

        for (const neighbor of adjacency[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return visited.size === n;
};
