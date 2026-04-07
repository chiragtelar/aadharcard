import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShieldIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Link as RouterLink } from 'react-router-dom';
import QuickAadharDownload from '../components/QuickAadharDownload';

const seoTitle = 'Adhar Card Download Online – e Adhar PDF, Status Check, Update & PAN Link Guide';
const seoDescription =
  'Download your Adhar Card online instantly. Learn how to get e Adhar Card PDF, check Adhar status, update details, link PAN with Adhar, and find enrollment centers across India.';

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://adharcarddownloads.com/#organization', name: 'Adhar Card Downloads', url: 'https://adharcarddownloads.com/', logo: { '@type': 'ImageObject', url: 'https://adharcarddownloads.com/logo.png' }, sameAs: ['https://uidai.gov.in/'], contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@adharcarddownloads.com' } },
    { '@type': 'WebSite', '@id': 'https://adharcarddownloads.com/#website', url: 'https://adharcarddownloads.com/', name: 'Adhar Card Downloads', publisher: { '@id': 'https://adharcarddownloads.com/#organization' } },
    { '@type': 'WebPage', '@id': 'https://adharcarddownloads.com/#webpage', url: 'https://adharcarddownloads.com/', name: 'Adhar Card Download Online', isPartOf: { '@id': 'https://adharcarddownloads.com/#website' }, description: 'Complete guide to download Adhar card online, check Adhar status, update details, link PAN with Adhar, and find Adhar enrollment centers.', inLanguage: 'en-IN' },
    { '@type': 'FAQPage', '@id': 'https://adharcarddownloads.com/#faq', mainEntity: [{ '@type': 'Question', name: 'How can I download my Adhar card online?', acceptedAnswer: { '@type': 'Answer', text: 'You can download your Adhar card from the UIDAI website using your Aadhaar number, enrollment ID, or virtual ID.' } }, { '@type': 'Question', name: 'What is the password for Aadhaar PDF?', acceptedAnswer: { '@type': 'Answer', text: 'The password is the first four letters of your name in capital letters followed by your birth year.' } }, { '@type': 'Question', name: 'Is e Aadhaar valid as identity proof?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the e Aadhaar card is digitally signed by UIDAI and is legally valid across India.' } }] },
  ],
};

const featureBar = [
  { icon: <SpeedIcon />, title: 'Fast guidance', desc: 'Clear route-wise instructions' },
  { icon: <SecurityIcon />, title: 'Secure flow', desc: 'UIDAI-focused safe processes' },
  { icon: <SupportAgentIcon />, title: 'Useful support', desc: 'Practical troubleshooting tips' },
  { icon: <VerifiedUserIcon />, title: 'Comprehensive', desc: 'Download, update, status, linking' },
];

const heroHighlights = [
  'Download e Adhar Card PDF online',
  'Update Adhar card details',
  'Check Adhar application status',
  'Link PAN card with Adhar',
  'Book Adhar appointment online',
  'Locate Adhar enrollment centers',
  'Download official Adhar forms',
];

const faqs = [
  { q: 'Is e Adhar valid everywhere?', a: 'Yes. The e Adhar card is digitally signed and legally valid.' },
  { q: 'Can I download Adhar without a registered mobile number?', a: 'No. A registered mobile number is required for OTP verification.' },
  { q: 'How long does Adhar update take?', a: 'Most updates take 7 to 30 days depending on the request type.' },
  { q: 'Can I update Adhar online?', a: 'Certain updates such as address change can be done online.' },
];

// Reusable section heading
const SectionHeading = ({ children, component = 'h2', variant = 'h4' }) => (
  <Typography component={component} variant={variant} fontWeight={700} gutterBottom sx={{ mt: 5, mb: 1.5 }}>
    {children}
  </Typography>
);

const SubHeading = ({ children }) => (
  <Typography component="h3" variant="h6" fontWeight={700} gutterBottom sx={{ mt: 3 }}>
    {children}
  </Typography>
);

const BodyText = ({ children, sx = {} }) => (
  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 1, ...sx }}>
    {children}
  </Typography>
);

const BulletList = ({ items }) => (
  <Box component="ul" sx={{ pl: 3, mt: 0.5, mb: 1.5 }}>
    {items.map((item, i) => (
      <Typography key={i} component="li" variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 0.5 }}>
        {item}
      </Typography>
    ))}
  </Box>
);

const GuideLink = ({ to, children }) => (
  <Button component={RouterLink} to={to} variant="outlined" size="small" sx={{ mt: 1, mb: 2, textTransform: 'none', borderRadius: 2 }}>
    {children}
  </Button>
);

const Home = () => {
  useEffect(() => {
    document.title = seoTitle;
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) { descTag = document.createElement('meta'); descTag.setAttribute('name', 'description'); document.head.appendChild(descTag); }
    descTag.setAttribute('content', seoDescription);

    // Inject JSON-LD schema
    const existing = document.getElementById('home-schema');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'home-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => { const s = document.getElementById('home-schema'); if (s) s.remove(); };
  }, []);

  return (
    <Box>
      {/* ── Hero ── */}
      <Box sx={{ py: { xs: 4, md: 5 }, px: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', color: 'white', py: { xs: 6, md: 9 }, px: { xs: 3, md: 6 }, borderRadius: { xs: 3, md: 4 }, maxWidth: '1280px', width: '100%' }}>
          <Container maxWidth="lg">
          {/* <Chip label="Adhar Services Guide" color="secondary" sx={{ mb: 2, fontWeight: 600 }} /> */}
          <Typography component="h1" className="hero-title" variant="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.8rem' }, maxWidth: 980, mb: 2 }}>
            Adhar Card Download Online – Complete Guide to e Adhar Card, Updates &amp; Status Check
          </Typography>

          {/* Quick Download Form - Top Priority */}
          <QuickAadharDownload />

          <Typography className="intro-text" variant="body1" sx={{ opacity: 0.92, maxWidth: 960, mb: 1.5, lineHeight: 1.8, fontSize: '1rem', mt: 2 }}>
            The Adhar Card is one of the most widely used identity documents in India. Issued by UIDAI, the Adhar system assigns a unique 12-digit identification number to residents.
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 960, mb: 2, lineHeight: 1.8, fontSize: '1rem' }}>
            This website acts as a complete information hub for Adhar services, helping users understand how to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, maxWidth: 720, mb: 3 }}>
            {heroHighlights.slice(0, 5).map((item) => (
              <Typography component="li" key={item} variant="body1" sx={{ lineHeight: 1.9, opacity: 0.93, mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>  
        </Container>
      </Box>
      </Box>

      {/* ── Feature Bar ── */}
      <Box sx={{ bgcolor: 'secondary.main', py: 2.5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {featureBar.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', color: 'white' }}>
                  {item.icon}
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>{item.title}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Main Content ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>

        {/* More Adhar Services cards */}
        <SectionHeading>More Adhar Services</SectionHeading>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {[
            { title: 'Download e Adhar Card', desc: 'Get complete guidance to download your e Adhar card using Aadhaar number, enrollment ID, or VID.', to: '/by-number-mobile', icon: <DownloadIcon />, bgColor: '#E3F2FD' },
            { title: 'Update Adhar Card Details', desc: 'Learn address, document and correction flows with required steps and update essentials.', to: '/update', icon: <EditIcon />, bgColor: '#FFE8D6' },
            { title: 'Check Adhar Card Status', desc: 'Track enrollment and update requests quickly using status and application tracking tools.', to: '/status', icon: <TimelineIcon />, bgColor: '#F3E5F5' },
          ].map((s) => (
            <Grid item xs={12} md={4} key={s.title}>
              <Card sx={{ 
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                  border: '2px solid #1976d2'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ 
                      width: 58, 
                      height: 58, 
                      borderRadius: '50%', 
                      bgcolor: s.bgColor, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      mb: 1.5, 
                      color: 'primary.main', 
                      fontSize: 32,
                      border: '2px solid #1976d2',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}>{s.icon}</Box>
                    <Typography variant="h6" fontWeight={700}>{s.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>{s.desc}</Typography>
                  <Button component={RouterLink} to={s.to} variant="text" sx={{ px: 0, textTransform: 'none' }}>{s.title} →</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider />

        {/* What is Adhar Card */}
        <SectionHeading>What is an Adhar Card?</SectionHeading>
        <Box
          sx={{
            width: '100%',
            mx: 'auto',
            mb: 2.5,
            p: 1,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            boxShadow: 2,
          }}
        >
          <Box
            component="img"
            src="/images/what-is-an-adhar-card.png"
            alt="What is an Adhar Card"
            sx={{
              width: '100%',
              height: '100%',
              minHeight: { xs: 260, sm: 360, md: 460 },
              objectFit: 'fill',
              display: 'block',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          />
        </Box>
        <BodyText>The Adhar Card is a digital identity system developed by the Government of India to provide a unique identification number to every resident.</BodyText>
        <BodyText>The program is managed by the Unique Identification Authority of India (UIDAI), which operates under the Ministry of Electronics and Information Technology.</BodyText>
        <BodyText>Each Adhar number is unique and linked with biometric information such as:</BodyText>
        <BulletList items={['Fingerprints', 'Iris scans', 'Photograph']} />
        <BodyText>Along with biometric data, the card also stores demographic information including:</BodyText>
        <BulletList items={['Full name', 'Date of birth', 'Gender', 'Address', 'Mobile number']} />
        <BodyText>The goal of the Adhar system is to create a secure and universal identity platform that can be used across India.</BodyText>
        <BodyText>More information about UIDAI can be found on the official portal: <a href="https://uidai.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>https://uidai.gov.in/</a></BodyText>

        <Divider />

        {/* Why Important */}
        <SectionHeading>Why Adhar Card is Important in India</SectionHeading>
        <BodyText>Today, the Adhar card is used for many essential services. It plays a major role in India's digital infrastructure and is widely used for identity verification.</BodyText>

        <SubHeading>Government Welfare Programs</SubHeading>
        <BodyText>Many government schemes require Adhar authentication to ensure benefits reach the correct individuals. Examples include:</BodyText>
        <BulletList items={['LPG subsidy', 'Pension schemes', 'Scholarship programs']} />

        <SubHeading>Banking and Financial Services</SubHeading>
        <BodyText>Banks often require Adhar for:</BodyText>
        <BulletList items={['Account opening', 'KYC verification', 'Loan applications']} />

        <SubHeading>Mobile SIM Verification</SubHeading>
        <BodyText>Telecom providers may use Adhar-based verification when issuing SIM cards.</BodyText>

        <SubHeading>Digital Authentication</SubHeading>
        <BodyText>Adhar enables fast identity verification through OTP or biometric authentication.</BodyText>
        <BodyText>Because of these benefits, many people frequently need to download their Adhar card online or update information when details change.</BodyText>

        <Divider />

        {/* Download Online */}
        <SectionHeading>Adhar Card Download Online</SectionHeading>
        <BodyText>One of the most common services provided by UIDAI is the ability to download the Adhar card online. The digital version of the card is called e Adhar.</BodyText>
        <BodyText>This electronic version contains the same information as the physical card and is digitally signed by UIDAI, making it legally valid.</BodyText>
        <BodyText>The e Adhar card can be downloaded in PDF format and printed whenever required.</BodyText>
        <GuideLink to="/by-number-mobile">Complete Guide – Adhar Card Download</GuideLink>

        <Divider />

        {/* Methods */}
        <SectionHeading>Methods to Download Adhar Card</SectionHeading>
        <BodyText>UIDAI allows multiple ways to download the Adhar card depending on the information available. These methods ensure residents can still access their identity even if they do not remember their Adhar number.</BodyText>

        <SubHeading>Download Using Adhar Number</SubHeading>
        <BodyText>Residents who know their 12-digit Adhar number can easily download the card using OTP verification.</BodyText>
        <GuideLink to="/by-number-mobile">Complete Guide – How to Download Adhar Card by Mobile Number</GuideLink>

        <SubHeading>Download Using Enrollment ID</SubHeading>
        <BodyText>If you recently applied for Adhar but have not yet received the card, you can download it using the Enrollment ID (EID).</BodyText>

        <SubHeading>Download Using Virtual ID</SubHeading>
        <BodyText>The Virtual ID (VID) is a temporary number generated by UIDAI that can be used instead of the Adhar number for privacy protection.</BodyText>

        <Divider />

        {/* PDF Password */}
        <SectionHeading>Adhar Card PDF Password</SectionHeading>
        <BodyText>When downloading the e Adhar card, the file is provided as a password protected PDF. This security measure ensures that personal information remains protected.</BodyText>
        <BodyText sx={{ fontWeight: 700, color: 'text.primary' }}>The password format is: First four letters of your name (capital letters) + birth year.</BodyText>
        <Paper variant="outlined" sx={{ p: 2, my: 2, borderRadius: 2, bgcolor: '#f5f7fa', maxWidth: 340 }}>
          <Typography variant="body2" color="text.secondary">Example:</Typography>
          <Typography variant="body2">Name: <strong>Ramesh</strong> &nbsp;|&nbsp; Year of birth: <strong>1992</strong></Typography>
          <Typography variant="body1" fontWeight={700} sx={{ mt: 0.5, letterSpacing: 2 }}>Password: RAME1992</Typography>
        </Paper>
        <GuideLink to="/pdf-password-print">Full Explanation and Printing Instructions</GuideLink>

        <Divider />

        {/* Print */}
        <SectionHeading>How to Print Adhar Card</SectionHeading>
        <BodyText>Once the e Adhar PDF is downloaded, you can easily print the card. Steps include:</BodyText>
        <BulletList items={['Download the e Adhar file', 'Enter the PDF password', 'Open the document', 'Print using standard A4 paper']} />
        <BodyText>You can also request Adhar card reprint services if the physical card is damaged.</BodyText>
        <GuideLink to="/pdf-password-print">Adhar Card Printing and Reprint Guide</GuideLink>

        <Divider />

        {/* Update */}
        <SectionHeading>Adhar Card Update Services</SectionHeading>
        <BodyText>Sometimes users need to update information in their Adhar records. Common updates include:</BodyText>
        <BulletList items={['Address change', 'Mobile number update', 'Name correction', 'Date of birth update']} />
        <BodyText>These updates help ensure your identity records remain accurate.</BodyText>
        <GuideLink to="/update">Complete Adhar Card Update Guide</GuideLink>

        <SubHeading>Address Change in Adhar</SubHeading>
        <BodyText>If you move to a new residence, you must update your address in Adhar. Address updates can often be completed online using supporting documents.</BodyText>
        <GuideLink to="/address-change">Complete Guide – Update Adhar Card Address</GuideLink>

        <SubHeading>Mobile Number Update</SubHeading>
        <BodyText>Your mobile number is required for OTP authentication. If your number changes, you must update it at an Adhar enrollment center.</BodyText>
        <GuideLink to="/mobile-number">Read More – Update Mobile Number on Adhar Card</GuideLink>

        <SubHeading>Adhar Update Documents</SubHeading>
        <BodyText>UIDAI requires valid documents for identity verification during updates. Examples include:</BodyText>
        <BulletList items={['Passport', 'Voter ID', 'PAN card', 'Driving licence']} />
        <GuideLink to="/documents">Full Document List for Adhar Update</GuideLink>

        <Divider />

        {/* Status */}
        <SectionHeading>Check Adhar Card Status</SectionHeading>
        <BodyText>After applying for a new Adhar card or submitting update requests, users can track the progress of their application. This service is known as Adhar card status check.</BodyText>
        <BodyText>You can check status using:</BodyText>
        <BulletList items={['Enrollment ID', 'Update Request Number']} />
        <GuideLink to="/status">Check Your Adhar Card Status Now</GuideLink>

        <Divider />

        {/* Lost Adhar */}
        <SectionHeading>What to Do if Adhar Card is Lost</SectionHeading>
        <BodyText>Losing your Adhar card is not a major issue because you can easily recover the digital version. Possible solutions include:</BodyText>
        <BulletList items={['Downloading e Adhar', 'Retrieving enrollment ID', 'Requesting card reprint']} />
        <GuideLink to="/status/lost-adhar">Full Recovery Guide – Lost Adhar Card</GuideLink>

        <Divider />

        {/* PAN Link */}
        <SectionHeading>Link PAN Card With Adhar</SectionHeading>
        <BodyText>Linking PAN with Adhar is mandatory for filing income tax returns. If PAN is not linked with Adhar, it may become inactive. Benefits of linking include:</BodyText>
        <BulletList items={['Faster tax verification', 'Simplified financial records', 'Compliance with tax regulations']} />
        <GuideLink to="/link/pan-card">Read More – How to Link Adhar Card with PAN Card</GuideLink>

        <Divider />

        {/* Bank KYC */}
        <SectionHeading>Adhar Bank KYC Linking</SectionHeading>
        <BodyText>Banks may use Adhar for Know Your Customer (KYC) verification. Linking Adhar with bank accounts can simplify identity verification and allow access to certain government benefits.</BodyText>

        <Divider />

        {/* Appointment */}
        <SectionHeading>Book Adhar Appointment Online</SectionHeading>
        <BodyText>Instead of waiting in long queues, users can schedule an appointment at an Adhar center. Appointments can be booked for:</BodyText>
        <BulletList items={['Biometric updates', 'New enrollment', 'Mobile number updates', 'Document corrections']} />

        <SubHeading>Find Adhar Center Near Me</SubHeading>
        <BodyText>You can search for nearby Adhar enrollment centers.</BodyText>

        <SubHeading>Adhar Office Locator</SubHeading>
        <BodyText>UIDAI offices across India provide various services.</BodyText>

        <Divider />

        {/* Download Forms */}
        <SectionHeading>Download Adhar Forms</SectionHeading>
        <BodyText>Certain services require physical application forms. Forms available include:</BodyText>
        <BulletList items={['New enrollment form', 'Update form', 'Child Adhar application form']} />

        <Divider />

        {/* Blog / News */}
        <SectionHeading>Latest Adhar News and Updates</SectionHeading>
        <BodyText>Stay informed about new policies and service changes. Recent topics include:</BodyText>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {[
            { label: 'Adhar Card New Rules', to: '/blog/adhar-card-new-rules' },
            { label: 'Adhar Update Fees', to: '/blog/adhar-update-fees' },
            { label: 'Adhar Update Processing Time', to: '/blog/how-long-adhar-update-takes' },
          ].map((b) => (
            <Grid item xs={12} sm={4} key={b.to}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <ArticleIcon color="primary" />
                <Button component={RouterLink} to={b.to} variant="text" sx={{ textTransform: 'none', p: 0, fontWeight: 600, textAlign: 'left' }}>
                  {b.label}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider />

        {/* Security */}
        <SectionHeading>Security and Privacy of Adhar Data</SectionHeading>
        <BodyText>The UIDAI system uses multiple security layers to protect personal information. Security features include:</BodyText>
        <BulletList items={['Biometric encryption', 'OTP authentication', 'Masked Adhar', 'Virtual ID']} />
        <BodyText>These features ensure that identity data remains protected.</BodyText>

        <Divider />

        {/* FAQ */}
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        {faqs.map((faq, i) => (
          <Accordion key={i} elevation={0} variant="outlined" sx={{ mb: 1, borderRadius: '8px !important', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

      </Container>

      {/* ── CTA Footer ── */}
      <Box sx={{ background: 'linear-gradient(135deg, #0d47a1, #1976d2)', py: 8, textAlign: 'center', color: 'white' }}>
        <Container maxWidth="md">
          <ContactSupportIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>Need Help With Adhar Services?</Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, lineHeight: 1.7 }}>
            Use this website as a complete information hub for downloads, updates, status checks, and linking guidance.
          </Typography>
          <Button component={RouterLink} to="/contact-us" variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, fontWeight: 700 }}>
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
