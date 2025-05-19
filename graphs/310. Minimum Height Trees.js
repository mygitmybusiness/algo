var findMinHeightTrees = function (n, edges) {
    if (n <= 1) return [0];

    const adj = new Map();
    for (let i = 0; i < n; i++) adj.set(i, []);

    for (let [a, b] of edges) {
        adj.get(a).push(b);
        adj.get(b).push(a);
    }

    let leaves = [];

    for (let [node, neighbors] of adj.entries()) {
        if (neighbors.length === 1) leaves.push(node);
    }

    let remainingNodes = n;

    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves = [];

        for (let leaf of leaves) {
            const neighbor = adj.get(leaf).pop();
            const neighborsOfNeighbor = adj.get(neighbor);
            neighborsOfNeighbor.splice(neighborsOfNeighbor.indexOf(leaf), 1);

            if (neighborsOfNeighbor.length === 1) {
                newLeaves.push(neighbor);
            }
        }

        leaves = newLeaves;
    }

    return leaves;
};
