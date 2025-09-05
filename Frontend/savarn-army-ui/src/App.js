import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MembershipPlan from './components/MembershipPlan';
import VisionSection from './components/VisionSection';
import FeaturesSection from './components/FeaturesSection';
import CommitmentsSection from './components/CommitmentsSection';
import SocialMediaSection from './components/SocialMediaSection';
import FAQSection from './components/FAQSection';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MembershipPlan />
      <VisionSection />
      <FeaturesSection />
      <CommitmentsSection />
      <SocialMediaSection />
      <FAQSection />
      <EventsSection />
      <Footer />
    </div>
  );
}

export default App;
