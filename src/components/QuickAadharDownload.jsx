import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Alert,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const QuickAadharDownload = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    if (error) setError('');
  };

  const handleSubmit = () => {
    if (!mobileNumber.trim()) {
      setError('Please enter your mobile number');
      return;
    }
    if (mobileNumber.length !== 10) {
      setError('Mobile number must be exactly 10 digits');
      return;
    }
    navigate(`/by-number-mobile?mobile=${mobileNumber}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const formatMobileDisplay = (num) => {
    if (num.length <= 5) return num;
    return `${num.slice(0, 5)} ${num.slice(5)}`;
  };

  return (
    <Box sx={{ bgcolor: 'linear-gradient(rgba(13, 71, 161, 0.08), rgba(25, 118, 210, 0.08))', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        {/*<Typography
          component="h2"
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ textAlign: 'center', mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}
        >
          Aadhar Card Download – Get E Aadhaar
        </Typography>
         <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4, lineHeight: 1.8 }}
        >
          Enter your mobile number below to quickly continue with e-Aadhaar download steps.
        </Typography> */}

        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            background: 'white',
          }}
        >
          <Typography
            component="label"
            variant="h6"
            fontWeight={700}
            gutterBottom
            sx={{ display: 'block', mb: 2 }}
          >
            Aadhar Card Download Online
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Enter 10-digit mobile number"
                value={formatMobileDisplay(mobileNumber)}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                variant="outlined"
                type="text"
                inputProps={{
                  inputMode: 'numeric',
                  maxLength: 11,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                  },
                }}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1 }}
              >
                Format: XXXXX XXXXX (10 digits)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                component="a"
                href="https://uidai.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                sx={{
                  py: 1.6,
                  fontWeight: 400,
                  fontSize: '1rem',
                  textTransform: 'none',
                }}
              >
                Download
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/status"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Check Aadhar Status
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                component={RouterLink}
                to="/update"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Update Aadhar Card
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                component="a"
                href="https://myaadhaar.uidai.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                My Aadhaar Portal
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                fullWidth
                variant="contained"
                color="info"
                component="a"
                href="https://uidai.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                UIDAI
              </Button>
            </Grid>
          </Grid>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {/* <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f7fa', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              <strong>💡 Tip:</strong> Your e-Aadhaar is a digitally signed document. You'll need the password (first 4 letters of your name in capitals + birth year) to open the PDF.
            </Typography>
          </Box> */}
        </Paper>
      </Container>
    </Box>
  );
};

export default QuickAadharDownload;
