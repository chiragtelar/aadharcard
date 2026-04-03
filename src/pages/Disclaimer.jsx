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

const sections = [
  {
    heading: '1. General Information',
    paragraphs: [
      'All information on AdharCardDownloads.com is provided in good faith and for general informational and educational purposes only.',
      'The content is provided on an "as-is" basis, without any warranties of any kind, express or implied.',
      'We do not guarantee the completeness, reliability, or accuracy of the information.',
    ],
  },
  {
    heading: '2. No Government Affiliation',
    paragraphs: [
      'AdharCardDownloads.com is an independent website and is not affiliated, associated, authorized, endorsed, or sponsored by UIDAI (Unique Identification Authority of India) or any government authority.',
    ],
    bullets: [
      'We do not issue Aadhaar cards',
      'We do not process Aadhaar applications',
      'We do not provide official government services',
    ],
    note: 'Users must always use the official UIDAI website for official services.',
  },
  {
    heading: '3. No Professional or Legal Advice',
    paragraphs: [
      'The information on this website should not be considered as legal, financial, or official government advice.',
      'Users should independently verify all information before making decisions.',
    ],
  },
  {
    heading: '4. Accuracy & Errors',
    intro: 'While we strive to provide accurate and updated information:',
    bullets: [
      'Content may contain errors or omissions',
      'Information may become outdated without notice',
      'Government policies and procedures may change',
    ],
    note: 'We are not responsible for any inaccuracies.',
  },
  {
    heading: '5. User Responsibility',
    intro: 'By using this website, you agree that:',
    bullets: [
      'You are responsible for how you use the information',
      'You will verify details from official sources',
      'You will not rely solely on this website for official actions',
    ],
  },
  {
    heading: '6. Sensitive Information Warning',
    intro: 'We do NOT collect or request sensitive personal data, including:',
    bullets: [
      'Aadhaar number',
      'OTPs',
      'Bank details',
      'Passwords',
    ],
    note: 'Users must never share such information on this website.',
  },
  {
    heading: '7. External Links Disclaimer',
    paragraphs: [
      'Our website may contain links to third-party websites, including official UIDAI portals.',
    ],
    intro: 'We do not control or guarantee:',
    bullets: [
      'Content accuracy',
      'Privacy practices',
      'Security of third-party websites',
    ],
    note: 'Accessing external links is at your own risk.',
  },
  {
    heading: '8. Advertisements & Third-Party Content',
    paragraphs: [
      'We may display advertisements through services such as Google AdSense.',
    ],
    bullets: [
      'We do not control the content of advertisements',
      'We do not endorse advertised products or services',
      'Any interaction with third-party ads is at your own risk',
    ],
  },
  {
    heading: '9. Limitation of Liability',
    intro: 'Under no circumstances shall AdharCardDownloads.com be liable for:',
    bullets: [
      'Any direct or indirect loss or damage',
      'Errors or omissions in content',
      'Actions taken based on website information',
    ],
    note: 'Your use of the website is strictly at your own risk.',
  },
  {
    heading: '10. Website Availability',
    paragraphs: [
      'We do not guarantee that the website will always be available, uninterrupted, or error-free.',
      'We may modify, suspend, or discontinue any part of the website at any time without notice.',
    ],
  },
  {
    heading: '11. Intellectual Property & Content Use',
    paragraphs: [
      'All content on this website is the property of AdharCardDownloads.com unless otherwise stated.',
      'Unauthorized copying, reproduction, or redistribution is prohibited.',
    ],
  },
  {
    heading: '12. Governing Law',
    paragraphs: [
      'This Disclaimer shall be governed and interpreted in accordance with the laws of India.',
    ],
  },
  {
    heading: '13. Consent',
    paragraphs: [
      'By using this website, you agree to this Disclaimer and its terms.',
    ],
  },
  {
    heading: '14. Updates to This Disclaimer',
    paragraphs: [
      'We may update this Disclaimer at any time without prior notice.',
      'Continued use of the website after changes constitutes acceptance of the updated terms.',
    ],
  },
  {
    heading: '15. Contact Information',
    paragraphs: [
      '📧 Email: support@adharcarddownloads.com',
    ],
  },
  {
    heading: '16. Final Statement',
    paragraphs: [
      'This website is created for informational purposes only.',
      'We strongly advise users to rely on official UIDAI sources for any Aadhaar-related services.',
      'We are not affiliated with UIDAI or any government authority.',
    ],
  },
];

const Disclaimer = () => {
  useEffect(() => {
    document.title = 'Disclaimer | Adhar Card Downloads Information & Legal Notice';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Read the disclaimer of Adhar Card Downloads. We are not affiliated with UIDAI and provide Aadhaar-related information for guidance only.'
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
            Disclaimer
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600, mx: 'auto' }}>
            Please read this disclaimer carefully before using AdharCardDownloads.com.
          </Typography>
        </Box>

        {/* Important Alert Banner */}
        <Alert
          severity="warning"
          icon={<InfoOutlinedIcon />}
          sx={{ mb: 4, borderRadius: 2, fontWeight: 500 }}
        >
          <strong>Important:</strong> AdharCardDownloads.com is NOT an official government website. We are
          not affiliated with UIDAI or any government authority. For official Aadhaar services, visit{' '}
          <strong>uidai.gov.in</strong>.
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

              {idx < sections.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Paper>

        {/* Footer note */}
        <Box sx={{ textAlign: 'center', pb: 3 }}>
          <Typography variant="caption" color="text.disabled">
            Effective date: April 2026 · AdharCardDownloads.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Disclaimer;
