import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledField = styled(TextField)(({ theme }) => `
  &.MuiFormControl-root { width: 100%; }
  & .MuiInputBase-root {
    background: #f7fbff;
    border-radius: 8px;
    height: 56px;
  }
  & .MuiOutlinedInput-root { border-radius: 8px; }
  & .MuiOutlinedInput-notchedOutline { border-color: #bdbdbd; }
  &.Mui-error .MuiOutlinedInput-notchedOutline { border-color: #e53935; }
  & .MuiOutlinedInput-input { padding: 12px 12px; height: 32px; box-sizing: border-box; }
  & .MuiSelect-select { padding: 12px 12px; height: 32px; display: flex; align-items: center; box-sizing: border-box; }
  & .MuiInputAdornment-root { margin-right: 8px; margin-left: 6px; }
  & .MuiFormHelperText-root { margin-left: 0; }
`);

const StyledTextField = ({ icon, ...props }) => (
  <StyledField
    fullWidth
    margin="none"
    size="medium"
    InputProps={icon ? {
      startAdornment: (
        <InputAdornment position="start">
          <span style={{ fontSize: 18, lineHeight: '1' }}>{icon}</span>
        </InputAdornment>
      ),
      ...props.InputProps,
    } : props.InputProps}
    {...props}
  />
);

export default StyledTextField;
