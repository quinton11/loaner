import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { AuthPage } from './pages/auth';
import { HomePage } from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
