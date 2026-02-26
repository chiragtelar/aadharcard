import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const faqs = [
  {
    category: 'Download',
    question: 'How can I download my Aadhaar Card online?',
    answer: 'You can download your Aadhaar Card from the official UIDAI website (myaadhaar.uidai.gov.in). Visit the site, click on "Download Aadhaar", enter your Aadhaar number or enrollment ID, complete captcha verification, enter the OTP sent to your registered mobile, and download the PDF.',
  },
  {
    category: 'Download',
    question: 'What is the password for the downloaded Aadhaar PDF?',
    answer: 'The downloaded Aadhaar PDF is password protected. The password is a combination of the first 4 letters of your name in capital letters and your birth year. For example, if your name is "Ramesh Kumar" born in 1990, the password would be "RAME1990".',
  },
  {
    category: 'Download',
    question: "What if I don't have my registered mobile number?",
    answer: "If your mobile number is not registered with Aadhaar or you don't have access to it, you can visit the nearest Aadhaar Seva Kendra or Enrolment Centre to update your mobile number. After updating, you can download your Aadhaar online.",
  },
  {
    category: 'General',
    question: 'What is Aadhaar Card?',
    answer: 'Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI). It serves as proof of identity and address for Indian residents and is used for various government services, banking, and other purposes.',
  },
  {
    category: 'General',
    question: 'Is Aadhaar mandatory?',
    answer: 'Aadhaar is mandatory for various government services and benefits, including PAN linking, income tax filing, filing for government subsidies, opening bank accounts, and getting mobile connections. The Supreme Court has upheld Aadhaar as constitutional with certain limitations.',
  },
  {
    category: 'Update',
    question: 'How can I update my Aadhaar details?',
    answer: 'You can update your Aadhaar details online through myaadhaar.uidai.gov.in for address updates. For other details like name, date of birth, or gender, you need to visit the nearest Aadhaar Enrolment Centre with supporting documents.',
  },
  {
    category: 'Update',
    question: 'How many times can I update my name in Aadhaar?',
    answer: 'You can update your name in Aadhaar only twice. Date of birth can be updated only once. Gender and photograph can also be updated with valid reasons and supporting documents.',
  },
  {
    category: 'Security',
    question: 'Is it safe to share my Aadhaar number?',
    answer: 'You should be careful about sharing your Aadhaar number. Use Masked Aadhaar (where first 8 digits are hidden) when sharing for verification. Never share your OTP with anyone. Use Virtual ID (VID) instead of actual Aadhaar number when possible.',
  },
  {
    category: 'Security',
    question: 'What is Virtual ID (VID)?',
    answer: 'Virtual ID (VID) is a 16-digit temporary, revocable number that can be used in place of the Aadhaar number. It provides an additional layer of security and privacy. You can generate a new VID anytime from the UIDAI website.',
  },
  {
    category: 'PVC Card',
    question: 'What is Aadhaar PVC Card and how to order it?',
    answer: 'Aadhaar PVC Card is a durable plastic card similar to a credit/debit card. It has a secure QR code, hologram, and is waterproof. You can order it from myaadhaar.uidai.gov.in for a nominal fee of ₹50 and it will be delivered to your registered address.',
  },
];

const categories = ['All', ...new Set(faqs.map(f => f.category))];

const FAQs = () => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filtered = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1565c0)', color: 'white', py: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>Frequently Asked Questions</Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
            Find answers to common questions about Aadhaar Card services
          </Typography>
          <TextField
            fullWidth
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ bgcolor: 'white', borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Category Filter */}
        <Grid container spacing={1} justifyContent="center" mb={4}>
          {categories.map((cat) => (
            <Grid item key={cat}>
              <Card
                onClick={() => setActiveCategory(cat)}
                sx={{
                  cursor: 'pointer',
                  bgcolor: activeCategory === cat ? 'primary.main' : 'background.paper',
                  color: activeCategory === cat ? 'white' : 'text.primary',
                  '&:hover': { bgcolor: activeCategory === cat ? 'primary.dark' : 'grey.100' },
                }}
              >
                <CardContent sx={{ py: '8px !important', px: 2 }}>
                  <Typography variant="body2" fontWeight={600}>{cat}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQs */}
        {filtered.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" mt={4}>
            No questions found matching your search.
          </Typography>
        ) : (
          filtered.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expanded === i}
              onChange={handleChange(i)}
              sx={{ mb: 1, '&:before': { display: 'none' }, borderRadius: '8px !important', overflow: 'hidden' }}
              elevation={1}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box>
                  <Typography variant="caption" color="primary" fontWeight={600} sx={{ display: 'block', mb: 0.5 }}>
                    {faq.category}
                  </Typography>
                  <Typography fontWeight={500}>{faq.question}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Container>
    </Box>
  );
};

export default FAQs;
