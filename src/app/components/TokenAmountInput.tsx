import { useStore } from '../store/useStore';

const TokenAmountInput = () => {
  const { amount, setAmount } = useStore();

  return (
    <div className='mb-4'>
      <label
        className='block text-sm font-medium mb-1'
        htmlFor='amount'
      >
        Amount
      </label>
      <input
        type='number'
        id='amount'
        className='w-full p-2 border rounded bg-gray-700 border-gray-600'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

export default TokenAmountInput;
