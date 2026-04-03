import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Alert,
  TextField,
  Button,
  Grid,
  Snackbar,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const errs = {};
    if (!values.name.trim()) {
      errs.name = 'Name is required.';
    } else if (values.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }
    if (!values.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!values.subject.trim()) {
      errs.subject = 'Subject is required.';
    } else if (values.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }
    if (!values.message.trim()) {
      errs.message = 'Message is required.';
    } else if (values.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  useEffect(() => {
    document.title = 'Contact Us – AdharCardDownloads.com';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact AdharCardDownloads.com for queries, feedback, or support. We provide Aadhaar-related guidance and are not affiliated with UIDAI.'
      );
    }
  }, []);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (touched[e.target.name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
  };

  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="md">
        {/* Page Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)',
            borderRadius: 3,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            mb: 4,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h1" fontWeight={800} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600, mx: 'auto' }}>
            Have a question or feedback? We'd love to hear from you.
          </Typography>
        </Box>

        {/* Disclaimer Banner */}
        <Alert
          severity="warning"
          icon={<InfoOutlinedIcon />}
          sx={{ mb: 4, borderRadius: 2, fontWeight: 500 }}
        >
          <strong>Important:</strong> We are not affiliated with UIDAI or any government authority. For
          official Aadhaar services, please visit <strong>uidai.gov.in</strong>.
        </Alert>

        {/* Get in Touch */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 3 }}>
          <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            If you have any questions, suggestions, or need assistance related to the content on our
            website, feel free to contact us.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We are here to help and aim to respond as quickly as possible.
          </Typography>

          {/* Contact Info Cards */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: '#e8f0fe',
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <EmailOutlinedIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography variant="caption" color="text.secondary" fontWeight={600}>
                    EMAIL
                  </Typography>
                  <Typography variant="body2" fontWeight={700} color="primary.dark">
                    support@adharcarddownloads.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: '#e8f5e9',
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <AccessTimeIcon sx={{ color: 'success.main', mr: 2, fontSize: 28 }} />
                <Box>
                  <Typography variant="caption" color="text.secondary" fontWeight={600}>
                    RESPONSE TIME
                  </Typography>
                  <Typography variant="body2" fontWeight={700} color="success.dark">
                    Within 24–48 hours (working days)
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 4 }} />

          {/* Contact Form */}
          <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
            Send Us a Message
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  required
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  required
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.subject && errors.subject)}
                  helperText={touched.subject && errors.subject}
                  required
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.message && errors.message)}
                  helperText={touched.message && errors.message}
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Alert severity="info" sx={{ mb: 2, borderRadius: 2, fontSize: '0.8rem' }}>
                  Do <strong>not</strong> share sensitive information such as Aadhaar number, OTP, or
                  banking details in your message.
                </Alert>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{ borderRadius: 2, px: 4, textTransform: 'none', fontWeight: 700 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* How We Can Help */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 3 }}>
          <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
            How We Can Help
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
            You can contact us for:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mt: 0.5, mb: 0 }}>
            {[
              'Questions related to Aadhaar guides on our website',
              'Reporting incorrect or outdated information',
              'Suggestions to improve our content',
              'General feedback or queries',
            ].map((item, i) => (
              <Typography key={i} component="li" variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Paper>

        {/* Before Contacting Us */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 3 }}>
          <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
            Before Contacting Us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
            To help you get faster assistance:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mt: 0.5, mb: 0 }}>
            {[
              'Please check the relevant guide on our website first',
              'Make sure your query is clearly explained',
              'Do not share sensitive personal information such as Aadhaar number, OTP, or banking details',
            ].map((item, i) => (
              <Typography key={i} component="li" variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Paper>

        {/* Privacy Assurance */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 3 }}>
          <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
            Privacy Assurance
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            We respect your privacy.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Any information shared with us via email will only be used to respond to your query and
            will not be shared with third parties.
          </Typography>
        </Paper>

        {/* Final Note */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4 }}>
          <Typography variant="h6" fontWeight={700} color="primary.dark" gutterBottom>
            Final Note
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            We value your feedback and are continuously working to improve our content and user experience.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Thank you for visiting AdharCardDownloads.com.
          </Typography>
        </Paper>

        {/* Success Snackbar */}
        <Snackbar
          open={submitted}
          autoHideDuration={5000}
          onClose={() => setSubmitted(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setSubmitted(false)} severity="success" sx={{ width: '100%' }}>
            Thank you! Your message has been sent. We'll respond within 24–48 hours.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactUs;
