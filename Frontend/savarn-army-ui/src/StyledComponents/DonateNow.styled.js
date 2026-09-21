import { Box, Typography, Button, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const DonateNowBg = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 70px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(270deg, #FFA726, #FFD580, #FFB347, #FFECB3, #FFD580, #FFA726)',
  backgroundSize: '1200% 1200%',
  animation: `${animatedGradient} 40s ease infinite`,
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    minHeight: 'calc(100vh - 56px)',
  },
}));

export const DonationModal = styled(Paper)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 480,
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '95%',
  },
}));

export const CloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  minWidth: 'auto',
  padding: theme.spacing(1),
  borderRadius: '50%',
  color: theme.palette.grey[500],
  '&:hover': {
    background: theme.palette.grey[200],
  },
}));

export const DonationHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '24px',
});

export const DonationLogo = styled('img')({
  width: 100,
  height: 100,
  marginBottom: '16px',
});

export const DonationTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#FF8F00',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const DonationForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const AmountButtonGroup = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
  flexWrap: 'wrap',
});

export const AmountButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'selected',
})(({ theme, selected }) => ({
  borderRadius: '16px',
  padding: '8px 16px',
  fontWeight: 600,
  background: selected ? 'linear-gradient(45deg, #66BB6A, #81C784)' : '#E0E0E0',
  color: selected ? '#fff' : '#000',
  border: selected ? '2px solid #4CAF50' : '2px solid transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: selected ? 'linear-gradient(45deg, #4CAF50, #66BB6A)' : '#d5d5d5',
  },
}));

export const DonateButton = styled(Button)(({ theme }) => ({
  padding: '12px 0',
  borderRadius: '12px',
  fontWeight: 700,
  fontSize: '1.2rem',
  color: '#fff',
  background: 'linear-gradient(45deg, #8E24AA, #D81B60)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    background: theme.palette.grey[400],
  },
}));
