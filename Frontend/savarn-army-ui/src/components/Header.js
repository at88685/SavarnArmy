import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import logo from '../assets/logo/logo.png';

// Styled Components
const LogoImg = styled('img')(({ theme }) => ({
  height: 48,
  marginRight: 12,
  [theme.breakpoints.down('md')]: {
    height: 36,
    marginRight: 8,
  },
}));

const Title = styled('span')(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  color: '#222',
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
  },
}));

const DonateButton = styled(Button)(({ theme }) => ({
  background: '#000',
  color: '#fff',
  borderRadius: 8,
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  fontWeight: 600,
  fontSize: 16,
  boxShadow: '0 2px 8px rgba(255, 167, 38, 0.15)',
  border: '2px solid #FFA726',
  textTransform: 'none',
  transition: 'box-shadow 0.3s, border-color 0.3s, background 0.3s, color 0.3s',
  '&:hover': {
    background: '#FFA726',
    color: '#222',
    borderColor: '#222',
    boxShadow: '0 4px 16px rgba(255, 167, 38, 0.35)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 15,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const navItems = [
  { label: 'होम' },
  { label: 'हमारे बारे में' },
  { label: 'आयोजन' },
  { label: 'वीडियो गैलरी' },
  { label: 'संपर्क करें' },
  { label: 'मदद की ज़रूरत है!' }
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '2px solid #FFA726',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(6px)',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 56, md: 70 },
          display: 'flex',
          justifyContent: 'space-between',
          px: { xs: 1, md: 3 }
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LogoImg src={logo} alt="Logo" />
          <Title>सवर्ण आर्मी</Title>
        </Box>
        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              sx={{
                color: '#222',
                fontWeight: 500,
                fontSize: 17,
                textTransform: 'none',
                '&:hover': { color: '#FFA726', background: 'transparent' }
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            startIcon={<LoginIcon sx={{ fontSize: 22 }} />}
            sx={{
              color: '#222',
              fontWeight: 500,
              fontSize: 17,
              textTransform: 'none',
              '&:hover': { color: '#FFA726', background: 'transparent' }
            }}
          >
            लॉगिन
          </Button>
          <Button
            startIcon={<PersonAddIcon sx={{ fontSize: 22 }} />}
            sx={{
              color: '#222',
              fontWeight: 500,
              fontSize: 17,
              textTransform: 'none',
              '&:hover': { color: '#FFA726', background: 'transparent' }
            }}
          >
            सदस्य बने
          </Button>
          <DonateButton>
            Donate Now
          </DonateButton>
        </Box>
        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 1 }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
      </Toolbar>
      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(8px)'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <LogoImg src={logo} alt="Logo" style={{ height: 32 }} />
          <Title sx={{ fontSize: 18 }}>सवर्ण आर्मी</Title>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => setDrawerOpen(false)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#222'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemIcon>
                <LoginIcon sx={{ fontSize: 20, color: '#222' }} />
              </ListItemIcon>
              <ListItemText
                primary="लॉगिन"
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#222'
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemIcon>
                <PersonAddIcon sx={{ fontSize: 20, color: '#222' }} />
              </ListItemIcon>
              <ListItemText
                primary="सदस्य बने"
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#222'
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ justifyContent: 'center', mt: 1 }}>
            <DonateButton fullWidth onClick={() => setDrawerOpen(false)}>
              Donate Now
            </DonateButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;