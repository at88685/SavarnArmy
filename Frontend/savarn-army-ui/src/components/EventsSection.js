import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const EventsSection = () => (
  <Box sx={{ py: 4, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom>
      हमारे आयोजन
    </Typography>
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="body1">Testing Event</Typography>
        <Typography variant="body2">स्थान: भारत • तिथि: 01-01-2024</Typography>
        <Button variant="contained" color="warning" sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  </Box>
);

export default EventsSection;