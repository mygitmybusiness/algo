function spiralOrder(matrix: number[][]): number[] {
    let result: number[] = new Array();

    if (matrix.length === 0) {
        return result;
    }

    // Define the boundaries
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row.
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        
        top++; // Move the top boundary down.

        // Traverse from top to bottom along the right column.
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        right--; // Move the right boundary left.

        // Traverse from right to left along the bottom row, if still within valid boundaries.
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }

            bottom--; // Move the bottom boundary up.
        }

        // Traverse from bottom to top along the left column, if still within valid boundaries.
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }

            left++; // Move the left boundary right.
        }
    }

    return result;
};
