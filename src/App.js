import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from './views/Demo';
import './App.css'

function App() {
  // Function to clear complete cache data

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/demo/*" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;