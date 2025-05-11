import { addRandomTile } from '../helpers/startNewGame';

export const moveRight = (grid) => {
  let hasMoved = false;

  const newGrid = grid.map(row => {
    const reversedRow = [...row].reverse();
    const newRow = reversedRow.filter(cell => cell !== null);

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

    const finalRow = mergedRow.reverse();

    if (JSON.stringify(row) !== JSON.stringify(finalRow)) {
      hasMoved = true;
    }

    return finalRow;
  });

  if (hasMoved) {
    addRandomTile(newGrid);
  }

  return newGrid;
};
