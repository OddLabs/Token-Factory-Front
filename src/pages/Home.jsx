import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import homeSupportingImage from '../images/home-supporting-image.webp';

function Home() {
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
            src={homeSupportingImage}
            alt="Odd Labs homeSupportingImage"
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
            Welcome to Odd Labs
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
            At Odd Labs, we empower creators and developers to bring their ideas to life on the blockchain. From ERC-20 tokens to NFTs, our tools make it simple to tokenize assets, build decentralized applications, and join the future of Web3.
          </Typography>
        </motion.div>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.04 }}
            >
              <Box
                sx={{
                  bgcolor: '#1a1a1a',
                  padding: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  boxShadow: '0 0 10px #00ff99',
                  textAlign: 'left',
                  mb: { xs: 2, sm: 0 }, 
                }}
              >
                <Typography variant="h5" sx={{ fontFamily: 'Orbitron, sans-serif', mb: 2, color: '#00ff99' }}>
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff' }}>
                  To provide accessible and powerful blockchain tools that enable anyone to create, manage, and scale their own digital assets with ease and security.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.04 }}
            >
              <Box
                sx={{
                  bgcolor: '#1a1a1a',
                  padding: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  boxShadow: '0 0 10px #00ff99',
                  textAlign: 'left',
                }}
              >
                <Typography variant="h5" sx={{ fontFamily: 'Orbitron, sans-serif', mb: 2, color: '#00ff99' }}>
                  Our Vision
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff' }}>
                  To be a leader in the Web3 revolution, offering tools that bridge the gap between creativity and technology, and unlocking the potential of decentralized economies.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
