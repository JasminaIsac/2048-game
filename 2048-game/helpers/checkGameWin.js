export const checkGameWin = (grid) => {
    for (let row of grid) {
      for (let cell of row) {
        if (cell === 2048) {
          return true;
        }
      }
    }
    return false;
  };
  