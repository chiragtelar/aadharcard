import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from '@mui/icons-material/Info';

const downloadSteps = [
  {
    label: 'Visit UIDAI Official Website',
    description: 'Go to the official UIDAI website at uidai.gov.in or myaadhaar.uidai.gov.in.',
  },
  {
    label: 'Select Download Aadhaar',
    description: 'Click on "Download Aadhaar" from the services menu on the UIDAI portal.',
  },
  {
    label: 'Enter Your Details',
    description: 'Enter your 12-digit Aadhaar number, or 16-digit Virtual ID, or 28-digit Enrollment ID.',
  },
  {
    label: 'Enter Captcha',
    description: 'Type the security code shown in the captcha image on the screen.',
  },
  {
    label: 'Request OTP',
    description: 'Click "Send OTP" to receive a One Time Password on your registered mobile number.',
  },
  {
    label: 'Verify OTP',
    description: 'Enter the OTP received on your registered mobile number within the time limit.',
  },
  {
    label: 'Download PDF',
    description: 'Your Aadhaar Card will be downloaded as a password-protected PDF file.',
  },
];

const downloadTypes = [
  {
    title: 'Regular Aadhaar',
    desc: 'Standard Aadhaar with full details including QR code',
    features: ['Full name and address', 'Date of Birth', 'Gender', 'Photograph', 'QR Code'],
    recommended: true,
  },
  {
    title: 'Masked Aadhaar',
    desc: 'Aadhaar with first 8 digits hidden for privacy',
    features: ['Last 4 digits visible', 'All other details', 'Enhanced privacy', 'QR Code'],
    recommended: false,
  },
  {
    title: 'PVC Card',
    desc: 'Physical plastic card for durability',
    features: ['Waterproof', 'Durable', 'Wallet friendly', 'Smart QR Code'],
    recommended: false,
  },
];

const Download = () => {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1565c0)', color: 'white', py: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Download Aadhaar Card
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
            Download your Aadhaar Card online in a few easy steps
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<OpenInNewIcon />}
            href="https://myaadhaar.uidai.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 4, py: 1.5 }}
          >
            Go to UIDAI Portal
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="info" sx={{ mb: 4 }} icon={<InfoIcon />}>
          <strong>Important:</strong> Always download your Aadhaar Card from the official UIDAI website
          (uidai.gov.in). Your registered mobile number is required to receive the OTP.
        </Alert>

        {/* Download Types */}
        <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
          Choose Your Download Type
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
          Select the type of Aadhaar download that suits your needs
        </Typography>
        <Grid container spacing={3} mb={6}>
          {downloadTypes.map((type, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ height: '100%', border: type.recommended ? '2px solid' : '1px solid', borderColor: type.recommended ? 'primary.main' : 'divider', position: 'relative' }}>
                {type.recommended && (
                  <Chip label="Recommended" color="primary" size="small" sx={{ position: 'absolute', top: 12, right: 12 }} />
                )}
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom color={type.recommended ? 'primary' : 'text.primary'}>
                    {type.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {type.desc}
                  </Typography>
                  <List dense>
                    {type.features.map((f, j) => (
                      <ListItem key={j} disableGutters>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={f} primaryTypographyProps={{ variant: 'body2' }} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant={type.recommended ? 'contained' : 'outlined'}
                    fullWidth
                    startIcon={<DownloadIcon />}
                    href="https://myaadhaar.uidai.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2 }}
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Step by Step Guide */}
        <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
          Step-by-Step Download Guide
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
          Follow these steps to download your Aadhaar Card
        </Typography>

        <Box maxWidth={700} mx="auto">
          <Stepper orientation="vertical">
            {downloadSteps.map((step, i) => (
              <Step key={i} active={true}>
                <StepLabel>
                  <Typography fontWeight={600}>{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box textAlign="center" mt={6}>
          <Typography variant="h6" gutterBottom>
            Ready to download your Aadhaar Card?
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            href="https://myaadhaar.uidai.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 4 }}
          >
            Download from UIDAI
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Download;
