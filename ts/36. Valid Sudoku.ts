function isValidSudoku(board: string[][]): boolean {
    const findSquareLimits = (point: number): number[] => {
      if (point >= 0 && point <= 2) return [0, 2];
      if (point >= 3 && point <= 5) return [3, 5];
      if (point >= 6 && point <= 8) return [6, 8];
    }
  
    const checkSquare = (row, col, target): boolean => {
      let [startRow, endRow] = findSquareLimits(row);
      let [startCol, endCol] = findSquareLimits(col);
  
      for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
          if (board[i][j] == '.') continue; // skip empty
          if (i == row && j == col) continue; // skip
  
          if (board[i][j] == target) return false;
        }
      }
  
      return true;
    }
  
    const checkRow = (row, col, target): boolean => {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] == '.') continue; // skip empty
        if (i == col) continue; // skip
  
        if (board[row][i] == target) return false;
      }
  
      return true;
    }
  
    const checkCol = (row, col, target): boolean => {
      for (let i = 0; i < 9; i++) {
        if (board[i][col] == '.') continue; // skip empty
        if (i == row) continue; // skip
  
        if (board[i][col] == target) return false;
      }
  
      return true;
    }
      
    const validateNumber = (row, col):boolean => {
      return checkSquare(row, col, board[row][col]) && checkRow(row, col, board[row][col]) && checkCol(row, col, board[row][col]);
    }
  
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] == '.') continue;
  
        if (!validateNumber(row, col)) return false;
      }
    }
  
    return true;
  };
  