import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import signedTransactionImage from '../images/signed-transactions.webp';

function SignedTransactions() {
  const sdkExample = `const { Wallet } = require('your-sdk');
const { ethers } = require('ethers');

async function signTransaction() {
  const wallet = new Wallet('YOUR_PRIVATE_KEY');
  const tx = {
    to: '0xRecipientAddress',
    value: ethers.utils.parseEther('0.01'),
    gasLimit: 21000,
    gasPrice: ethers.utils.parseUnits('50', 'gwei'),
    nonce: await wallet.getTransactionCount(),
  };

  const signedTx = await wallet.signTransaction(tx);
  console.log('Signed Transaction:', signedTx);
  return signedTx;
}

signTransaction();`;

  const ethersExample = `const { ethers } = require('ethers');

async function signTransaction() {
  const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY');
  const tx = {
    to: '0xRecipientAddress',
    value: ethers.utils.parseEther('0.01'),
    gasLimit: 21000,
    gasPrice: ethers.utils.parseUnits('50', 'gwei'),
    nonce: await wallet.getTransactionCount(),
  };

  const signedTx = await wallet.signTransaction(tx);
  console.log('Signed Transaction:', signedTx);
  return signedTx;
}

signTransaction();`;

  return (
    <Box 
      sx={{ 
        width: '100%',
        bgcolor: '#0a0f26',
        color: '#00ff99',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: { xs: 2, sm: 4, md: 6 },
        marginTop: { xs: 4, md: 8 }, 
        marginBottom: { xs: 4, md: 8 }, 
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 3 }}
        >
          <Box
            component="img"
            src={signedTransactionImage}
            alt="Signed Transactions Image"
            sx={{ 
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              mb: 4,
              filter: 'drop-shadow(0 0 10px #00ff99)',
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              mb: 4,
              letterSpacing: '.2rem',
              textTransform: 'uppercase',
              color: '#00ff99',
              textShadow: '0 0 10px #00ff99',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
          >
            Signed Transactions
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            Signed transactions are a crucial part of interacting with the Ethereum blockchain. By signing a transaction, you are authorizing the transfer of funds or execution of smart contract code using your private key.
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            Below are examples of how to sign a transaction using our SDK and a common third-party library, ethers.js:
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              mb: 2,
              letterSpacing: '.1rem',
              textTransform: 'uppercase',
              color: '#00ff99',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Using Our SDK
          </Typography>

          <Box
            sx={{
              backgroundColor: '#282a36', // Fundo escuro estilo Dracula
              color: '#f8f8f2',
              padding: 2,
              borderRadius: 2,
              overflowX: 'auto',
              textAlign: 'left',
              fontFamily: 'Roboto Mono, monospace',
              mb: 4,
            }}
          >
            <SyntaxHighlighter language="javascript" style={dracula}>
              {sdkExample}
            </SyntaxHighlighter>
          </Box>

          <Typography 
            variant="h6" 
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              mb: 2,
              letterSpacing: '.1rem',
              textTransform: 'uppercase',
              color: '#00ff99',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Using ethers.js
          </Typography>

          <Box
            sx={{
              backgroundColor: '#282a36', // Fundo escuro estilo Dracula
              color: '#f8f8f2',
              padding: 2,
              borderRadius: 2,
              overflowX: 'auto',
              textAlign: 'left',
              fontFamily: 'Roboto Mono, monospace',
              mb: 4,
            }}
          >
            <SyntaxHighlighter language="javascript" style={dracula}>
              {ethersExample}
            </SyntaxHighlighter>
          </Box>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            After signing the transaction, you can send it to the Ethereum network using our EVM API or another compatible service. Make sure to safely store your private key and only use it in secure environments.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default SignedTransactions;
