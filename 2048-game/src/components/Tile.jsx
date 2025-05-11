import { motion } from 'framer-motion';

function Tile({ value, row, col }) {
  const tileColors = {
    2: 'bg-yellow-100 text-neutral-700',
    4: 'bg-yellow-200 text-neutral-700',
    8: 'bg-orange-300 text-white',
    16: 'bg-orange-400 text-white',
    32: 'bg-orange-500 text-white',
    64: 'bg-orange-600 text-white',
    128: 'bg-green-400 text-white',
    256: 'bg-green-500 text-white',
    512: 'bg-green-600 text-white',
    1024: 'bg-blue-500 text-white',
    2048: 'bg-purple-600 text-white',
  };

  const tileClass = tileColors[value] || 'bg-gray-800 text-white';

  const cellSize = 160;
  const gap = 16;
  const padding = 16;

  const x = padding + col * (cellSize + gap);
  const y = padding + row * (cellSize + gap);

  return (
    <motion.div
      className={`absolute w-[160px] h-[160px] flex items-center justify-center rounded text-3xl font-bold ${tileClass}`}
      initial={{ x, y }}
      animate={{ x, y }}
      transition={{
        duration: 1,   // Mai lent
        ease: "easeInOut"  // Curbează intrarea și ieșirea
      }}
    >
      {value}
    </motion.div>
  );
}

export default Tile;
