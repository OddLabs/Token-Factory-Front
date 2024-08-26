import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Web3 from 'web3';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TokenForm from './pages/TokenForm';


function App() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User denied account access');
      }
    } else if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      console.error('No Ethereum provider detected');
    }
  };

  return (
    <div className="App">
      <h1>Odd Labs</h1>
      <p>Connected Account: {account}</p>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/create-token" element={ <TokenForm/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
  </div>
  );
}

export default App;