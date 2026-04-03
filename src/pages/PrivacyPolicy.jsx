import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Link,
} from '@mui/material';

const sections = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'Welcome to AdharCardDownloads.com. We are committed to protecting your privacy and ensuring transparency in how we handle information.',
      'This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.',
      'By using this website, you agree to the terms outlined in this policy.',
    ],
  },
  {
    heading: '2. Website Nature & Disclaimer',
    paragraphs: [
      'AdharCardDownloads.com is an independent informational website that provides guides related to Aadhaar services.',
      'We are not affiliated, associated, or endorsed by UIDAI or any government authority.',
      'We do not provide official Aadhaar services or process any personal data related to Aadhaar.',
    ],
  },
  {
    heading: '3. Information We Collect',
    subSections: [
      {
        subHeading: '3.1 Non-Personal Information',
        intro: 'We automatically collect limited non-personal data such as:',
        bullets: [
          'Device type and browser',
          'IP address',
          'Pages visited',
          'Time spent on pages',
          'Referral sources',
        ],
        note: 'This data is used strictly for analytics and performance improvement.',
      },
      {
        subHeading: '3.2 Personal Information',
        intro: 'We only collect personal information if you voluntarily contact us:',
        bullets: ['Name (if provided)', 'Email address', 'Message content'],
      },
      {
        subHeading: '3.3 Sensitive Information',
        intro: 'We do NOT collect or store sensitive personal data, including:',
        bullets: [
          'Aadhaar numbers',
          'OTPs',
          'Banking details',
          'Passwords',
        ],
        note: 'Users must not share such information on this website.',
      },
    ],
  },
  {
    heading: '4. Legal Basis for Processing',
    intro: 'We process information based on:',
    bullets: [
      'Legitimate interest (website improvement and analytics)',
      'User consent (when submitting contact forms or accepting cookies)',
    ],
  },
  {
    heading: '5. How We Use Information',
    intro: 'We use collected data to:',
    bullets: [
      'Improve user experience',
      'Analyze website performance',
      'Respond to inquiries',
      'Maintain security',
      'Serve advertisements (if applicable)',
    ],
  },
  {
    heading: '6. Cookies Policy',
    intro: 'We use cookies to:',
    bullets: [
      'Enhance functionality',
      'Understand user behavior',
      'Store preferences',
    ],
    note: 'You can disable cookies in your browser settings.',
  },
  {
    heading: '7. Advertising & Google AdSense',
    paragraphs: [
      'We may display ads through Google AdSense.',
      'Google may use cookies to serve personalized ads based on your browsing behavior.',
    ],
    linkNote: {
      label: 'Users can opt out of personalized advertising by visiting:',
      href: 'https://www.google.com/settings/ads',
      text: 'https://www.google.com/settings/ads',
    },
  },
  {
    heading: '8. Third-Party Services',
    intro: 'We may use:',
    bullets: ['Google Analytics', 'Advertising partners'],
    note: 'These services may collect data according to their own privacy policies.',
  },
  {
    heading: '9. Data Retention',
    intro: 'We retain data only as long as necessary for:',
    bullets: [
      'Analytics purposes',
      'Responding to user queries',
      'Legal obligations',
    ],
    note: 'After that, data is deleted or anonymized.',
  },
  {
    heading: '10. Data Security',
    paragraphs: [
      'We implement reasonable security measures to protect data.',
      'However, no system is completely secure, and we cannot guarantee absolute protection.',
    ],
  },
  {
    heading: '11. Your Rights',
    intro: 'You have the right to:',
    bullets: [
      'Request access to your data',
      'Request correction or deletion',
      'Withdraw consent',
      'Opt-out of cookies and tracking',
    ],
    note: 'To exercise your rights, contact us via email.',
  },
  {
    heading: '12. Do Not Track Signals',
    paragraphs: [
      'Our website currently does not respond to "Do Not Track" browser signals.',
    ],
  },
  {
    heading: "13. Children's Privacy",
    paragraphs: [
      'We do not knowingly collect data from children under 13.',
      'If such data is found, it will be removed immediately.',
    ],
  },
  {
    heading: '14. No Data Selling',
    paragraphs: [
      'We do not sell, trade, or rent user data to third parties.',
    ],
  },
  {
    heading: '15. International Users',
    paragraphs: [
      'If you access this website from outside India, you agree to data processing in accordance with this policy.',
    ],
  },
  {
    heading: '16. Policy Updates',
    paragraphs: [
      'We may update this policy at any time.',
      'Changes will be posted on this page with an updated effective date.',
    ],
  },
  {
    heading: '17. Contact Information',
    paragraphs: [
      '📧 Email: support@adharcarddownloads.com',
    ],
  },
  {
    heading: '18. Final Disclaimer',
    paragraphs: [
      'This website is for informational purposes only.',
      'We are not affiliated with UIDAI or any government organization. Users should always verify information through official sources.',
    ],
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Adhar Card Downloads Guide & Data Protection';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Read the Privacy Policy of AdharCardDownloads.com to understand how we collect, use, and protect your data. We do not store Aadhaar details.'
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
            Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600, mx: 'auto' }}>
            Understand how AdharCardDownloads.com collects, uses, and protects your data.
          </Typography>
        </Box>

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

              {/* Direct paragraphs */}
              {section.paragraphs &&
                section.paragraphs.map((p, pi) => (
                  <Typography key={pi} variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    {p}
                  </Typography>
                ))}

              {/* Intro + bullets at section level */}
              {section.intro && (
                <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                  {section.intro}
                </Typography>
              )}
              {section.bullets && (
                <Box component="ul" sx={{ pl: 3, mt: 0.5, mb: 1 }}>
                  {section.bullets.map((b, bi) => (
                    <Typography key={bi} component="li" variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
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

              {/* Link note */}
              {section.linkNote && (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                  {section.linkNote.label}{' '}
                  <Link href={section.linkNote.href} target="_blank" rel="noopener noreferrer">
                    {section.linkNote.text}
                  </Link>
                </Typography>
              )}

              {/* Sub-sections (3.x) */}
              {section.subSections &&
                section.subSections.map((sub, si) => (
                  <Box key={si} sx={{ mt: 2, pl: 2, borderLeft: '3px solid', borderColor: 'primary.light' }}>
                    <Typography variant="subtitle1" fontWeight={700} color="primary.main" gutterBottom>
                      {sub.subHeading}
                    </Typography>
                    {sub.intro && (
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                        {sub.intro}
                      </Typography>
                    )}
                    {sub.bullets && (
                      <Box component="ul" sx={{ pl: 3, mt: 0.5, mb: 1 }}>
                        {sub.bullets.map((b, bi) => (
                          <Typography key={bi} component="li" variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                            {b}
                          </Typography>
                        ))}
                      </Box>
                    )}
                    {sub.note && (
                      <Typography variant="body2" fontWeight={600} color="text.primary">
                        {sub.note}
                      </Typography>
                    )}
                  </Box>
                ))}

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

export default PrivacyPolicy;
