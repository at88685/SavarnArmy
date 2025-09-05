import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const FAQSection = () => (
  <Box sx={{ py: 4, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom>
      प्रश्न और उत्तर
    </Typography>
    <Typography variant="body2" gutterBottom>
      क्या आपके पास कोई धर्म है? <br />
      अगर आपका उत्तर यहाँ नहीं मिला, बस हमें एक संदेश भेजें और हम तुरंत मदद करेंगे।
    </Typography>
    <Button variant="outlined" color="warning" sx={{ mt: 2 }}>
      संपर्क करें
    </Button>
  </Box>
);

export default FAQSection;