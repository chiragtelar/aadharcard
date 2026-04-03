import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Alert,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const sections = [
  {
    heading: 'Who We Are',
    paragraphs: [
      'AdharCardDownloads.com is an independent informational platform dedicated to simplifying Aadhaar-related processes for users across India.',
      'We are a team of digital researchers and content creators focused on making complex government procedures easier to understand for everyday users.',
    ],
  },
  {
    heading: 'Our Purpose',
    paragraphs: [
      'Many users find official Aadhaar processes confusing or difficult to follow. Our purpose is to provide clear, step-by-step, and easy-to-understand guidance so users can complete tasks without confusion.',
    ],
  },
  {
    heading: 'What We Do',
    intro: 'We create structured and simplified guides covering:',
    bullets: [
      'Downloading e-Aadhaar',
      'Accessing UIDAI services',
      'Aadhaar updates and status checks',
      'Mobile and OTP-based Aadhaar services',
      'Common Aadhaar-related issues and solutions',
    ],
    note: 'All content is designed to be beginner-friendly and accessible to all users.',
  },
  {
    heading: 'Our Mission',
    intro: 'Our mission is to become a trusted informational resource for Aadhaar-related guidance by providing:',
    bullets: [
      'Accurate and easy-to-follow content',
      'Regularly updated information',
      'Transparent and honest communication',
      'A safe, user-focused experience',
    ],
  },
  {
    heading: 'Our Expertise & Research Process',
    intro: 'We follow a structured content creation process:',
    bullets: [
      'Reviewing official UIDAI sources and guidelines',
      'Testing processes where possible',
      'Simplifying steps into user-friendly formats',
      'Regularly updating content based on changes',
    ],
    note: 'Our goal is to ensure that users receive reliable and practical guidance.',
  },
  {
    heading: 'Content Accuracy & Updates',
    paragraphs: [
      'We strive to keep all information accurate and up to date. However:',
    ],
    bullets: [
      'Government processes may change without notice',
      'Some information may become outdated over time',
    ],
    note: 'We regularly review and update our content to maintain accuracy.',
  },
  {
    heading: 'Important Disclaimer',
    paragraphs: [
      'AdharCardDownloads.com is not affiliated, associated, authorized, endorsed, or sponsored by UIDAI or any government authority.',
    ],
    bullets: [
      'We do not provide official services',
      'We do not process Aadhaar applications',
      'We do not collect Aadhaar numbers or sensitive data',
    ],
    note: 'Users must use official UIDAI platforms for any official services.',
    isDisclaimer: true,
  },
  {
    heading: 'Why Trust Us',
    isTrustSection: true,
    trustPoints: [
      'We do not collect sensitive data (Aadhaar, OTP, etc.)',
      'We provide clear, step-by-step guides',
      'We maintain transparency about non-affiliation',
      'We focus on user safety and awareness',
      'We simplify complex processes into easy formats',
    ],
  },
  {
    heading: 'Our Limitations',
    paragraphs: [
      'While we aim to provide helpful and accurate information:',
    ],
    bullets: [
      'We cannot guarantee 100% accuracy at all times',
      'We are not a replacement for official government sources',
    ],
    note: 'Users should always verify information through official platforms.',
  },
  {
    heading: 'User Responsibility',
    intro: 'By using this website, users agree to:',
    bullets: [
      'Verify information from official sources',
      'Avoid sharing sensitive personal data',
      'Use the website responsibly',
    ],
  },
  {
    heading: 'Privacy Commitment',
    paragraphs: [
      'We respect user privacy and do not collect sensitive personal information such as:',
    ],
    bullets: [
      'Aadhaar numbers',
      'OTPs',
      'Banking details',
    ],
    note: 'For more details, please review our Privacy Policy.',
  },
  {
    heading: 'Contact Us',
    paragraphs: [
      'If you have questions, suggestions, or feedback:',
      '📧 Email: support@adharcarddownloads.com',
    ],
  },
  {
    heading: 'Final Note',
    paragraphs: [
      'AdharCardDownloads.com is built to help users navigate Aadhaar-related processes easily and safely.',
      'For official services, always rely on the official UIDAI website.',
      'We are not affiliated with UIDAI or any government authority.',
    ],
  },
];

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | Simple Aadhaar Guides – AdharCardDownloads';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about AdharCardDownloads.com, an independent platform providing simple Aadhaar guides. Not affiliated with UIDAI or any government authority.'
      );
    }
  }, []);

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
            About Us
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600, mx: 'auto' }}>
            An independent platform providing simple, accurate Aadhaar guides for users across India.
          </Typography>
        </Box>

        {/* Disclaimer Banner */}
        <Alert
          severity="warning"
          icon={<InfoOutlinedIcon />}
          sx={{ mb: 4, borderRadius: 2, fontWeight: 500 }}
        >
          <strong>Important:</strong> AdharCardDownloads.com is NOT affiliated with UIDAI or any
          government authority. We provide informational guides only.
        </Alert>

        {/* Content Sections */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4 }}>
          {sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h2"
                fontWeight={700}
                color="primary.dark"
                gutterBottom
              >
                {section.heading}
              </Typography>

              {/* Trust section — green checkmarks */}
              {section.isTrustSection ? (
                <Box>
                  {section.trustPoints.map((point, pi) => (
                    <Box key={pi} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'success.main', mr: 1, mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body1" color="text.secondary">
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                <>
                  {section.paragraphs &&
                    section.paragraphs.map((p, pi) => (
                      <Typography key={pi} variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        {p}
                      </Typography>
                    ))}

                  {section.intro && (
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                      {section.intro}
                    </Typography>
                  )}

                  {section.bullets && (
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, mb: 1 }}>
                      {section.bullets.map((b, bi) => (
                        <Typography
                          key={bi}
                          component="li"
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {section.note && (
                    <Typography variant="body2" fontWeight={600} color="text.primary" sx={{ mt: 0.5 }}>
                      {section.note}
                    </Typography>
                  )}
                </>
              )}

              {idx < sections.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Paper>

        {/* Footer note */}
        <Box sx={{ textAlign: 'center', pb: 3 }}>
          <Typography variant="caption" color="text.disabled">
            AdharCardDownloads.com · Independent Aadhaar Information Platform
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
