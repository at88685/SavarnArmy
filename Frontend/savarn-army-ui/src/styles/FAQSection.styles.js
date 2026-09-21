import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FAQRoot = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '70vh',
  background: '#FFE0B2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 0',
  },
}));

export const FAQGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '2.5rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
}));

export const FAQLeft = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const FAQTitle = styled(Typography)(({ theme }) => ({
  color: '#1565c0',
  fontWeight: 700,
  fontSize: '2.2rem',
  marginBottom: '0.7rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
}));

export const FAQSubtitle = styled(Typography)(({ theme }) => ({
  color: '#222',
  fontSize: '1.2rem',
  marginBottom: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const FAQQuestion = styled(Typography)(({ theme }) => ({
  color: '#1565c0',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: '0.3rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.05rem',
  },
}));

export const FAQAnswer = styled(Typography)(({ theme }) => ({
  color: '#222',
  fontSize: '1.1rem',
  marginBottom: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const FAQButton = styled(Button)(({ theme }) => ({
  borderRadius: '1.5rem',
  fontWeight: 500,
  fontSize: '1rem',
  padding: '0.5rem 1.5rem',
  marginTop: '0.5rem',
  background: '#fff',
  color: '#FFA726',
  border: '1px solid #FFA726',
  '&:hover': {
    background: '#FFA726',
    color: '#fff',
  },
}));

export const FAQRight = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    alignItems: 'center',
  },
}));

export const FAQCard = styled(Box)(({ theme }) => ({
  background: '#7c6f5f',
  color: '#fff',
  borderRadius: '1rem',
  padding: '1.1rem 1.3rem',
  boxShadow: '0 2px 8px rgba(44, 44, 44, 0.10)',
  minWidth: '320px',
  maxWidth: '420px',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'unset',
    maxWidth: '100%',
    padding: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
}));

export const FAQCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
  color: '#fff',
}));

export const FAQCardContent = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#fff',
  fontWeight: 400,
}));

export const FAQCardIcon = styled('span')({
  marginLeft: 8,
  display: 'flex',
  alignItems: 'center',
});
