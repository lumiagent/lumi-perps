https://github.com/lumiagent/lumi-perps/new/main/src
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrderlyAppProvider } from '@orderly.network/react-app';

import Header from './components/Header';
import TradeScreen from './pages/TradeScreen';
import Markets from './pages/Markets';
import Portfolio from './pages/Portfolio';

function App() {
  const brokerId = import.meta.env.VITE_BROKER_ID;
  const networkId = import.meta.env.VITE_NETWORK_ID;

  return (
    <OrderlyAppProvider brokerId={brokerId} networkId={networkId}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TradeScreen />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </OrderlyAppProvider>
  );
}

export default App;
