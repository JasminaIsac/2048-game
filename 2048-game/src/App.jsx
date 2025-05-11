import { useEffect, useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'
import GameBoard from './components/GameBoard';
import { generateInitialGrid } from '../helpers/generateInitialGrid';
import { moveGrid } from '../helpers/moveHelper';
import { checkGameWin } from '../helpers/checkGameWin';
import { checkGameOver } from '../helpers/checkGameOver';


function App() {
  const [grid, setGrid] = useState(generateInitialGrid());
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (checkGameWin(grid)) {
      setGameWon(true);
    } else if (checkGameOver(grid)) {
      setGameOver(true);
    }
  }, [grid]);
  

  const startNewGame = useCallback(() => {
    setGrid(generateInitialGrid());
    setGameOver(false);
    setGameWon(false);
  })

  const handleKeyDown = (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      const newGrid = moveGrid(grid, event.key);

      if (newGrid) {
        setGrid(newGrid);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [grid]);

  // function generateInitialGrid() {
  //   const grid = Array(4).fill(null).map(() => Array(4).fill(null));
    
  //   function addRandomTwo(grid) {
  //     const emptyCells = [];
  //     for (let row = 0; row < 4; row++) {
  //       for (let col = 0; col < 4; col++) {
  //         if (grid[row][col] === null) {
  //           emptyCells.push({ row, col });
  //         }
  //       }
  //     }
  //     if (emptyCells.length) {
  //       const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  //       grid[row][col] = 2;
  //     }
  //   }
    
  //   addRandomTwo(grid);
  //   addRandomTwo(grid);
    
  //   return grid;

  // }

  return (
    <>
    {gameOver && (
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-4xl font-bold z-50">
    <div>Game Over</div>
    <button
      className="mt-4 px-6 py-2 bg-white text-black rounded shadow"
      onClick={() => startNewGame()}
    >
      New Game
    </button>
  </div>
)}

{gameWon && (
  <div className="absolute inset-0 bg-yellow-500 bg-opacity-70 flex flex-col items-center justify-center text-white text-4xl font-bold z-50">
    <div>You Win!</div>
    <button
      className="mt-4 px-6 py-2 bg-white text-black rounded shadow"
      onClick={() => startNewGame()}
    >
      New Game
    </button>
  </div>
)}



      <div>
        <h1>2048 Game</h1>
        <GameBoard grid={grid} />
        <Button text="New Game" onClick={() => newGame()}/>
      </div>
    </>
  )
}

export default App
