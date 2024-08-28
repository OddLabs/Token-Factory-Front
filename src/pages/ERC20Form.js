import React, { useState } from 'react';
import Web3 from 'web3';
import { tokenFactoryERC20ABI, tokenFactoryERC20Address } from '../config/TokenFactoryERC20Config';
import { FormControl, Box, FormHelperText, Input, InputLabel, Alert, Typography, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import erc20FormSupportingImage from '../images/erc20-form-supporting-image.webp';
import '@fontsource/orbitron';

function ERC20Form() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [initialSupply, setInitialSupply] = useState('');
  const [message, setMessage] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  const [messageSeverity, setMessageSeverity] = useState('success');
  const [loading, setLoading] = useState(false); 
  const [disabledButton, setDisabledButton] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      if (!window.ethereum) {
        setMessage('MetaMask not detected');
        return;
      }

      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      const tokenFactoryContract = new web3.eth.Contract(tokenFactoryERC20ABI, tokenFactoryERC20Address);

      tokenFactoryContract.methods
        .createToken(tokenName, tokenSymbol, web3.utils.toWei(initialSupply, 'ether'))
        .send({ from: account, value: web3.utils.toWei('0.01', 'ether') })
        .on('transactionHash', function(hash) {
          setTransactionHash(hash);
          setMessage('Transaction sent, waiting for confirmation...');
          setMessageSeverity('info');
        })
        .on('receipt', function(receipt) {
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
        })
        .on('error', function(error) {
          console.error(error);
          setMessage('Error creating token');
          setMessageSeverity('error');
          setLoading(false);
        });

        setDisabledButton(true);
    } catch (error) {
      console.error(error);
      setMessage('Error creating token');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#0a0f26"
      p={2}
    >
      <Paper elevation={6} sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },  
        width: { xs: '100%', md: '80%' },  
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
            Create Your ERC20 Token
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
            
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="initialSupply" sx={{ fontFamily: 'Orbitron, sans-serif', color: '#00ff99', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                Initial Supply
              </InputLabel>
              <Input
                id="initialSupply"
                value={initialSupply}
                onChange={(e) => setInitialSupply(e.target.value)}
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
                Write initial supply here
              </FormHelperText>
            </FormControl>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              loading={loading}
              variant="contained"
              color="primary"
              disabled={disabledButton}
              sx={{ 
                marginTop: 3, 
                fontFamily: 'Orbitron, sans-serif',
                bgcolor: '#00ff99',
                color: '#0a0f26',
                '&:hover': {
                  bgcolor: '#00cc7a'
                },
                fontSize: { xs: '0.875rem', md: '1rem' }  
              }}
            >
              <span>Create Token</span>
            </LoadingButton>
          </form>

          <Box sx={{ marginTop: 3, width: '100%' }}>
            {message && 
              <Alert 
                variant='filled' 
                severity={messageSeverity} 
                sx={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  bgcolor: messageSeverity === 'success' ? '#00ff99' : messageSeverity === 'error' ? '#ff4c4c' : '#ffaa00',
                  color: '#0a0f26',
                  fontSize: { xs: '0.75rem', md: '0.875rem' }  
                }}
              >
                {message}
                {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
                {contractAddress && <p>Token Contract Address: {contractAddress}</p>}
              </Alert>
            }
          </Box>
        </Box>

        <Box
          width={{ xs: '100%', md: '45%' }}  
          display={{ xs: 'none', md: 'flex' }} 
          justifyContent="center"
          alignItems="center"
          sx={{ marginLeft: { xs: 0, md: 3 }, marginTop: { xs: 3, md: 0 }, height: 'auto', padding: { xs: '10px', md: '20px 0' } }}
        >
          <img src={erc20FormSupportingImage} alt="Token Creation" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px', filter: 'drop-shadow(0 0 10px #00ff99)' }} />
        </Box>
      </Paper>
    </Box>
  );
}

export default ERC20Form;
