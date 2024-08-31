import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import HideableForm from '../components/HideableForm';
import ERC20Form from '../components/ERC20Form';
import erc20SupportingImage from '../images/erc20-supporting-image.webp';

function ERC20() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        bgcolor: '#0a0f26',
        color: '#00ff99',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: { xs: 2, sm: 4, md: 6 }
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 3 }}
        >
          <Box
            component="img"
            src={erc20SupportingImage}
            alt="ERC20 Supporting Image"
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
            Create Your ERC20 Token
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
              fontFamily: 'Orbitron, sans-serif',  // Usando Orbitron
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            The ERC20 standard is a widely adopted framework for creating fungible tokens on the Ethereum blockchain. Fungible tokens are assets that are interchangeable with each other, just like traditional currencies—each unit is identical in value and functionality to another. ERC20 tokens can represent virtually anything, from financial assets like stablecoins and stocks to utility tokens used within decentralized applications (DApps).
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',  // Usando Orbitron
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            ERC20 defines a common set of rules that all tokens must adhere to, ensuring seamless interaction between different tokens and smart contracts on the Ethereum network. These rules include how tokens are transferred between addresses, how users can access data about a token, and the total supply of tokens in existence. By adhering to these standards, developers can create tokens that integrate easily with existing wallets, exchanges, and other decentralized services.
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',  // Usando Orbitron
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            ERC20 tokens have many use cases, including:
          </Typography>

          <Typography 
            component="ul" 
            variant="body1" 
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',  // Usando Orbitron
              fontSize: '1.2rem',
              color: '#ffffff',
              textAlign: 'left',
              paddingLeft: { xs: 2, sm: 3 },
              marginBottom: 4,
            }}
          >
            <li>Initial Coin Offerings (ICOs): Raising capital by issuing tokens that investors can buy and sell.</li>
            <li>Decentralized Finance (DeFi): Representing assets, facilitating lending and borrowing, or providing liquidity in decentralized exchanges.</li>
            <li>Stablecoins: Tokens like USDT and DAI, pegged to stable assets like the US dollar, used to facilitate transactions with minimal volatility.</li>
            <li>Gaming and Virtual Goods: In-game currency that allows players to buy, sell, and trade virtual goods securely.</li>
            <li>Loyalty Programs and Rewards: Creating reward systems where customers can earn and redeem tokens for products or services.</li>
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',  // Usando Orbitron
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            With the ERC20 standard, launching your own token is straightforward. By filling out the form below with the necessary details, you can generate your own ERC20 token in just a few steps. Whether you're creating a new cryptocurrency, a reward token, or an in-game asset, this tool allows you to enter the world of decentralized finance with ease. Click the button below to begin the process.
          </Typography>
        </motion.div>

        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <HideableForm form={ERC20Form} />
        </Box>
      </Container>
    </Box>
  );
}

export default ERC20;
