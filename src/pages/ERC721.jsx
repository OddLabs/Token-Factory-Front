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
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            ERC721 is a standard for non-fungible tokens (NFTs) on the Ethereum blockchain. Unlike ERC20 tokens, which are interchangeable, each ERC721 token is unique and can represent individual ownership of digital or physical assets. This uniqueness makes ERC721 ideal for digital art, collectibles, real estate, and more.
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            ERC721 tokens are widely used in the growing NFT market, where they enable creators and collectors to tokenize and trade assets with verified ownership and provenance. Each token is stored on the blockchain with a unique identifier, ensuring that no two ERC721 tokens are the same.
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            Common use cases for ERC721 tokens include:
          </Typography>

          <Typography 
            component="ul" 
            variant="body1" 
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              color: '#ffffff',
              textAlign: 'left',
              paddingLeft: { xs: 2, sm: 3 },
              marginBottom: 4,
            }}
          >
            <li>Digital Art: Artists can tokenize their creations, providing verifiable ownership and enabling sales in online marketplaces.</li>
            <li>Collectibles: Trading cards, virtual pets, and other digital collectibles use ERC721 to maintain scarcity and value.</li>
            <li>Real Estate: Representing ownership of physical properties or virtual land in digital worlds.</li>
            <li>Gaming Assets: Unique in-game items, such as weapons or skins, that players can own, trade, and sell.</li>
            <li>Identity and Certification: Issuing certificates or identity documents that are verifiably unique and tamper-proof.</li>
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              mb: 4,
              color: '#ffffff',
            }}
          >
            With the ERC721 standard, you can easily create your own NFT by filling out the form below with the necessary details. Whether you're an artist, a developer, or a business, this tool allows you to enter the world of non-fungible tokens and start tokenizing unique assets today. Click the button below to begin the process.
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
