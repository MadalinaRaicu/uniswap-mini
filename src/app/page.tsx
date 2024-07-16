'use client';

import { useStore } from './store/useStore';
import SwapButton from './components/SwapButton';
import TokenAmountInput from './components/TokenAmountInput';
import TokenPairSelection from './components/TokenPairSelection';

const Home = () => {
  const { selectedPair, setSelectedPair } = useStore();

  return (
    <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
      <div className='p-6 bg-gray-800 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Uniswap V2 Swap</h1>
        <TokenPairSelection
          selectedPair={selectedPair}
          onPairChange={setSelectedPair}
        />
        <TokenAmountInput />
        <SwapButton />
      </div>
    </div>
  );
};

export default Home;
