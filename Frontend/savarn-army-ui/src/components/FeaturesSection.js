import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import RegistrationCard from './RegistrationCard';

const features = [
  { title: 'समानता की एकता', desc: 'हम समानता की स्थापना के लिए प्रतिबद्ध हैं।' },
  { title: 'राष्ट्रीय एकता', desc: 'राष्ट्र की एकता को मजबूत करना हमारा लक्ष्य है।' },
  { title: 'सामाजिक उत्थान', desc: 'विभिन्न वर्गों और समाज के उत्थान के लिए कार्यरत।' },
];



const FeaturesSection = () => (
  <>
  <Grid container spacing={2} sx={{ py: 4 }}>
    {features.map((feature, idx) => (
      <Grid item xs={12} md={4} key={idx}>
        <Card>
          <CardContent>
            <Typography variant="h6">{feature.title}</Typography>
            <Typography variant="body2">{feature.desc}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>

  
  </>
);

export default FeaturesSection;