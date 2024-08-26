import React, { useState } from 'react';
import Web3 from 'web3';
import { tokenFactoryABI, tokenFactoryAddress } from '../config/TokenFactoryConfig';

function TokenForm() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [initialSupply, setInitialSupply] = useState('');
  const [message, setMessage] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
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
        })
        .on('receipt', function(receipt) {
          const event = receipt.events.TokenCreated;
          if (event && event.returnValues) {
            setContractAddress(event.returnValues[1]);
            setMessage('Token created successfully!');
          } else {
            setMessage('Token created, but could not retrieve the contract address.');
          }
        })
        .on('error', function(error) {
          console.error(error);
          setMessage('Error creating token');
        });

      setTokenName('');
      setTokenSymbol('');
      setInitialSupply('');
    } catch (error) {
      console.error(error);
      setMessage('Error creating token');
    }
  };

  return (
    <div>
      <h2>Create Your Token</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tokenName">Token Name:</label>
          <input
            type="text"
            id="tokenName"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tokenSymbol">Token Symbol:</label>
          <input
            type="text"
            id="tokenSymbol"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="initialSupply">Initial Supply:</label>
          <input
            type="number"
            id="initialSupply"
            value={initialSupply}
            onChange={(e) => setInitialSupply(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Token</button>
      </form>
      {message && <p>{message}</p>}
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
      {contractAddress && <p>Contract Address: {contractAddress}</p>}
    </div>
  );
}

export default TokenForm;
