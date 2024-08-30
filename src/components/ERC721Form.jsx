import React, { useState } from 'react';
import Web3 from 'web3';
import { tokenFactoryERC721ABI, tokenFactoryERC721Address } from '../config/TokenFactoryERC721Config';
import { FormControl, Box, FormHelperText, Input, InputLabel, Alert, Typography, Paper } from '@mui/material';
import erc721FormSupportingImage from '../images/erc721-form-supporting-image.webp';
import '@fontsource/orbitron';
import GeneratorFormLoadingButton from '../components/GeneratorFormLoadingButton'
import TransactionAlert from '../components/TransactionAlert';
import { motion } from 'framer-motion';


function ERC721Form() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [message, setMessage] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  const [messageSeverity, setMessageSeverity] = useState('success');
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cleanFields = () => {
      setTokenName('');
      setTokenSymbol('');
    };

    try {
      setLoading(true);
      if (!window.ethereum) {
        setMessage('MetaMask not detected');
        setMessageSeverity('error');
        setLoading(false);
        return;
      }

      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      const tokenFactoryContract = new web3.eth.Contract(tokenFactoryERC721ABI, tokenFactoryERC721Address);

      const sendTransaction = tokenFactoryContract.methods
        .createToken(tokenName, tokenSymbol)
        .send({ from: account, value: web3.utils.toWei('1', 'wei') });

      sendTransaction.on('transactionHash', function(hash) {
        setTransactionHash(hash);
        setMessage('Transaction sent, waiting for confirmation...');
        setMessageSeverity('info');
      });

      const receipt = await sendTransaction;

      const event = receipt.events.TokenCreated;
      if (event && event.returnValues) {
        setContractAddress(event.returnValues[1]);
        setMessage('Token created successfully!');
        setMessageSeverity('success');
      } else {
        setMessage('Token created, but could not retrieve the contract address.');
        setMessageSeverity('warning');
      }
      setLoading(false);
      setDisabledButton(true);

    } catch (error) {
      console.error('Error during transaction:', error);
      setMessage('Error generating token');
      setMessageSeverity('error');
      setLoading(false);
      cleanFields();
    }
  };
  
  return (
    <Paper elevation={6} sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      width: { xs: '80%', md: '80%', sm: '80%' },
      padding: { xs: 2, md: 4 },
      borderRadius: 2,
      bgcolor: '#1a1a1a',
      boxShadow: '0 0 20px #00ff99',
    }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        width={{ xs: '100%', md: '55%' }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Orbitron, sans-serif',
            color: '#00ff99',
            textShadow: '0 0 10px #00ff99',
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
          gutterBottom
        >
          Create Your ERC-721 Token
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="tokenName" sx={{ fontFamily: 'Orbitron, sans-serif', color: '#00ff99', fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Token Name
            </InputLabel>
            <Input
              id="tokenName"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              sx={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#ffffff',
                bgcolor: '#0a0f26',
                borderRadius: 1,
                padding: '10px',
                '&::before': {
                  borderColor: '#00ff99'
                },
                '&::after': {
                  borderColor: '#00ff99'
                },
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            />
            <FormHelperText sx={{ fontFamily: 'Orbitron, sans-serif', color: '#ffffff', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              Write token name here
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="tokenSymbol" sx={{ fontFamily: 'Orbitron, sans-serif', color: '#00ff99', fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Token Symbol
            </InputLabel>
            <Input
              id="tokenSymbol"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              sx={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#ffffff',
                bgcolor: '#0a0f26',
                borderRadius: 1,
                padding: '10px',
                '&::before': {
                  borderColor: '#00ff99'
                },
                '&::after': {
                  borderColor: '#00ff99'
                },
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            />
            <FormHelperText sx={{ fontFamily: 'Orbitron, sans-serif', color: '#ffffff', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              Write token symbol here
            </FormHelperText>
          </FormControl>

          <GeneratorFormLoadingButton
            loading={loading}
            disabled={disabledButton}
            onClick={handleSubmit}
          >
            Create Token
          </GeneratorFormLoadingButton>

        </form>

        <Box sx={{ marginTop: 3, width: '100%' }}>
          {message && (
              <TransactionAlert 
                transactionHash={transactionHash} 
                contractAddress={contractAddress} 
                message={message} 
                severity={messageSeverity} 
              />
            )}
        </Box>
      </Box>

      <Box
        width={{ xs: '100%', md: '45%' }}
        display={{ xs: 'none', md: 'flex' }}
        justifyContent="center"
        alignItems="center"
        sx={{ marginLeft: { xs: 0, md: 3 }, marginTop: { xs: 3, md: 0 }, height: 'auto', padding: { xs: '10px', md: '20px 0' } }}
      >
        <img src={erc721FormSupportingImage} alt="Token Creation" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px', filter: 'drop-shadow(0 0 10px #00ff99)' }} />
      </Box>
    </Paper>
  );
}

export default ERC721Form;
