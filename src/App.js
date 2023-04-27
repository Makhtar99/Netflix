import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/content/header.js';
import Search from './components/content/input.js';
import Footer from './components/content/footer.js';
import MovieDetails from './components/content/moviedetail.js';

function App() {
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;


