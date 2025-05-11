export const checkGameOver = (grid) => {
    // Verificăm dacă există celule goale
    for (let row of grid) {
      for (let cell of row) {
        if (cell === null) {
          return false;
        }
      }
    }
  
    // Verificăm dacă există mutări posibile
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const current = grid[row][col];
        if (
          (col < 3 && current === grid[row][col + 1]) ||
          (row < 3 && current === grid[row + 1][col])
        ) {
          return false;
        }
      }
    }
  
    return true; // Dacă nu există celule libere sau combinații
  };
  