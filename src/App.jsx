import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <aside className="sidebar glass-panel">
          {/* Quick links or secondary nav could go here */}
          <div className="sidebar-content">
            <h3 className="sidebar-title">
              Base Ecosystem
            </h3>
            <ul className="sidebar-nav">
              <li><NavLink to="/bridge" className="sidebar-link">
                <span className="dot dot-blue"></span>
                Bridge
              </NavLink></li>
              <li><NavLink to="/swap" className="sidebar-link">
                <span className="dot dot-cyan"></span>
                Swap
              </NavLink></li>
              <li><NavLink to="/nfts" className="sidebar-link">
                <span className="dot dot-purple"></span>
                NFTs
              </NavLink></li>
              <li><NavLink to="/earn" className="sidebar-link">
                <span className="dot dot-green"></span>
                Earn
              </NavLink></li>
            </ul>
          </div>
        </aside>
        
        <div className="dashboard-area">
          <Dashboard />
          <TransactionList />
        </div>
      </main>
    </div>
  );
}

export default App;
