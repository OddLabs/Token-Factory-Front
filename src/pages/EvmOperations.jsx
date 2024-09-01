import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import evmImage from '../images/evm-operations.webp';

function EVMOperations() {
  const prepareTransactionJson = `GET /api/evm/prepare-transaction
{
  "from": "0xYourAddress",
  "to": "0xRecipientAddress",
  "value": "0x9184e72a", // Amount in wei
  "data": "0x", // Optional data for contract interaction
}`;

  const sendSignedTransactionJson = `POST /api/evm/send-transaction
{
  "jsonrpc": "2.0",
  "method": "eth_sendRawTransaction",
  "params": [
    "0xYourSignedTransactionData"
  ],
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
            src={evmImage}
            alt="EVM Operations Image"
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
            EVM Operations
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
            Ethereum Virtual Machine (EVM) operations enable direct interaction with smart contracts and the execution of transactions on the Ethereum blockchain. Our EVM Operations tool facilitates the creation, sending, and management of transactions in an intuitive and efficient manner.
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
            With EVM Operations, you can:
          </Typography>

          <Typography 
            component="ul" 
            variant="body1" 
            sx={{ 
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.2rem',
              color: '#ffffff',
              textAlign: 'left',
              paddingLeft: { xs: 2, sm: 3 },
              marginBottom: 4,
            }}
          >
            <li>Send transactions directly to smart contracts.</li>
            <li>Manage and monitor the state of your transactions.</li>
            <li>Interact with existing smart contracts on the blockchain.</li>
            <li>Retrieve detailed information about blocks and transactions.</li>
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
            Below are examples of how to prepare and send a signed transaction using the EVM API:
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
            Prepare Transaction
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
              {prepareTransactionJson}
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
            Send Signed Transaction
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
              {sendSignedTransactionJson}
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
            Use our interface to easily prepare and send your own signed EVM transactions. If you need assistance or have any questions, our team is here to help.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default EVMOperations;
