'use client';

import { useStore } from '../store/useStore';

const TokenAmountInput = () => {
  const { amount, setAmount } = useStore();

  return (
    <div className='mb-4'>
      <label
        className='block text-sm font-medium mb-2'
        htmlFor='amount'
      >
        Amount
      </label>
      <input
        type='number'
        id='amount'
        className='w-full p-3 border rounded bg-gray-700 border-gray-600 text-white'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Enter amount of USDC'
      />
    </div>
  );
};

export default TokenAmountInput;
