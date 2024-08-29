import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const GeneratorFormLoadingButton = ({ loading, disabled, onClick, children }) => {
  return (
    <LoadingButton
      fullWidth
      size="large"
      type="submit"
      loading={loading}
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={onClick}
      sx={{ 
        marginTop: 3, 
        fontFamily: 'Orbitron, sans-serif',
        bgcolor: '#00ff99',
        color: '#0a0f26',
        fontSize: { xs: '0.875rem', md: '1rem' },
        minHeight: 48,
        minWidth: 150,
        '&:hover': {
          bgcolor: '#00cc7a'
        },
        '&.Mui-disabled': {
          bgcolor: '#00ff99',  
          color: '#0a0f26',
          opacity: 0.5,
        },
        '& .MuiCircularProgress-root': {
          color: '#0a0f26'
        },
        '& .MuiLoadingButton-loadingIndicator': {
          color: '#0a0f26',
        },
        '& .MuiLoadingButton-loadingIndicatorCenter': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      }}
    >
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </span>
    </LoadingButton>
  );
};

export default GeneratorFormLoadingButton;
