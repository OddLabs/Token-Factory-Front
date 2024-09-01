import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import aboutImage from '../images/about-image.webp'; // Substitua pelo caminho correto da sua imagem

function About() {
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
            src={aboutImage}
            alt="About Image"
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
            About OddLabs
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
            OddLabs is a forward-thinking organization dedicated to empowering creators and developers with cutting-edge blockchain tools. Our mission is to provide accessible and powerful solutions that enable the creation, management, and interaction with digital assets on the blockchain.
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
            From token generation to smart contract interactions, OddLabs is at the forefront of innovation in the decentralized world. We are committed to building tools that make the complexities of blockchain technology accessible to everyone.
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
            Our vision is to lead the Web3 revolution, bridging the gap between creativity and technology, and unlocking the potential of decentralized economies.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
