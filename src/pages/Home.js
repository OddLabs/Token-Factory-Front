import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
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
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: 'Roboto, sans-serif', 
            fontSize: '1.2rem',
            mb: 4,
            color: '#ffffff', 
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum, eros sit amet fermentum auctor, neque arcu congue odio, non dictum ex nunc at dui. Sed ultricies, lorem a egestas consectetur, purus nisi commodo augue, a congue purus nisl nec dui. Curabitur laoreet ipsum sed magna dictum, ac ullamcorper lectus congue.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum, eros sit amet fermentum auctor.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                Curabitur laoreet ipsum sed magna dictum, ac ullamcorper lectus congue.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
