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
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', pt: 6, pb: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Col 1 — Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CreditCardIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" fontWeight={700}>
                Aadhaar Card Download
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Adhar Card Download provides simple, step-by-step guides to download your e-Aadhaar
              using official methods like UIDAI portal, OTP verification, and mAadhaar app. We are
              not affiliated with UIDAI or any government authority.
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

          {/* Col 2 — Quick Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Quick Links
            </Typography>
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about-us' },
              { label: 'Contact', to: '/contact-us' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Disclaimer', to: '/disclaimer' },
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

          {/* Col 3 — UIDAI Resources */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              UIDAI Resources
            </Typography>
            {[
              { label: 'UIDAI Official Website', href: 'https://uidai.gov.in' },
              { label: 'My Aadhaar Portal', href: 'https://myaadhaar.uidai.gov.in' },
              { label: 'mAadhaar App', href: 'https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus' },
            ].map((link) => (
              <Box key={link.href} mb={0.5} sx={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: 'white' }, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  {link.label}
                  <OpenInNewIcon sx={{ fontSize: 13, opacity: 0.7 }} />
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Col 4 — Contact */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20, opacity: 0.8 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                support@adharcarddownloads.com
              </Typography>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 3 }} />

        {/* Disclaimer */} 

        <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
          This is an independent informational website created to help users understand
          Aadhaar-related processes. We are not associated with UIDAI or any government body.© {new Date().getFullYear()} 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
