import { useState, useEffect } from 'react';
import './TransactionList.css';

const initialTransactions = [
  { id: '0x1a2b...3c4d', type: 'Transfer', amount: '2.5 ETH', time: 'Just now', status: 'Success' },
  { id: '0x5e6f...7g8h', type: 'Mint', amount: '1 NFT', time: '1 min ago', status: 'Success' },
  { id: '0x9i0j...1k2l', type: 'Swap', amount: '150 USDC', time: '2 mins ago', status: 'Pending' },
  { id: '0x3m4n...5o6p', type: 'Approve', amount: '∞ DAI', time: '5 mins ago', status: 'Success' },
];

const generateRandomTx = () => {
  const types = ['Transfer', 'Mint', 'Swap', 'Approve'];
  const amounts = ['0.5 ETH', '1.2 ETH', '500 USDC', '1 NFT', '1000 BRETT', '∞ DAI'];
  const statuses = ['Success', 'Success', 'Success', 'Pending'];
  
  const chars = '0123456789abcdef';
  let addr = '0x';
  for (let i = 0; i < 8; i++) addr += chars[Math.floor(Math.random() * chars.length)];
  const id = `${addr.substring(0, 6)}...${addr.substring(6)}`;

  return {
    id,
    type: types[Math.floor(Math.random() * types.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    time: 'Just now',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  };
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prev => {
        const newTx = generateRandomTx();
        return [newTx, ...prev].slice(0, 8); // keep max 8 transactions
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tx-list-wrapper glass-panel">
      <div className="tx-list-header">
        <h2 className="section-title">Recent Transactions</h2>
        <button className="btn-view-all">View All</button>
      </div>
      <div className="tx-table-container">
        <table className="tx-table">
          <thead>
            <tr>
              <th>Tx Hash</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="tx-row">
                <td className="tx-hash">{tx.id}</td>
                <td><span className={`tx-type ${tx.type.toLowerCase()}`}>{tx.type}</span></td>
                <td className="tx-amount">{tx.amount}</td>
                <td className="tx-time">{tx.time}</td>
                <td>
                  <span className={`tx-status ${tx.status.toLowerCase()}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
