import React from 'react';
import {
  VisionRoot,
  VisionTitle,
  VisionMission,
  VisionCardsRow,
  VisionCard,
  VisionCardTitle,
  VisionCardDesc,
  VisionCardArrow
} from '../StyledComponents/VisionSection.styled';
import { VISION_TEXT } from '../constants/visionSection.constants';
import '../styles/VisionSection.css';

// Import images directly so Webpack can resolve them
import equalityImg from '../assets/photos/equality.jpg';
import unityImg from '../assets/photos/unity.jpg';
import socialImpImg from '../assets/photos/social-impowerment.jpg';

const visionCardImage = [equalityImg, unityImg, socialImpImg];

const VisionSection = () => (
  <VisionRoot>
    <VisionTitle variant="h3">{VISION_TEXT.heading}</VisionTitle>
    <VisionMission variant="h5">{VISION_TEXT.mission}</VisionMission>
    <VisionCardsRow>
      {VISION_TEXT.cards.map((card, idx) => (
        <VisionCard key={idx} className="vision-card-animate">
          <img
            src={visionCardImage[idx]}
            alt="vision"
            className="vision-card-img"
            style={{
              width: 'calc(100%)',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '1rem 1rem 0 0',
              margin: '-1.2rem -1rem 1.2rem -1rem',
              boxShadow: '0 4px 16px 0 rgba(255,167,38,0.10)'
            }}
          />
          <VisionCardTitle variant="h5">{card.title}</VisionCardTitle>
          <VisionCardDesc variant="body1">{card.desc}</VisionCardDesc>
          <VisionCardArrow>→</VisionCardArrow>
        </VisionCard>
      ))}
    </VisionCardsRow>
  </VisionRoot>
);

export default VisionSection;