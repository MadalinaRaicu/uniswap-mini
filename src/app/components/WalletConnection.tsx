'use client';

import { useEffect, useState } from 'react';

const WalletConnection = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });
    }
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setAccount(accounts[0]);
      } catch (err) {
        setError('Failed to connect wallet');
      }
    } else {
      setError('MetaMask is not installed');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return (
    <div className='mb-4'>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
          <button
            type='button'
            className='w-full p-3 bg-red-600 rounded hover:bg-red-700 text-white font-bold mt-2'
            onClick={disconnectWallet}
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          type='button'
          className='w-full p-3 bg-green-600 rounded hover:bg-green-700 text-white font-bold'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
      {error && <p className='mt-2 text-red-500'>{error}</p>}
    </div>
  );
};

export default WalletConnection;
