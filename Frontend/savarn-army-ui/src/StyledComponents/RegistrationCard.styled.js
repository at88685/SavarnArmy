import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// The main container for the card
export const CardWrapper = styled(Box)({
  padding: '20px',
  background: '#f4f6f8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
});

// The ID card itself
export const IdCard = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 550,
  fontFamily: '"Inter", "Roboto", sans-serif',
  borderRadius: '10px',
  overflow: 'hidden',
  background: '#F9A825', // Orange background from image
  color: 'white',
  padding: theme.spacing(2),
  border: '2px solid white',
}));

// Header of the card
export const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  paddingBottom: theme.spacing(1),
  borderBottom: '2px solid white',
  marginBottom: theme.spacing(2),
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const HeaderLogo = styled('img')({
  width: 50,
  height: 50,
  borderRadius: '50%',
});

export const HeaderText = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  letterSpacing: '2px',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.8rem',
  },
}));

export const HeaderSubtitle = styled(Typography)({
  fontSize: '0.6rem',
  color: 'white',
  opacity: 1,
});

// Main body of the card
export const CardBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
  },
}));

export const UserAvatar = styled('img')(({ theme }) =>({
  width: 120,
  height: 140,
  objectFit: 'cover',
  background: '#fff',
  padding: '4px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
  width: 80,
  height: 100,
  },
}));

export const UserDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    gap: '4px',
  },
}));

export const DetailItem = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '.8rem',
  },
}));

// Footer of the card
export const CardFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0, 1, 0),
  textAlign: 'center',
  borderTop: '2px solid white',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0),
    padding: theme.spacing(2, 0, 0, 0),
  },
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.9rem',
  },
}));

// Download buttons container
export const DownloadButtons = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginTop: '10px',
});

export const DownloadButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  borderRadius: '8px',
  padding: '8px 20px',
  transition: 'all 0.3s ease',
  background: '#2196F3',
  color: '#fff',
  '&:hover': {
    background: '#1976D2',
  },
}));
