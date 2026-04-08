import React, { useEffect } from 'react';
import { Box, Container, Typography, Paper, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import routeDocContent from '../content/routeDocContent.json';

const normalizeRoute = (value) => {
  if (!value) return '/';
  let route = value.trim();
  if (!route.startsWith('/')) route = `/${route}`;
  if (route !== '/' && !route.endsWith('/')) route = `${route}/`;
  return route;
};

const routeTitleMap = {
  '/': 'Home Page',
  '/by-number-mobile/': 'Download by Number & Mobile',
  '/pdf-password-print/': 'Aadhaar PDF Password & Print',
  '/update/': 'Update Aadhaar',
  '/address-change/': 'Address Change',
  '/mobile-number/': 'Mobile Number Update',
  '/documents/': 'Document Update',
  '/application-status/': 'Application Status',
  '/status/': 'Check Status',
  '/status/lost-adhar/': 'Lost Aadhaar / Retrieve',
  '/link/pan-card/': 'Adhar PAN Card Link',
  '/blog/adhar-card-new-rules/': 'Adhar Card New Rules',
  '/blog/adhar-update-fees/': 'Adhar Update Fees',
  '/blog/how-long-adhar-update-takes/': 'How Long Aadhaar Update Takes',
  '/about-us/': 'About Us',
  '/contact-us/': 'Contact Us',
  '/privacy-policy/': 'Privacy Policy',
};

const toTitleCase = (value) => {
  return value
    .replace(/[-_/]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
};

const getFriendlyRouteTitle = (href) => {
  const normalizedHref = normalizeRoute(href);
  if (routeTitleMap[normalizedHref]) return routeTitleMap[normalizedHref];

  const match = routeDocContent.find((item) => normalizeRoute(item.route) === normalizedHref);
  if (match?.metaTitle) {
    const splitTitle = match.metaTitle.split('–')[0].trim();
    if (splitTitle) return splitTitle;
  }

  if (normalizedHref === '/') return 'Home Page';

  const lastSegment = normalizedHref.replace(/^\//, '').replace(/\/$/, '').split('/').pop() || '';
  return toTitleCase(lastSegment);
};

const getHeadingConfig = (line) => {
  if (line === 'H1') return { skip: true };
  if (line.startsWith('H1 ')) return { variant: 'h3', component: 'h1', text: line.replace(/^H1\s+/, '') };
  if (line.startsWith('H2 ')) return { variant: 'h4', component: 'h2', text: line.replace(/^H2\s+/, '') };
  if (line.startsWith('H3 ')) return { variant: 'h5', component: 'h3', text: line.replace(/^H3\s+/, '') };
  return null;
};

const parseLinkLine = (line) => {
  const directMatch = line.match(/^→\s*(\/[^\s]+)\s*$/);
  if (directMatch) {
    const normalizedHref = normalizeRoute(directMatch[1]);
    return { label: getFriendlyRouteTitle(normalizedHref), href: normalizedHref };
  }

  const inlineMatch = line.match(/^(.*?)(?:→)\s*(\/[^\s]+)\s*$/);
  if (inlineMatch) {
    const normalizedHref = normalizeRoute(inlineMatch[2]);
    const label = inlineMatch[1].trim().replace(/[:\-\s]+$/, '') || getFriendlyRouteTitle(normalizedHref);
    return { label, href: normalizedHref };
  }

  return null;
};

const parseBottomRouteOnlyLine = (line) => {
  const routeOnlyMatch = (line || '').match(/^\s*(\/?[a-z0-9-]+(?:\/[a-z0-9-]+)*\/?)\s*$/i);
  if (!routeOnlyMatch) return null;
  const normalizedHref = normalizeRoute(routeOnlyMatch[1]);
  return { label: getFriendlyRouteTitle(normalizedHref), href: normalizedHref };
};

const isLikelyBulletLine = (line, previousLine) => {
  const text = (line || '').trim();
  if (!text) return false;

  if (/^\d+[.)\-]?\s+/.test(text) || /^Step\s*\d+/i.test(text)) return true;

  const prev = (previousLine || '').trim().toLowerCase();
  const previousSuggestsList =
    prev.endsWith(':') ||
    /include|includes|such as|steps|benefits|examples|reasons|features|required documents|free services|possible consequences|common issues|key uses|available|applies/i.test(prev);

  const words = text.split(/\s+/).filter(Boolean).length;
  const endsLikeSentence = /[.!?]$/.test(text);
  const hasUrl = /https?:\/\//i.test(text) || /^\//.test(text);
  const shortPhrase = words > 0 && words <= 9;

  return previousSuggestsList && shortPhrase && !endsLikeSentence && !hasUrl;
};

const isHighlightLine = (line) => {
  const text = (line || '').trim();
  if (!text) return false;

  return (
    /^(Important|Tip|Password Format|Example|Examples|Benefits|Free Services Include|Required Documents|Possible reasons include|Steps to print|Password|Conclusion|Always|Update Type|Fees|Method|Convenience|Primary Keywords|Secondary Keywords|Internal Linking Keywords)\b/i.test(text) ||
    /^Step\s*\d+/i.test(text) ||
    /^\d+[.)\-]?\s+[A-Za-z]/.test(text)
  );
};

const DocRoutePage = ({
  routeKey,
  afterTitleContent = null,
  afterContent = null,
  renderFaqAsAccordion = false,
  hideFaqContent = false,
  faqEndMarkers = [],
}) => {
  const normalizedKey = normalizeRoute(routeKey);
  const section = routeDocContent.find((item) => normalizeRoute(item.route) === normalizedKey);

  useEffect(() => {
    if (!section) return;

    if (section.metaTitle) {
      document.title = section.metaTitle;
    }

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    if (section.metaDescription) {
      descriptionTag.setAttribute('content', section.metaDescription);
    }
  }, [section]);

  if (!section) {
    return (
      <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.100', minHeight: '70vh' }}>
        <Container maxWidth="md">
          <Paper sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
              Content Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Route content is not available in the uploaded document for this page.
            </Typography>
          </Paper>
        </Container>
      </Box>
    );
  }

  const baseFilteredContent = (section.content || []).filter((line) => {
    const trimmed = (line || '').trim();
    if (!trimmed) return false;
    if (trimmed === normalizedKey || trimmed === routeKey) return false;
    if (trimmed.toLowerCase() === 'hero section') return false;
    return true;
  });

  const filteredContent = hideFaqContent
    ? (() => {
        const lines = [];
        let skippingFaq = false;
        const normalizedMarkers = faqEndMarkers.map((item) => (item || '').trim().toLowerCase());

        baseFilteredContent.forEach((line) => {
          const trimmed = (line || '').trim();
          const lowerTrimmed = trimmed.toLowerCase();

          const isFaqStart =
            /^h2\s+frequently asked questions$/i.test(trimmed) ||
            /^frequently asked questions$/i.test(trimmed) ||
            /^faqs?\s+on\s+/i.test(trimmed);

          if (!skippingFaq && isFaqStart) {
            skippingFaq = true;
            return;
          }

          if (skippingFaq) {
            const isHeadingStart = /^h[1-3]\s+/i.test(trimmed);
            const reachedEndMarker = normalizedMarkers.includes(lowerTrimmed);

            if (isHeadingStart || reachedEndMarker) {
              skippingFaq = false;
              lines.push(line);
            }

            return;
          }

          lines.push(line);
        });

        return lines;
      })()
    : baseFilteredContent;

  const trailingRouteIndexes = (() => {
    const indexSet = new Set();
    for (let index = filteredContent.length - 1; index >= 0; index -= 1) {
      const line = filteredContent[index];
      const routeData = parseBottomRouteOnlyLine(line);
      if (!routeData) break;
      indexSet.add(index);
    }
    return indexSet;
  })();

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          {section.metaTitle && (
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.9rem', md: '2.7rem' } }}>
              {section.metaTitle}
            </Typography>
          )}

          {section.metaTitle && afterTitleContent}

          {(() => {
            const rendered = [];
            let bulletItems = [];

            const flushBulletItems = (keyPrefix) => {
              if (bulletItems.length === 0) return;

              rendered.push(
                <Box key={`${keyPrefix}-list`} component="ul" sx={{ pl: 3, mt: 0.2, mb: 1.8 }}>
                  {bulletItems.map((item, itemIndex) => (
                    <Typography
                      key={`${keyPrefix}-item-${itemIndex}`}
                      component="li"
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8, mb: 0.5, fontWeight: isHighlightLine(item) ? 700 : 400 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              );

              bulletItems = [];
            };

            for (let index = 0; index < filteredContent.length; index += 1) {
              const line = filteredContent[index];
              const previousLine = index > 0 ? filteredContent[index - 1] : '';
              const headingConfig = getHeadingConfig(line);
              const linkData = parseLinkLine(line);
              const routeOnlyData = parseBottomRouteOnlyLine(line);
              const bottomRouteOnlyData = trailingRouteIndexes.has(index) ? routeOnlyData : null;

              if (headingConfig?.skip) {
                continue;
              }

              if (headingConfig?.variant) {
                flushBulletItems(`heading-${index}`);
                rendered.push(
                  <Typography
                    key={`${line}-${index}`}
                    variant={headingConfig.variant}
                    component={headingConfig.component}
                    fontWeight={700}
                    sx={{ mt: 4, mb: 1.5 }}
                  >
                    {headingConfig.text}
                  </Typography>
                );

                if (renderFaqAsAccordion && headingConfig.text?.trim().toLowerCase() === 'frequently asked questions') {
                  const faqItems = [];
                  let faqIndex = index + 1;

                  while (faqIndex < filteredContent.length) {
                    const question = (filteredContent[faqIndex] || '').trim();
                    const nextHeading = getHeadingConfig(question);

                    if (!question) {
                      faqIndex += 1;
                      continue;
                    }

                    if (nextHeading?.variant || nextHeading?.skip) {
                      break;
                    }

                    const answer = (filteredContent[faqIndex + 1] || '').trim();
                    if (!answer) break;

                    faqItems.push({ question, answer });
                    faqIndex += 2;
                  }

                  rendered.push(
                    <Box key={`faq-${index}`} sx={{ mb: 2 }}>
                      {faqItems.map((item, itemIndex) => (
                        <Accordion
                          key={`${item.question}-${itemIndex}`}
                          elevation={0}
                          variant="outlined"
                          defaultExpanded={itemIndex === 0}
                          sx={{ mb: 1, borderRadius: '8px !important', '&:before': { display: 'none' } }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight={600}>{item.question}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" color="text.secondary">
                              {item.answer}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </Box>
                  );

                  index = faqIndex - 1;
                }

                continue;
              }

              if (linkData) {
                flushBulletItems(`link-${index}`);
                rendered.push(
                  <Button key={`${line}-${index}`} component={RouterLink} to={linkData.href} variant="text" sx={{ px: 0, display: 'block', textAlign: 'left', mb: 1, textTransform: 'none' }}>
                    {linkData.label}
                  </Button>
                );
                continue;
              }

              if (bottomRouteOnlyData) {
                flushBulletItems(`bottom-link-${index}`);
                rendered.push(
                  <Button
                    key={`${line}-${index}`}
                    component={RouterLink}
                    to={bottomRouteOnlyData.href}
                    variant="text"
                    sx={{ px: 0, display: 'block', textAlign: 'left', mb: 1, textTransform: 'none' }}
                  >
                    {bottomRouteOnlyData.label}
                  </Button>
                );
                continue;
              }

              if (routeOnlyData) {
                continue;
              }

              if (isLikelyBulletLine(line, previousLine)) {
                bulletItems.push(line);
                continue;
              }

              flushBulletItems(`paragraph-${index}`);
              rendered.push(
                <Typography key={`${line}-${index}`} variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 1.2 }}>
                  <Box component="span" sx={{ fontWeight: isHighlightLine(line) ? 700 : 400 }}>
                    {line}
                  </Box>
                </Typography>
              );
            }

            flushBulletItems('final');
            return rendered;
          })()}

          {afterContent}
        </Paper>
      </Container>
    </Box>
  );
};

export default DocRoutePage;
