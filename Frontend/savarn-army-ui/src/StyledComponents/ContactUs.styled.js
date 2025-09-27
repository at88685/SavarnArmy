import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactUsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 70px)',
  padding: theme.spacing(4),
  background: '#f9f9f9', // A light background for the whole page
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    minHeight: 'calc(100vh - 56px)',
  },
}));

export const ContactWrapper = styled(Paper)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  width: '100%',
  maxWidth: 1100,
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  background: 'linear-gradient(135deg, #FFA726, #FFB74D)',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  background: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  marginBottom: theme.spacing(3),
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  marginBottom: theme.spacing(1),
  color: '#FFA726',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#555',
  marginBottom: theme.spacing(3),
}));

export const ContactDetail = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .icon': {
    marginRight: theme.spacing(1.5),
    color: '#FFA726',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiInputLabel-root': {
    color: '#777',
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  background: '#fff',
  color: '#FFA726',
  fontWeight: 'bold',
  padding: theme.spacing(1.5),
  borderRadius: '12px',
  marginTop: theme.spacing(2),
  '&:hover': {
    background: '#f0f0f0',
  },
}));

export const MapContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  height: 250,
  borderRadius: '12px',
  overflow: 'hidden',
  '& iframe': {
    border: 0,
    width: '100%',
    height: '100%',
  },
}));
