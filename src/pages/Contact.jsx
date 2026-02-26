import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  MenuItem,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const subjects = [
  'Download Issue',
  'Update Aadhaar',
  'Verification Problem',
  'General Inquiry',
  'Technical Support',
  'Other',
];

const contactInfo = [
  { icon: <PhoneIcon color="primary" />, title: 'Phone', detail: '1800-300-1947 (Toll Free)', sub: 'Monday - Saturday, 8am - 8pm' },
  { icon: <EmailIcon color="primary" />, title: 'Email', detail: process.env.REACT_APP_CONTACT_EMAIL || 'help@example.com', sub: 'We respond within 24 hours' },
  { icon: <LocationOnIcon color="primary" />, title: 'Address', detail: 'New Delhi, India - 110001', sub: 'UIDAI Regional Office' },
  { icon: <AccessTimeIcon color="primary" />, title: 'Working Hours', detail: 'Mon - Sat: 8am - 8pm', sub: 'Sunday: Closed' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1565c0)', color: 'white', py: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>Contact Us</Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            We're here to help with any Aadhaar related queries
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>Send us a Message</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        required
                      >
                        {subjects.map((s) => (
                          <MenuItem key={s} value={s}>{s}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={5}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" size="large" startIcon={<SendIcon />} sx={{ px: 4 }}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={700} gutterBottom>Contact Information</Typography>
            <Grid container spacing={2}>
              {contactInfo.map((info, i) => (
                <Grid item xs={12} sm={6} md={12} key={i}>
                  <Card variant="outlined">
                    <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box sx={{ mt: 0.5 }}>{info.icon}</Box>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>{info.title}</Typography>
                        <Typography variant="body2">{info.detail}</Typography>
                        <Typography variant="caption" color="text.secondary">{info.sub}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={submitted} autoHideDuration={6000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" onClose={() => setSubmitted(false)} variant="filled">
          Thank you! Your message has been sent successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
