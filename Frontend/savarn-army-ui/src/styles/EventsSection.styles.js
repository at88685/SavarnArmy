import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EventsRoot = styled(Box)(({ theme }) => ({
  width: '100%',
  background: 'linear-gradient(135deg, #FFD580 0%, #FFA726 100%)',
  padding: '3rem 0 2rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0 1rem 0',
  },
}));

export const EventsHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.1rem',
  color: '#222',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
    marginBottom: '1.2rem',
  },
}));

export const EventsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
  gap: '2rem',
  width: '90%',
  maxWidth: '1100px',
  margin: '0 auto 2rem auto',
  [theme.breakpoints.down('sm')]: {
    gap: '1.2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
}));

export const EventCard = styled(Card)(({ theme }) => ({
  borderRadius: '1.2rem',
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0 2px 12px rgba(255, 167, 38, 0.10)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.18s, box-shadow 0.18s',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.03)',
    boxShadow: '0 6px 24px rgba(255, 167, 38, 0.18)',
  },
}));

export const EventImage = styled('img')({
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  background: '#eee',
});

export const EventCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1.2rem 1.3rem 1.3rem 1.3rem',
  gap: '0.7rem',
});

export const EventTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.15rem',
  color: '#222',
});

export const EventMeta = styled(Typography)({
  fontSize: '0.98rem',
  color: '#FFA726',
  fontWeight: 500,
});

export const EventButton = styled(Button)({
  marginTop: '0.5rem',
  borderRadius: '1.2rem',
  fontWeight: 500,
  fontSize: '0.97rem',
  padding: '0.35rem 1.2rem',
  background: '#FFA726',
  color: '#fff',
  '&:hover': {
    background: '#fb8c00',
  },
});

export const EventsNavButton = styled(Button)(({ theme }) => ({
  marginTop: '1.5rem',
  borderRadius: '1.5rem',
  fontWeight: 600,
  fontSize: '1.08rem',
  padding: '0.6rem 2.2rem',
  background: '#fff',
  color: '#FFA726',
  border: '1.5px solid #FFA726',
  '&:hover': {
    background: '#FFA726',
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.98rem',
    padding: '0.5rem 1.2rem',
    marginTop: '1rem',
  },
}));
