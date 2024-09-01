import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import contractInteractionImage from '../images/contract-interactions.webp'; // Substitua pelo caminho correto da sua imagem

function ContractInteractions() {
  const callContractExample = `POST /api/evm/contract-call
{
  "jsonrpc": "2.0",
  "method": "eth_call",
  "params": [{
    "to": "0xContractAddress",
    "data": "0xMethodSignatureAndParameters"
  }, "latest"],
  "id": 1
}`;

  const sendTransactionExample = `POST /api/evm/send-transaction
{
  "jsonrpc": "2.0",
  "method": "eth_sendRawTransaction",
  "params": [
    "0xYourSignedTransactionData"
  ],
  "id": 1
}`;

  const estimateGasExample = `POST /api/evm/estimate-gas
{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [{
    "to": "0xContractAddress",
    "data": "0xMethodSignatureAndParameters"
  }],
  "id": 1
}`;

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
            src={contractInteractionImage}
            alt="Contract Interactions Image"
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
            Contract Interactions
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
            Interacting with smart contracts on the Ethereum blockchain can involve reading data, executing transactions, or estimating gas costs. Below are examples of how to perform these interactions using our API.
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
            Call a Smart Contract Function
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
            <SyntaxHighlighter language="json" style={dracula}>
              {callContractExample}
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
            Send a Signed Transaction
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
            <SyntaxHighlighter language="json" style={dracula}>
              {sendTransactionExample}
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
            Estimate Gas for a Transaction
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
            <SyntaxHighlighter language="json" style={dracula}>
              {estimateGasExample}
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
            Use these examples as a starting point for interacting with smart contracts through our API. Whether you need to call a function, send a transaction, or estimate gas, our API provides a straightforward interface to the Ethereum blockchain.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ContractInteractions;
