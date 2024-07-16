
interface Window {
  ethereum: {
    send: (method: string, params?: unknown[]) => Promise<unknown>;
    request: (params: { method: string, params?: unknown[] }) => Promise<unknown>;
  };
}
