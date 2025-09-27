import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import {
  CardWrapper,
  IdCard,
  CardHeader,
  HeaderLogoLeft,
  HeaderLogoRight,
  HeaderTitle,
  HeaderSubtitle,
  CardBody,
  UserName,
  UserId,
  DetailsSection,
  DetailItem,
  CardFooter,
  DateInfo,
  DownloadButtons,
  DownloadButton,
} from '../StyledComponents/RegistrationCard.styled';
import { Phone, Email } from '@mui/icons-material';
import logo from '../assets/logo/logo.png';
import logo2 from '../assets/photos/sarvesh-pandey-transformed.webp';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

const RegistrationCard = ({ userData }) => {
  const cardRef = useRef(null);

  const handleDownloadImage = () => {
    
      htmlToImage
        .toPng(cardRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'registration-card.png';
          link.click();
        })
        .catch((err) => {
          console.error('oops, something went wrong!', err);
        });
    
  };

  const {
    userId,
    fullName,
    mobile,
    email,
    createdOn,
    validTill,
  } = userData;

  return (
    <CardWrapper>
      <IdCard ref={cardRef}>
        <CardHeader>
          <HeaderLogoLeft src={logo} alt="Logo" />
          <HeaderTitle>Savarn Army</HeaderTitle>
          <HeaderSubtitle>Membership Card</HeaderSubtitle>
          <HeaderLogoRight src={logo2} alt="Logo" />
        </CardHeader>

        <CardBody>
          <UserName>{fullName}</UserName>
          <UserId>{userId}</UserId>
        </CardBody>

        <DetailsSection>
          <DetailItem>
            <Phone className="icon" />
            <span>{mobile}</span>
          </DetailItem>
          <DetailItem>
            <Email className="icon" />
            <span>{email}</span>
          </DetailItem>
        </DetailsSection>

        <CardFooter>
          <DateInfo>
            <div className="label">Issued On</div>
            <div className="date">{formatDate(createdOn)}</div>
          </DateInfo>
          {/* <QrCode src={qrCodeImage} alt="QR Code" /> */}
          <DateInfo>
            <div className="label">Valid Till</div>
            <div className="date">{formatDate(validTill)}</div>
          </DateInfo>
        </CardFooter>
      </IdCard>

      <DownloadButtons>
        <DownloadButton className="image" onClick={handleDownloadImage}>
          Download Image
        </DownloadButton>
      </DownloadButtons>
    </CardWrapper>
  );
};

export default RegistrationCard;
