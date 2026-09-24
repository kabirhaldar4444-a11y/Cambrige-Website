import React from 'react';
import Hero from '../components/sections/Hero';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { solutionsCourses, masterTrainings, checkerboardCourses } from '../data/coursesData';
import { FaBookOpen, FaLaptopCode, FaChartLine, FaUserTie, FaRegStar, FaClock, FaHeart } from 'react-icons/fa';

const Solutions = () => {
  const tracks = [
    {
      num: "01",
      title: "Project Management & Leadership",
      desc: "Build expertise in project planning, risk management, agile methodologies, and team leadership.",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
      icon: <FaBookOpen size={24} />
    },
    {
      num: "02",
      title: "Digital Transformation & Innovation",
      desc: "Explore emerging trends with courses in digital strategy, business analytics, and innovation management.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      icon: <FaLaptopCode size={24} />
    },
    {
      num: "03",
      title: "Operations & Strategy",
      desc: "Strengthen your decision-making with programs in operational excellence, strategic planning, and process improvement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: <FaChartLine size={24} />
    },
    {
      num: "04",
      title: "Professional Skills & Growth",
      desc: "Enhance your career with training in communication, critical thinking, negotiation, and leadership development.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      icon: <FaUserTie size={24} />
    }
  ];

  return (
    <div className="solutions-page">
      {/* 1. Hero */}
      <Hero 
        title="EXPLORE Cambridge Learning Services SOLUTIONS"
        subtitle="Discover a wide range of innovative solutions crafted to support your business objectives. At Cambridge Learning Services, we provide tailored services across diverse industries, helping organizations improve efficiency, achieve their goals, and foster sustainable growth. From advanced technology solutions to strategic consulting, Cambridge Learning Services is your trusted partner in driving success."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
        ctaText="Contact Us"
        ctaPath="/contact"
      />

      {/* 2. Choose Your Track */}
      <SectionWrapper bg="white" title="CHOOSE YOUR TRACK" subtitle="Customized courses for every industry sector">
        <div className="grid grid-4 gap-lg">
          {tracks.map((track, idx) => (
            <Card 
              key={idx} 
              className="track-card flex-column justify-between has-bg-img animate-fade-in"
              style={{ backgroundImage: `url(${track.image})` }}
            >
              <div className="track-overlay"></div>
              <div className="track-content flex-column justify-between h-full">
                <div className="track-icon-wrapper flex-between align-center">
                  <span className="track-num">{track.num}</span>
                  <span className="track-icon">{track.icon}</span>
                </div>
                <div className="track-text">
                  <h3 className="track-title">{track.title}</h3>
                  <p className="track-desc">{track.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Our Courses On Offer */}
      <SectionWrapper bg="gray" title="Our courses on offer" subtitle="Explore a wide array of courses designed to cater to your learning needs and professional growth. Our courses are tailored to provide comprehensive knowledge and practical skills in various domains.">
        <div className="grid grid-4 gap-md">
          {solutionsCourses.map((c, idx) => (
            <Card key={idx} className="solution-course-card flex-column justify-between gap-0 p-0 overflow-hidden animate-fade-in">
              <div className="course-card-img-wrapper">
                <img src={c.image} alt={c.title} className="course-card-img" />
                <div className="course-card-img-overlay"></div>
              </div>
              <div className="course-card-body flex-column justify-between gap-md">
                <h3 className="s-course-title">{c.title}</h3>
                {c.isExternal ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline s-course-btn">
                    View Course
                  </a>
                ) : (
                  <a href={c.link} className="btn btn-outline s-course-btn">
                    Explore Now
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Crafted Around Your Learning Journey */}
      <SectionWrapper bg="white">
        <div className="grid grid-2 gap-xl align-center">
          <div className="journey-text animate-fade-in">
            <span className="section-label">Tailored Just For You</span>
            <h2>Crafted Around Your Learning Journey</h2>
            <p>At Cambridge Learning Services, we believe that every learner brings their own goals, strengths, and aspirations to the table. That’s why we go beyond a one-size-fits-all approach and design our courses to truly reflect your individual journey. Whether you're looking to advance your career, explore new opportunities, or deepen your expertise, our programs are thoughtfully structured to support you at every step.</p>
            <p>Our customized learning experience allows you to progress at your own pace while focusing on the areas that matter most to you. With flexible course structures, practical insights, and learner-focused content, we ensure that your education is not only relevant but also impactful. At Cambridge Learning Services, your ambitions guide the way, and we’re here to help you turn them into achievements.</p>
          </div>
          <div className="journey-graphic-container flex-column align-center gap-md">
            <div className="journey-device-showcase shadow-lg rounded overflow-hidden animate-fade-in">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Tablet and Laptop" className="device-img" />
            </div>
            
            <div className="mock-phone card shadow-md animate-fade-in">
              <div className="phone-screen flex-column gap-md">
                <div className="screen-header flex-between">
                  <span>My Journey</span>
                  <span className="badge-online">Online</span>
                </div>
                <div className="journey-progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
                <div className="journey-steps-list flex-column gap-sm">
                  <div className="j-step done">✓ Enrollment Completed</div>
                  <div className="j-step done">✓ Diagnostic Pre-Assessment</div>
                  <div className="j-step active">⏳ Self-Paced Training</div>
                  <div className="j-step lock">🔒 Final Evaluation Exam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Master Training Grid */}
      <SectionWrapper 
        bg="gray" 
        title="Unlock Your True Potential:"
        subtitle="Explore how Cambridge Learning Services can support you in reaching new levels of success. Our thoughtfully designed courses, combined with expert mentorship, equip you with the practical skills and in-depth knowledge needed to thrive in today’s competitive world. We are committed to helping you grow both professionally and personally by providing a learning experience that inspires confidence and drives results. Take the next step with Cambridge Learning Services and embark on a journey of continuous improvement, achievement, and excellence."
      >
        <div className="grid grid-4 gap-md">
          {masterTrainings.map((c, idx) => (
            <Card key={idx} className="solution-course-card master-card flex-column justify-between gap-0 p-0 overflow-hidden animate-fade-in">
              <div className="course-card-img-wrapper">
                <img src={c.image} alt={c.title} className="course-card-img" />
                <div className="course-card-img-overlay"></div>
                <span className="master-badge-overlay">Master Class</span>
              </div>
              <div className="course-card-body flex-column justify-between gap-md">
                <h3 className="s-course-title">{c.title}</h3>
                <a href={c.link} className="btn btn-outline s-course-btn">
                  Explore Now
                </a>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Checkerboard Section */}
      <SectionWrapper bg="white" className="checkerboard-section" style={{paddingBottom: '0'}}>
        {/* Row 1: Course 13 Time Management */}
        <div className="checker-row grid grid-2 gap-0 align-center">
          <div className="checker-content py-xl animate-fade-in">
            <span className="section-label">Boost Performance</span>
            <h2>{checkerboardCourses[0].title}</h2>
            <p>{checkerboardCourses[0].description}</p>
            <a href={checkerboardCourses[0].link} target="_blank" rel="noopener noreferrer" className="btn btn-primary my-md">
              View Course Details
            </a>
          </div>
          <div className="checker-visual flex-center bg-navy text-light py-xxl overflow-hidden relative">
            <img src={checkerboardCourses[0].image} alt="Time Management" className="checker-bg-img" />
            <div className="checker-overlay"></div>
            <FaClock size={90} className="checker-icon animate-pulse" style={{ position: 'relative', zIndex: 3 }} />
          </div>
        </div>

        {/* Row 2: Course 14 Soft Skills */}
        <div className="checker-row grid grid-2 gap-0 align-center reverse-mobile">
          <div className="checker-visual flex-center bg-red text-light py-xxl overflow-hidden relative">
            <img src={checkerboardCourses[1].image} alt="Soft Skills" className="checker-bg-img" />
            <div className="checker-overlay"></div>
            <FaHeart size={90} className="checker-icon animate-pulse" style={{ position: 'relative', zIndex: 3 }} />
          </div>
          <div className="checker-content py-xl animate-fade-in">
            <span className="section-label">Essential Foundations</span>
            <h2>{checkerboardCourses[1].title}</h2>
            <p>{checkerboardCourses[1].description}</p>
            <a href={checkerboardCourses[1].link} target="_blank" rel="noopener noreferrer" className="btn btn-primary my-md">
              View Course Details
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Stats & Testimonial Box */}
      <SectionWrapper bg="gray" title="We're good with numbers" subtitle="Our global metrics validate the standard and reliability of our frameworks.">
        <div className="grid grid-3 gap-lg text-center my-lg">
          <Card className="stat-num-card flex-column align-center gap-sm animate-fade-in">
            <span className="stat-big-num">45,000+</span>
            <p className="stat-label">Number of customers servered</p> {/* EXACT original typo preserved */}
          </Card>
          <Card className="stat-num-card flex-column align-center gap-sm animate-fade-in">
            <span className="stat-big-num">89%</span>
            <p className="stat-label">Success Rate in certification</p>
          </Card>
          <Card className="stat-num-card flex-column align-center gap-sm animate-fade-in">
            <span className="stat-big-num">150+</span>
            <p className="stat-label">150+ Customized Course</p>
          </Card>
        </div>

        {/* Rahul Testimonial Box */}
        <div className="rahul-testimonial-card card my-xxl text-center max-w-800 flex-column align-center gap-sm animate-fade-in">
          <div className="testimonial-avatar shadow-md">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Rahul Sharma" className="avatar-img" />
          </div>
          <div className="flex justify-center gap-xs text-accent my-xs">
            <FaRegStar size={20} /><FaRegStar size={20} /><FaRegStar size={20} /><FaRegStar size={20} /><FaRegStar size={20} />
          </div>
          <p className="rahul-quote">"Cambridge Learning Services has played a significant role in advancing my career through its thoughtfully designed courses and dedicated instructor support. The learning experience has been truly enriching and impactful. I would highly recommend Cambridge Learning Services to anyone looking to grow professionally."</p>
          <span className="rahul-author">-Rahul Sharma</span>
        </div>
      </SectionWrapper>

      {/* 8. Ready to get started Banner */}
      <section className="ready-banner text-center py-xl relative">
        <div className="ready-bg-overlay"></div>
        <div className="container ready-container flex-column align-center gap-md" style={{ position: 'relative', zIndex: 3 }}>
          <h2>Ready to get started?</h2>
          <p>When you choose Cambridge Learning Services, you're choosing a partner invested in your certification success and lifelong professional growth.</p>
          <a href="/contact" className="btn btn-outline-white">
            Contact Us
          </a>
        </div>
      </section>

      <style>{`
        .solutions-page {
          overflow-x: hidden;
        }

        /* Full-bleed Track Cards with overlays and hover effects */
        .track-card.has-bg-img {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: var(--spacing-xl) var(--spacing-lg);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .track-card.has-bg-img:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 40px rgba(10, 30, 52, 0.35), 0 0 20px rgba(232, 130, 38, 0.25);
        }

        .track-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(10, 30, 52, 0.45) 0%, rgba(10, 30, 52, 0.92) 100%);
          z-index: 1;
          transition: all var(--transition-normal);
        }

        .track-card.has-bg-img:hover .track-overlay {
          background: linear-gradient(180deg, rgba(10, 30, 52, 0.2) 0%, rgba(16, 51, 88, 0.92) 55%, rgba(232, 130, 38, 0.88) 100%);
        }

        .track-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .track-card.has-bg-img .track-num {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }

        .track-card.has-bg-img:hover .track-num {
          transform: scale(1.1);
          color: #FBBF24;
        }

        .track-card.has-bg-img .track-icon {
          color: #ffffff;
          opacity: 0.9;
          transition: transform var(--transition-fast);
        }

        .track-card.has-bg-img:hover .track-icon {
          transform: rotate(8deg) scale(1.15);
        }

        .track-card.has-bg-img .track-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: var(--spacing-xs);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .track-card.has-bg-img .track-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.55;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        /* Premium Course Cards with Images */
        .solution-course-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--bg-primary);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          height: auto;
          min-height: 380px;
          display: flex;
          flex-direction: column;
        }

        .solution-course-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--hover-shadow);
          border-color: rgba(232, 130, 38, 0.35);
        }

        .course-card-img-wrapper {
          position: relative;
          height: 160px;
          width: 100%;
          overflow: hidden;
        }

        .course-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .solution-course-card:hover .course-card-img {
          transform: scale(1.08);
        }

        .course-card-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 60%, rgba(10, 30, 52, 0.5) 100%);
          z-index: 1;
        }

        .course-card-body {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .solution-course-card.master-card {
          border: 1px solid var(--border-color);
        }

        .master-badge-overlay {
          position: absolute;
          top: var(--spacing-sm);
          left: var(--spacing-sm);
          background-color: var(--accent-color);
          color: #ffffff;
          padding: 0.2rem 0.5rem;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          border-radius: 4px;
          z-index: 2;
          box-shadow: var(--shadow-sm);
        }

        .s-course-title {
          font-size: 1.05rem;
          color: var(--primary-color);
          line-height: 1.45;
          font-weight: 700;
        }

        .s-course-btn {
          font-size: 0.8rem;
          padding: 0.55rem 0;
          font-weight: 700;
        }

        /* Journey phone mockup */
        .mock-phone {
          width: 300px;
          height: 380px;
          border: 12px solid #2d3748;
          border-radius: 36px;
          padding: var(--spacing-md);
          background-color: var(--bg-primary);
          box-shadow: var(--hover-shadow);
        }

        .phone-screen {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .screen-header {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary-color);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: var(--spacing-xs);
        }

        .badge-online {
          background-color: #48bb78;
          color: #fff;
          font-size: 0.7rem;
          padding: 0.1rem 0.4rem;
          border-radius: 10px;
        }

        .journey-progress-bar {
          background-color: #edf2f7;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          background-color: var(--accent-color);
          height: 100%;
        }

        .journey-steps-list {
          margin-top: var(--spacing-sm);
        }

        .j-step {
          font-size: 0.85rem;
          padding: 0.5rem;
          border-radius: 4px;
        }

        .j-step.done {
          background-color: rgba(72, 187, 120, 0.08);
          color: #2f855a;
          font-weight: 600;
        }

        .j-step.active {
          background-color: rgba(232, 130, 38, 0.12);
          color: var(--accent-color);
          font-weight: 700;
          animation: pulse 1.5s infinite;
        }

        .j-step.lock {
          color: #a0aec0;
        }

        .journey-device-showcase {
          max-width: 440px;
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          transition: transform var(--transition-normal);
        }

        .journey-device-showcase:hover {
          transform: translateY(-4px) scale(1.02);
        }

        .device-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Checkerboard designs with backgrounds */
        .checkerboard-section {
          padding-bottom: 0;
        }

        .checker-row {
          border-bottom: 1px solid var(--border-color);
        }

        .checker-content {
          padding: 0 var(--spacing-xxl);
        }

        .checker-visual {
          height: 380px;
          position: relative;
        }

        .checker-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .checker-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(9, 36, 27, 0.78) 0%, rgba(15, 56, 42, 0.82) 100%);
          z-index: 2;
        }

        .checker-icon {
          opacity: 0.9;
        }

        /* Stats & numbers */
        .stat-num-card {
          border: 1px solid var(--border-color);
          background: #FFFFFF;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .stat-num-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--hover-shadow);
          border-color: rgba(200, 125, 67, 0.4);
        }

        .stat-big-num {
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent-color);
          font-family: var(--font-heading);
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        /* Testimonial Box with Avatar */
        .rahul-testimonial-card {
          margin: var(--spacing-xxl) auto var(--spacing-md) auto;
          max-width: 760px;
          border-radius: var(--radius-lg);
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .testimonial-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--accent-color);
          margin-bottom: var(--spacing-sm);
          box-shadow: 0 4px 15px rgba(232, 130, 38, 0.25);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rahul-quote {
          font-style: italic;
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-dark);
          margin: var(--spacing-md) 0;
        }

        .rahul-author {
          font-weight: 800;
          color: var(--primary-color);
          font-size: 1.05rem;
        }

        /* Ready Banner Background */
        .ready-banner {
          background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          color: #ffffff;
          padding: 7rem 0;
        }

        .ready-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(9, 36, 27, 0.9) 0%, rgba(15, 56, 42, 0.94) 100%);
          z-index: 1;
        }

        .ready-container h2 {
          color: #ffffff;
          font-size: 2.5rem;
          font-weight: 800;
        }

        .ready-container p {
          color: #e2e8f0;
          max-width: 650px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        .animate-pulse {
          animation: pulse 2.5s infinite;
        }

        @media (max-width: 1024px) {
          .grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid-4 {
            grid-template-columns: 1fr;
          }

          .checker-visual {
            height: 220px;
          }
          
          .checker-content {
            padding: var(--spacing-lg) var(--spacing-md);
            text-align: center;
          }

          .reverse-mobile {
            display: flex;
            flex-direction: column-reverse;
          }

          .ready-container h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Solutions;
