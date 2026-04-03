import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Fab
        color="primary"
        onClick={scrollToTop}
        sx={{
          boxShadow: 3,
          '&:hover': {
            boxShadow: 5,
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default ScrollToTopButton;
