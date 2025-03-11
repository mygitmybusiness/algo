const matrixBFS = (matrix, startRow = 0, startCol = 0) => {
    let rows = matrix.length;
    let cols = matrix[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[startRow][startCol] = true;

    // up, down, left, right
    const directions = [
        { dr: -1, dc: 0 },
        { dr: 1, dc: 0 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 },
    ];

    const queue = [];
    queue.push({ row: startRow, col: startCol });

    const visitedOrder = [];

    while (queue.length > 0) {
        // deque
        const { row, col } = queue.shift();
        visitedOrder.push([row, col]);

        // traverse neighbours
        for (let { dr, dc } of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // check boundaries and check if not blocked
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !visited[newRow][newCol]   // not already visited
            ) {
                visited[newRow][newCol] = true;  // mark visited
                queue.push({ row: newRow, col: newCol });
            }
        }
    }

    console.log("visited order: ", visitedOrder);
}