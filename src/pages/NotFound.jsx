import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import notFoundImage from '../images/404.webp';

const NotFound = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        textAlign: 'center',
        bgcolor: '#0a0f26',  
        color: '#00ff99'    
      }}
    >
      <Box
        component="img"
        src={notFoundImage}
        alt="404 Not Found"
        sx={{ 
          maxWidth: '100%', 
          height: 'auto', 
          mb: 4,  // Espaçamento abaixo da imagem
          filter: 'drop-shadow(0 0 10px #00ff99)' // Sombra opcional para a imagem
        }}
      />
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron, sans-serif' }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
}

export default NotFound;
