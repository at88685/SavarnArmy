import { Box, Typography, Button, Paper, FormControl, RadioGroup, FormGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HelpUsBg = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 70px)',
  padding: theme.spacing(4, 2),
  background: '#f4f6f8',
  [theme.breakpoints.down('md')]: {
    minHeight: 'calc(100vh - 56px)',
    padding: theme.spacing(2, 1),
  },
}));

export const HelpUsFormContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 900,
  padding: theme.spacing(5),
  borderRadius: '20px',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  background: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const HelpUsHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '32px',
  gap: '16px',
});

export const HelpUsLogo = styled('img')({
  width: 70,
  height: 70,
});

export const HelpUsTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#333',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

export const FormGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2.5),
  },
}));

export const FullWidthControl = styled(FormControl)({
  gridColumn: '1 / -1',
});

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontWeight: 600,
    color: '#555',
    marginBottom: theme.spacing(1),
  },
}));

export const StyledRadioGroup = styled(RadioGroup)({
  flexDirection: 'row',
});

export const StyledFormGroup = styled(FormGroup)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '8px',
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FFC107, #FF9800)',
  color: '#fff',
  fontWeight: 'bold',
  padding: theme.spacing(1.5),
  borderRadius: '12px',
  marginTop: theme.spacing(4),
  fontSize: '1.1rem',
  '&:hover': {
    background: 'linear-gradient(45deg, #FFCA28, #FFA726)',
    boxShadow: '0 4px 15px rgba(255, 167, 38, 0.4)',
  },
}));
