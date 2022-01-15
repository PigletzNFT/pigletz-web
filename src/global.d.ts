/* eslint-disable @typescript-eslint/no-explicit-any */
declare type Maybe<T> = T | null | undefined;

interface Window {
    ethereum?: {
        isMetaMask?: true;
        request?: (...args: any[]) => Promise<void>;
    };
    BinanceChain?: {
        bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
    };
}
