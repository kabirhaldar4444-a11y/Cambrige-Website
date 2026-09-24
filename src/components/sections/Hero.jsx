import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaAward, 
  FaGlobeAmericas, 
  FaCertificate, 
  FaUserCheck, 
  FaChevronRight,
  FaShieldAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaBookOpen
} from 'react-icons/fa';
import CambridgeCrest from '../shared/CambridgeCrest';

const Hero = ({ 
  title, 
  subtitle, 
  ctaText = 'Discover Courses', 
  ctaPath = '/contact', 
  className = '',
  videoSrc = null,
  backgroundImage = null,
  showStats = true,
  ...props 
}) => {
  // Format title with editorial elegance
  const renderFormattedTitle = (text) => {
    if (typeof text !== 'string') return text;
    if (text.includes('Globally Recognized')) {
      const parts = text.split('Globally Recognized');
      return (
        <>
          {parts[0]}
          <span className="hero-editorial-accent">Globally Recognized</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  // Fallback visual image if no background image is provided
  const visualImage = backgroundImage || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";

  return (
    <section 
      className={`academic-hero-section ${videoSrc ? 'has-video' : ''} ${className}`} 
      {...props}
    >
      {videoSrc && (
        <video 
          className="hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Subtle Warm Academic Parchment Watermark & Matrix */}
      <div className="hero-academic-pattern" aria-hidden="true" />
      <div className="hero-academic-glow" aria-hidden="true" />

      <div className="container hero-academic-container">
        {/* Top Split Layout: Editorial Left + Arched Visual Right */}
        <div className="hero-editorial-grid">
          {/* Left Column: Academic Authority Copy */}
          <div className="hero-copy-col animate-fade-in">
            {/* Accreditation Seal Pill */}
            <div className="hero-accreditation-bar">
              <span className="accreditation-seal-badge">
                <CambridgeCrest size={22} />
                <span>Cambridge ATP Partner</span>
              </span>
              <span className="accreditation-divider">|</span>
              <span className="accreditation-subtext">Official Cambridge University Recognized</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="hero-editorial-heading">
              {renderFormattedTitle(title)}
            </h1>

            {/* Subtitle / Lead Paragraph */}
            {subtitle && (
              <p className="hero-editorial-lead">
                {subtitle}
              </p>
            )}

            {/* Dual Call-to-Action Group */}
            <div className="hero-academic-actions">
              <Link to={ctaPath} className="btn-academic-primary">
                <span>{ctaText}</span>
                <FaChevronRight size={11} className="btn-arrow" />
              </Link>
              <Link to="/courses" className="btn-academic-secondary">
                <span>Explore Programs</span>
              </Link>
            </div>

            {/* Trust Badges Strip (Inspired by Option 1 mockup) */}
            <div className="hero-trust-stamps">
              <div className="stamp-badge">
                <FaShieldAlt className="stamp-icon" />
                <div className="stamp-text">
                  <strong>Accredited ATP</strong>
                  <span>Cambridge Standards</span>
                </div>
              </div>

              <div className="stamp-badge">
                <FaGraduationCap className="stamp-icon" />
                <div className="stamp-text">
                  <strong>100% Licensed</strong>
                  <span>Official Courseware</span>
                </div>
              </div>

              <div className="stamp-badge">
                <FaAward className="stamp-icon" />
                <div className="stamp-text">
                  <strong>Global Validity</strong>
                  <span>Board Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prestigious Arched Photography Visual */}
          <div className="hero-visual-col animate-fade-in">
            <div className="academic-visual-frame">
              <img 
                src={visualImage} 
                alt="Cambridge Learning Services Education" 
                className="academic-hero-img"
              />
              <div className="visual-frame-vignette" />

              {/* Verified ATP Seal Overlaid on Visual */}
              <div className="visual-floating-seal">
                <CambridgeCrest size={28} />
                <div className="seal-text-wrap">
                  <span className="seal-title">Cambridge ATP</span>
                  <span className="seal-sub">Authorized Partner</span>
                </div>
              </div>

              {/* Pass Rate Floating Tag */}
              <div className="visual-floating-stat">
                <span className="stat-star-icon">★</span>
                <div>
                  <strong>98% Pass Rate</strong>
                  <span>5,000+ Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Stats Deck: Warm Ivory Cards */}
        {showStats && (
          <div className="hero-academic-stats-deck">
            <div className="academic-stat-card">
              <div className="stat-card-icon-box">
                <FaGlobeAmericas />
              </div>
              <div className="stat-card-content">
                <span className="stat-number-text">20+ Countries</span>
                <span className="stat-label-text">Global Alumni Network</span>
              </div>
            </div>

            <div className="academic-stat-divider" />

            <div className="academic-stat-card">
              <div className="stat-card-icon-box">
                <FaCertificate />
              </div>
              <div className="stat-card-content">
                <span className="stat-number-text">100% Official</span>
                <span className="stat-label-text">Licensed Courseware</span>
              </div>
            </div>

            <div className="academic-stat-divider" />

            <div className="academic-stat-card">
              <div className="stat-card-icon-box">
                <FaUserCheck />
              </div>
              <div className="stat-card-content">
                <span className="stat-number-text">Certified Mentors</span>
                <span className="stat-label-text">Top Industry Practitioners</span>
              </div>
            </div>

            <div className="academic-stat-divider" />

            <div className="academic-stat-card">
              <div className="stat-card-icon-box">
                <FaAward />
              </div>
              <div className="stat-card-content">
                <span className="stat-number-text">98% Pass Rate</span>
                <span className="stat-label-text">Exam Success Outcomes</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* ============================================================
           Academic Prestige Hero Section (Option 1 Design)
           Warm Ivory · British Cambridge Forest Green · Warm Copper
           ============================================================ */
        .academic-hero-section {
          position: relative;
          background: var(--hero-gradient);
          padding: 8.5rem 0 5rem 0;
          color: var(--text-dark);
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }

        /* Architectural Watermark Pattern */
        .hero-academic-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(15, 56, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 56, 42, 0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          z-index: 1;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at center, black 45%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 45%, transparent 85%);
        }

        .hero-academic-glow {
          position: absolute;
          top: -15%;
          right: 15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(200, 125, 67, 0.08) 0%, rgba(15, 56, 42, 0.05) 50%, transparent 70%);
          filter: blur(80px);
          z-index: 1;
          pointer-events: none;
        }

        .hero-video-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.15;
          pointer-events: none;
        }

        .hero-academic-container {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* Split Editorial Grid */
        .hero-editorial-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Left Column: Copy */
        .hero-copy-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-accreditation-bar {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.35rem 0.95rem;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          box-shadow: 0 2px 10px rgba(15, 56, 42, 0.04);
          margin-bottom: 1.25rem;
        }

        .accreditation-seal-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 750;
          color: var(--primary-color);
          letter-spacing: 0.2px;
        }

        .accreditation-divider {
          color: var(--border-color);
        }

        .accreditation-subtext {
          font-size: 0.76rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .hero-editorial-heading {
          font-family: var(--font-heading);
          font-size: 3.35rem;
          font-weight: 800;
          color: var(--primary-color);
          line-height: 1.16;
          letter-spacing: -0.025em;
          margin-bottom: 1.25rem;
          text-transform: none;
        }

        .hero-editorial-accent {
          color: var(--accent-color);
          position: relative;
          display: inline-block;
        }

        .hero-editorial-accent::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 3px;
          background: var(--accent-color);
          opacity: 0.4;
          border-radius: 2px;
        }

        .hero-editorial-lead {
          font-size: 1.12rem;
          line-height: 1.7;
          color: var(--text-body);
          margin-bottom: 2rem;
          max-width: 580px;
          text-align: left;
        }

        /* Actions: Deep Green Primary + Copper Outline Secondary */
        .hero-academic-actions {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          margin-bottom: 2.25rem;
        }

        .btn-academic-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.95rem 2.2rem;
          background: var(--primary-color);
          color: #FFFFFF !important;
          font-size: 0.98rem;
          font-weight: 750;
          letter-spacing: 0.3px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--primary-dark);
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(15, 56, 42, 0.25);
          transition: all var(--transition-fast);
        }

        .btn-academic-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 56, 42, 0.35), 0 0 0 1px var(--accent-color);
          color: #FFFFFF !important;
        }

        .btn-academic-primary .btn-arrow {
          transition: transform var(--transition-fast);
        }

        .btn-academic-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-academic-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.95rem 2.2rem;
          background: #FFFFFF;
          color: var(--accent-color) !important;
          font-size: 0.98rem;
          font-weight: 700;
          letter-spacing: 0.2px;
          border-radius: var(--radius-pill);
          border: 1.5px solid var(--accent-color);
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(200, 125, 67, 0.1);
          transition: all var(--transition-fast);
        }

        .btn-academic-secondary:hover {
          background: var(--accent-color);
          color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(200, 125, 67, 0.28);
        }

        /* Trust Stamps Row */
        .hero-trust-stamps {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .stamp-badge {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .stamp-icon {
          color: var(--accent-color);
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .stamp-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .stamp-text strong {
          font-size: 0.82rem;
          font-weight: 750;
          color: var(--primary-color);
        }

        .stamp-text span {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        /* Right Column: Visual Frame */
        .hero-visual-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .academic-visual-frame {
          position: relative;
          width: 100%;
          max-width: 520px;
          height: 480px;
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 45px -10px rgba(15, 56, 42, 0.14), 0 0 30px rgba(200, 125, 67, 0.08);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .academic-visual-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 55px -12px rgba(15, 56, 42, 0.18), 0 0 35px rgba(200, 125, 67, 0.14);
        }

        .academic-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .academic-visual-frame:hover .academic-hero-img {
          transform: scale(1.03);
        }

        .visual-frame-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(9, 36, 27, 0.45) 100%);
          pointer-events: none;
        }

        /* Floating Seal on Visual */
        .visual-floating-seal {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 1.15rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(230, 224, 212, 0.9);
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(15, 56, 42, 0.16);
        }

        .seal-text-wrap {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          text-align: left;
        }

        .seal-title {
          font-size: 0.84rem;
          font-weight: 800;
          color: var(--primary-color);
          font-family: var(--font-heading);
        }

        .seal-sub {
          font-size: 0.7rem;
          font-weight: 650;
          color: var(--accent-color);
          letter-spacing: 0.3px;
        }

        .visual-floating-stat {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.55rem 1rem;
          background: rgba(15, 56, 42, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #FFFFFF;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
          font-size: 0.78rem;
          text-align: left;
          line-height: 1.2;
        }

        .stat-star-icon {
          color: #FBBF24;
          font-size: 1rem;
        }

        .visual-floating-stat strong {
          display: block;
          font-weight: 750;
        }

        .visual-floating-stat span {
          color: #CBD5E1;
          font-size: 0.7rem;
        }

        /* Bottom Floating Stats Deck: Clean Ivory & White */
        .hero-academic-stats-deck {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 1.45rem 2.5rem;
          box-shadow: 0 12px 34px -6px rgba(15, 56, 42, 0.08), 0 2px 10px rgba(15, 56, 42, 0.03);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .hero-academic-stats-deck:hover {
          border-color: rgba(200, 125, 67, 0.45);
          box-shadow: 0 18px 42px -8px rgba(15, 56, 42, 0.12);
        }

        .academic-stat-card {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          text-align: left;
          transition: transform var(--transition-fast);
        }

        .academic-stat-card:hover {
          transform: translateY(-2px);
        }

        .stat-card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-light);
          border: 1px solid rgba(200, 125, 67, 0.3);
          color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .academic-stat-card:hover .stat-card-icon-box {
          background: var(--primary-color);
          color: #FFFFFF;
          border-color: var(--primary-color);
          transform: scale(1.08);
          box-shadow: 0 4px 14px rgba(15, 56, 42, 0.25);
        }

        .stat-card-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number-text {
          font-size: 1.25rem;
          font-weight: 850;
          color: var(--primary-color);
          font-family: var(--font-heading);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .stat-label-text {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .academic-stat-divider {
          width: 1px;
          height: 46px;
          background: var(--border-color);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-editorial-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero-copy-col {
            align-items: center;
            text-align: center;
          }

          .hero-editorial-heading {
            font-size: 2.75rem;
          }

          .hero-editorial-lead {
            text-align: center;
          }

          .hero-academic-actions {
            justify-content: center;
          }

          .hero-trust-stamps {
            justify-content: center;
          }

          .academic-visual-frame {
            max-width: 480px;
            height: 380px;
          }

          .hero-academic-stats-deck {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .academic-stat-divider {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .academic-hero-section {
            padding: 6.5rem 0 3.5rem 0;
          }

          .hero-editorial-heading {
            font-size: 2.15rem;
          }

          .hero-editorial-lead {
            font-size: 1rem;
          }

          .academic-visual-frame {
            max-width: 100%;
            height: 300px;
          }

          .hero-academic-stats-deck {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 1.25rem;
          }

          .btn-academic-primary,
          .btn-academic-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
