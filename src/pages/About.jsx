import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import CambridgeCrest from '../components/shared/CambridgeCrest';
import cambridgeLogo from '../assets/images/logo/cambridge_logo.png';
import TargetImage from '../assets/images/mission_target.png';
import EagleImage from '../assets/images/vision_eagle.png';
import MountainImage from '../assets/images/impact_mountain.png';
import { FaGlobe, FaCertificate, FaBuilding, FaSmile } from 'react-icons/fa';

// Import the premium About Us Hero image
import AboutUsHeroImg from '../assets/images/About us Hero page.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Header Hero Panel (Pure Full-Width Banner Image) */}
      <section 
        className="about-hero animate-fade-in"
        style={{
          backgroundImage: `url("${AboutUsHeroImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          position: 'relative'
        }}
      />

      {/* 1.5. Intro Brand Content Block */}
      <SectionWrapper bg="gray" className="about-intro-section animate-fade-in" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2 gap-xl align-center">
            <div className="about-intro-text">
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', margin: '0.5rem 0 var(--spacing-sm) 0', fontWeight: '800' }}>About Cambridge Learning Services</h2>
              <p className="intro-p" style={{ fontSize: '1.05rem', lineHeight: '1.65', color: '#4a5568', marginBottom: '1.5rem' }}>
                Cambridge Learning Services is a globally recognized professional organization dedicated to advancing the practice, science, and profession of project management and executive education. With a strong global presence, Cambridge Learning Services empowers professionals through internationally respected standards, certifications, and resources.
              </p>
              <div className="about-intro-actions flex gap-sm">
                <Link to="/courses" className="btn btn-primary">Our Programs</Link>
              </div>
            </div>
            <div className="about-intro-logo flex-center">
              <div className="intro-logo-card shadow-md flex-center flex-column gap-sm bg-white" style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', maxWidth: '380px', width: '100%', transition: 'transform 0.3s ease' }}>
                <img src={cambridgeLogo} alt="Cambridge Learning Services" style={{ maxWidth: '100%', maxHeight: '110px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Our Mission */}
      <SectionWrapper bg="white">
        <div className="grid grid-2 gap-xl align-center">
          <div className="mission-content">
            <span className="section-label">Our Purpose</span>
            <h2>Our Mission</h2>
            <p>At Cambridge Learning Services, our mission is to empower individuals and organizations by delivering high-quality, globally recognized certifications and practical, industry-aligned training solutions. We are committed to fostering a culture of continuous learning, professional excellence, and career advancement.</p>
            <p>By equipping professionals with in-demand skills, up-to-date knowledge, and internationally accredited credentials, we help them stay competitive in the global workforce, lead change within their industries, and navigate evolving business landscapes with confidence.</p>
            <p>Whether you're an individual seeking growth or a company investing in team development, our mission is to support you every step of the way — from learning to certification, and beyond.</p>
          </div>
          <div className="mission-image-wrapper">
            <img src={TargetImage} alt="Our Mission Target" className="about-section-img shadow" />
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Our Vision */}
      <SectionWrapper bg="gray">
        <div className="grid grid-2 gap-xl align-center reverse-mobile">
          <div className="vision-image-wrapper">
            <img src={EagleImage} alt="Our Vision Eagle" className="about-section-img shadow" />
          </div>
          <div className="vision-content">
            <span className="section-label">Our Outlook</span>
            <h2>Our Vision</h2>
            <p>Cambridge Learning Services envisions a world where organizations and individuals consistently deliver successful outcomes through effective project management. It aims to be the leading authority and global community for project professionals, driving excellence, innovation, and positive change.</p>
            <p>By fostering a culture of continuous learning and professional growth, Cambridge Learning Services strives to shape the future of work and empower professionals to make a meaningful difference in an ever-evolving global landscape.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. What We Offer */}
      <SectionWrapper bg="white" title="What We Offer?" subtitle="We provide full-spectrum learning pipelines and specialized career preparation options.">
        <div className="grid grid-2 gap-xl my-md">
          <Card className="offer-col-card">
            <ul className="custom-bullets">
              <li>Globally Recognized Cambridge Learning Services Certifications (PMP®, CAPM®, PMI-ACP®, and more)</li>
              <li>Industry-Focused IT Certification Programs (CompTIA, EC-Council, Cisco, etc.)</li>
              <li>In-Demand Cloud Certification Training (AWS, Microsoft Azure, Google Cloud Platforms)</li>
              <li>Advanced Cybersecurity & Ethical Hacking Courses</li>
            </ul>
          </Card>
          <Card className="offer-col-card">
            <ul className="custom-bullets">
              <li>Comprehensive ITIL® and DevOps Learning Tracks</li>
              <li>Professional Development in Soft Skills & Leadership</li>
              <li>Customized Corporate Training Programs for Teams</li>
              <li>Complete Exam Preparation Support & Career Guidance</li>
            </ul>
          </Card>
        </div>
        <div className="flex-center my-lg">
          <Link to="/courses" className="btn btn-primary">
            Explore More
          </Link>
        </div>
      </SectionWrapper>

      {/* 5. Why Choose Us? */}
      <SectionWrapper bg="gray" title="Why Choose Us?">
        <div className="grid grid-2 gap-xl align-stretch">
          <Card className="choose-us-text-card">
            <p>Choosing Cambridge Learning Services means partnering with a globally respected authority that has shaped the standards of project management across industries. Our certifications are recognized worldwide and are built on rigorous frameworks that reflect real-world project challenges. We go beyond theoretical knowledge by emphasizing practical application, ensuring professionals can deliver measurable results.</p>
          </Card>
          <Card className="choose-us-text-card">
            <p>Cambridge Learning Services provides access to a vast ecosystem of resources, including standards, research, and best practices that support continuous learning. Our global community connects professionals worldwide, fostering networking and knowledge-sharing opportunities that enhance career development.</p>
          </Card>
        </div>
      </SectionWrapper>

      {/* 6. Our Global Impact */}
      <SectionWrapper bg="white" title="Our Global Impact">
        <div className="grid grid-2 gap-xl align-center">
          <div className="impact-image-wrapper">
            <img src={MountainImage} alt="Global Impact Mountain" className="about-section-img shadow-lg" />
          </div>
          <div className="impact-stats-wrapper flex-column gap-md">
            <div className="impact-stat-item flex align-center gap-md">
              <span className="impact-stat-icon flex-center"><FaGlobe size={24} /></span>
              <div className="impact-stat-info">
                <h4>20+ Countries</h4>
                <p className="text-muted">🌍 Trained professionals in 20+ countries</p>
              </div>
            </div>
            <div className="impact-stat-item flex align-center gap-md">
              <span className="impact-stat-icon flex-center"><FaCertificate size={24} /></span>
              <div className="impact-stat-info">
                <h4>5,000+ Certifications</h4>
                <p className="text-muted">🎓 Over 5,000+ certifications delivered</p>
              </div>
            </div>
            <div className="impact-stat-item flex align-center gap-md">
              <span className="impact-stat-icon flex-center"><FaBuilding size={24} /></span>
              <div className="impact-stat-info">
                <h4>100+ Corporate Clients</h4>
                <p className="text-muted">🏢 100+ corporate training clients served</p>
              </div>
            </div>
            <div className="impact-stat-item flex align-center gap-md">
              <span className="impact-stat-icon flex-center"><FaSmile size={24} /></span>
              <div className="impact-stat-info">
                <h4>95% Satisfaction</h4>
                <p className="text-muted">📈 95% learner satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <style>{`
        .about-page {
          overflow-x: hidden;
        }

        .about-hero {
          position: relative;
          width: 100%;
          height: 420px;
          margin-top: 80px;
        }

        .logo-glass-frame {
          background: rgba(255, 255, 255, 0.96);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-lg);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .logo-glass-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(10, 30, 52, 0.16);
        }

        .intro-logo-card {
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .intro-logo-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 16px 36px rgba(10, 30, 52, 0.12), 0 0 20px rgba(232, 130, 38, 0.15) !important;
          border-color: rgba(232, 130, 38, 0.35) !important;
        }

        .about-brand-logo {
          height: 130px;
          width: auto;
          object-fit: contain;
        }

        .about-section-img {
          width: 100%;
          border-radius: var(--radius-lg);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-lg);
        }

        .about-section-img:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: var(--shadow-xl);
        }

        .intro-p,
        .about-intro-text p {
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .mission-content p {
          font-size: 1.02rem;
          line-height: 1.72;
          color: var(--text-body);
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .vision-content p {
          font-size: 1.02rem;
          line-height: 1.72;
          color: var(--text-body);
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .offer-col-card {
          border-top: 4px solid var(--accent-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--card-shadow);
          height: 100%;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .offer-col-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--hover-shadow);
        }

        .choose-us-text-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--card-shadow);
          font-size: 1.05rem;
          line-height: 1.72;
          color: var(--text-body);
          height: 100%;
          display: flex;
          align-items: center;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .choose-us-text-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--hover-shadow);
        }

        .choose-us-text-card p {
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          margin: 0;
        }

        .impact-stat-item {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.15rem 1.4rem;
          box-shadow: var(--card-shadow);
          transition: all var(--transition-fast);
        }

        .impact-stat-item:hover {
          transform: translateX(6px);
          border-color: rgba(200, 125, 67, 0.45);
          box-shadow: var(--hover-shadow);
        }

        .impact-stat-icon {
          background: var(--accent-light);
          color: var(--accent-color);
          width: 52px;
          height: 52px;
          border-radius: 12px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
        }

        .impact-stat-item:hover .impact-stat-icon {
          transform: scale(1.1) rotate(5deg);
          background: var(--accent-gradient);
          color: #FFFFFF;
        }

        .impact-stat-info h4 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 2px;
        }

        .impact-stat-info p {
          font-size: 0.92rem;
          margin-bottom: 0;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .about-hero {
            height: 240px;
            margin-top: 70px;
          }
          
          .reverse-mobile {
            display: flex;
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
