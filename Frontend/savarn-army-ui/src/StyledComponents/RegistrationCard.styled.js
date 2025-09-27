import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// The main container for the card, with a subtle background
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
  width: 340,
  fontFamily: '"Poppins", "Roboto", sans-serif',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  background: '#fff',
  border: '1px solid #eee',
}));

// Header of the card with gradient background
export const CardHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FFA726, #FFC107)',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
  position: 'relative',
}));

export const HeaderLogoLeft = styled('img')({
  width: 50,
  height: 50,
  position: 'absolute',
  top: '16px',
  left: '16px',
});

export const HeaderLogoRight = styled('img')({
  width: 50,
  height: 50,
  position: 'absolute',
  top: '16px',
  right: '16px',
  borderRadius: '50%',
});

export const HeaderTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.2rem',
  letterSpacing: '1px',
  textTransform: 'uppercase',
});

export const HeaderSubtitle = styled(Typography)({
  fontSize: '0.8rem',
  opacity: 0.9,
});

// Main body of the card
export const CardBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2),
  //paddingTop: theme.spacing(4),
  textAlign: 'center',
}));

export const UserAvatar = styled('img')({
  width: 120,
  height: 120,
  borderRadius: '50%',
  border: '5px solid #fff',
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  marginTop: '-80px',
  background: '#fff',
  objectFit: 'cover',
});

export const UserName = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.5rem',
  marginTop: '12px',
  color: '#333',
});

export const UserId = styled(Typography)({
  fontSize: '0.8rem',
  color: '#777',
  background: '#f0f0f0',
  padding: '4px 8px',
  borderRadius: '8px',
  display: 'inline-block',
  marginTop: '8px',
  fontFamily: 'monospace',
});

// Details section (mobile, email)
export const DetailsSection = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(0, 3),
  marginTop: '16px',
}));

export const DetailItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
  fontSize: '0.9rem',
  color: '#555',
  '& .icon': {
    marginRight: '12px',
    color: '#FFA726',
    fontSize: '20px',
  },
});

// Footer of the card
export const CardFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#f9f9f9',
  padding: theme.spacing(1.5, 2),
  borderTop: '1px solid #eee',
}));

export const DateInfo = styled(Box)({
  textAlign: 'center',
  '& .label': {
    fontSize: '0.7rem',
    color: '#888',
    fontWeight: 500,
  },
  '& .date': {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#444',
  },
});

export const QrCode = styled('img')({
  width: 50,
  height: 50,
});

// Download buttons container
export const DownloadButtons = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginTop: '10px',
});

export const DownloadButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  borderRadius: '12px',
  padding: '8px 20px',
  transition: 'all 0.3s ease',
  '&.image': {
    background: '#2196F3',
    color: '#fff',
    '&:hover': {
      background: '#1976D2',
    },
  },
  '&.pdf': {
    background: '#F44336',
    color: '#fff',
    '&:hover': {
      background: '#D32F2F',
    },
  },
}));
