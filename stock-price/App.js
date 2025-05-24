import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StockPage from './components/StockPage';
import CorrelationHeatmap from './components/CorrelationHeatmap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/stocks" replace />} />
        <Route path="/stocks" element={<StockPage />} />
        <Route path="/heatmap" element={<CorrelationHeatmap />} />
      </Routes>
    </Router>
  );
}

export default App;
