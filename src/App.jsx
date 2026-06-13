import React from 'react';
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
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              Base Ecosystem
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--base-blue)' }}></span>
                Bridge
              </a></li>
              <li><a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
                Swap
              </a></li>
              <li><a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9C27B0' }}></span>
                NFTs
              </a></li>
              <li><a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E676' }}></span>
                Earn
              </a></li>
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
