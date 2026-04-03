import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Alert,
  Link,
} from '@mui/material';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';

const sections = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'This Cookie Policy explains how AdharCardDownloads.com uses cookies and similar technologies to recognize you when you visit our website.',
      'It explains what these technologies are, why we use them, and your rights to control their use.',
      'By continuing to use our website, you agree to the use of cookies as described in this policy.',
    ],
  },
  {
    heading: '2. What Are Cookies?',
    paragraphs: [
      'Cookies are small text files that are stored on your device (computer, mobile, or tablet) when you visit a website.',
      'They help websites function properly, improve user experience, and provide information to website owners.',
    ],
  },
  {
    heading: '3. How We Use Cookies',
    intro: 'We use cookies for several purposes, including:',
    bullets: [
      'To ensure the website functions correctly',
      'To understand how users interact with our website',
      'To improve website performance and usability',
      'To remember user preferences',
      'To deliver relevant advertisements (if applicable)',
    ],
  },
  {
    heading: '4. Types of Cookies We Use',
    subSections: [
      {
        subHeading: '4.1 Essential Cookies',
        paragraphs: [
          'These cookies are necessary for the website to function properly.',
          'Without them, certain features may not work.',
        ],
      },
      {
        subHeading: '4.2 Analytics Cookies',
        paragraphs: [
          'These cookies help us understand how visitors use the website.',
        ],
        note: 'Example: Google Analytics (tracks page visits, time spent, etc.)',
      },
      {
        subHeading: '4.3 Advertising Cookies',
        paragraphs: [
          'We may use advertising cookies to display relevant ads.',
        ],
        intro: 'These cookies may:',
        bullets: [
          'Track browsing behavior',
          'Show personalized ads',
          'Limit the number of times an ad is shown',
        ],
      },
      {
        subHeading: '4.4 Functionality Cookies',
        paragraphs: [
          'These cookies remember your preferences and improve your experience on the website.',
        ],
      },
    ],
  },
  {
    heading: '5. Third-Party Cookies',
    paragraphs: [
      'We may allow third-party services to place cookies on your device.',
    ],
    intro: 'These include:',
    bullets: [
      'Google Analytics',
      'Google AdSense',
    ],
    note: 'These third parties may use cookies according to their own privacy policies.',
  },
  {
    heading: '6. Google AdSense Cookies',
    paragraphs: [
      'We may use Google AdSense to display ads.',
    ],
    intro: 'Google uses cookies (such as the DoubleClick cookie) to:',
    bullets: [
      'Show ads based on your visits to this and other websites',
      'Provide personalized advertising',
    ],
    linkNote: {
      label: 'You can manage your ad preferences here:',
      href: 'https://www.google.com/settings/ads',
      text: 'https://www.google.com/settings/ads',
    },
  },
  {
    heading: '7. Managing Cookies',
    paragraphs: [
      'You have the right to control and manage cookies.',
    ],
    intro: 'You can:',
    bullets: [
      'Disable cookies in your browser settings',
      'Delete stored cookies',
      'Set your browser to notify you when cookies are used',
    ],
    note: 'Please note that disabling cookies may affect website functionality.',
  },
  {
    heading: '8. Consent to Use Cookies',
    paragraphs: [
      'When you visit our website, you consent to the use of cookies as outlined in this policy.',
      'You can withdraw your consent at any time by adjusting your browser settings.',
    ],
  },
  {
    heading: '9. Data Protection',
    paragraphs: [
      'Cookies do not typically contain personal identifiable information.',
    ],
    intro: 'We do not use cookies to collect sensitive data such as:',
    bullets: [
      'Aadhaar numbers',
      'OTPs',
      'Banking information',
    ],
  },
  {
    heading: '10. Updates to This Policy',
    paragraphs: [
      'We may update this Cookie Policy from time to time.',
      'Any changes will be posted on this page with an updated effective date.',
    ],
  },
  {
    heading: '11. Contact Information',
    paragraphs: [
      'If you have any questions about this Cookie Policy, you can contact us:',
      '📧 Email: support@adharcarddownloads.com',
    ],
  },
  {
    heading: '12. Final Statement',
    paragraphs: [
      'This website is an independent informational platform.',
      'We are not affiliated with UIDAI or any government authority, and cookies are used only to improve user experience and website performance.',
    ],
  },
];

const CookiePolicy = () => {
  useEffect(() => {
    document.title = 'Cookies Policy – How We Use Cookies | AdharCardDownloads';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn how Adhar Card Downloads uses cookies, analytics, and ads to improve your experience. We do not collect sensitive Aadhaar data.'
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
            <CookieOutlinedIcon sx={{ fontSize: 48, opacity: 0.9 }} />
          </Box>
          <Typography variant="h3" component="h1" fontWeight={800} gutterBottom>
            Cookie Policy
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600, mx: 'auto' }}>
            Learn how and why AdharCardDownloads.com uses cookies on this website.
          </Typography>
        </Box>

        {/* Info Banner */}
        <Alert severity="info" sx={{ mb: 4, borderRadius: 2, fontWeight: 500 }}>
          <strong>Note:</strong> We use cookies only to improve your browsing experience and website
          performance. We do <strong>not</strong> collect sensitive data such as Aadhaar numbers, OTPs,
          or banking details via cookies.
        </Alert>

        {/* Content Sections */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 5 }, mb: 4 }}>
          {sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Typography variant="h6" component="h2" fontWeight={700} color="primary.dark" gutterBottom>
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

              {section.linkNote && (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  {section.linkNote.label}{' '}
                  <Link href={section.linkNote.href} target="_blank" rel="noopener noreferrer">
                    {section.linkNote.text}
                  </Link>
                </Typography>
              )}

              {/* Sub-sections (4.x) */}
              {section.subSections &&
                section.subSections.map((sub, si) => (
                  <Box key={si} sx={{ mt: 2, pl: 2, borderLeft: '3px solid', borderColor: 'primary.light' }}>
                    <Typography variant="subtitle1" fontWeight={700} color="primary.main" gutterBottom>
                      {sub.subHeading}
                    </Typography>
                    {sub.paragraphs &&
                      sub.paragraphs.map((p, pi) => (
                        <Typography key={pi} variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                          {p}
                        </Typography>
                      ))}
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

export default CookiePolicy;
