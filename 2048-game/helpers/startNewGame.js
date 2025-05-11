import { createEmptyGrid } from './createEmptyGrid';
import { getRandomEmptyCell } from './getRandomEmptyCell';

export const startNewGame = () => {
  const grid = createEmptyGrid();

  // Adaugăm două tile-uri random
  addRandomTile(grid);
  addRandomTile(grid);

  return grid;
};

export const addRandomTile = (grid) => {
  const emptyCells = getRandomEmptyCell(grid);

  if (emptyCells.length === 0) return;

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { row, col } = emptyCells[randomIndex];

  grid[row][col] = {
    value: Math.random() < 0.9 ? 2 : 4, // 90% șansă să fie 2
    isNew: true,
    isMerged: false,
  };
};
