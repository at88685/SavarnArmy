import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { footerContent } from '../content/footerContent';
import '../styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footerid">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="contact-us">
            <h3>{footerContent.contactUs}</h3>
            <p>{footerContent.addressLine1}</p>
            <p>{footerContent.addressLine2}</p>
            <p>{footerContent.emailLabel}: {footerContent.email}</p>
            <p>{footerContent.phoneLabel}: {footerContent.phone}</p>
          </div>
          <div className="social-links">
            <a href={footerContent.instagram} className="social-link" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href={footerContent.facebook} className="social-link" target="_blank" rel="noopener noreferrer"><FacebookRoundedIcon /></a>
            <a href={`mailto:${footerContent.email}`} className="social-link" target="_blank" rel="noopener noreferrer"><EmailRoundedIcon /></a>
            <a href={footerContent.whatsapp} className="social-link" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
          </div>
          <div className="quick-links">
            <h3>{footerContent.quickLinksTitle}</h3>
            <ul>
              <li>
                <a href="/"><span>{footerContent.home}</span></a>
              </li>
              <li>
                <a href="about"><span>{footerContent.aboutUs}</span></a>
              </li>
              <li>
                <a href="contact"><span>{footerContent.contact}</span></a>
              </li>
            </ul>
          </div>
          <iframe
            src={footerContent.mapSrc}
            style={{ borderRadius: 10, flex: "20%", minHeight: '20vh' }}
            title="Savarn Army Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="footer-copyright">
          &copy; {year} {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;