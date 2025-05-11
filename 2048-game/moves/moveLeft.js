import { addRandomTile } from '../helpers/startNewGame';

export const moveLeft = (grid) => {
  let hasMoved = false;

  const newGrid = grid.map(row => {
    const newRow = row.filter(cell => cell !== null); // eliminăm spațiile goale
    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] && newRow[i + 1] && newRow[i].value === newRow[i + 1].value) {
        newRow[i] = {
          value: newRow[i].value * 2,
          isNew: false,
          isMerged: true,
        };
        newRow[i + 1] = null;
        hasMoved = true;
      }
    }
    const mergedRow = newRow.filter(cell => cell !== null);
    while (mergedRow.length < 4) {
      mergedRow.push(null);
    }
    if (JSON.stringify(row) !== JSON.stringify(mergedRow)) {
      hasMoved = true;
    }
    return mergedRow;
  });

  if (hasMoved) {
    addRandomTile(newGrid);
  }

  return newGrid;
};
