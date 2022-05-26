import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home';
import CreateEmployee from '../pages/CreateEmployee';

export default function App() {
  return (
    <Router>
      <div className="center">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-employee" element={<CreateEmployee />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
