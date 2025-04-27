
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';

export const WalletConnector = () => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    setConnecting(true);
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setConnected(true);
        toast.success('Wallet connected successfully!');
      } else {
        toast.error('Please install MetaMask to connect your wallet');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to connect wallet');
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setWalletAddress('');
    toast.success('Wallet disconnected');
  };

  return (
    <div>
      {!connected ? (
        <Button 
          onClick={connectWallet}
          disabled={connecting}
          className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      ) : (
        <Button 
          onClick={disconnectWallet}
          variant="outline"
          className="border-blazze-border text-white hover:bg-blazze-border transition-colors rounded-full"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
        </Button>
      )}
    </div>
  );
};
