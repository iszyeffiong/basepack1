import React from 'react';
import WalletConnect from './WalletConnect';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header glass-panel">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <h1 className="logo-text">Base<span className="accent">Nexus</span></h1>
      </div>
      <div className="header-actions">
        <nav className="header-nav">
          <a href="#" className="nav-link active">Dashboard</a>
          <a href="#" className="nav-link">Explore</a>
          <a href="#" className="nav-link">Network</a>
        </nav>
        <WalletConnect />
      </div>
    </header>
  );
};

export default Header;

// update 6
// update 14
// update 22
// update 30