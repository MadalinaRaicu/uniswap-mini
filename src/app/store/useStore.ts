import create from 'zustand';

interface StoreState {
    amount: string;
    setAmount: (amount: string) => void;
    selectedPair: string;
    setSelectedPair: (pair: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    amount: '',
    setAmount: (amount) => set({ amount }),
    selectedPair: 'USDC-ETH',
    setSelectedPair: (pair) => set({ selectedPair: pair }),
}));
