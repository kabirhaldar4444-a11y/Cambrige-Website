import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { FaGraduationCap, FaChevronRight, FaStar, FaAward, FaBuilding, FaUsers } from 'react-icons/fa';

// Import newly placed exact assets
import PlaceholderImage from '../assets/images/placeholder.png';
import ReadyImage from '../assets/images/ready_to_get_started.jpg';
import CambridgeHeroImage from '../assets/images/Princetonprofessional_hero Image.jpg';

// Journey & testimonials visual assets
import JourneyJourneyImage from '../assets/images/Empowering Your Professional Journey.jpg';
import TestimonialsLearnersImage from '../assets/images/What Our Learners Say.jpg';
import BrandLogo from '../assets/images/logo/cambridge_logo.png';

const Home = () => {
  // Section 7: Why Choose Cambridge Learning Services
  const whyChooseItems = [
    {
      num: "01",
      title: "Recognized Training Partner of Cambridge.org",
      desc: "We are proud to be an Recognized Training Partner (ATP) of Cambridge University, which means our course materials, trainers, and delivery methods are officially vetted and approved by Cambridge University — the global gold standard in professional management education. Our participants benefit from official content, ATP-exclusive tools, and the assurance of compliance with the latest exam frameworks."
    },
    {
      num: "06",
      title: "Real-World Case Studies & Mock Exams",
      desc: "Our training is designed not only to help you pass the certification but also to prepare you for real-world challenges. We include project case studies, scenario-based questions, and full-length mock exams to boost confidence and readiness."
    },
    {
      num: "02",
      title: "Certifications from Global Bodies",
      desc: "In addition to Cambridge University, we provide training and certification programs from globally respected organizations including: Scrum Alliance® / Scrum.org (Scrum Master, Product Owner), EC-Council (CEH, CHFI), CompTIA® (Security+, Network+, A+), ITIL® & AXELOS (Service Management), AWS, Microsoft Azure & Google Cloud, Six Sigma & Lean Certifications, Data Analytics, AI & DevOps Certifications. This diverse catalog makes us a one-stop solution for technical, management, cybersecurity, and cloud training needs."
    },
    {
      num: "07",
      title: "Dedicated Learner Support",
      desc: "From enrollment to exam day — and beyond — our dedicated support team is here for you. Whether you need help with registration, exam application, or post-certification career guidance, we’re just a call or message away."
    },
    {
      num: "03",
      title: "Certified, Experienced Trainers",
      desc: "Our programs are delivered by certified industry experts who seamlessly connect theory with practical application. Through real-world insights and exam-focused strategies, our mentors equip you not only to succeed in your board exams but also to thrive in your professional career."
    },
    {
      num: "08",
      title: "Corporate Training Expertise",
      desc: "We have successfully delivered tailored training programs to enterprises, government bodies, and NGOs, helping teams enhance productivity and compliance. Ask us about our customized learning paths and enterprise solutions."
    },
    {
      num: "04",
      title: "Official, Up-to-Date Courseware",
      desc: "We use official, licensed courseware for every certification we offer — aligned with the latest industry standards and exam blueprints. Whether it's PMP, CompTIA, or Scrum, you’ll be learning from approved materials only."
    },
    {
      num: "09",
      title: "High Success Rates & Outcomes",
      desc: "Our structured approach to training has helped thousands of learners achieve certification on their first attempt. With a track record of high exam pass rates, we’re committed to your success."
    },
    {
      num: "05",
      title: "Flexible Learning Modes",
      desc: "We understand that every learner is different. That’s why we offer: Live Online Training, Self-paced Programs, Weekend & Weekday Batches, Corporate Group Training. Choose the format that fits your schedule and learning style."
    },
    {
      num: "10",
      title: "Global Alumni Network",
      desc: "Join a growing community of professionals certified through Cambridge Services. Our alumni work at leading companies across industries — and our community platforms provide excellent opportunities for networking, mentorship, and referrals."
    }
  ];

  // Section 8: Testimonials
  const testimonials = [
    {
      quote: "Cambridge Learning Services helped me get PMP® certified with ease. The support was outstanding, and the trainer made complex topics simple. Highly recommend!",
      author: "Shivani K.",
      role: "Sr. Project Manager, Infosys"
    },
    {
      quote: "The PMP training was outstanding. The trainer was Cambridge-certified and provided real-world examples. I passed on my first attempt!",
      author: "Aarti Sharma",
      role: "Project Manager at TCS"
    },
    {
      quote: "I enrolled for the Cambridge Learning Services-ACP course with a goal to upskill in Agile frameworks. The content was up-to-date, the mock tests were spot-on, and the instructor went above and beyond to clarify concepts. Highly recommend them to anyone serious about their career.",
      author: "Sarah Fernandes",
      role: "Agile Coach, IBM"
    },
    {
      quote: "After failing my PMP exam once through another provider, I decided to try Cambridge Learning Services. The difference was night and day — structured learning, official Cambridge courseware, and incredible support. I cleared the exam and got promoted within three months!",
      author: "Ravi Khandelwal",
      role: "Sr. Project Lead, Capgemini"
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero 
        title="Advancing Careers Through Globally Recognized Professional Education"
        subtitle="Official Recognized Training Partner of Cambridge University – Delivering Globally Recognized Certifications in Different Domains."
        ctaText="Get Started"
        ctaPath="/contact"
        backgroundImage={CambridgeHeroImage}
      />

      {/* 2. About Us / Cambridge Learning Services Section */}
      <SectionWrapper bg="white" id="about-section">
        <div className="grid grid-2 gap-xl align-center">
          <div className="about-content animate-fade-in">
            <span className="section-label">About Us</span>
            <h2 className="section-headline">Cambridge Learning Services</h2>
            <div className="about-lead-bar"></div>
            <p className="about-p">Cambridge Learning Services is a globally recognized provider of professional training and certification programs, dedicated to empowering individuals and organizations with the skills and credentials required to excel in today’s dynamic and competitive environment. As an Recognized Training Partner (ATP) of Cambridge University, a globally respected institution, we deliver internationally recognized certifications including PMP® (Project Management Professional), CAPM® (Certified Associate in Project Management), Cambridge-ACP® (Agile Certified Practitioner), along with a range of other globally valued credentials.</p>
            <p className="about-p">In addition to our strong association with Cambridge University, Cambridge Learning Services collaborates with leading certification bodies to offer a comprehensive suite of training solutions. Our portfolio includes programs in Agile & Scrum, IT Service Management (ITIL®), Cybersecurity (CompTIA®, EC-Council), Cloud Technologies (AWS, Microsoft Azure, Google Cloud), and Data Analytics. Our curriculum is continuously updated to align with evolving industry standards, emerging technologies, and the ever-changing demands of modern businesses.</p>
            <p className="about-p">What distinguishes us is our learner-centric approach. All our programs are designed and delivered by certified industry experts with extensive real-world experience. We combine interactive virtual training, practical case studies, hands-on projects, and exam-oriented preparation to ensure that learners not only achieve certification success but also effectively apply their knowledge in professional settings.</p>
            <p className="about-p">We are proud to have trained thousands of professionals across more than 20 countries and partnered with global enterprises, government organizations, and emerging startups. Whether you are an individual seeking career advancement or an organization aiming to enhance workforce capabilities, Cambridge Learning Services serves as a trusted partner in your growth and success.</p>
            
            <div className="about-badge-chips flex gap-sm flex-wrap my-md">
              <span className="badge-pill badge-pill-accent">🎓 Authorized Training Partner</span>
              <span className="badge-pill badge-pill-primary">🌍 20+ Countries</span>
              <span className="badge-pill badge-pill-primary">⚡ 100% Licensed Courseware</span>
            </div>
          </div>
          
          <div className="about-visual flex-center">
            <div className="about-logo-frame glass-card">
              <div className="frame-glow"></div>
              <img src={BrandLogo} alt="Cambridge Learning Services Logo" className="about-logo-img" />
              <div className="frame-footer-badge">
                <FaAward className="text-accent" />
                <span>Verified Official Education Partner</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>



      {/* 5. Your Success Starts Here! Section */}
      <SectionWrapper bg="gray" title="Your Success Starts Here!">
        <div className="grid grid-2 gap-xl align-center">
          <div className="journey-paragraphs animate-fade-in">
            <p>At Cambridge Learning Services, we believe that success is not just about earning a certification—it's about building the confidence, skills, and mindset needed to thrive in an ever-evolving professional world.</p>
            <p>When you choose Cambridge Learning Services, you’re not just signing up for a training course. You’re choosing a strategic learning partner who is deeply invested in your future.</p>
            <p>We work alongside you at every stage of your professional journey—whether you're taking your first step into project management, aiming for an industry-leading certification like PMP®, or upskilling in Agile, Cloud, Cybersecurity, or IT Service Management. Our mission is to equip you with not just credentials, but real-world expertise, global perspectives, and a competitive edge.</p>
          </div>
          <div className="journey-visual flex-center flex-column gap-sm">
            <div className="journey-img-container">
              <img src={JourneyJourneyImage} alt="Your Success Starts Here" className="home-visual-img" />
            </div>
            <span style={{fontSize: '0.82rem', color: 'var(--text-muted)'}}>Image by Jr Korpa</span>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Why Choose Cambridge Learning Services Section */}
      <section className="why-choose-full-width py-xxl">
        <div className="container">
          <div className="text-center max-w-800" style={{margin: '0 auto var(--spacing-xxl) auto'}}>
            <span className="section-label why-label">Competitive Edge</span>
            <h2 className="why-main-title">Why Choose Cambridge Learning Services?</h2>
            <p className="why-main-desc">At Cambridge Learning Services, it’s not just about certification—it’s about building globally recognized expertise and driving real impact. Here’s why professionals and organizations worldwide trust Cambridge Learning Services:</p>
          </div>
          
          <div className="why-grid-2col">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="why-executive-card animate-fade-in">
                <div className="why-card-top">
                  <span className="why-pill-num">{item.num}</span>
                  <h3 className="why-card-heading">{item.title}</h3>
                </div>
                <p className="why-card-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <SectionWrapper bg="white" title="What Our Learners Say" subtitle="Real stories from professionals who accelerated their career trajectories.">
        <div className="grid grid-2 gap-xl align-center">
          <div className="testimonials-graphic flex-center">
            <div className="testimonial-graphic-frame glass-card">
              <img src={TestimonialsLearnersImage} alt="Testimonials Profile Header" className="testimonial-visual-img" />
            </div>
          </div>
          <div className="testimonials-list flex-column gap-md">
            {testimonials.map((t, idx) => (
              <div key={idx} className="modern-testimonial-card animate-fade-in">
                <div className="flex-between align-center">
                  <div className="rating-stars flex gap-xs text-accent">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="verified-review-pill">Verified Review</span>
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-footer">
                  <span className="testimonial-author">{t.author}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 10. Ready to get started? Section */}
      <section className="ready-banner text-center py-xxl">
        <div className="ready-ambient-glow"></div>
        <div className="container ready-container flex-column align-center gap-md">
          <span className="section-label ready-tag">Take the Next Step</span>
          <h2>Ready to get started?</h2>
          <p>When you choose Cambridge Learning Services, you're choosing a partner invested in your certification success and lifelong professional growth.</p>
          <div className="ready-actions flex gap-md flex-wrap justify-center my-sm">
            <Link to="/contact" className="btn btn-primary btn-large">
              Contact Us Today <FaChevronRight size={12} />
            </Link>
            <Link to="/courses" className="btn btn-outline-white btn-large">
              Browse Course Catalog
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          overflow-x: hidden;
        }

        .section-headline {
          font-size: 2.45rem;
          color: var(--primary-color);
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -0.025em;
        }

        .about-lead-bar {
          width: 55px;
          height: 3.5px;
          background: var(--accent-gradient);
          border-radius: 3px;
          margin-bottom: 1.35rem;
        }

        .about-p {
          font-size: 0.98rem;
          line-height: 1.74;
          color: var(--text-body);
          margin-bottom: 1.1rem;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .about-logo-frame {
          padding: 2.8rem 2.2rem;
          border-radius: var(--radius-xl);
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          box-shadow: 0 14px 34px -6px rgba(18, 51, 38, 0.08), 0 0 20px rgba(200, 109, 59, 0.06);
          max-width: 440px;
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.4rem;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .about-logo-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 45px -8px rgba(18, 51, 38, 0.12), 0 0 28px rgba(200, 109, 59, 0.18);
          border-color: rgba(200, 109, 59, 0.35);
        }

        .about-logo-img {
          width: 100%;
          max-height: 135px;
          object-fit: contain;
          transition: transform var(--transition-normal);
        }

        .about-logo-frame:hover .about-logo-img {
          transform: scale(1.05);
        }

        .frame-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.15rem;
          background: var(--accent-light);
          border: 1px solid rgba(232, 130, 38, 0.35);
          border-radius: var(--radius-pill);
          font-size: 0.84rem;
          font-weight: 750;
          color: var(--primary-color);
          box-shadow: 0 2px 10px rgba(232, 130, 38, 0.12);
        }

        .journey-paragraphs p {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.75;
          margin-bottom: 1.25rem;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .journey-img-container {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-color);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .journey-img-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 55px -10px rgba(10, 30, 52, 0.22), 0 0 24px rgba(232, 130, 38, 0.15);
        }

        .home-visual-img {
          width: 100%;
          max-width: 520px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }

        .journey-img-container:hover .home-visual-img {
          transform: scale(1.04);
        }

        /* Why Choose Executive Grid */
        .why-choose-full-width {
          background: linear-gradient(180deg, #FAF8F5 0%, #F3EFE7 50%, #FAF8F5 100%);
          color: var(--primary-dark);
          position: relative;
        }

        .why-label {
          margin-bottom: 0.5rem;
        }

        .why-main-title {
          font-size: 2.65rem;
          font-weight: 850;
          color: var(--primary-color);
          margin-bottom: var(--spacing-xs);
          letter-spacing: -0.03em;
        }

        .why-main-desc {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.68;
        }

        .why-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .why-executive-card {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.85rem;
          box-shadow: 0 4px 18px rgba(15, 56, 42, 0.04);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          position: relative;
        }

        .why-executive-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -6px rgba(15, 56, 42, 0.09), 0 0 20px rgba(200, 125, 67, 0.12);
          border-color: rgba(200, 125, 67, 0.35);
        }

        .why-card-top {
          display: flex;
          align-items: center;
          gap: 0.95rem;
        }

        .why-pill-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-light);
          color: var(--accent-color);
          font-weight: 800;
          font-size: 0.95rem;
          border: 1.5px solid rgba(200, 125, 67, 0.3);
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .why-executive-card:hover .why-pill-num {
          background: var(--accent-gradient);
          color: #FFFFFF;
          transform: scale(1.08) rotate(3deg);
          box-shadow: 0 4px 14px rgba(200, 125, 67, 0.35);
        }

        .why-card-heading {
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--primary-color);
          margin: 0;
          line-height: 1.35;
        }

        .why-card-body {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        /* Testimonials */
        .testimonial-graphic-frame {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          transition: transform var(--transition-normal);
        }

        .testimonial-graphic-frame:hover {
          transform: translateY(-4px);
        }

        .testimonial-visual-img {
          width: 100%;
          max-width: 480px;
          display: block;
        }

        .modern-testimonial-card {
          background-color: #FFFFFF;
          padding: 1.45rem 1.75rem;
          border-radius: var(--radius-md);
          box-shadow: 0 3px 14px rgba(15, 56, 42, 0.04);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .modern-testimonial-card:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 26px -4px rgba(15, 56, 42, 0.08);
          border-color: rgba(200, 125, 67, 0.35);
        }

        .verified-review-pill {
          font-size: 0.74rem;
          font-weight: 650;
          color: #059669;
          background: #ECFDF5;
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.24rem 0.65rem;
          border-radius: var(--radius-pill);
        }

        .testimonial-quote {
          font-style: italic;
          font-size: 0.96rem;
          line-height: 1.68;
          margin: 0.85rem 0;
          color: var(--text-dark);
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
        }

        .testimonial-author {
          font-weight: 750;
          color: var(--primary-color);
        }

        .testimonial-role {
          color: var(--text-muted);
        }

        /* Ready Banner */
        .ready-banner {
          background: var(--dark-gradient);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
        }

        .ready-ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 650px;
          height: 380px;
          background: radial-gradient(circle, rgba(200, 109, 59, 0.25) 0%, transparent 70%);
          pointer-events: none;
          animation: floatOrb1 15s ease-in-out infinite;
        }

        .ready-tag {
          background: rgba(200, 109, 59, 0.18);
          color: #F8D5C2;
          border-color: rgba(200, 109, 59, 0.45);
        }

        .ready-container {
          position: relative;
          z-index: 2;
        }

        .ready-container h2 {
          font-size: 2.75rem;
          color: var(--text-light);
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .ready-container p {
          max-width: 660px;
          color: #CBD5E1;
          font-size: 1.15rem;
          line-height: 1.65;
        }

        .btn-large {
          padding: 0.95rem 2.35rem;
          font-size: 1.02rem;
        }

        @media (max-width: 1024px) {
          .why-grid-2col {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-logo-frame {
            max-width: 100%;
          }
          .ready-container h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
