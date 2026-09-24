import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Form from '../components/shared/Form';
import Card from '../components/shared/Card';
import { contactDetails, teamList } from '../data/contactData';
import { FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaUsers, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set first accordion active by default

  const toggleAccordion = (idx) => {
    if (activeAccordion === idx) {
      setActiveAccordion(null); // collapse if already active
    } else {
      setActiveAccordion(idx);
    }
  };

  return (
    <div className="contact-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <section 
        className="contact-hero animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          position: 'relative'
        }}
      />

      {/* 1. Page Header */}
      <section className="page-header py-xl bg-gray">
        <div className="container animate-fade-in">
          <span className="section-label">Connect with Us</span>
          <h1>We’re Here to Help You Learn, Grow & Succeed</h1>
          <p className="lead-p">Whether you have a question about our certification programs, want help choosing the right course, or need support with enrollment or corporate training—our team is ready to assist you.</p>
          <div className="my-md">
            <Link to="/certificates" className="btn btn-primary flex align-center gap-sm" style={{width: 'fit-content'}}>
              Explore Our Certificates <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main content: Info (Left) & Form (Right) */}
      <SectionWrapper bg="white">
        <div className="grid grid-2 gap-xl align-start">
          {/* Left Column: Interactive FAQ Accordions */}
          <div className="contact-info-accordion flex-column gap-md animate-fade-in">
            <h2 className="my-sm" style={{fontSize: '1.6rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Office & Support Channels</h2>
            
            {/* Accordion 1: Email */}
            <div className={`accordion-item ${activeAccordion === 0 ? 'active' : ''}`}>
              <button className="accordion-trigger flex-between" onClick={() => toggleAccordion(0)}>
                <span className="flex align-center gap-sm">
                  <FaEnvelope className="text-accent" /> {contactDetails.faqList[0].title}
                </span>
                <FaChevronDown className="accordion-arrow" />
              </button>
              <div className="accordion-content">
                <p className="faq-sub">{contactDetails.faqList[0].subtitle}</p>
                <p className="email-link">
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.faqList[0].content}</a>
                </p>
              </div>
            </div>

            {/* Accordion 2: Call Us & Locations */}
            <div className={`accordion-item ${activeAccordion === 1 ? 'active' : ''}`}>
              <button className="accordion-trigger flex-between" onClick={() => toggleAccordion(1)}>
                <span className="flex align-center gap-sm">
                  <FaMapMarkerAlt className="text-accent" /> {contactDetails.faqList[1].title}
                </span>
                <FaChevronDown className="accordion-arrow" />
              </button>
              <div className="accordion-content">
                <p className="faq-sub">{contactDetails.faqList[1].subtitle}</p>
                <div className="locations-timeline flex-column gap-md">
                  {contactDetails.faqList[1].content.map((loc, idx) => (
                    <div key={idx} className="location-node">
                      <h5>{loc.name}</h5>
                      <p className="text-muted" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>{loc.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="contact-form-wrapper animate-fade-in">
            <Form />
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Our Team Section */}
      <SectionWrapper bg="gray" title="Our Team" subtitle="Meet the dedicated leaders guiding you through your certification path.">
        <div className="grid grid-4 gap-md">
          {teamList.map((member, idx) => (
            <Card key={idx} className="team-card text-center flex-column align-center gap-sm">
              <span className="team-avatar-circle flex-center"><FaUsers size={32} /></span>
              <h3 className="team-member-name">{member.name}</h3>
              {/* EXACT original typo spelling for Durgesh's role: "Cheif Technology Officer" */}
              <p className="team-member-role text-muted">{member.role}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <style>{`
        .contact-page {
          overflow-x: hidden;
        }

        .contact-hero {
          position: relative;
          width: 100%;
          height: 420px;
          margin-top: 80px;
        }

        .page-header {
          padding-top: 3.5rem;
          padding-bottom: 2.5rem;
          background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
          border-bottom: 1px solid var(--border-color);
        }

        .page-header h1 {
          font-size: 2.4rem;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }

        .lead-p {
          font-size: 1.1rem;
          color: var(--text-body);
          line-height: 1.65;
          max-width: 880px;
          margin-bottom: var(--spacing-md);
        }

        /* Accordion custom styling */
        .accordion-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--bg-primary);
          box-shadow: var(--card-shadow);
          transition: all var(--transition-fast);
        }

        .accordion-item.active {
          border-color: rgba(232, 130, 38, 0.45);
          box-shadow: var(--hover-shadow);
        }

        .accordion-trigger {
          width: 100%;
          padding: 1.2rem 1.4rem;
          font-weight: 750;
          font-size: 1.05rem;
          color: var(--primary-color);
          text-align: left;
          cursor: pointer;
          background-color: var(--bg-primary);
          transition: background-color var(--transition-fast);
        }

        .accordion-trigger:hover {
          background-color: var(--bg-secondary);
        }

        .accordion-arrow {
          transition: transform var(--transition-normal);
          color: var(--accent-color);
        }

        .accordion-item.active .accordion-arrow {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal) ease-out, padding var(--transition-normal) ease-out;
          padding: 0 1.4rem;
        }

        .accordion-item.active .accordion-content {
          max-height: 1000px;
          padding: 1.25rem 1.4rem;
          border-top: 1px solid var(--border-color);
        }

        .faq-sub {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 0.95rem;
          margin-bottom: var(--spacing-sm);
        }

        .email-link {
          font-size: 1.15rem;
          font-weight: 800;
        }

        .email-link a {
          color: var(--accent-color);
          transition: color var(--transition-fast);
        }

        .email-link a:hover {
          color: var(--accent-hover);
        }

        .locations-timeline {
          border-left: 2px solid rgba(200, 125, 67, 0.35);
          padding-left: var(--spacing-md);
          margin-left: 8px;
        }

        .location-node {
          position: relative;
        }

        .location-node::before {
          content: '';
          position: absolute;
          left: -22px;
          top: 6px;
          background: var(--accent-gradient);
          width: 11px;
          height: 11px;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(200, 125, 67, 0.2);
        }

        .location-node h5 {
          font-size: 1.05rem;
          font-weight: 750;
          color: var(--primary-color);
          margin-bottom: 2px;
        }

        /* Team cards styling */
        .team-avatar-circle {
          background: linear-gradient(135deg, rgba(232, 130, 38, 0.12) 0%, rgba(245, 158, 11, 0.18) 100%);
          color: var(--accent-color);
          width: 68px;
          height: 68px;
          border-radius: 50%;
          margin-bottom: var(--spacing-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
        }

        .team-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.25rem;
          box-shadow: var(--card-shadow);
          background: #FFFFFF;
          transition: all var(--transition-normal);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--hover-shadow);
          border-color: rgba(200, 125, 67, 0.4);
        }

        .team-card:hover .team-avatar-circle {
          transform: scale(1.1);
          background: var(--accent-gradient);
          color: #FFFFFF;
          box-shadow: 0 0 16px rgba(200, 125, 67, 0.4);
        }

        .team-member-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 2px;
        }

        .team-member-role {
          font-size: 0.88rem;
          margin-bottom: 0;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .contact-hero {
            height: 240px;
            margin-top: 70px;
          }

          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }
          
          .page-header .btn {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
