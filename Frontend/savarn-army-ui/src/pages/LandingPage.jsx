import EventsSection from "../components/EventsSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import SocialMediaSection from "../components/SocialMediaSection";
import VisionSection from "../components/VisionSection";
import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <VisionSection />
      {/* <FeaturesSection /> */}
      {/* <CommitmentsSection /> */}
      <SocialMediaSection />
      <FAQSection />
      <EventsSection />
      {/* <RegistrationCard userData={userMockData} /> */}
    </div>
  );
};

export default LandingPage;
