import { NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Network from './pages/Network';
import Bridge from './pages/Bridge';
import Swap from './pages/Swap';
import NFTs from './pages/NFTs';
import Earn from './pages/Earn';
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/network" element={<Network />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/earn" element={<Earn />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
