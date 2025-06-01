/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];
    let dfs = (node, path) => {
        if (node == graph.length - 1) return res.push([...path, node]);

        path.push(node);

        for (let ptr of graph[node]) {
            dfs(ptr, path);
        }

        path.pop();
    }

    dfs(0, []);

    return res;
};
