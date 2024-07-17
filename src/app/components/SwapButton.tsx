'use client';
import { useState } from 'react';
import { useStore } from '../store/useStore';
import { swapTokens } from '../utils/swap';

const SwapButton = () => {
  const { amount, selectedPair } = useStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSwap = async () => {
    setLoading(true);
    setError(null);

    try {
      await swapTokens(amount, selectedPair);
      alert('Swap successful!');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else setError('An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type='button'
        className='w-full p-3 bg-blue-600 rounded hover:bg-blue-700 text-white font-bold'
        onClick={handleSwap}
        disabled={loading}
      >
        {loading ? 'Swapping...' : 'Swap'}
      </button>
      {error && <p className='mt-2 text-red-500'>{error}</p>}
    </div>
  );
};

export default SwapButton;
