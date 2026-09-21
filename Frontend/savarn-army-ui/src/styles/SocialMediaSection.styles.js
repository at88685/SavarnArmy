import { Box, Typography, Stack, Paper, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: none;}
`;

export const SectionRoot = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '60vh',
  background: 'linear-gradient(135deg, #FFD580 0%, #FFA726 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.5rem 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '1.5rem 0',
  },
}));

export const ContentGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '2rem',
  },
}));

export const PhotoCircle = styled(Paper)(({ theme }) => ({
  width: '22rem',
  height: '22rem',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '4px solid #444',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  animation: `${fadeIn} 1s`,
  [theme.breakpoints.down('sm')]: {
    width: '14rem',
    height: '14rem',
  },
}));

export const InfoCol = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  animation: `${fadeIn} 1.2s`,
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  color: '#222',
  marginBottom: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    marginBottom: '0.7rem',
  },
}));

export const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#222',
  marginBottom: '1.2rem',
  maxWidth: '32rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '1rem',
    maxWidth: '100%',
  },
}));

export const List = styled('ul')(({ theme }) => ({
  margin: '1.2rem 0 1.5rem 0',
  padding: 0,
  listStyle: 'none',
  color: '#222',
  fontSize: '1.1rem',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    margin: '0.7rem 0 1rem 0',
  },
}));

export const ListItem = styled('li')(({ theme }) => ({
  marginBottom: '0.7rem',
  '&:before': {
    content: '"•"',
    color: '#FFA726',
    fontWeight: 700,
    display: 'inline-block',
    width: '1.2em',
    marginLeft: '-1.2em',
  },
}));

export const SocialIconsRow = styled(Stack)(({ theme }) => ({
  marginTop: '1.5rem',
  gap: '1.5rem',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    marginTop: '1rem',
  },
}));

export const SocialIconBtn = styled(Button)(({ theme }) => ({
  minWidth: '2.8rem',
  height: '2.8rem',
  borderRadius: '50%',
  background: '#fff',
  color: '#222',
  fontSize: '1.7rem',
  boxShadow: '0 2px 8px rgba(255, 167, 38, 0.10)',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  '&:hover': {
    background: '#FFA726',
    color: '#fff',
    boxShadow: '0 4px 16px rgba(255, 167, 38, 0.18)',
  },
}));
