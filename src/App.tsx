import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  HashRouter
} from "react-router-dom";
import './App.css';
import Main from './main';
import Portfolio from './portfolio';
import About from './about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
