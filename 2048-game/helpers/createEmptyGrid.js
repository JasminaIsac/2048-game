export const createEmptyGrid = () => {
    return Array(4)
      .fill(null)
      .map(() => Array(4).fill(null));
  };
  