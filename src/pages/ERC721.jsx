import React from 'react';
import { Box, Typography, Container} from '@mui/material';
import { motion } from 'framer-motion';
import HideableForm from '../components/HideableForm';
import ERC721Form from '../components/ERC721Form';
import erc721SupportingImage from '../images/erc721-supporting-image.webp';


function ERC721() {

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
            src={erc721SupportingImage}
            alt="ERC721 Supporting Image"
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
            Create Your ERC721 Token
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
            ERC721 is a standard for non-fungible tokens (NFTs) on the Ethereum blockchain. Unlike ERC20 tokens, which are interchangeable, each ERC721 token is unique and can represent individual ownership of digital or physical assets. This standard is widely used for digital art, collectibles, and more. Below, you can generate your own ERC721 token by filling out the form with the necessary details. Click the button to start the process.
          </Typography>
        </motion.div>

        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <HideableForm form={ERC721Form} />
        </Box>
      </Container>
    </Box>
  );
}

export default ERC721;
