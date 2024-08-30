import React from 'react';
import { Box, Typography, Container} from '@mui/material';
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
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            ERC20 is a standard for creating tokens on the Ethereum blockchain. It's used for a wide range of applications including ICOs, decentralized finance (DeFi), and more. Below, you can generate your own ERC20 token by filling out the form with the necessary details. Click the button to start the process.
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
