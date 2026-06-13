import React, { useState } from 'react';
import './WalletConnect.css';

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    if (!isConnected) {
      // Mock connection
      setAddress('0x71C...97d1');
      setIsConnected(true);
    } else {
      setIsConnected(false);
      setAddress('');
    }
  };

  return (
    <div className="wallet-connect-container">
      <button 
        className={`btn-connect ${isConnected ? 'connected' : ''}`}
        onClick={handleConnect}
      >
        {isConnected ? (
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

// update 8
// update 16
// update 24
// update 32
// update 40