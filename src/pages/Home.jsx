import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const seoTitle = 'Adhar Card Download Online – e Adhar PDF, Status Check, Update & PAN Link Guide';
const seoDescription =
  'Download your Adhar Card online instantly. Learn how to get e Adhar Card PDF, check Adhar status, update details, link PAN with Adhar, and find enrollment centers across India.';

const highlights = [
  'Download e Adhar Card PDF online',
  'Update Adhar card details',
  'Check Adhar application status',
  'Link PAN card with Adhar',
  'Book Adhar appointment online',
  'Locate Adhar enrollment centers',
];

const topServices = [
  {
    title: 'Download e Adhar Card',
    description: 'Get complete guidance to download your e Adhar card using Aadhaar number, enrollment ID, or VID.',
    href: '/by-number-mobile',
  },
  {
    title: 'Update Adhar Card Details',
    description: 'Learn address, document and correction flows with required steps and update essentials.',
    href: '/update',
  },
  {
    title: 'Check Adhar Card Status',
    description: 'Track enrollment and update requests quickly using status and application tracking tools.',
    href: '/status',
  },
];

const utilityLinks = [
  { label: 'Adhar Card PDF Password & Print', href: '/pdf-password-print' },
  { label: 'Adhar PAN Card Link', href: '/link/pan-card' },
  { label: 'Lost Aadhaar / Retrieve', href: '/status/lost-adhar' },
  { label: 'Application Status', href: '/application-status' },
  { label: 'Adhar Card New Rules', href: '/blog/adhar-card-new-rules' },
  { label: 'Adhar Update Fees', href: '/blog/adhar-update-fees' },
];

const featureBar = [
  { icon: <SpeedIcon />, title: 'Fast guidance', desc: 'Clear route-wise instructions' },
  { icon: <SecurityIcon />, title: 'Secure flow', desc: 'UIDAI-focused safe processes' },
  { icon: <SupportAgentIcon />, title: 'Useful support', desc: 'Practical troubleshooting tips' },
  { icon: <VerifiedUserIcon />, title: 'Comprehensive', desc: 'Download, update, status, linking' },
];

const Home = () => {
  useEffect(() => {
    document.title = seoTitle;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', seoDescription);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)',
          color: 'white',
          py: { xs: 8, md: 11 },
        }}
      >
        <Container maxWidth="lg">
          <Chip label="Adhar Services Guide" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
          <Typography
            component="h1"
            className="hero-title"
            variant="h2"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, maxWidth: 980 }}
          >
            Adhar Card Download Online – Complete Guide to e Adhar Card, Updates &amp; Status Check
          </Typography>
          <Typography className="intro-text" variant="h6" sx={{ opacity: 0.92, maxWidth: 980, mb: 2.5, lineHeight: 1.7 }}>
            The Adhar Card is one of the most widely used identity documents in India. Issued by UIDAI, it enables secure identity verification across government and private services.
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.92, maxWidth: 980, mb: 2, lineHeight: 1.7 }}>
            This website acts as a complete information hub for Adhar services, helping users with:
          </Typography>
          <Box component="ul" sx={{ pl: 3, maxWidth: 720, mb: 3.5 }}>
            {highlights.map((item) => (
              <Typography component="li" key={item} variant="body1" sx={{ lineHeight: 1.9 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button component="a" href="/by-number-mobile" variant="contained" color="secondary" startIcon={<DownloadIcon />}>
              Download e Adhar Card
            </Button>
            <Button
              component="a"
              href="/update"
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              Update Aadhaar
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'secondary.main', py: 2.5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {featureBar.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', color: 'white' }}>
                  {item.icon}
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography component="h2" variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          More Adhar Services
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.85 }}>
          If you need to download your Adhar Card or manage Adhar services, these route-wise guides will walk you through each process.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {topServices.map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                    {service.description}
                  </Typography>
                  <Button component="a" href={service.href} variant="text" sx={{ px: 0 }}>
                    {service.title}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography component="h2" variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Additional Quick Links
        </Typography>
        <Grid container spacing={2}>
          {utilityLinks.map((link) => (
            <Grid item xs={12} sm={6} md={4} key={link.href}>
              <Paper sx={{ p: 2.25, height: '100%' }}>
                <Typography variant="body1" fontWeight={600} sx={{ mb: 1.2 }}>
                  {link.label}
                </Typography>
                <Button component="a" href={link.href} variant="text" sx={{ px: 0 }}>
                  Open Guide
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1976d2)', py: 8, textAlign: 'center', color: 'white' }}>
        <Container maxWidth="md">
          <ContactSupportIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Need Help With Adhar Services?
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, lineHeight: 1.7 }}>
            Use this website as a complete information hub for downloads, updates, status checks, and linking guidance.
          </Typography>
          <Button component="a" href="/contact-us" variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5 }}>
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
