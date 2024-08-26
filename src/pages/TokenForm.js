import React, { useState } from 'react';
import Web3 from 'web3';
import { tokenFactoryABI, tokenFactoryAddress } from '../config/TokenFactoryConfig';
import { FormControl, Box, FormHelperText, Input, InputLabel, Alert } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


function TokenForm() {
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

      const tokenFactoryContract = new web3.eth.Contract(tokenFactoryABI, tokenFactoryAddress);

      tokenFactoryContract.methods
        .createToken(tokenName, tokenSymbol, web3.utils.toWei(initialSupply, 'ether'))
        .send({ from: account, value: web3.utils.toWei('0.01', 'ether') })
        .on('transactionHash', function(hash) {
          setTransactionHash(hash);
          setMessage('Transaction sent, waiting for confirmation...');
          setMessageSeverity('info')
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
    <Box >
      <h1>Token Factory</h1>
      <form onSubmit={handleSubmit}>
      <div>
      <FormControl >
        <InputLabel htmlFor="tokenName">Token Name</InputLabel>
        <Input id="tokenName" aria-describedby="my-helper-text"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)} />
        <FormHelperText id="my-helper-text">Write token name here</FormHelperText>
      </FormControl>

      <FormControl >
        <InputLabel htmlFor="tokenSymbol">Token Symbol</InputLabel>
        <Input id="tokenSymbol" aria-describedby="my-helper-text"
                    value={tokenSymbol}
                    onChange={(e) => setTokenSymbol(e.target.value)} />
        <FormHelperText id="my-helper-text">Write token symbol here</FormHelperText>
      </FormControl>
      </div>
      <div>
      <FormControl >
        <InputLabel htmlFor="initialSupply">Initial Supply</InputLabel>
        <Input id="initialSupply" aria-describedby="my-helper-text"
                    value={initialSupply}
                    onChange={(e) => setInitialSupply(e.target.value)} />
        <FormHelperText id="my-helper-text">Write initial supply here</FormHelperText>
      </FormControl>
      </div>
      <div>
      <LoadingButton
          size="small"
          type="submit"
          loading={loading}
          variant="outlined"
          disabled={disabledButton}
        >
          <span>Create Token</span>
        </LoadingButton>
      </div>
      <div>
      {message && 
        <Alert variant='outlined' severity={messageSeverity}>
          {message}
          {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
          {contractAddress && <p>Token Contract Address: {contractAddress}</p>}
        </Alert>
      }
      </div>
      </form>
    </Box>
  );
}

export default TokenForm;
