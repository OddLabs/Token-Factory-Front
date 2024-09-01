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
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 3 }}
        >
          <Box
            component="img"
            src={erc20SupportingImage}
            alt="ERC-20 Supporting Image"
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
            Your ERC-20 Token
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
            Ready to create your own ERC-20 token on the Ethereum blockchain? Our easy-to-use generator allows you to define the name, symbol, and initial supply of your token. Once you fill out the form below and confirm the transaction, your custom ERC-20 token will be deployed on the blockchain, ready for you to use in your projects.
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
            The ERC-20 standard is widely used for creating fungible tokens, meaning that all tokens are identical and can be exchanged one-to-one. These tokens can be used in a variety of applications, including ICOs, DeFi projects, and more. With just a few clicks, you can have your own ERC-20 token live on the Ethereum blockchain.
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
