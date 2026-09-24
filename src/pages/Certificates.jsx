import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { FaRegClipboard, FaSearchPlus, FaLaptop, FaGraduationCap } from 'react-icons/fa';
import Hero from '../components/sections/Hero';

const Certificates = () => {
  const steps = [
    {
      num: 1,
      title: "Application & Registration",
      desc: "Select your desired certification and complete the application process through Cambridge Learning Services official platform."
    },
    {
      num: 2,
      title: "Enrollment Confirmation",
      desc: "Upon successful registration and payment, your enrollment is confirmed, and you receive all necessary details via email."
    },
    {
      num: 3,
      title: "Access to Study Materials",
      desc: "You will be provided with learning resources, recorded sessions, and guidance to begin your preparation."
    },
    {
      num: 4,
      title: "Pre-Assessment Scheduling",
      desc: "A Pre-Assessment is scheduled at a convenient time within a few days of enrollment."
    },
    {
      num: 5,
      title: "Expert Guidance",
      desc: "Before the assessment, Cambridge Learning Services expert team connects with you to guide you through the process."
    },
    {
      num: 6,
      title: "Learning Support",
      desc: "All required materials and resources are shared via email, ensuring uninterrupted access to your learning content."
    },
    {
      num: 7,
      title: "Professional Recognition",
      desc: "Your certification reflects professional competency and can be shared with employers and professional networks."
    },
    {
      num: 8,
      title: "Self-Paced Learning Phase",
      desc: "Participants continue their preparation using recorded lectures and study materials within the 90–120 day learning window."
    },
    {
      num: 9,
      title: "Continuous Assistance",
      desc: "Cambridge Learning Services team remains in touch throughout your journey, providing ongoing support and guidance."
    },
    {
      num: 10,
      title: "Final Certification",
      desc: "After successfully completing the Final Assessment, your digital certificate is issued within 48–72 hours, confirming your certified status."
    }
  ];

  return (
    <div className="certificates-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <Hero
        title="Certificates"
        subtitle="Achieve your professional milestones"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
        className="certificates-hero animate-fade-in"
      />

      {/* 1. Page Header Banner */}
      <section className="page-header py-xl bg-gray">
        <div className="container animate-fade-in">
          <span className="section-label">Our Standards</span>
          <h1>Certification Process</h1>
          <p className="lead-p">At Cambridge Learning Services, our certification process is designed to be streamlined, professional, and supportive, ensuring a smooth path to achieving your career goals. We believe in providing a clear roadmap from application to final certification, backed by expert guidance and comprehensive study resources.</p>
          <p className="lead-p">Whether you're looking to earn a global credential in project management, cloud computing, cybersecurity, or soft skills, our step-by-step methodology ensures you are well-prepared to succeed and demonstrate your professional expertise.</p>
        </div>
      </section>

      {/* 2. Process Overview & Method */}
      <SectionWrapper bg="white">
        <div className="grid grid-2 gap-xl">
          <Card className="process-info-card flex-column gap-sm">
            <div className="card-badge-icon flex-center bg-navy-light text-navy">
              <FaRegClipboard size={26} />
            </div>
            <h3>Certification Process Overview:</h3>
            <p>The certification process at Cambridge Learning Services is structured to validate your skills and knowledge effectively. We provide a blend of structured learning, pre-assessments, and final examinations to ensure deep comprehension and practical application of the concepts.</p>
            <p>Our team works closely with each candidate to offer personalized support, resolve queries, and share the right study materials. This structured yet flexible path enables working professionals to manage their learning effectively along with their professional commitments.</p>
          </Card>

          <Card className="process-info-card flex-column gap-sm">
            <div className="card-badge-icon flex-center bg-red-light text-accent">
              <FaSearchPlus size={26} />
            </div>
            <h3>Evaluation & Certification Method:</h3>
            <p>All assessments are conducted online through Cambridge Learning Services official platform. The examination includes a combination of objective and scenario-based questions designed to evaluate practical understanding and subject knowledge.</p>
            <p>The exam duration typically ranges between 90 to 120 minutes and consists of multiple questions based on the provided study materials. Our support team remains available throughout to assist participants whenever required.</p>
          </Card>
        </div>
      </SectionWrapper>

      {/* 3. Step by Step Process Timeline */}
      <SectionWrapper bg="gray" title="Step by Step Process –" subtitle="Follow our 10-step guided professional pathway.">
        <div className="timeline-container">
          <div className="timeline-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="timeline-item-card flex gap-md align-start animate-fade-in">
                <span className="timeline-step-num flex-center">{step.num}</span>
                <div className="timeline-step-text">
                  <h4>{step.title}</h4>
                  <p className="text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <style>{`
        .certificates-page {
          overflow-x: hidden;
        }

        .certificates-hero {
          position: relative;
          width: 100%;
          height: 480px;
          margin-top: 80px; /* clear fixed top header */
        }

        .page-header {
          padding-top: 3rem; /* adjusted padding since hero banner takes top space */
        }

        .lead-p {
          font-size: 1.1rem;
          line-height: 1.68;
          max-width: 880px;
          margin-bottom: var(--spacing-md);
          color: var(--text-body);
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .bg-navy-light {
          background-color: rgba(15, 56, 42, 0.08);
        }

        .bg-red-light {
          background-color: var(--accent-light);
        }

        .card-badge-icon {
          width: 55px;
          height: 55px;
          border-radius: 12px;
          margin-bottom: var(--spacing-sm);
        }

        .process-info-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--card-shadow);
          padding: 1.85rem;
          height: 100%;
          background: #FFFFFF;
        }

        .process-info-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .process-info-card p {
          font-size: 0.95rem;
          color: var(--text-body);
          line-height: 1.68;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        /* Timeline grid */
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .timeline-item-card {
          background-color: #FFFFFF;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--card-shadow);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .timeline-item-card:hover {
          transform: translateY(-5px);
          border-color: rgba(200, 125, 67, 0.45);
          box-shadow: var(--hover-shadow);
        }

        .timeline-step-num {
          background: var(--accent-gradient);
          color: var(--text-light);
          width: 44px;
          height: 44px;
          border-radius: 12px;
          font-size: 1.15rem;
          font-weight: 800;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(200, 125, 67, 0.3);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .timeline-item-card:hover .timeline-step-num {
          transform: scale(1.1) rotate(4deg);
          box-shadow: 0 0 16px rgba(200, 125, 67, 0.55);
        }

        .timeline-step-text h4 {
          font-size: 1.15rem;
          font-weight: 750;
          color: var(--primary-color);
          margin-bottom: 0.25rem;
        }

        .timeline-step-text p {
          font-size: 0.92rem;
          line-height: 1.62;
          margin-bottom: 0;
          color: var(--text-muted);
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        @media (max-width: 768px) {
          .certificates-hero {
            height: 240px;
            margin-top: 70px;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Certificates;
