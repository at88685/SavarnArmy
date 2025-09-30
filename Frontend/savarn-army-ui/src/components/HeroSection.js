import React from 'react';
import { Stack, Avatar, Typography } from '@mui/material';
import {
  HeroRoot,
  MainGrid,
  LeftCol,
  RightCol,
  MainTitle,
  SubTitle,
  StyledButton,
  CardsRow,
  FixedCard,
  Name,
  Role,
  MembershipCard,
  MembershipButton,
  AnimatedBox
} from '../StyledComponents/HeroSection.styled';
import { HERO_TEXT, MEMBERSHIP_PLAN } from '../constants/heroSection.constants';
import '../styles/HeroSection.css';
import DevelopmentCommitment from './sections/DevelopmentCommitment';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <HeroRoot>
    <MainGrid>
      {/* Left Column */}
      <LeftCol
        sx={{
          minWidth: { xs: '100%', sm: '100%', md: '21rem' },
          maxWidth: { xs: '100%', sm: '100%', md: '36rem' },
          px: { xs: 0, sm: 0, md: 0 }
        }}
      >
        <AnimatedBox direction="left" delay="0s">
          <MainTitle
            variant="h2"
            sx={{
              fontSize: { xs: '1.4rem', sm: '2rem', md: '2.6rem' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            {HERO_TEXT.title}
          </MainTitle>
          <SubTitle
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            {HERO_TEXT.subtitle}
          </SubTitle>
          <DevelopmentCommitment />
          <Stack
            direction="row"
            spacing={2}
            className="hero-btn-stack"
            justifyContent="center"
            sx={{
              flexWrap: 'wrap',
              width: { xs: '100%', sm: '100%', md: 'auto' }
            }}
          >
            <Link to='registration' style={{ color: 'inherit', textDecoration: 'none' }}>
            <StyledButton
              variant="outlined"
              color="inherit"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
              {HERO_TEXT.joinBtn}
            </StyledButton>
            </Link>
            <StyledButton
              variant="contained"
              color="warning"
              className="hero-video-btn"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
              {HERO_TEXT.videoBtn}
            </StyledButton>
          </Stack>
        </AnimatedBox>
      </LeftCol>
      {/* Right Column */}
      <RightCol
        sx={{
          minWidth: { xs: '100%', sm: '100%', md: '21rem' },
          maxWidth: { xs: '100%', sm: '100%', md: '36rem' },
          px: { xs: 0, sm: 0, md: 0 }
        }}
      >
        <CardsRow
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            alignItems: 'center'
          }}
        >
          <AnimatedBox direction="up" delay="0.2s">
            <FixedCard
              sx={{
                width: { xs: '12rem', sm: '10rem', md: '13rem' },
                height: { xs: '14rem', sm: '12rem', md: '15rem' }
              }}
            >
              <Avatar
                src={require('../assets/photos/sarvesh-pandey.jpeg')}
                alt={HERO_TEXT.member1.name}
                className="hero-avatar"
                sx={{
                  width: { xs: '5.5rem', sm: '5.5rem', md: '7.5rem' },
                  height: { xs: '5.5rem', sm: '5.5rem', md: '7.5rem' },
                  '& .MuiAvatar-img': {width: 'unset'}
                }}
              />
              <Name sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>{HERO_TEXT.member1.name}</Name>
              <Role sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>{HERO_TEXT.member1.role}</Role>
            </FixedCard>
          </AnimatedBox>
          <AnimatedBox direction="up" delay="0.4s">
            <FixedCard
              sx={{
                width: { xs: '12rem', sm: '10rem', md: '13rem' },
                height: { xs: '14rem', sm: '12rem', md: '15rem' }
              }}
            >
              <Avatar
                src={require('../assets/photos/shivam-singh-1.jpeg')}
                alt={HERO_TEXT.member2.name}
                className="hero-avatar"
                sx={{
                  width: { xs: '5.5rem', sm: '5.5rem', md: '7.5rem' },
                  height: { xs: '5.5rem', sm: '5.5rem', md: '7.5rem' }
                }}
              />
              <Name sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>{HERO_TEXT.member2.name}</Name>
              <Role sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>{HERO_TEXT.member2.role}</Role>
            </FixedCard>
          </AnimatedBox>
        </CardsRow>
        <MembershipCard
          sx={{
            minWidth: { xs: '15rem', sm: '16rem', md: '18rem' },
            maxWidth: { xs: '20rem', sm: '22rem', md: '22rem' },
          }}
        >
          <Typography variant="h5" className="membership-title">
            {MEMBERSHIP_PLAN.title}
          </Typography>
          <Typography variant="h4" className="membership-price">
            {MEMBERSHIP_PLAN.price}
          </Typography>
          <Typography variant="subtitle1" className="membership-type">
            {MEMBERSHIP_PLAN.type}
          </Typography>
          <div className="membership-features">
            {MEMBERSHIP_PLAN.features.map((feature, idx) => (
              <span key={idx}>{feature} &nbsp;</span>
            ))}
          </div>
          <Link to='registration' style={{ color: 'inherit', textDecoration: 'none' }}>
          <MembershipButton variant="contained">
            {MEMBERSHIP_PLAN.button}
          </MembershipButton>
        </Link>
        </MembershipCard>
      </RightCol>
    </MainGrid>
  </HeroRoot>
);

export default HeroSection;