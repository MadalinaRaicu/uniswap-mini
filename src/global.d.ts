interface EthereumProvider {
  isMetaMask?: boolean;
  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>;
  on: (eventName: string, callback: (...args: unknown[]) => void) => void;
  removeListener: (eventName: string, callback: (...args: unknown[]) => void) => void;
}

interface Window {
  ethereum: EthereumProvider;
}
