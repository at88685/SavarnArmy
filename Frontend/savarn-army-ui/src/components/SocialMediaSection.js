import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  SectionRoot,
  ContentGrid,
  PhotoCircle,
  InfoCol,
  MainTitle,
  SubText,
  List,
  ListItem,
  SocialIconsRow,
  SocialIconBtn,
} from '../styles/SocialMediaSection.styles';
import content from '../content/socialMediaSectionContent';

const SocialMediaSection = () => (
  <SectionRoot>
    <ContentGrid>
      <PhotoCircle elevation={3}>
        <img
          src={content.imageUrl}
          alt={content.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </PhotoCircle>
      <InfoCol>
        <MainTitle>{content.title}</MainTitle>
        <SubText>{content.description}</SubText>
        <List>
          {content.features.map((item, idx) => (
            <ListItem key={idx}>{item}</ListItem>
          ))}
        </List>
        <SocialIconsRow direction="row">
          <SocialIconBtn href={content.links.facebook} aria-label="Facebook">
            <FacebookIcon fontSize="inherit" />
          </SocialIconBtn>
          <SocialIconBtn href={content.links.instagram} aria-label="Instagram">
            <InstagramIcon fontSize="inherit" />
          </SocialIconBtn>
          <SocialIconBtn href={content.links.close} aria-label="Close">
            <CloseIcon fontSize="inherit" />
          </SocialIconBtn>
          <SocialIconBtn href={content.links.youtube} aria-label="YouTube">
            <YouTubeIcon fontSize="inherit" />
          </SocialIconBtn>
        </SocialIconsRow>
      </InfoCol>
    </ContentGrid>
  </SectionRoot>
);

export default SocialMediaSection;