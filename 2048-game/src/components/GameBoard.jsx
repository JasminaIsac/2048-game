import React from 'react';
import Tile from './Tile';

function GameBoard({ grid }) {
  return (
    <div className="relative w-[720px] h-[720px] bg-neutral-400 rounded-lg shadow-lg overflow-hidden">
      {/* Fundalul cu celulele goale */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 p-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="bg-neutral-300 rounded" />
        ))}
      </div>

      {/* Tile-urile mobile */}
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          cell !== null ? (
            <Tile
              key={`${rowIndex}-${colIndex}-${cell}`}
              value={cell}
              row={rowIndex}
              col={colIndex}
            />
          ) : null
        )
      )}
    </div>
  );
}

export default GameBoard;
