import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';

const ServiceDelivery = () => {
  return (
<div className="delivery-page">
  <section className="delivery-hero animate-fade-in" style={{"backgroundImage":"url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80)","backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat","width":"100%","position":"relative"}} />
  <section className="page-header py-xl bg-gray">
    <div className="container animate-fade-in">
      <span className="section-label">Fulfillment Framework</span>
      <h1>Service Delivery Protocol</h1>
      <p className="lead-p">Our systematic, 9-step service delivery architecture ensures end-to-end transparency, regulatory compliance, and verified milestones across the complete learner lifecycle.</p>
    </div>
  </section>
  <SectionWrapper bg="white">
    <div className="delivery-container flex-column gap-xl animate-fade-in">
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 1</div>
          <h3>Immediate Admission Confirmation After Payment</h3>
        </div>
        <div className="step-card-body">
          <p>The student onboarding journey begins instantly upon checkout. As soon as a transaction clears our secure platform gateways, our backend servers trigger an Automated Admission Confirmation Notice. Students receive a digital welcome package containing their permanent user profile IDs, platform workspace access routes, and an overview map of their target educational tracks.</p>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 2</div>
          <h3>Mandatory Document KYC Verification</h3>
        </div>
        <div className="step-card-body">
          <p>In strict compliance with structural risk management policies, all enrolled learners must verify their commercial profile data. Students are required to securely upload their valid identity documentation (such as government-issued photo IDs or institutional cards) to our encrypted verification portal. This step ensures that final completion documentation matches legal corporate profiles accurately.</p>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 3</div>
          <h3>Secure Video KYC Authentication</h3>
        </div>
        <div className="step-card-body">
          <p>To prevent platform identity theft, proxy testing, and transaction chargeback vectors, students must execute an automated Video KYC Verification step. Using an integrated web interface, learners record a brief, self-directed biometric identity check matching their uploaded documents. This establishes an unalterable audit trail for security purposes.</p>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 4</div>
          <h3>System Generation & Delivery of GST Invoice</h3>
        </div>
        <div className="step-card-body">
          <p>Accountability and fiscal transparency are foundational to our services. Within 24 hours of successful verification, our accounting systems compile a comprehensive, legally compliant Corporate GST Invoice detailing the exact service breakdown and tax identifiers. This asset is dispatched straight to the student’s billing tab for corporate tax deduction filing purposes.</p>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 5</div>
          <h3>Dissemination of Comprehensive PDF Study Material (Strict One-Time Release)</h3>
        </div>
        <div className="step-card-body">
          <p>Upon successful verification, the complete independent text registry library is unlocked. Students receive high-fidelity, comprehensive PDF Study Materials and Text Workbooks tailored strictly to their curriculum.</p>
          <div className="security-notice-box">
            <span className="notice-tag">Operational Security Notice</span>
            <p>In accordance with our digital asset protection protocols, all reading materials are shared on a strict one-time basis only. Students must securely download and save these assets immediately upon distribution, as link refreshes or secondary file dispatches will not be granted.</p>
          </div>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 6</div>
          <h3>Issuance of Formal Training Enrollment Certificate</h3>
        </div>
        <div className="step-card-body">
          <p>Before course modules begin, our records registry generates a formal, verifiable Cambridge Learning Services Enrollment Certificate. This initial credential serves as an active commercial proof of status, reflecting that the individual is currently under training within an active, non-affiliated skill development boot camp.</p>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 7</div>
          <h3>Access Provisioning for Video Lecture Sessions (Strict One-Time Release)</h3>
        </div>
        <div className="step-card-body">
          <p>Learners gain access to their master collection of high-definition, pre-recorded visual walkthroughs and technical screen-shares. These professional Video Lectures contain the entirety of the execution-level core methodologies.</p>
          <div className="security-notice-box">
            <span className="notice-tag">Operational Security Notice</span>
            <p>In line with platform distribution rules, access keys to the video lecture sets are shared on a strict one-time basis only. Re-sharing, profile splitting, or secondary video deliveries are completely restricted to safeguard content parameters.</p>
          </div>
        </div>
      </div>
      <div className="delivery-step-card">
        <div className="step-card-header">
          <div className="step-badge">Step 8</div>
          <h3>Distribution of Final Examination Login Credentials</h3>
        </div>
        <div className="step-card-body">
          <p>Once the 10-day, 20-day, or 30-day curriculum timeline has elapsed, the student workspace triggers the final evaluation phase. The platform outputs unique, encrypted Final Exam Login Credentials directly to the student portal, giving them an isolated access window to complete their timed, multiple-choice evaluation independently.</p>
        </div>
      </div>
      <div className="delivery-step-card step-card-final">
        <div className="step-card-header">
          <div className="step-badge step-badge-final">Step 9</div>
          <h3>Final Exam Result Processing & Delivery with Provisional Certificate (PC)</h3>
        </div>
        <div className="step-card-body">
          <p>Upon completing the examination, our grading engines parse the submission data against metric matrices. The comprehensive Final Exam Result Sheet is computed and displayed instantly inside the dashboard. Graduates are immediately issued their verified Provisional Certificate (PC), closing out the service lifecycle and enabling immediate skill deployment in the corporate sector.</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
  <style>{`

        .delivery-page {
          overflow-x: hidden;
        }

        .delivery-hero {
          position: relative;
          width: 100%;
          height: 380px;
          margin-top: 80px;
        }

        .page-header {
          padding-top: 3rem;
        }

        .lead-p {
          font-size: 1.05rem;
          color: #4a5568;
          line-height: 1.65;
          max-width: 900px;
          margin-top: 0.5rem;
        }

        .delivery-container {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .delivery-step-card {
          background-color: var(--bg-primary, #ffffff);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--border-color, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          border-left: 5px solid var(--primary-color, #0f2942);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .delivery-step-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
        }

        .step-card-final {
          border-left: 5px solid #059669;
          background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%);
        }

        .step-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 1rem;
        }

        .step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary-color, #0f2942);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }

        .step-badge-final {
          background-color: #059669;
        }

        .step-card-header h3 {
          font-size: 1.25rem;
          color: var(--primary-color, #0f2942);
          margin: 0;
          font-weight: 700;
          line-height: 1.4;
        }

        .step-card-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: #334155;
          line-height: 1.7;
          font-size: 0.96rem;
        }

        .step-card-body p {
          margin: 0;
        }

        .security-notice-box {
          background-color: #fffbeb;
          border: 1px solid #fde68a;
          border-left: 4px solid #d97706;
          border-radius: 6px;
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 0.5rem;
        }

        .notice-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: #b45309;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .security-notice-box p {
          font-size: 0.9rem;
          color: #78350f;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .delivery-hero {
            height: 220px;
            margin-top: 70px;
          }

          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }

          .delivery-step-card {
            padding: 1.35rem;
          }

          .step-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      
  `}</style>
</div>
  );
};

export default ServiceDelivery;
