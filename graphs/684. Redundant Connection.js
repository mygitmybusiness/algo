/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
    const graph = {};

    const dfs = node => {
        if (!graph[node] || graph[node] === node) {
            return graph[node] = node;
        }

        return dfs(graph[node]);
    }

    for (let [start, end] of edges){
        if (dfs(start) - dfs(end)) {
            graph[dfs(start)] = graph[dfs(end)];
        } else {
            return [start, end];
        }
    }
};
