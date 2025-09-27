import { Box, Typography, Container, Card } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animation keyframes
const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(40px);
  }
  to { 
    opacity: 1; 
    transform: none;
  }
`;

const fadeInLeft = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(-40px);
  }
  to { 
    opacity: 1; 
    transform: none;
  }
`;

const fadeInRight = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(40px);
  }
  to { 
    opacity: 1; 
    transform: none;
  }
`;

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HEADER_HEIGHT_DESKTOP = 70;
const HEADER_HEIGHT_MOBILE = 56;

// Main container with animated gradient background
export const AboutUsRoot = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - ${HEADER_HEIGHT_DESKTOP}px)`,
  width: '100%',
  background: 'linear-gradient(270deg, #FFA726, #FFD580, #FFB347, #FFECB3, #FFD580, #FFA726)',
  backgroundSize: '1200% 1200%',
  animation: `${animatedGradient} 40s ease infinite`,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE}px)`,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

// Main content container
export const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 1),
  },
}));

// Animated wrapper for sections
export const AnimatedSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'direction' && prop !== 'delay',
})(({ theme, direction = 'up', delay = '0s' }) => ({
  animation: `${
    direction === 'left' ? fadeInLeft : 
    direction === 'right' ? fadeInRight : 
    fadeInUp
  } 0.8s ease-out ${delay} both`,
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

// Hero title
export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontWeight: 700,
  fontSize: '3.5rem',
  background: 'linear-gradient(45deg, #D84315, #FF5722, #FF8A65)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  lineHeight: 1.5, // Adjusted for better text rendering
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

// Section title
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontWeight: 600,
  fontSize: '2.2rem',
  color: '#D84315',
  marginBottom: theme.spacing(3),
  position: 'relative',
  lineHeight: 1.5, // Added for better text rendering
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '60px',
    height: '4px',
    background: 'linear-gradient(45deg, #FF5722, #FF8A65)',
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    textAlign: 'center',
    '&::after': {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}));

// Content card
export const ContentCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    borderRadius: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    borderRadius: '12px',
  },
}));

// Body text
export const BodyText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto", sans-serif',
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: '#424242',
  textAlign: 'justify',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.6,
    textAlign: 'left',
  },
}));

// Intro text (larger than body text)
export const IntroText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto", sans-serif',
  fontSize: '1.3rem',
  lineHeight: 1.8,
  color: '#424242',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    textAlign: 'left',
  },
}));

// Highlighted text
export const HighlightText = styled('span')(({ theme }) => ({
  background: 'linear-gradient(45deg, #FF5722, #FF8A65)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 600,
  padding: '2px 0', // Add vertical padding to prevent clipping
}));

// Grid container for responsive layout
export const ResponsiveGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
  },
}));

// Mission card with special styling
export const MissionCard = styled(ContentCard)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 167, 38, 0.1) 0%, rgba(255, 213, 128, 0.1) 100%)',
  border: '2px solid rgba(255, 87, 34, 0.2)',
  '&:hover': {
    border: '2px solid rgba(255, 87, 34, 0.4)',
  },
}));

// Vision card with special styling
export const VisionCard = styled(ContentCard)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(255, 138, 101, 0.1) 100%)',
  border: '2px solid rgba(216, 67, 21, 0.2)',
  '&:hover': {
    border: '2px solid rgba(216, 67, 21, 0.4)',
  },
}));