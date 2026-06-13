import { useState } from 'react';
import './WalletConnect.css';

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [address, setAddress] = useState('');

  const generateRandomAddress = () => {
    const chars = '0123456789abcdef';
    let addr = '0x';
    for (let i = 0; i < 40; i++) addr += chars[Math.floor(Math.random() * chars.length)];
    return `${addr.substring(0, 5)}...${addr.substring(38)}`;
  };

  const handleConnect = () => {
    if (!isConnected) {
      setIsConnecting(true);
      setTimeout(() => {
        setAddress(generateRandomAddress());
        setIsConnected(true);
        setIsConnecting(false);
      }, 800);
    } else {
      setIsConnected(false);
      setAddress('');
    }
  };

  return (
    <div className="wallet-connect-container">
      <button 
        className={`btn-connect ${isConnected ? 'connected' : ''} ${isConnecting ? 'connecting' : ''}`}
        onClick={handleConnect}
        disabled={isConnecting}
      >
        {isConnecting ? (
          'Connecting...'
        ) : isConnected ? (
          <>
            <span className="status-dot"></span>
            {address}
          </>
        ) : (
          'Connect Wallet'
        )}
      </button>
    </div>
  );
};

export default WalletConnect;
