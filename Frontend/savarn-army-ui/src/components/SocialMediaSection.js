import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaSection = () => (
  <Box sx={{ py: 4, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom>
      हमारे पास अपना सोशल मीडिया ऐप है।
    </Typography>
    <Typography variant="body2" gutterBottom>
      हमारे सदस्य सवर्ण आर्मी का सोशल मीडिया वेबसाइट पर जुड़ सकते हैं।
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Button startIcon={<FacebookIcon />} href="#" color="primary">Facebook</Button>
      <Button startIcon={<InstagramIcon />} href="#" color="secondary">Instagram</Button>
      <Button startIcon={<YouTubeIcon />} href="#" color="error">YouTube</Button>
    </Stack>
  </Box>
);

export default SocialMediaSection;