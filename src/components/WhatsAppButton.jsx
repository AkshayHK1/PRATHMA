import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918128518102'; // Updated WhatsApp number
    const message = 'Hello, I would like to get more information about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <IconButton
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: '#25D366',
            color: 'white',
            width: '60px',
            height: '60px',
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 35 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton; 