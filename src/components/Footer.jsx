import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', pt: 6, pb: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CreditCardIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" fontWeight={700}>
                Aadhaar Card Download
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Your trusted platform for Aadhaar Card download services. We provide easy and
              secure access to Aadhaar Card related services online.
            </Typography>
            <Box>
              <IconButton sx={{ color: 'white', p: 0.5 }} aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', p: 0.5 }} aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', p: 0.5 }} aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Quick Links
            </Typography>
            {[
              { label: 'Home', to: '/' },
              { label: 'Download Aadhaar', to: '/download' },
              { label: 'About Us', to: '/about' },
              { label: 'FAQs', to: '/faqs' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Terms of Service', to: '/terms' },
            ].map((link) => (
              <Box key={link.to} mb={0.5}>
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: 'white' }, textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20, opacity: 0.8, mt: 0.2 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                New Delhi, India - 110001
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20, opacity: 0.8 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                1800-300-1947 (Toll Free)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20, opacity: 0.8 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                help@aadharcard.example.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 3 }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Aadhaar Card Download. This is an informational website.
          Aadhaar is a registered trademark of UIDAI, Government of India.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
