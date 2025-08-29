import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnectButton from './WalletConnectButton';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Trade</Link>
        <Link to="/markets">Markets</Link>
        <Link to="/portfolio">Portfolio</Link>
        <WalletConnectButton />
      </nav>
    </header>
  );
};

export default Header;
