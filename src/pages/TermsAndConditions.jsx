import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Alert,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';

const sections = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'By accessing and using AdharCardDownloads.com, you agree to be bound by these Terms & Conditions.',
      'If you do not agree, you must discontinue use of the website immediately.',
    ],
  },
  {
    heading: '2. Nature of Website',
    paragraphs: [
      'AdharCardDownloads.com is an independent informational platform providing guides related to Aadhaar services.',
      'We are not affiliated, associated, authorized, endorsed, or sponsored by UIDAI or any government authority.',
      'We do not provide official services, process applications, or collect Aadhaar-related data.',
    ],
  },
  {
    heading: '3. No Warranty',
    intro: 'All content on this website is provided on an "as-is" and "as-available" basis, without any warranties of any kind. We make no guarantees regarding:',
    bullets: [
      'Accuracy',
      'Completeness',
      'Reliability',
      'Availability',
    ],
  },
  {
    heading: '4. User Responsibilities',
    intro: 'You agree that:',
    bullets: [
      'You will use the website lawfully',
      'You will verify all information from official sources',
      'You will not share sensitive data (Aadhaar, OTP, etc.)',
      'You are responsible for any actions taken based on website content',
    ],
  },
  {
    heading: '5. Prohibited Activities',
    intro: 'You must not:',
    bullets: [
      'Attempt unauthorized access to the website',
      'Scrape, copy, or extract data without permission',
      'Disrupt website functionality',
      'Impersonate the website or any authority',
      'Use the website for fraudulent or illegal purposes',
    ],
  },
  {
    heading: '6. Indemnification',
    intro: 'You agree to indemnify and hold harmless AdharCardDownloads.com from any claims, damages, or losses arising from:',
    bullets: [
      'Your misuse of the website',
      'Your violation of these Terms',
      'Your reliance on the information provided',
    ],
  },
  {
    heading: '7. Intellectual Property',
    paragraphs: [
      'All website content is owned by AdharCardDownloads.com unless stated otherwise.',
      'Unauthorized reproduction or use is strictly prohibited.',
    ],
  },
  {
    heading: '8. Third-Party Links',
    paragraphs: [
      'We are not responsible for third-party websites linked from our platform.',
      'Users access external links at their own risk.',
    ],
  },
  {
    heading: '9. Advertisements',
    paragraphs: [
      'We may display third-party advertisements.',
      'We do not control or endorse any advertised products or services.',
    ],
  },
  {
    heading: '10. Limitation of Liability',
    intro: 'We shall not be liable for any direct, indirect, or consequential damages arising from:',
    bullets: [
      'Website use',
      'Content errors',
      'User decisions',
    ],
  },
  {
    heading: '11. Website Availability',
    paragraphs: [
      'We do not guarantee uninterrupted access to the website.',
      'We may modify or discontinue services at any time without notice.',
    ],
  },
  {
    heading: '12. Termination',
    intro: 'We reserve the right to suspend or terminate access:',
    bullets: [
      'At our sole discretion',
      'Without prior notice',
      'For any violation of these Terms',
    ],
  },
  {
    heading: '13. User Content',
    intro: 'If users submit any content (e.g., messages or inquiries):',
    bullets: [
      'You grant us the right to use it for communication purposes',
      'You confirm it does not violate any laws',
    ],
  },
  {
    heading: '14. Entire Agreement',
    paragraphs: [
      'These Terms constitute the entire agreement between you and the website regarding use.',
    ],
  },
  {
    heading: '15. Severability',
    paragraphs: [
      'If any provision of these Terms is found invalid, the remaining provisions shall remain in effect.',
    ],
  },
  {
    heading: '16. Force Majeure',
    paragraphs: [
      'We are not liable for failure to perform due to events beyond our control, including technical failures, natural disasters, or network issues.',
    ],
  },
  {
    heading: '17. Governing Law',
    paragraphs: [
      'These Terms shall be governed by the laws of India.',
    ],
  },
  {
    heading: '18. Changes to Terms',
    paragraphs: [
      'We may update these Terms at any time.',
      'Continued use of the website indicates acceptance of updated terms.',
    ],
  },
  {
    heading: '19. Contact',
    paragraphs: [
      '📧 Email: support@adharcarddownloads.com',
    ],
  },
  {
    heading: '20. Final Statement',
    paragraphs: [
      'This website is for informational purposes only.',
      'We are not affiliated with UIDAI or any government authority.',
    ],
  },
];

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Adhar Card Downloads Usage Policy';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Read the Terms & Conditions of AdharCardDownloads.com. We provide Aadhaar-related guides and are not affiliated with UIDAI or any government authority.'
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
            <GavelIcon sx={{ fontSize: 48, opacity: 0.9 }} />
          </Box>
          <Typography variant="h3" component="h1" fontWeight={800} gutterBottom>
            Terms &amp; Conditions
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600, mx: 'auto' }}>
            Please read these terms carefully before using AdharCardDownloads.com.
          </Typography>
        </Box>

        {/* Important Alert Banner */}
        <Alert
          severity="info"
          sx={{ mb: 4, borderRadius: 2, fontWeight: 500 }}
        >
          <strong>Note:</strong> AdharCardDownloads.com is an independent informational website. We are{' '}
          <strong>not affiliated with UIDAI</strong> or any government organisation. By using this site,
          you agree to these Terms &amp; Conditions.
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

export default TermsAndConditions;
