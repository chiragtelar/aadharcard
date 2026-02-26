import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Divider,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';

const stats = [
  { value: '1.3B+', label: 'Aadhaar Holders', icon: <PeopleIcon /> },
  { value: '99%', label: 'Success Rate', icon: <StarIcon /> },
  { value: '24/7', label: 'Service Available', icon: <VerifiedUserIcon /> },
  { value: '10M+', label: 'Downloads Assisted', icon: <InfoIcon /> },
];

const About = () => {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1565c0)', color: 'white', py: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Your trusted guide for Aadhaar Card services
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
              What is Aadhaar Card?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Aadhaar is a 12-digit unique identification number issued by the Unique Identification
              Authority of India (UIDAI) to residents of India. It serves as a proof of identity
              and proof of address across the country.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              The Aadhaar card contains the individual's biometric and demographic data including
              photograph, fingerprints, and iris scans. It is used for various government services,
              banking, mobile connectivity, and other purposes.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our platform provides a comprehensive guide to help citizens easily access,
              download, and update their Aadhaar Card through the official UIDAI channels.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {stats.map((stat, i) => (
                <Grid item xs={6} key={i}>
                  <Paper sx={{ p: 3, textAlign: 'center' }} elevation={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 1 }}>
                      {stat.icon}
                    </Avatar>
                    <Typography variant="h4" fontWeight={700} color="primary">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" maxWidth={700} mx="auto" mb={6}>
          To provide accurate, up-to-date information and guidance to help every Indian citizen
          easily access and manage their Aadhaar Card services online.
        </Typography>

        <Grid container spacing={3}>
          {[
            { title: 'Accuracy', desc: 'We provide accurate and verified information about Aadhaar services.' },
            { title: 'Simplicity', desc: 'Complex processes simplified into easy-to-follow steps.' },
            { title: 'Privacy', desc: 'We respect your privacy and do not store any personal information.' },
            { title: 'Accessibility', desc: 'Available 24/7 to assist you with any Aadhaar related queries.' },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 1 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
