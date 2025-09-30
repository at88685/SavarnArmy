import React, { useRef, useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import {
  CardWrapper,
  IdCard,
  CardHeader,
  HeaderLogo,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  CardBody,
  UserAvatar,
  UserDetails,
  DetailItem,
  CardFooter,
  FooterText,
  DownloadButtons,
  DownloadButton,
} from '../StyledComponents/RegistrationCard.styled';
import logo from '../assets/logo/logo.png';
import logo2 from '../assets/photos/sarvesh-pandey.jpeg';
import Loader from './Loader';

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

const RegistrationCard = ({ userData }) => {
  const cardRef = useRef(null);
  const [base64Image, setBase64Image] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(
    'Generating membership card...'
  );

  const { userId, fullName, mobile, imageURL, createdOn, validTill } = userData;

  useEffect(() => {
    const fetchImage = async () => {
      if (!imageURL) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(
          'https://5ybhbgwo1c.execute-api.ap-south-1.amazonaws.com/get-image',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: imageURL }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch base64 image.');
        }

        const data = await response.json();
        setBase64Image(data.imageBase64);
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setLoading(false);
        setLoadingMessage('');
      }
    };

    fetchImage();
  }, [imageURL]);

  const handleDownloadImage = () => {
    if (cardRef.current) {
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
    }
  };

  if (loading) {
    return <Loader open={loading} message={loadingMessage} />;
  }

  return (
    <CardWrapper>
      <IdCard ref={cardRef}>
        <CardHeader>
          <HeaderLogo src={logo} alt="Logo" />
          <HeaderText>
            <HeaderTitle>SAWARN ARMY CARD</HeaderTitle>
            <HeaderSubtitle>Sawarn Seva Nyas, Regd. 10/020</HeaderSubtitle>
          </HeaderText>
          <HeaderLogo src={logo2} alt="Right Logo" />
        </CardHeader>
        <CardBody>
          <UserAvatar src={base64Image} alt="User Avatar" />
          <UserDetails>
            <DetailItem>Name: {fullName}</DetailItem>
            <DetailItem>ID Code: {userId}</DetailItem>
            <DetailItem>M. No: {mobile}</DetailItem>
            <DetailItem>Issued On: {formatDate(createdOn)}</DetailItem>
            <DetailItem>Valid Till: {formatDate(validTill)}</DetailItem>
          </UserDetails>
        </CardBody>
        <CardFooter>
          <FooterText>मेरा देश । मेरा अभिमान । राष्ट्र सर्वोपरि</FooterText>
        </CardFooter>
      </IdCard>

      <DownloadButtons>
        <DownloadButton onClick={handleDownloadImage}>
          Download Card
        </DownloadButton>
      </DownloadButtons>
    </CardWrapper>
  );
};

export default RegistrationCard;
