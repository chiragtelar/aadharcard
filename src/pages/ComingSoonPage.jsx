import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const ComingSoonPage = ({ title, description }) => {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.100', minHeight: '70vh' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {description || `${title} page is coming soon. Content will be added shortly.`}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ComingSoonPage;
