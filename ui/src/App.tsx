import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { AuthPage } from './pages/auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
