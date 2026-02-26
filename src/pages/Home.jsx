import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Paper,
  Avatar,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <DownloadIcon fontSize="large" />,
    title: 'Download Aadhaar',
    description: 'Download your Aadhaar Card in PDF format easily using your Aadhaar number or enrollment ID.',
    link: '/download',
    color: '#1565c0',
  },
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: 'Verify Aadhaar',
    description: 'Verify the authenticity of any Aadhaar Card online through UIDAI official portal.',
    link: '/download',
    color: '#2e7d32',
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: 'Update Aadhaar',
    description: 'Update your Aadhaar details like name, address, mobile number and other information.',
    link: '/download',
    color: '#e65100',
  },
  {
    icon: <HelpOutlineIcon fontSize="large" />,
    title: 'FAQs',
    description: 'Find answers to frequently asked questions about Aadhaar Card services.',
    link: '/faqs',
    color: '#6a1b9a',
  },
];

const steps = [
  { step: '1', title: 'Visit UIDAI Portal', desc: 'Go to the official UIDAI website or use our guided steps.' },
  { step: '2', title: 'Enter Details', desc: 'Enter your Aadhaar number or Enrollment ID.' },
  { step: '3', title: 'OTP Verification', desc: 'Verify your identity with OTP sent to your registered mobile.' },
  { step: '4', title: 'Download PDF', desc: 'Download your Aadhaar Card as a password-protected PDF.' },
];

const features = [
  { icon: <SpeedIcon />, title: 'Fast & Easy', desc: 'Quick process to download your Aadhaar Card' },
  { icon: <SecurityIcon />, title: 'Secure', desc: '100% secure and safe process' },
  { icon: <SupportAgentIcon />, title: '24/7 Support', desc: 'Round the clock customer support' },
  { icon: <VerifiedUserIcon />, title: 'Official Guide', desc: 'Accurate information and guidance' },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Chip label="Official Guide" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
          <Typography variant="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
            Aadhaar Card Download
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: 600, mx: 'auto' }}>
            Download your Aadhaar Card online easily and securely. Get step-by-step guidance
            for all Aadhaar related services.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/download"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              Download Now
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Bar */}
      <Box sx={{ bgcolor: 'secondary.main', py: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            {features.map((f, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  {f.icon}
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>{f.title}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>{f.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" mb={4}>
          Everything you need for Aadhaar Card services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 3 }}>
                  <Avatar sx={{ bgcolor: service.color, width: 60, height: 60, mx: 'auto', mb: 2 }}>
                    {service.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button component={Link} to={service.link} variant="outlined" size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Steps Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
            How to Download Aadhaar Card
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" mb={4}>
            Follow these simple steps to download your Aadhaar Card
          </Typography>
          <Grid container spacing={3}>
            {steps.map((step, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }} elevation={1}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50, mx: 'auto', mb: 2, fontSize: '1.25rem', fontWeight: 700 }}>
                    {step.step}
                  </Avatar>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={4}>
            <Button component={Link} to="/download" variant="contained" size="large" startIcon={<DownloadIcon />}>
              Start Download
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1976d2)', py: 8, textAlign: 'center', color: 'white' }}>
        <Container maxWidth="md">
          <ContactSupportIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Need Help?
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
            Our team is available to assist you with any Aadhaar related queries
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
