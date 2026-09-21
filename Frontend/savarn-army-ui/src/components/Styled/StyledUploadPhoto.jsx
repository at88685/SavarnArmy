import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close';
import { UploadBox, PreviewBox } from '../../StyledComponents/Registration.styled';

const StyledUploadPhoto = ({ imagePreview, error, onImageChange, onDrop, onRemovePhoto }) => {
  const inputRef = useRef();
  return (
    <Box mt={3} mb={2} display="flex" flexDirection="column" alignItems="center">
      <Typography fontWeight={500} mb={1} align="center" fontSize={20}>Upload Photo</Typography>
      {!imagePreview ? (
        <UploadBox
          sx={error ? { border: '2px dashed #e53935' } : {}}
          onClick={() => inputRef.current && inputRef.current.click()}
          onDragOver={e => e.preventDefault()}
          onDrop={onDrop}
        >
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onImageChange}
            style={{ display: 'none' }}
          />
          <PhotoCamera sx={{ fontSize: 48, color: '#90caf9' }} />
          <Typography color="#1976d2" fontWeight={500} mt={1} fontSize={16}>
            Drag & drop or click to upload photo
          </Typography>
          <Typography color="#888" fontSize={13} mt={0.5}>
            Only image files allowed
          </Typography>
        </UploadBox>
      ) : (
        <PreviewBox>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <IconButton
            size="small"
            onClick={onRemovePhoto}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'rgba(0,0,0,0.6)',
              color: '#fff',
              zIndex: 2,
              '&:hover': { background: 'rgba(0,0,0,0.8)' },
            }}
            aria-label="Remove photo"
          >
            <CloseIcon />
          </IconButton>
        </PreviewBox>
      )}
      {error && <Typography color="#e53935" fontSize={13} mt={1}>{error}</Typography>}
    </Box>
  );
};

export default StyledUploadPhoto;
