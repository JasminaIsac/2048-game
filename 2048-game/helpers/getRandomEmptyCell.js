export const getRandomEmptyCell = (grid) => {
    const emptyCells = [];
  
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (grid[row][col] === null) {
          emptyCells.push({ row, col });
        }
      }
    }
  
    return emptyCells;
  };
  