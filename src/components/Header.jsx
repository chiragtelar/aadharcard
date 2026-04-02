import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
  Box,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';

const navGroups = [
  {
    label: 'Download Aadhaar',
    items: [
      { label: 'Download Aadhaar', path: '/download' },
      { label: 'Download by Number & Mobile', path: '/by-number-mobile' },
      { label: 'Aadhaar PDF Password & Print', path: '/pdf-password-print' },
    ],
  },
  {
    label: 'Update Aadhaar',
    items: [
      { label: 'Update Aadhaar', path: '/update' },
      { label: 'Address Change', path: '/address-change' },
      { label: 'Mobile Number Update', path: '/mobile-number' },
      { label: 'Document Update', path: '/documents' },
      { label: 'Application Status', path: '/application-status' },
    ],
  },
  {
    label: 'Aadhaar Status',
    items: [
      { label: 'Check Status', path: '/status' },
      { label: 'Lost Aadhaar / Retrieve', path: '/status/lost-adhar' },
    ],
  },
  {
    label: 'More',
    items: [
      { label: 'Blogs', path: '/blog' },
      { label: 'About Us', path: '/about-us' },
      { label: 'Contact Us', path: '/contact-us' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState({ label: '', anchorEl: null });
  const [expandedGroup, setExpandedGroup] = useState('');
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuOpen = (event, label) => setActiveMenu({ label, anchorEl: event.currentTarget });
  const handleMenuClose = () => setActiveMenu({ label: '', anchorEl: null });
  const handleGroupToggle = (label) => setExpandedGroup((prev) => (prev === label ? '' : label));

  const isGroupActive = (groupItems) => {
    return groupItems.some((item) => location.pathname === item.path || location.pathname.startsWith(`${item.path}/`));
  };

  const drawer = (
    <Box sx={{ textAlign: 'left' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2, bgcolor: 'primary.main' }}>
        <CreditCardIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
          Aadhaar Card
        </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
            sx={{ color: location.pathname === '/' ? 'primary.main' : 'text.primary' }}
          >
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: location.pathname === '/' ? 700 : 500 }} />
          </ListItemButton>
        </ListItem>
        {navGroups.map((group) => (
          <Box key={group.label}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleGroupToggle(group.label)}>
                <ListItemText
                  primary={group.label}
                  primaryTypographyProps={{
                    fontWeight: isGroupActive(group.items) ? 700 : 500,
                    color: isGroupActive(group.items) ? 'primary.main' : 'text.primary',
                  }}
                />
                {expandedGroup === group.label ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            <Collapse in={expandedGroup === group.label} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {group.items.map((item) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      onClick={handleDrawerToggle}
                      sx={{ pl: 4, color: location.pathname === item.path ? 'primary.main' : 'text.secondary' }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontWeight: location.pathname === item.path ? 700 : 400 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" elevation={2}>
          <Toolbar>
            <CreditCardIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ flexGrow: 1, fontWeight: 700, color: 'white', textDecoration: 'none' }}
            >
              Aadhaar Card Download
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              <Button
                component={Link}
                to="/"
                sx={{
                  color: 'white',
                  fontWeight: location.pathname === '/' ? 700 : 400,
                  borderBottom: location.pathname === '/' ? '2px solid white' : 'none',
                  borderRadius: 0,
                }}
              >
                Home
              </Button>
              {navGroups.map((group) => (
                <Button
                  key={group.label}
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={(event) => handleMenuOpen(event, group.label)}
                  sx={{
                    color: 'white',
                    fontWeight: isGroupActive(group.items) ? 700 : 400,
                    borderBottom: isGroupActive(group.items) ? '2px solid white' : 'none',
                    borderRadius: 0,
                  }}
                >
                  {group.label}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {navGroups.map((group) => (
        <Menu
          key={group.label}
          anchorEl={activeMenu.anchorEl}
          open={activeMenu.label === group.label}
          onClose={handleMenuClose}
        >
          {group.items.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
              selected={location.pathname === item.path}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      ))}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: 240 } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
