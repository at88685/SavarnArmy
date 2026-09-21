import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const MembershipPlan = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        हमारी सदस्यता योजना
      </Typography>
      <Typography variant="h4" color="warning.main" gutterBottom>
        ₹100
      </Typography>
      <Typography variant="body2" gutterBottom>
        सदस्यता • डिजिटल कार्ड • सदस्यता आईडी
      </Typography>
      <Button variant="contained" color="warning">
        सदस्य बनें
      </Button>
    </Paper>
  </Box>
);

export default MembershipPlan;