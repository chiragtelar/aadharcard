import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const blogLinks = [
  { title: 'Adhar Card New Rules', path: '/blog/adhar-card-new-rules' },
  { title: 'Adhar Update Fees', path: '/blog/adhar-update-fees' },
  { title: 'How Long Aadhaar Update Takes', path: '/blog/how-long-adhar-update-takes' },
];

const Blogs = () => {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.100', minHeight: '70vh' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Blogs
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            Blog index is ready. Individual articles are currently marked as coming soon.
          </Typography>
          <List>
            {blogLinks.map((link) => (
              <ListItem key={link.path} component="a" href={link.path} sx={{ px: 0 }}>
                <ListItemText primary={link.title} secondary={link.path} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default Blogs;
