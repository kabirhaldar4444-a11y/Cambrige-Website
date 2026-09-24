import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import { FaInfoCircle, FaShieldAlt, FaLock, FaUserCheck, FaFileAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const PrivacyStatement = () => {
  return (
<div className="privacy-page">
  <section className="privacy-hero animate-fade-in" style={{"backgroundImage":"url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80)","backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat","width":"100%","position":"relative"}}>
    <div className="hero-overlay" />
    <div className="container hero-content">
      <span className="hero-tag">Data Governance & Platform Security</span>
      <h1 className="hero-title">Privacy Policy</h1>
      <p className="hero-subtitle">Comprehensive Legal Framework for Data Collection, Biometric Verification, Storage, and Processing Practices</p>
    </div>
  </section>
  <section className="privacy-notice-bar">
    <div className="container">
      <div className="notice-inner">
        <FaInfoCircle className="notice-icon" />
        <span>
          <strong>Platform Notice:</strong>
           Cambridge Learning Services operates strictly as an asynchronous educational infrastructure platform. Data collection and KYC verification protocols are deployed to safeguard platform security and uphold transaction compliance.
        </span>
      </div>
    </div>
  </section>
  <SectionWrapper bg="white">
    <div className="privacy-container">
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">1</span>
          <div>
            <h3>Introduction & Scope</h3>
            <span className="header-meta">Platform Governance & Mandatory Consent</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <p>
            This Privacy Policy governs the data collection, storage, processing, and security practices of 
            <strong>Cambridge Learning Services</strong>
             (operating through its asynchronous educational infrastructure platform at 
            <a href="https://cambridgelearningservices.com" target="_blank" rel="noopener noreferrer">https://cambridgelearningservices.com</a>
            ).
          </p>
          <p>
            To deliver independent vocational training programs, identity verification services, and verifiable institutional credentials, Cambridge Learning Services must handle specific personal and biometric data. By registering an account, making a purchase, or completing the security verification steps, you 
            <strong>explicitly consent</strong>
             to the collection, processing, and retention practices outlined in this policy.
          </p>
        </div>
      </div>
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">2</span>
          <div>
            <h3>Information We Collect</h3>
            <span className="header-meta">Data Processing Stages Across User Lifecycle</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <p>Cambridge Learning Services processes information through various stages of your onboarding, verification, and educational journey:</p>
          <div className="data-sub-block">
            <div className="sub-block-header">
              <span className="sub-tag">A</span>
              <h4>Personal Identification Data</h4>
            </div>
            <ul className="styled-list">
              <li>
                <strong>Registration & Contact Information:</strong>
                 Full legal name, billing address, phone number, and corporate email address collected during checkout or sign-up.
              </li>
              <li>
                <strong>Fiscal Identity:</strong>
                 Information required to generate corporate accounts, including corporate entity names and specific tax identifiers.
              </li>
            </ul>
          </div>
          <div className="data-sub-block highlight-sub-block">
            <div className="sub-block-header">
              <span className="sub-tag tag-warning">B</span>
              <h4>Mandatory KYC & Security Verification Data</h4>
            </div>
            <ul className="styled-list">
              <li>
                <div className="list-item-title">
                  <FaShieldAlt className="list-icon" />
                  <strong>Documentary Identity (Document KYC):</strong>
                </div>
                <p>Images or digital files of valid government-issued photo identification cards or institutional credential badges uploaded securely to our portal.</p>
              </li>
              <li>
                <div className="list-item-title">
                  <FaLock className="list-icon" />
                  <strong>Biometric Identity (Video KYC):</strong>
                </div>
                <p>Self-directed, brief video records processed through an integrated web interface to execute facial matching against submitted documentation and to eliminate proxy testing.</p>
              </li>
            </ul>
          </div>
          <div className="data-sub-block">
            <div className="sub-block-header">
              <span className="sub-tag">C</span>
              <h4>Academic & Technical Workspace Logs</h4>
            </div>
            <ul className="styled-list">
              <li>
                <strong>Evaluation Records:</strong>
                 Answers, responses, submission timestamps, and performance metrics parsed by our grading matrices during automated final examinations.
              </li>
              <li>
                <strong>System & Backend Server Logs:</strong>
                 Unique workspace access keys, internet protocol (IP) address mapping, browser data, and precise file-download timestamps related to the release of text libraries and video lecture elements.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">3</span>
          <div>
            <h3>How We Use Your Data</h3>
            <span className="header-meta">Structural Service Loop & Platform Safety</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <p>Your information is processed strictly to maintain platform safety and complete the structural service loop:</p>
          <div className="use-grid">
            <div className="use-item">
              <div className="use-icon-wrap">
                <FaInfoCircle />
              </div>
              <div>
                <h5>Identity Verification & Anti-Fraud</h5>
                <p>Cross-referencing your biometric Video KYC data with your submitted physical document profile to establish an unalterable audit trail, eliminating proxy test-taking and financial transaction theft.</p>
              </div>
            </div>
            <div className="use-item">
              <div className="use-icon-wrap">
                <FaUserCheck />
              </div>
              <div>
                <h5>Service Fulfillment</h5>
                <p>Provisioning individual profiles with unique access keys to streaming lecture workspaces, digital text repositories, and encrypted final examination modules.</p>
              </div>
            </div>
            <div className="use-item">
              <div className="use-icon-wrap">
                <FaLock />
              </div>
              <div>
                <h5>Credential Issuance</h5>
                <p>Generating accurate legal profiles for formal, verifiable documents, including initial Enrollment Certificates and final Provisional Certificates (PC).</p>
              </div>
            </div>
            <div className="use-item">
              <div className="use-icon-wrap">
                <FaFileAlt />
              </div>
              <div>
                <h5>Compliance & Legal Accountability</h5>
                <p>Compiling and posting legally compliant Corporate GST Invoices straight to your workspace within 24 hours of successful validation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">4</span>
          <div>
            <h3>Data Protection, Sharing, and Disclosure</h3>
            <span className="header-meta">Strict Isolation & Conditional Disclosure Framework</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <div className="data-sub-block">
            <div className="sub-block-header">
              <span className="sub-tag">A</span>
              <h4>Strict Third-Party Restrictions</h4>
            </div>
            <p>
              Cambridge Learning Services treats proprietary and personal data with high security. 
              <strong>We do not sell, rent, trade, or share</strong>
               your personal, documentary, or biometric data with external third-party marketing networks or unrelated data brokers.
            </p>
          </div>
          <div className="data-sub-block">
            <div className="sub-block-header">
              <span className="sub-tag tag-warning">B</span>
              <h4>Conditional Sharing Framework</h4>
            </div>
            <p>Data is shared exclusively under the following strict conditions:</p>
            <ul className="styled-list">
              <li>
                <strong>Payment Processing:</strong>
                 Financial details are managed securely via encrypted, external payment gateways during checkout to clear transactions safely.
              </li>
              <li>
                <strong>Dispute and Chargeback Defense:</strong>
                 In alignment with our Terms and Conditions, if a user files a transaction dispute, credit card chargeback, or payment reversal claim, Cambridge Learning Services will submit backend server logs (such as download metrics and KYC verification markers) to the involved financial institutions to defend against the claim.
              </li>
              <li>
                <strong>Legal Enforcement:</strong>
                 Data may be disclosed if required by an official court order, applicable government statutory body, or prevailing regulatory legal framework.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">5</span>
          <div>
            <h3>Security & Technical Safeguards</h3>
            <span className="header-meta">Multi-Layered Protection & Automated Enforcement</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <p>We implement a multi-layered security infrastructure to shield your files and identity profiles:</p>
          <div className="safeguards-grid">
            <div className="safeguard-card">
              <div className="safeguard-icon">
                <FaCheckCircle />
              </div>
              <div>
                <h5>Data Encryption</h5>
                <p>Document uploads, video files, and financial invoice generation are processed and stored over secure, encrypted network connections.</p>
              </div>
            </div>
            <div className="safeguard-card">
              <div className="safeguard-icon text-danger">
                <FaExclamationTriangle />
              </div>
              <div>
                <h5>Workspace Automated Bans</h5>
                <p>Automated behavioral system parameters track multi-location concurrent logins. Profiles attempting unauthorized concurrent access, scraping attempts via scripts, or distributing video access streams are banned to ensure ecosystem security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">6</span>
          <div>
            <h3>Data Retention Policies</h3>
            <span className="header-meta">Audit Trails & Legal Archiving</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <ul className="styled-list">
            <li>
              <strong>Operational Files:</strong>
               Personal profile structures, exam transcripts, and credential verification links are kept for as long as your workspace account remains active or to fulfill tax, corporate accounting, or institutional tracking standards.
            </li>
            <li>
              <strong>KYC Security Profiles:</strong>
               Biometric checks and government identification logs are preserved securely to maintain an unalterable transaction audit trail, serving as definitive evidence of contractual compliance.
            </li>
          </ul>
        </div>
      </div>
      <div className="privacy-card">
        <div className="privacy-card-header">
          <span className="section-num-badge">7</span>
          <div>
            <h3>Acceptance & Acknowledgement</h3>
            <span className="header-meta">Binding Execution Notice</span>
          </div>
        </div>
        <div className="privacy-card-body">
          <p>Interacting with the platform, completing registrations, or inputting identity vectors implies explicit and dynamic acknowledgement of this Privacy Policy. If you do not accept these data handling rules, you must immediately halt data submission and exit the platform.</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
  <style>{`

        .privacy-page {
          overflow-x: hidden;
          background: #f8fafc;
        }

        .privacy-hero {
          position: relative;
          width: 100%;
          height: 340px;
          margin-top: 80px;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 41, 66, 0.92) 0%, rgba(15, 23, 42, 0.85) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: #ffffff;
          max-width: 900px;
          padding: 0 1.5rem;
        }

        .hero-tag {
          display: inline-block;
          background: rgba(218, 41, 28, 0.2);
          border: 1px solid rgba(218, 41, 28, 0.4);
          color: #fca5a5;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin: 0;
          line-height: 1.5;
          max-width: 720px;
        }

        .privacy-notice-bar {
          background: var(--primary-color);
          border-bottom: 2px solid var(--accent-color);
          padding: 12px 0;
          color: #f1f5f9;
          font-size: 0.9rem;
        }

        .notice-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 920px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .notice-icon {
          color: var(--accent-color);
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .privacy-container {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          padding: 2.5rem 1.5rem;
        }

        .privacy-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .privacy-card:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .privacy-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #f8fafc;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        .section-num-badge {
          background: var(--primary-color);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 800;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .privacy-card-header h3 {
          font-size: 1.25rem;
          color: var(--primary-color);
          margin: 0;
          font-weight: 700;
        }

        .header-meta {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .privacy-card-body {
          padding: 24px;
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .privacy-card-body p {
          margin-top: 0;
          margin-bottom: 1rem;
          color: #334155;
        }

        .privacy-card-body p:last-child {
          margin-bottom: 0;
        }

        .data-sub-block {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px 20px;
          margin-top: 1.25rem;
        }

        .highlight-sub-block {
          background: #fffbeb;
          border-color: #fde68a;
        }

        .sub-block-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .sub-tag {
          background: var(--primary-color);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sub-tag.tag-warning {
          background: #d97706;
        }

        .sub-block-header h4 {
          font-size: 1.02rem;
          color: var(--primary-color);
          margin: 0;
          font-weight: 700;
        }

        .styled-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .styled-list li {
          position: relative;
          padding-left: 20px;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #334155;
        }

        .styled-list li::before {
          content: '▪';
          position: absolute;
          left: 4px;
          top: -1px;
          color: var(--accent-color);
          font-size: 1.1rem;
        }

        .list-item-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .list-icon {
          color: #d97706;
        }

        .use-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .use-item {
          display: flex;
          gap: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
        }        .use-icon-wrap {
          background: var(--primary-color);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .use-item h5 {
          font-size: 0.95rem;
          color: var(--primary-color);
          margin: 0 0 6px 0;
          font-weight: 700;
        }

        .use-item p {
          font-size: 0.88rem;
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        .safeguard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .safeguard-card {
          display: flex;
          gap: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
        }

        .safeguard-icon {
          background: #ffffff;
          color: var(--primary-color);
          border: 1px solid #cbd5e1;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .safeguard-icon.text-danger {
          color: #dc2626;
          border-color: #fca5a5;
          background: #fef2f2;
        }

        .safeguard-card h5 {
          font-size: 0.95rem;
          color: var(--primary-color);
          margin: 0 0 6px 0;
          font-weight: 700;
        }

        .safeguard-card p {
          font-size: 0.88rem;
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .privacy-hero {
            height: 240px;
            margin-top: 70px;
          }

          .hero-title {
            font-size: 1.75rem;
          }

          .hero-subtitle {
            font-size: 0.92rem;
          }

          .use-grid,
          .safeguards-grid {
            grid-template-columns: 1fr;
          }

          .privacy-card-header {
            padding: 14px 18px;
          }

          .privacy-card-body {
            padding: 18px;
          }
        }
      
  `}</style>
</div>
  );
};

export default PrivacyStatement;
