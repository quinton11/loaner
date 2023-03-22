import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { AuthPage } from './pages/auth';
import { HomePage } from './pages/home';
import { LoanPage } from './pages/loan/loan';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/user/loan/request" element={<LoanPage />} />
      </Routes>
    </div>
  );
}

export default App;
