import React from 'react';
import { Box, Typography, Button, Card, Avatar, Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animation keyframes
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: none;}
`;

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px);}
  to { opacity: 1; transform: none;}
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px);}
  to { opacity: 1; transform: none;}
`;

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled components
const HEADER_HEIGHT_DESKTOP = 70;
const HEADER_HEIGHT_MOBILE = 56;

const HeroRoot = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - ${HEADER_HEIGHT_DESKTOP}px)`,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(270deg, #FFA726, #FFD580, #FFB347, #FFECB3, #FFD580, #FFA726)',
  backgroundSize: '1200% 1200%',
  animation: `${animatedGradient} 40s ease infinite`,
  boxSizing: 'border-box',
  overflow: 'auto',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE}px)`,
    padding: theme.spacing(0, 1),
  },
}));

const MainGrid = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(4),
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const LeftCol = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 340,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(2, 0, 2, 0),
  },
}));

const RightCol = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 340,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(2, 0, 2, 0),
    gap: theme.spacing(3),
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.6rem',
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  color: '#222',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#444',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 24,
  fontWeight: 600,
  fontSize: 18,
  padding: theme.spacing(1.2, 4),
  boxShadow: '0 2px 8px rgba(255, 167, 38, 0.15)',
  marginRight: theme.spacing(2),
  transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
  '&:hover': {
    background: '#FFA726',
    color: '#222',
    boxShadow: '0 4px 16px rgba(255, 167, 38, 0.25)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
    padding: theme.spacing(1, 2.5),
    marginRight: theme.spacing(1),
  },
}));

const CardsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginBottom: theme.spacing(0),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    marginBottom: theme.spacing(0),
  },
}));

const FixedCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 6px 24px 0 rgba(0,0,0,0.10)',
  padding: theme.spacing(2, 2, 1.5, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#fff',
  width: 220,
  height: 250, // Reduced height for better alignment
  justifyContent: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.03)',
    boxShadow: '0 8px 32px 0 rgba(255,167,38,0.18)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 180,
    height: 200, // Reduced height for mobile as well
    padding: theme.spacing(2, 1.5, 1.5, 1.5),
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(0.5),
  textAlign: 'center',
  color: '#222',
}));

const Role = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#666',
  textAlign: 'center',
}));

const MembershipCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 6px 24px 0 rgba(0,0,0,0.13)',
  background: '#fff8ee',
  padding: theme.spacing(4, 5),
  minWidth: 220,
  maxWidth: 320,
  textAlign: 'center',
  margin: '0 auto',
  alignSelf: 'center',
  // Add animation for consistency
  animation: `${fadeInUp} 1s cubic-bezier(.4,0,.2,1)`,
  animationDelay: '0.6s',
  animationFillMode: 'both',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'unset',
    width: '100%',
    padding: theme.spacing(3, 2),
  },
}));

const MembershipButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: 24,
  fontWeight: 600,
  fontSize: 17,
  padding: theme.spacing(1, 4),
  background: '#FFA726',
  color: '#222',
  boxShadow: '0 2px 8px rgba(255, 167, 38, 0.15)',
  '&:hover': {
    background: '#FFB347',
    color: '#222',
  },
}));

const AnimatedBox = styled(Box)(({ delay, direction }) => ({
  animation: `${direction === 'left' ? fadeInLeft : direction === 'right' ? fadeInRight : fadeInUp} 1s cubic-bezier(.4,0,.2,1)`,
  animationDelay: delay || '0s',
  animationFillMode: 'both',
}));

const HeroSection = () => (
  <HeroRoot>
    <MainGrid>
      {/* Left Column */}
      <LeftCol>
        <AnimatedBox direction="left" delay="0s">
          <MainTitle variant="h2">
            समानता और राष्ट्र उत्थान के लिए
            <br />
            देशभक्तों को एकजुट करना
          </MainTitle>
          <SubTitle>
            सवर्ण आर्मी में, हम समानता के संवैधानिक अधिकार के लिए समाज को जागृत करने के लिए प्रतिबद्ध देशभक्तों की एक ताकत के रूप में एकजुट हैं。
          </SubTitle>
          <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <StyledButton variant="outlined" color="inherit">
              सवर्ण आर्मी से जुड़ें
            </StyledButton>
            <StyledButton variant="contained" color="warning" sx={{ color: '#222', background: '#fff' }}>
              वीडियो देखें
            </StyledButton>
          </Stack>
        </AnimatedBox>
      </LeftCol>
      {/* Right Column */}
      <RightCol>
        <CardsRow>
          <AnimatedBox direction="up" delay="0.2s">
            <FixedCard>
              <Avatar
                src={require('../assets/photos/sarvesh-pandey-transformed.webp')}
                alt="सर्वेश पाण्डेय"
                sx={{
                  width: 120,
                  height: 120,
                  boxShadow: '0 2px 12px 0 rgba(255,167,38,0.18)',
                  border: '4px solid #FFA726',
                  objectFit: 'cover',
                  background: '#fff',
                }}
                imgProps={{
                  style: {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                  }
                }}
              />
              <Name>सर्वेश पाण्डेय</Name>
              <Role>संयोजक/संरक्षक</Role>
            </FixedCard>
          </AnimatedBox>
          <AnimatedBox direction="up" delay="0.4s">
            <FixedCard>
              <Avatar
                src={require('../assets/photos/shivam-transformed.webp')}
                alt="ठाकुर शिवम सिंह (अरुणेंद्र)"
                sx={{
                  width: 120,
                  height: 120,
                  boxShadow: '0 2px 12px 0 rgba(255,167,38,0.18)',
                  border: '4px solid #FFA726',
                  objectFit: 'cover',
                  background: '#fff',
                }}
                imgProps={{
                  style: {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                  }
                }}
              />
              <Name>ठाकुर शिवम सिंह (अरुणेंद्र)</Name>
              <Role>सह - संयोजक/विस्तारक</Role>
            </FixedCard>
          </AnimatedBox>
        </CardsRow>
        <MembershipCard>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            हमारी सदस्यता योजना
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#222', mb: 1 }}>
            ₹100
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#444', mb: 1 }}>
            सदस्यता &nbsp; &nbsp;
            सक्रिय सदस्य &nbsp; &nbsp;
            अभियान समर्थक
          </Typography>
          <MembershipButton variant="contained">
            सदस्य बनें
          </MembershipButton>
        </MembershipCard>
      </RightCol>
    </MainGrid>
  </HeroRoot>
);

export default HeroSection;