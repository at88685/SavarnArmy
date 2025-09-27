import { Box, Typography, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: none;}
`;

export const VisionRoot = styled(Box)(({ theme }) => ({
  background: '#FFC75F',
  padding: '3rem 0 2.5rem 0',
  minHeight: 'auto',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0 1.5rem 0',
  },
}));

export const VisionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.3rem',
  color: '#222',
  marginBottom: '1.5rem',
  fontFamily: 'inherit',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
}));

export const VisionMission = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '1.35rem',
  color: '#222',
  margin: '0 auto 2.5rem auto',
  maxWidth: '900px',
  lineHeight: 1.5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    padding: '0 0.5rem',
  },
}));

export const VisionCardsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '2.5rem',
  marginTop: '1.5rem',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1.2rem',
    alignItems: 'center',
  },
}));

export const VisionCard = styled(Paper)(({ theme }) => ({
  minWidth: '19rem',
  maxWidth: '25rem',
  background: '#FFF6E0',
  borderRadius: '0.8rem',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
  padding: '0 1.5rem 2.5rem 1.5rem', // top padding removed for image
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  animation: `${fadeInUp} 1s cubic-bezier(.4,0,.2,1)`,
  fontFamily: 'inherit',
  transition: 'box-shadow 0.2s, transform 0.2s',
  '&:hover': {
    boxShadow: '0 8px 32px 0 rgba(255,167,38,0.18)',
    transform: 'translateY(-4px) scale(1.03)',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '90vw',
    maxWidth: '98vw',
    padding: '0 0.7rem 2rem 0.7rem',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '98vw',
    maxWidth: '99vw',
    padding: '0 0.2rem 1.2rem 0.2rem',
    marginBottom: '1.2rem',
  },
}));

export const VisionCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.35rem',
  color: '#222',
  marginBottom: '0.7rem',
  borderBottom: '2px solid #222',
  display: 'inline-block',
  paddingBottom: '0.2rem',
  fontFamily: 'inherit',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
}));

export const VisionCardDesc = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '.75rem',
  color: '#222',
  marginBottom: '.25rem',
  textAlign: 'left',
  fontFamily: 'inherit',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.98rem',
    marginBottom: '0.8rem',
  },
}));

export const VisionCardArrow = styled('span')(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#222',
  position: 'absolute',
  right: '1.2rem',
  bottom: '1.2rem',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    right: '0.7rem',
    bottom: '0.7rem',
    fontSize: '1.2rem',
  },
}));
