function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
  
    const dfs = (r: number, c: number, idx: number): boolean => {
      if (idx === word.length) return true;
  
      if (
        r < 0 || r >= rows ||
        c < 0 || c >= cols ||
        board[r][c] !== word[idx]
      ) {
        return false;
      }
  
      const temp = board[r][c];
      board[r][c] = '#';
  
      const found =
        dfs(r + 1, c, idx + 1) ||
        dfs(r - 1, c, idx + 1) ||
        dfs(r, c + 1, idx + 1) ||
        dfs(r, c - 1, idx + 1);
  
      board[r][c] = temp;
  
      return found;
    };
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === word[0] && dfs(i, j, 0)) {
          return true;
        }
      }
    }
  
    return false;
  }