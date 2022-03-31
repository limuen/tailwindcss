import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Home /> */}
        <Route path="/about" element={<About />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
