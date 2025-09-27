import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import '../../styles/DevelopmentCommitment.css';

const items = [
  'सामाजिक न्याय',
  'समानता की मांग',
  'युवा रोजगार'
];

const DevelopmentCommitment = () => (
  <Box className="dev-commit-root">
    <Typography variant="h5" className="dev-commit-title">
      हम सवर्ण समाज के विकास के लिए प्रतिबद्ध हैं
    </Typography>
    <Stack direction="column" spacing={2} alignItems="center" className="dev-commit-stack">
      {items.map((item, idx) => (
        <Paper key={idx} elevation={2} className="dev-commit-card">
          {item}
        </Paper>
      ))}
    </Stack>
  </Box>
);

export default DevelopmentCommitment;
