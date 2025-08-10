/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let adjVertex = Array.from({ length: n }, () => []);

    for (let [x, y] of edges) {
        adjVertex[x].push(y);
        adjVertex[y].push(x);
    }

    let count = 0;
    let visited = new Array(n).fill(false);

    let dfs = (i, adjV, visited) => {
        visited[i] = true;

        let nodes = adjV[i];

        for (let i in nodes) {
            if (visited[nodes[i]] == false) dfs(nodes[i], adjV, visited);
        }
    }
    
    for (let i in visited) {
        if (visited[i] == false) {
            count++;
            dfs(i, adjVertex, visited)
        }
    }

    return count;
};
