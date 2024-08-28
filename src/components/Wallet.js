import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/orbitron'; // Importando a fonte Orbitron

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
    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', overflow: 'hidden', maxWidth: { xs: '200px', md: 'none' } }}>
      <Typography 
        variant="body1" 
        sx={{ 
          fontFamily: 'Orbitron, sans-serif', 
          color: '#00ff99',  // Cor neon para o texto
          textShadow: '0 0 5px #00ff99',  // Efeito de sombra neon
          marginLeft: 2,
          textOverflow: 'ellipsis', // Trunca o texto apenas se necessário
          whiteSpace: 'nowrap', // Evita quebra de linha
          overflow: 'hidden', // Oculta o excesso de texto
        }}
      >
        Connected: {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Not Connected'}
      </Typography>
    </Box>
  );
}

export default Wallet;
