import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RegistrationBg = styled(Box)`
  background: #eaf6ff;
  min-height: 100vh;
  padding: 1rem;
`;

export const RegistrationForm = styled(Box)`
  max-width: 900px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #0001;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
`;

export const RegistrationHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RegistrationLogo = styled('img')`
  width: 70px;
  margin-right: 16px;
`;

export const RegistrationTitle = styled('h2')`
  font-weight: 700;
  color: #222;
  font-size: 24px;
  margin: 0;
`;

export const RegGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 28px;
  margin-bottom: 0;

  & > .reg-item {
    width: 100%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const RegisterBtn = styled('button')`
  background: #000;
  color: #fff;
  padding: 12px 40px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 18px;
  margin-top: 18px;
  width: 100%;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: none;
  cursor: pointer;
`;

export const UploadBox = styled(Box)`
  width: 180px;
  height: 240px;
  aspect-ratio: 3/4;
  border: 2px dashed #bdbdbd;
  border-radius: 12px;
  background: #f7fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border 0.2s;
  &:hover {
    border-color: #1976d2;
  }
`;

export const PreviewBox = styled(Box)`
  width: 180px;
  height: 240px;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px #0002;
  background: #f7fbff;
`;
