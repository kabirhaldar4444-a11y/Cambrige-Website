import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { footerAbout, footerQuickLinks, footerContactInfo, footerPolicyLinks } from '../../data/footerData';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight, FaArrowUp, FaPaperPlane } from 'react-icons/fa';
import cambridgeLogo from '../../assets/images/logo/cambridge_logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [showFloatingBackToTop, setShowFloatingBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowFloatingBackToTop(true);
      } else {
        setShowFloatingBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setSuccessMsg('Submitting email...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "4c65807a-e5d0-46e0-9cbd-70d264618cf1",
          subject: "New Cambridge Learning Services Newsletter Subscription",
          email: email
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setSuccessMsg('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        setSuccessMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setSuccessMsg('Network error. Please try again later.');
    }

    setTimeout(() => {
      setSuccessMsg('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Top Gradient Accent Line */}
      <div className="footer-top-accent" />

      <div className="container footer-top-grid">
        {/* Left Column: Brand & Newsletter */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-area">
            <img src={cambridgeLogo} alt="Cambridge Learning Services" className="footer-logo-img" />
          </Link>
          <p className="footer-subtext">{footerAbout.subText}</p>
          
          <div className="footer-newsletter-card">
            <h5 className="newsletter-title">Subscribe to Updates</h5>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  placeholder="Your Email Address *" 
                  className="footer-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe" disabled={subscribed}>
                  <FaPaperPlane size={13} />
                </button>
              </div>
              <div className="newsletter-checkbox">
                <input type="checkbox" id="newsletter-check" required defaultChecked />
                <label htmlFor="newsletter-check">{footerAbout.newsletterTitle}</label>
              </div>
              {successMsg && <span className="newsletter-success">{successMsg}</span>}
            </form>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            {footerQuickLinks.map((link, idx) => (
              <li key={idx}>
                {link.external || link.path.startsWith('http') ? (
                  <a 
                    href={link.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-link-item"
                  >
                    <FaChevronRight size={10} className="link-arrow" /> {link.name}
                  </a>
                ) : (
                  <Link to={link.path} className="footer-link-item">
                    <FaChevronRight size={10} className="link-arrow" /> {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle-Right Column: Contact Info */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact Us</h4>
          
          <div className="contact-item">
            <div className="contact-icon"><FaEnvelope /></div>
            <div>
              <span className="contact-label">Email:</span>
              <a href={`mailto:${footerContactInfo.email}`} className="contact-value highlight">
                {footerContactInfo.email}
              </a>
            </div>
          </div>

          {footerContactInfo.phones && (
            <div className="contact-item">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <div>
                <span className="contact-label">Phone Support:</span>
                <div className="contact-phones-list">
                  {footerContactInfo.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="contact-value">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="contact-item">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div>
              <span className="contact-label">Corporate Address:</span>
              <p className="contact-value address">{footerContactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Policies */}
        <div className="footer-col policies-col">
          <h4 className="footer-heading">Policies & Compliance</h4>
          <ul className="footer-links-list">
            {footerPolicyLinks.map((link, idx) => (
              <li key={idx}>
                {link.external || link.path.startsWith('http') ? (
                  <a 
                    href={link.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-link-item"
                  >
                    <FaChevronRight size={10} className="link-arrow" /> {link.name}
                  </a>
                ) : (
                  <Link to={link.path} className="footer-link-item">
                    <FaChevronRight size={10} className="link-arrow" /> {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex-between flex-wrap gap-md align-center">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Cambridge Learning Services. All Rights Reserved.
          </p>
          <p className="disclaimer">
            Delivering Globally Recognized Certifications in Different Domains.
          </p>
          <button className="footer-inline-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp size={11} /> <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        className={`back-to-top-btn ${showFloatingBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Back to top"
        title="Scroll to Top"
      >
        <FaArrowUp size={16} />
      </button>

      <style>{`
        .site-footer {
          background: linear-gradient(180deg, #0A1F17 0%, #06140F 100%);
          color: #94A3B8;
          padding-top: 0;
          position: relative;
        }

        .footer-top-accent {
          display: none;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1.8fr 1.2fr;
          gap: var(--spacing-xxl);
          padding-top: var(--spacing-xxl);
          padding-bottom: var(--spacing-xxl);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo-img {
          height: 56px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: transform var(--transition-fast), filter var(--transition-fast);
        }

        .footer-logo-area:hover .footer-logo-img {
          transform: translateY(-2px);
          filter: brightness(0.9) invert(1) sepia(0.3) saturate(2) hue-rotate(10deg);
        }

        .logo-text-wrapper.light .logo-main-text {
          color: #FFFFFF;
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          line-height: 0.95;
        }

        .logo-text-wrapper.light .logo-sub-text {
          font-size: 0.74rem;
          font-weight: 750;
          letter-spacing: 3.5px;
          color: var(--accent-color);
          line-height: 1;
          margin-top: 3px;
        }

        .footer-subtext {
          color: #CBD5E1;
          font-size: 0.93rem;
          line-height: 1.68;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .footer-newsletter-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: var(--radius-md);
          padding: 1.35rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .footer-newsletter-card:focus-within {
          border-color: rgba(232, 130, 38, 0.4);
          box-shadow: 0 4px 25px rgba(232, 130, 38, 0.12);
        }

        .newsletter-title {
          font-size: 0.88rem;
          font-weight: 750;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .newsletter-input-group {
          display: flex;
          position: relative;
        }

        .footer-input {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: var(--radius-pill);
          color: #FFFFFF;
          padding: 0.75rem 3.2rem 0.75rem 1.25rem;
          font-size: 0.9rem;
          width: 100%;
          transition: all var(--transition-fast);
        }

        .footer-input::placeholder {
          color: #64748B;
        }

        .footer-input:focus {
          border-color: var(--accent-color);
          background-color: rgba(255, 255, 255, 0.14);
          box-shadow: 0 0 0 3px rgba(232, 130, 38, 0.25);
          outline: none;
        }

        .newsletter-btn {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
          border: none;
        }

        .newsletter-btn:hover {
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 0 15px rgba(232, 130, 38, 0.5);
        }

        .newsletter-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .newsletter-checkbox input[type="checkbox"] {
          margin-top: 3px;
          cursor: pointer;
          accent-color: var(--accent-color);
        }

        .newsletter-checkbox label {
          font-size: 0.76rem;
          color: #94A3B8;
          cursor: pointer;
          line-height: 1.4;
        }

        .newsletter-success {
          color: #34D399;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .footer-heading {
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          position: relative;
          padding-bottom: 0.65rem;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 34px;
          height: 2.5px;
          background: var(--accent-gradient);
          border-radius: 2px;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-link-item {
          color: #94A3B8;
          font-size: 0.92rem;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .link-arrow {
          color: var(--accent-color);
          opacity: 0;
          transform: translateX(-4px);
          transition: all var(--transition-fast);
        }

        .footer-link-item:hover {
          color: #FFFFFF;
          transform: translateX(4px);
        }

        .footer-link-item:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          transition: transform var(--transition-fast);
        }

        .contact-item:hover {
          transform: translateX(2px);
        }

        .contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(232, 130, 38, 0.14);
          border: 1px solid rgba(232, 130, 38, 0.25);
          color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all var(--transition-fast);
        }

        .contact-item:hover .contact-icon {
          background: var(--accent-color);
          color: #FFFFFF;
          box-shadow: 0 0 12px rgba(232, 130, 38, 0.4);
        }

        .contact-label {
          display: block;
          font-size: 0.76rem;
          color: #64748B;
          text-transform: uppercase;
          font-weight: 650;
          letter-spacing: 0.5px;
        }

        .contact-value {
          color: #CBD5E1;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          display: block;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .contact-value.highlight {
          color: #FBBF24;
          font-weight: 600;
        }

        .contact-value:hover {
          color: #FFFFFF;
        }

        .contact-phones-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-value.address {
          color: #CBD5E1;
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.6rem 0;
          font-size: 0.86rem;
          background: rgba(0, 0, 0, 0.28);
        }

        .copyright {
          margin-bottom: 0;
          color: #94A3B8;
        }

        .disclaimer {
          margin-bottom: 0;
          color: #64748B;
        }

        .footer-inline-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1rem;
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .footer-inline-top-btn:hover {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(232, 130, 38, 0.3);
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-xl);
          }
        }

        @media (max-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
