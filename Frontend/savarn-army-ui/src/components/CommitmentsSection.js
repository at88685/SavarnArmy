import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const commitments = [
  'स्वस्थ समाज',
  'महिला सशक्तिकरण',
  'युवा रोजगार',
];

const CommitmentsSection = () => (
  <Box sx={{ py: 4 }}>
    <Typography variant="h6" align="center" gutterBottom>
      हम राष्ट्र के विकास के लिए प्रतिबद्ध हैं
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {commitments.map((item, idx) => (
        <Grid item xs={12} md={3} key={idx}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="body1">{item}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CommitmentsSection;