import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const blogLinks = [
  {
    title: 'Adhar Card New Rules',
    path: '/blog/adhar-card-new-rules',
    content: 'Learn the latest Aadhaar rule changes, what they mean for residents, and how to stay compliant in daily usage.',
  },
  {
    title: 'Adhar Update Fees',
    path: '/blog/adhar-update-fees',
    content: 'Check current Aadhaar update fee details by update type, along with practical tips before visiting a center.',
  },
  {
    title: 'How Long Aadhaar Update Takes',
    path: '/blog/how-long-adhar-update-takes',
    content: 'Understand typical Aadhaar update processing timelines and how to track your request status online.',
  },
];

const Blogs = () => {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.100', minHeight: '70vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
          Blogs
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: 800 }}>
          Explore Aadhaar guides in a simple grid view. Each card shows title, quick summary, and route path with a direct button.
        </Typography>

        <Grid container spacing={3}>
          {blogLinks.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.path}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1.5, height: '100%' }}>
                  <Typography
                    component={RouterLink}
                    to={blog.path}
                    variant="h6"
                    fontWeight={700}
                    sx={{ textDecoration: 'none', color: 'text.primary' }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, flexGrow: 1 }}>
                    {blog.content}
                  </Typography>

                  <Button
                    component={RouterLink}
                    to={blog.path}
                    variant="contained"
                    size="small"
                    sx={{ alignSelf: 'flex-start', mt: 0.5, textTransform: 'none' }}
                  >
                    Open Blog
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
