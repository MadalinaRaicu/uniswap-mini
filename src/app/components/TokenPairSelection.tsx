'use client';

interface TokenPairSelectionProps {
  selectedPair: string;
  onPairChange: (pair: string) => void;
}

const TokenPairSelection = ({
  selectedPair,
  onPairChange
}: TokenPairSelectionProps) => {
  return (
    <div className='mb-4'>
      <label
        className='block text-sm font-medium mb-2'
        htmlFor='pair'
      >
        Select Pair
      </label>
      <select
        id='pair'
        className='w-full p-3 border rounded bg-gray-700 border-gray-600 text-white'
        value={selectedPair}
        onChange={(e) => onPairChange(e.target.value)}
      >
        <option value='USDC-ETH'>USDC-ETH</option>
      </select>
    </div>
  );
};

export default TokenPairSelection;
