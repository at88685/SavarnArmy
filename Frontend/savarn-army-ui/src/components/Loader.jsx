import React from 'react';
import { CircularProgress, useTheme } from '@mui/material';

function Loader({ open = false, message = '' }) {
  const theme = useTheme();
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.35)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      zIndex: 2000,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: 18,
        background: 'rgba(255,255,255,0.92)',
        borderRadius: 8,
        boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
      }}>
        <CircularProgress style={{ color: theme.palette.primary.main }} />
        {message ? <div style={{ color: '#333', fontSize: 14 }}>{message}</div> : null}
      </div>
    </div>
  );
}

export default Loader;
