import { addRandomTile } from './generateInitialGrid';

function compress(row) {
  // elimină null-urile și aduce numerele în stânga
  const newRow = row.filter(cell => cell !== null);
  while (newRow.length < 4) {
    newRow.push(null);
  }
  return newRow;
}

function merge(row) {
  for (let i = 0; i < 3; i++) {
    if (row[i] !== null && row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = null;
    }
  }
  return row;
}

function moveLeft(grid) {
  return grid.map(row => {
    row = compress(row);
    row = merge(row);
    row = compress(row);
    return row;
  });
}

function moveRight(grid) {
  return grid.map(row => {
    row = row.slice().reverse();
    row = compress(row);
    row = merge(row);
    row = compress(row);
    return row.reverse();
  });
}

function moveUp(grid) {
  let newGrid = rotateLeft(grid);
  newGrid = moveLeft(newGrid);
  newGrid = rotateRight(newGrid);
  return newGrid;
}

function moveDown(grid) {
  let newGrid = rotateLeft(grid);
  newGrid = moveRight(newGrid);
  newGrid = rotateRight(newGrid);
  return newGrid;
}

// Rotations to simulate up/down moves
function rotateLeft(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex])).reverse();
}

function rotateRight(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]).reverse());
}

export function moveGrid(grid, direction) {
  let newGrid;
  if (direction === 'ArrowLeft') {
    newGrid = moveLeft(grid);
  } else if (direction === 'ArrowRight') {
    newGrid = moveRight(grid);
  } else if (direction === 'ArrowUp') {
    newGrid = moveUp(grid);
  } else if (direction === 'ArrowDown') {
    newGrid = moveDown(grid);
  }

  if (JSON.stringify(grid) !== JSON.stringify(newGrid)) {
    return addRandomTile(newGrid);
  } else {
    return null;
  }
}
