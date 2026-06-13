import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Dashboard.css';

const mockData = [
  { name: 'Mon', activity: 4000 },
  { name: 'Tue', activity: 3000 },
  { name: 'Wed', activity: 2000 },
  { name: 'Thu', activity: 2780 },
  { name: 'Fri', activity: 1890 },
  { name: 'Sat', activity: 2390 },
  { name: 'Sun', activity: 3490 },
];

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
        <div className="chart-body" style={{ height: '300px', width: '100%', marginTop: '1.5rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: 'rgba(255, 255, 255, 0.05)'}}
                contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-primary)' }} 
                itemStyle={{ color: 'var(--accent-cyan)' }}
              />
              <Bar dataKey="activity" radius={[4, 4, 0, 0]}>
                {mockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === mockData.length - 1 ? 'var(--accent-cyan)' : 'var(--base-blue)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
