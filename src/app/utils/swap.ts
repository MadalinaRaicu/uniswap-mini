import { ethers } from 'ethers';

export const swapTokens = async (amount: string, pair: string): Promise<void> => {
    if (!window.ethereum) {
        throw new Error('No crypto wallet found. Please install it.');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48'; // Mainnet USDC address (use testnet address for testing)
    const ethAddress = ethers.constants.AddressZero;

    const uniswapV2RouterAddress = '0x7a250d5630B4cF539739df2C5dAcb4c659F2488D'; // Mainnet address

    const uniswapV2RouterABI = [
        'function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
        'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
    ];

    const contract = new ethers.Contract(uniswapV2RouterAddress, uniswapV2RouterABI, signer);

    const amountIn = ethers.utils.parseUnits(amount, 6); // Assuming USDC has 6 decimals

    const path: string[] = [usdcAddress, ethAddress];
    const amountsOut = await contract.getAmountsOut(amountIn, path);
    const amountOutMin = amountsOut[1].sub(amountsOut[1].div(10)); // Set slippage to 10%

    const tx = await contract.swapExactTokensForETH(
        amountIn,
        amountOutMin,
        path,
        await signer.getAddress(),
        Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
    );

    await tx.wait();
};
