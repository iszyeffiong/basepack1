import React from 'react';
import './TransactionList.css';

const mockTransactions = [
  { id: '0x1a2b...3c4d', type: 'Transfer', amount: '2.5 ETH', time: '2 mins ago', status: 'Success' },
  { id: '0x5e6f...7g8h', type: 'Mint', amount: '1 NFT', time: '5 mins ago', status: 'Success' },
  { id: '0x9i0j...1k2l', type: 'Swap', amount: '150 USDC', time: '12 mins ago', status: 'Pending' },
  { id: '0x3m4n...5o6p', type: 'Approve', amount: '∞ DAI', time: '1 hr ago', status: 'Success' },
];

const TransactionList = () => {
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
            {mockTransactions.map((tx, idx) => (
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

// update 7
// update 15
// update 23
// update 31
// update 39