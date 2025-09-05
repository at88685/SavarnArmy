import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: '#FFF3E0', py: 3, mt: 4 }}>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Link href="#">Terms and Conditions</Link>
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Contact Us</Link>
    </Stack>
    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
      © 2024 Savarn Seva Nyas | Designed & Developed by iGeekSquadlay
    </Typography>
    <Typography variant="body2" align="center">
      संपर्क सूचना: help@savarnarmy.in | 9721246200
    </Typography>
  </Box>
);

export default Footer;