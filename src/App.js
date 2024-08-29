import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ERC20Form from './pages/ERC20Form';
import ERC721Form from './pages/ERC721Form';



function App() {

  return (
    <div className="App">
      <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/generate-erc20" element={ <ERC20Form/> } />
      <Route path="/generate-erc721" element={ <ERC721Form/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
  </div>
  );
}

export default App;