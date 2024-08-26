import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Box from '@mui/material/Box';


function Wallet() {
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
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        <p>Connected Account: {account}</p>
        
    </Box>
  );
}

export default Wallet;