/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let n = grid.length;
    let rows = Array.from({length: n}).fill(0);
    let cols = Array.from({length: n}).fill(0);
  
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        rows[r] = Math.max(rows[r], grid[r][c]);
        cols[c] = Math.max(cols[c], grid[r][c]);
      }
    }
  
    let sum = 0;
  
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        let limit = Math.min(rows[r], cols[c]);
        sum += Math.abs(grid[r][c] - limit)
      }
    }
  
    return sum;
  };