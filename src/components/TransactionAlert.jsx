import React from 'react';
import { Box, Alert, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const TransactionAlert = ({ transactionHash, contractAddress, message, severity }) => {

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const shortenHash = (hash) => {
    return `${hash.slice(0, 6)}...${hash.slice(-4)}`; // Mostra os 6 primeiros e 4 últimos caracteres
  };

  return (
    <Alert
      variant='filled'
      severity={severity}
      sx={{
        fontFamily: 'Orbitron, sans-serif',
        bgcolor: severity === 'success' ? '#00ff99' : severity === 'error' ? '#ff4c4c' : '#ffaa00',
        color: '#0a0f26',
        fontSize: { xs: '0.75rem', md: '0.875rem' }
      }}
    >
      {message}
      {transactionHash && (
        <Box display="flex" alignItems="center">
          <p>Transaction Hash: {shortenHash(transactionHash)}</p>
          <IconButton onClick={() => handleCopy(transactionHash)}>
            <ContentCopyIcon sx={{ color: '#ffffff' }} />
          </IconButton>
        </Box>
      )}
      {contractAddress && (
        <Box display="flex" alignItems="center">
          <p>Token Contract Address: {shortenHash(contractAddress)}</p>
          <IconButton onClick={() => handleCopy(contractAddress)}>
            <ContentCopyIcon sx={{ color: '#ffffff' }} />
          </IconButton>
        </Box>
      )}
    </Alert>
  );
};

export default TransactionAlert;
