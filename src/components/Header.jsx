import { NavLink } from 'react-router-dom';
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
          <NavLink to="/" className="nav-link" end>Dashboard</NavLink>
          <NavLink to="/explore" className="nav-link">Explore</NavLink>
          <NavLink to="/network" className="nav-link">Network</NavLink>
        </nav>
        <WalletConnect />
      </div>
    </header>
  );
};

export default Header;
