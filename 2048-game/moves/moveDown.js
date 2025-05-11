import { addRandomTile } from '../helpers/startNewGame';

export const moveDown = (grid) => {
  let hasMoved = false;

  const newGrid = Array(4)
    .fill(null)
    .map(() => Array(4).fill(null));

  for (let col = 0; col < 4; col++) {
    let column = [];

    for (let row = 3; row >= 0; row--) {
      if (grid[row][col]) column.push(grid[row][col]);
    }

    for (let i = 0; i < column.length - 1; i++) {
      if (column[i] && column[i + 1] && column[i].value === column[i + 1].value) {
        column[i] = {
          value: column[i].value * 2,
          isNew: false,
          isMerged: true,
        };
        column[i + 1] = null;
        hasMoved = true;
      }
    }

    const mergedColumn = column.filter(cell => cell !== null);
    while (mergedColumn.length < 4) {
      mergedColumn.push(null);
    }

    for (let row = 3; row >= 0; row--) {
      newGrid[row][col] = mergedColumn[3 - row];
    }

    if (JSON.stringify(column) !== JSON.stringify(mergedColumn)) {
      hasMoved = true;
    }
  }

  if (hasMoved) {
    addRandomTile(newGrid);
  }

  return newGrid;
};
