import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material';
import {
  LogoImg,
  Title,
  DonateButton
} from '../StyledComponents/Header.styled';
import { NAV_ITEMS, HEADER_TEXT } from '../constants/header.constants';
import { PersonAddIcon, MenuIcon } from '../icons/header.icons';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="sticky" className="header-appbar">
      <Toolbar className="header-toolbar">
        {/* Logo and Title */}
        <Box className="header-logo-title">
          <LogoImg src={logo} alt="Logo" />
          <Title>{HEADER_TEXT.title}</Title>
        </Box>
        {/* Desktop Navigation */}
        <Box
          className="header-nav-desktop"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' }
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Button key={item.label} className="header-nav-btn" disabled={item.disabled}>
              <Link to={item.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                {item.label}
              </Link>
            </Button>
          ))}
          
          <Button startIcon={<PersonAddIcon />} className="header-nav-btn">
            <Link to="/registration" style={{ color: 'inherit', textDecoration: 'none' }}>
              {HEADER_TEXT.member}
            </Link>
          </Button>
          <Link to="/donate-now" style={{ textDecoration: 'none' }}>
            <DonateButton>
              {HEADER_TEXT.donate}
            </DonateButton>
          </Link>
        </Box>
        {/* Mobile/Tablet Hamburger */}
        <Box
          className="header-hamburger"
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none' }
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {/* Drawer for Mobile/Tablet */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          className: 'header-drawer'
        }}
      >
        <Box className="header-drawer-logo-title">
          <LogoImg src={logo} alt="Logo" style={{ height: 32 }} />
          <Title className="header-drawer-title">{HEADER_TEXT.title}</Title>
        </Box>
        <Divider />
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => setDrawerOpen(false)} disabled={item.disabled}>
                <Link to={item.path} style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}>
                  <ListItemText primary={item.label} className="header-drawer-nav-btn" />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <Link to='registration' style={{ color: 'inherit', textDecoration: 'none', width: '100%', textAlign: 'center' }} >
                <DonateButton fullWidth>
              
              {HEADER_TEXT.member}
             
            </DonateButton>
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="header-drawer-donate-listitem" onClick={() => setDrawerOpen(false)}>
            <Link to='donate-now' style={{ color: 'inherit', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
            <DonateButton fullWidth>
              
              {HEADER_TEXT.donate}
             
            </DonateButton>
             </Link>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;