import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header.js';
import Search from './components/input.js';
import Footer from './components/footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div class="loader"></div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;


