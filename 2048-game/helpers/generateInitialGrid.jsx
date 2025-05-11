function getRandomEmptyCell(grid) {
    const emptyCells = [];
  
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === null) {
          emptyCells.push({ row: rowIndex, col: colIndex });
        }
      });
    });
  
    if (emptyCells.length === 0) return null;
  
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }
  
  export function addRandomTile(grid) {
    const newGrid = grid.map(row => [...row]);
    const position = getRandomEmptyCell(newGrid);
  
    if (position) {
      newGrid[position.row][position.col] = Math.random() < 0.9 ? 2 : 4;
    }
  
    return newGrid;
  }
  
  export function generateInitialGrid() {
    let grid = Array.from({ length: 4 }, () => Array(4).fill(null));
    grid = addRandomTile(grid);
    grid = addRandomTile(grid);
    return grid;
  }
  