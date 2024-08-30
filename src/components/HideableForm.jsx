import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Button from '@mui/material/Button';

const HideableForm = ({ form: Form }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Button
        variant="contained"
        onClick={() => setShow(!show)}
        sx={{
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
        }}
      >
        {show ? "Hide" : "Generate now!"}
      </Button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Form />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HideableForm;
