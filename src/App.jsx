// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ERC20Page from './pages/ERC20';
import ERC721Page from './pages/ERC721';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundColor: '#f5f5f5',
        }}
      >
        <ResponsiveAppBar />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          bgcolor="#0a0f26"
          p={2}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erc20" element={<ERC20Page />} />
            <Route path="/erc721" element={<ERC721Page />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Box
          component="footer"
          sx={{
            padding: 2,
            textAlign: 'center',
            backgroundColor: '#0a0f26',
            color: '#ffffff',
          }}
        >
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
