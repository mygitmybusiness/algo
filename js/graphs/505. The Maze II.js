/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    let [m, n] = [maze.length, maze[0].length];

    let distance = Array.from({length: m}, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
    distance[start[0]][start[1]] = 0;

    let dfs = (x, y) => {
        for (let [i, j] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let [newX, newY] = [x, y];
            let count = 0;

            while (newX + i >= 0 && 
                    newX + i < m && 
                    newY + j >= 0 && 
                    newY + j < n && 
                    maze[newX + i][newY + j] === 0) {
                newX += i;
                newY += j;
                count += 1;
            }

            if (distance[x][y] + count < distance[newX][newY]) {
                distance[newX][newY] = distance[x][y] + count;
                dfs(newX, newY);
            }
        }
    }

    dfs(start[0], start[1]);

    let destDist = distance[destination[0]][destination[1]];

    return destDist != Number.MAX_SAFE_INTEGER ? destDist : -1;
};
