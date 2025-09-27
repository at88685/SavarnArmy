import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import LandingPage from './pages/LandingPage';
import Registration from './pages/Registration';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import DonateNow from './pages/DonateNow';
import HelpUs from './pages/HelpUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate-now" element={<DonateNow />} />
          <Route path="/help" element={<HelpUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
