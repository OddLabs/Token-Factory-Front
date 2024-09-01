import React from 'react';
import { Box, Typography, Container } from '@mui/material';
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
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 3 }}
        >
          <Box
            component="img"
            src={erc721SupportingImage}
            alt="ERC-721 Supporting Image"
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
            Your ERC-721 Token
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
            ERC-721 is a standard for creating unique, non-fungible tokens (NFTs) on the Ethereum blockchain. Unlike fungible tokens like ERC20, each ERC-721 token is distinct and can represent ownership of a specific digital or physical asset.
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
            With our ERC-721 generator, you can easily create your own NFT by defining the necessary details such as name, symbol, and unique attributes. This tool is perfect for artists, developers, and businesses looking to tokenize digital art, collectibles, real estate, and more.
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
            Common use cases for ERC-721 tokens include:
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
            <li>Digital Art: Tokenize and sell unique pieces of art with verifiable ownership.</li>
            <li>Collectibles: Create and trade unique digital items, such as trading cards or virtual pets.</li>
            <li>Real Estate: Represent ownership of physical or virtual properties on the blockchain.</li>
            <li>Gaming Assets: Issue unique in-game items that players can own and trade.</li>
            <li>Identity and Certification: Issue tamper-proof certificates or identity tokens.</li>
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
            To get started, simply fill out the form below with the required information. Once you confirm the transaction, your NFT will be live on the Ethereum blockchain. If you have specific needs or custom requirements, feel free to contact us for a more tailored solution.
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
