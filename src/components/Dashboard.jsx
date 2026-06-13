import React from 'react';
import './Dashboard.css';

const StatCard = ({ title, value, change, isPositive }) => (
  <div className="stat-card glass-panel">
    <h3 className="stat-title">{title}</h3>
    <div className="stat-value">{value}</div>
    <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
      {isPositive ? '↑' : '↓'} {change}
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <h2 className="section-title">Network Overview</h2>
      <div className="stats-grid">
        <StatCard title="Total Value Locked" value="$1.24B" change="5.2%" isPositive={true} />
        <StatCard title="24h Volume" value="$342M" change="12.1%" isPositive={true} />
        <StatCard title="Active Wallets" value="142,593" change="2.4%" isPositive={false} />
        <StatCard title="Base Gas Price" value="0.001 Gwei" change="0.0%" isPositive={true} />
      </div>
      
      <div className="chart-placeholder glass-panel">
        <div className="chart-header">
          <h3>Network Activity</h3>
          <div className="chart-filters">
            <button className="active">1D</button>
            <button>1W</button>
            <button>1M</button>
          </div>
        </div>
        <div className="chart-body">
          {/* Mock visual for the chart */}
          <div className="mock-bar" style={{height: '40%'}}></div>
          <div className="mock-bar" style={{height: '60%'}}></div>
          <div className="mock-bar" style={{height: '45%'}}></div>
          <div className="mock-bar" style={{height: '80%'}}></div>
          <div className="mock-bar" style={{height: '65%'}}></div>
          <div className="mock-bar" style={{height: '90%'}}></div>
          <div className="mock-bar" style={{height: '100%', background: 'var(--accent-cyan)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// update 5
// update 13
// update 21
// update 29
// update 37
// update 45