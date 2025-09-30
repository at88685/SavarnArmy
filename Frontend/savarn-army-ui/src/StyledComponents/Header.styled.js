import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LogoImg = styled('img')(({ theme }) => ({
  height: 48,
  marginRight: 12,
  [theme.breakpoints.down('md')]: {
    height: 36,
    marginRight: 8,
  },
}));

export const Title = styled('span')(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  color: '#222',
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
  },
}));

export const DonateButton = styled(Button)(({ theme }) => ({
  background: 'orange',
  color: '#fff',
  borderRadius: 8,
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  fontWeight: 600,
  fontSize: 16,
  boxShadow: '0 2px 8px rgba(255, 167, 38, 0.15)',
  border: '2px solid #FFA726',
  textTransform: 'none',
  transition: 'box-shadow 0.3s, border-color 0.3s, background 0.3s, color 0.3s',
  '&:hover': {
    background: '#FFA726',
    color: '#222',
    borderColor: '#222',
    boxShadow: '0 4px 16px rgba(255, 167, 38, 0.35)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 15,
  },
}));
