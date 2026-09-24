import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';

const RefundPolicy = () => {
  return (
<div className="refund-page">
  <section className="refund-hero animate-fade-in" style={{"backgroundImage":"url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80)","backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat","width":"100%","position":"relative"}} />
  <section className="page-header py-xl bg-gray">
    <div className="container animate-fade-in">
      <span className="section-label">Financial & Fulfillment Policies</span>
      <h1>Service Fulfillment & No-Refund Policy</h1>
      <p className="lead-p">Please read this document carefully before enrolling. By completing any commercial transaction or registration on Cambridge Learning Services, you explicitly declare that you understand and agree to be legally bound by this comprehensive, non-negotiable policy.</p>
    </div>
  </section>
  <SectionWrapper bg="white">
    <div className="refund-container flex-column gap-xl animate-fade-in">
      <div className="policy-section">
        <div className="policy-header">
          <span className="policy-badge">1</span>
          <h3>Executive Summary & Legal Framework of Services</h3>
        </div>
        <div className="policy-body">
          <p>
            By completing a commercial financial transaction, processing a payment gateway fee, or registering for any independent skill-based training program on the Cambridge Learning Services network domains, the user (hereinafter legally referred to as the 
            <strong>"Student"</strong>
            , 
            <strong>"Client"</strong>
            , or 
            <strong>"User"</strong>
            ) explicitly acknowledges, understands, and binds themselves to this comprehensive, non-negotiable Service Fulfillment and No-Refund Policy.
          </p>
          <p>Cambridge Learning Services functions strictly and exclusively as an independent, asynchronous educational infrastructure platform. The digital training pathways, core methodologies, and instructional material hosted on the platform are structured solely as non-degree, non-diploma vocational training programs aimed at execution-level corporate skill development.</p>
          <div className="policy-notice-box">
            <span className="notice-title">Independent Status Notice</span>
            <p>The Client explicitly recognizes that Cambridge Learning Services does not maintain, require, or claim any affiliation, accreditation, licensing, or oversight from any university, government institute, statutory educational body, or private educational board. All institutional credentials, including "Certificates of Completion" and "Provisional Certificates (PC)", are granted based entirely on independent competency assessments managed internally by the platform’s grading matrices. Consequently, normal academic withdrawal policies, student tuition protection schemes, or traditional institutional refund metrics are wholly inapplicable to transactions executed with this platform.</p>
          </div>
        </div>
      </div>
      <div className="policy-section">
        <div className="policy-header">
          <span className="policy-badge">2</span>
          <h3>Asynchronous Delivery Model & Anti-Interactive Clauses</h3>
        </div>
        <div className="policy-body">
          <p>A fundamental pillar of this refund policy is the nature of the service delivery itself. Cambridge Learning Services operates on a static digital distribution model. The commercial valuation of the program is tied directly to the ingestion of proprietary digital intellectual property rather than live human instruction.</p>
          <ul className="policy-bullet-list">
            <li>
              <strong>Exclusivity of Medium:</strong>
               All vocational training curricula are delivered solely and exclusively via pre-recorded, asynchronous video lecture modules and downloadable PDF text study workbooks.
            </li>
            <li>
              <strong>Prohibition of Live Training:</strong>
               The platform never offers, promises, schedules, or provides any form of person-to-person instruction, live virtual classroom training, synchronous group webinars, real-time mentorship, or interactive tutor-led question-and-answer sessions.
            </li>
            <li>
              <strong>Self-Directed Operational Responsibility:</strong>
               The Student bears absolute, sole, and un-delegable responsibility for independently navigating, reading, viewing, and completing the course materials within the platform’s self-contained hosting framework.
            </li>
          </ul>
          <div className="policy-critical-alert">
            <strong>BINDING CLAUSE:</strong>
             No claims, complaints, demands, or legal petitions for refunds based on a purported lack of live human interaction, lack of custom feedback, or dissatisfaction with the self-guided nature of the platform will be entertained under any circumstances. The platform explicitly disclaims interactive training prior to purchase, and registration constitutes a complete waiver of claims regarding structural isolation during the learning process.
          </div>
        </div>
      </div>
      <div className="policy-section">
        <div className="policy-header">
          <span className="policy-badge">3</span>
          <h3>The Strict 9-Step Service Delivery Protocol</h3>
        </div>
        <div className="policy-body">
          <p>Fulfillment of the digital purchase contract is systematically tracked, timestamped, and verified by the platform's automated backend server log database. Contractual execution is broken down into nine sequential milestones. By enrolling, the Student agrees that the completion of these milestones constitutes definitive operational execution of the service loop:</p>
          <div className="flowchart-wrap">
            <div className="flowchart-row">
              <div className="flowchart-node">Step 1: Payment & Instant Admission</div>
              <span className="flowchart-arrow">➔</span>
              <div className="flowchart-node">Step 2: Document KYC</div>
              <span className="flowchart-arrow">➔</span>
              <div className="flowchart-node">Step 3: Biometric Video KYC</div>
            </div>
            <div className="flowchart-vertical-down">⬇</div>
            <div className="flowchart-row reverse">
              <div className="flowchart-node">Step 6: Enrollment Certificate</div>
              <span className="flowchart-arrow reverse-arrow">➔</span>
              <div className="flowchart-node">Step 5: One-Time PDF Release</div>
              <span className="flowchart-arrow reverse-arrow">➔</span>
              <div className="flowchart-node">Step 4: Corporate GST Invoice</div>
            </div>
            <div className="flowchart-vertical-down">⬇</div>
            <div className="flowchart-row">
              <div className="flowchart-node">Step 7: One-Time Video Release</div>
              <span className="flowchart-arrow">➔</span>
              <div className="flowchart-node">Step 8: Exam Key Distribution</div>
              <span className="flowchart-arrow">➔</span>
              <div className="flowchart-node">Step 9: Grading & Provisional Cert</div>
            </div>
          </div>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-tag">Step 1</div>
              <div className="step-content">
                <strong>Immediate Admission Confirmation After Payment:</strong>
                 Triggered instantly upon payment gateway clearance. As soon as the transaction clears, our backend architecture outputs an Automated Admission Confirmation Notice containing permanent user profile IDs, platform workspace access routes, and an educational track overview map. This instantaneous action marks the official commencement of the binding digital contractual relationship.
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 2</div>
              <div className="step-content">
                <strong>Mandatory Document KYC Verification:</strong>
                 In strict compliance with commercial risk management, students are required to securely upload valid government-issued photo identification to our encrypted verification portal. This ensures final documentation matches legal corporate profiles. Failure to upload legitimate documentation within the selected course timeframe results in account suspension without refund eligibility.
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 3</div>
              <div className="step-content">
                <strong>Secure Video KYC Authentication:</strong>
                 To prevent identity theft, proxy test-taking, and transaction chargeback vectors, students must execute an automated, self-directed biometric identity check via an integrated web interface. Accounts failing or refusing this profile check are immediately locked to preserve system integrity, causing immediate forfeiture of fees.
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 4</div>
              <div className="step-content">
                <strong>System Generation & Delivery of GST Invoice:</strong>
                 Accountability and fiscal transparency are verified through the automated compilation of a legally compliant Corporate GST Invoice detailing the exact service breakdown and tax identifiers. This asset is dispatched straight to the student’s billing tab within 24 hours of validation for corporate tax deduction purposes.
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 5</div>
              <div className="step-content">
                <strong>Dissemination of Comprehensive PDF Study Material (Strict One-Time Release):</strong>
                 Upon successful validation, the comprehensive text registry library is unlocked, allowing the student to view high-fidelity PDF Study Materials and Text Workbooks.
                <div className="step-callout">
                  <strong>The One-Time Release Clause:</strong>
                  Files are shared on a strict one-time basis only. The Student bears full legal and technical responsibility to securely save, download, and backup these digital assets immediately upon distribution. Cambridge Learning Services completely denies any liability for file loss, hardware failure, or requests for link refreshes post-distribution.
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 6</div>
              <div className="step-content">
                <strong>Issuance of Formal Training Enrollment Certificate:</strong>
                 The records registry automatically generates a formal, verifiable Cambridge Learning Services Enrollment Certificate. Delivered straight to the portal dashboard, this initial credential serves as active commercial proof of status, reflecting that the individual is currently under training within an active, non-affiliated skill development boot camp.
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 7</div>
              <div className="step-content">
                <strong>Access Provisioning for Video Lecture Sessions (Strict One-Time Release):</strong>
                 The student profile is provisioned with access keys to the master collection of pre-recorded visual walkthroughs and technical screen-shares containing execution-level core methodologies.
                <div className="step-callout">
                  <strong>The One-Time Video Stream Clause:</strong>
                   Like the text files, access keys to the video streams are delivered on a strict one-time basis only. Account sharing, profile splitting, or data scraping are prohibited and will trigger automated account bans without a refund.
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 8</div>
              <div className="step-content">
                <strong>Distribution of Final Examination Login Credentials:</strong>
                 Upon the expiration of the designated course duration matrix (10, 20, or 30 days maximum), the student workspace automatically triggers the evaluation phase by outputting unique, encrypted Final Exam Login Credentials directly to the student portal. This provides an isolated access window to complete the timed, multiple-choice evaluation independently.
              </div>
            </div>
            <div className="step-card">
              <div className="step-tag">Step 9</div>
              <div className="step-content">
                <strong>Final Exam Result Processing & Delivery with Provisional Certificate (PC):</strong>
                 Upon submission, grading engines parse the submission data against metric matrices instantly. The comprehensive Final Exam Result Sheet is computed and displayed inside the dashboard, and graduates are immediately issued their verified Provisional Certificate (PC), closing out the service lifecycle.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="policy-section refund-core-section">
        <div className="policy-header">
          <span className="policy-badge badge-danger">4</span>
          <h3>Defatigability of Services & Definitive "No-Refund" Core Policy</h3>
        </div>
        <div className="policy-body">
          <p className="no-refund-declaration">
            Cambridge Learning Services distributes high-value, proprietary digital intellectual property. Due to the digital nature of these assets—which can be instantly viewed, saved, cached, screenshotted, or downloaded immediately upon release—all transactions executed on 
            <a href="https://cambridgelearningservices.com" target="_blank" rel="noopener noreferrer">https://cambridgelearningservices.com</a>
             are strictly 
            <strong>FINAL, NON-CANCELLABLE, AND NON-REFUNDABLE</strong>
            .
          </p>
          <div className="policy-table-wrapper">
            <table className="policy-matrix-table">
              <thead>
                <tr>
                  <th style={{"width":"25%"}}>Policy Provision</th>
                  <th style={{"width":"35%"}}>Description & Execution Threshold</th>
                  <th style={{"width":"40%"}}>Legal Impact on Client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Instant Fulfillment Waiver</strong>
                  </td>
                  <td>Triggered immediately upon Step 1 (Payment Clearance) and Step 5 (PDF Study Material Dissemination).</td>
                  <td>
                    The Client 
                    <strong>explicitly waives any right to an operational "cooling-off period"</strong>
                     or transaction cancellation once assets are deployed.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>One-Time Sharing Indemnification</strong>
                  </td>
                  <td>Established upon execution of the "Strict One-Time Release" protocols in Step 5 and Step 7.</td>
                  <td>
                    The platform is 
                    <strong>completely indemnified</strong>
                     against student complaints regarding data loss, user error, device incompatibility, or platform lockouts resulting from a breach of user rules.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>KYC Refusal Forfeiture</strong>
                  </td>
                  <td>Triggered if a user refuses or fails Step 2 (Document KYC) or Step 3 (Video KYC).</td>
                  <td>
                    The user's account will be permanently banned for a security breach. 
                    <strong>All paid registration fees are entirely forfeited</strong>
                     to cover administrative processing costs.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Dispute & Chargeback Mitigation</strong>
                  </td>
                  <td>Triggered when a client files a dispute, credit card chargeback, or payment reversal claim.</td>
                  <td>
                    Treated legally as a 
                    <strong>breach of contract</strong>
                    . The platform will submit this policy and server logs to banks to 
                    <strong>aggressively deny the claim</strong>
                    .
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="policy-section">
        <div className="policy-header">
          <span className="policy-badge">5</span>
          <h3>Exhaustive Legal Provisos & Operational Enforcement</h3>
        </div>
        <div className="policy-body">
          <div className="proviso-block">
            <h4>A. Technical Incompatibility & Device Disclaimers</h4>
            <p>The platform distributes standardized PDF formats and encrypted video stream wrappers. It is the sole technical responsibility of the Client to ensure that their personal hardware devices (desktop, laptop, mobile, or tablet), operating systems, and internet service providers meet the baseline operational requirements needed to stream video data and open PDF document repositories. No refunds will be granted based on technical limitations, outdated user browsers, local firewall blocks, network latency, ISP restrictions, or general device incompatibility.</p>
          </div>
          <div className="proviso-block">
            <h4>B. Unilateral Account Revocation for Security Violations</h4>
            <p>Cambridge Learning Services maintains strict automated behavioral tracking parameters across its workspace dashboards. The platform reserves the right to terminate any user profile instantly, without warning, and without the obligation of financial reimbursement or refund, if the backend system logs detect any of the following unauthorized activities:</p>
            <ul className="policy-bullet-list">
              <li>Concurrent multi-location IP logins indicating profile sharing or account splitting.</li>
              <li>Attempted injection of automated data-scraping scripts, download managers, or unauthorized stream-ripping software designed to duplicate proprietary video lectures.</li>
              <li>The uploading of corrupted data packages, malware, or fraudulent identity documentation during Step 2 (Document KYC) or Step 3 (Video KYC) protocols.</li>
            </ul>
          </div>
          <div className="proviso-block">
            <h4>C. Program Modification and Discontinuance Indemnity</h4>
            <p>Cambridge Learning Services reserves the right to modify, adjust, update, or re-sequence any portion of its pre-recorded instructional modules, PDF workbooks, grading metrics, or exam platforms at any time to preserve current corporate relevance. The execution of a curriculum update does not entitle the Client to a retrofitted refund, platform credit, or course exchange.</p>
          </div>
        </div>
      </div>
      <div className="policy-section policy-acceptance-section">
        <div className="policy-header">
          <span className="policy-badge badge-warning">6</span>
          <h3>Acceptance of Terms & Dynamic Acknowledgement</h3>
        </div>
        <div className="policy-body">
          <p style={{"fontWeight":600,"color":"#0f2942"}}>By scrolling past presentation screens, checking an "I Agree" checkbox, interacting with any workspace element, or processing a training fee payment on our network domains, you explicitly declare that you have read, understood, and agreed to be legally bound by this Service Delivery Framework and No-Refund Policy.</p>
          <p style={{"color":"#78350f","fontWeight":600}}>If you do not accept these asynchronous, un-affiliated delivery constraints, or if you maintain any reservation regarding the definitive finality of commercial transactions executed on this domain, you must exit our platform immediately and refrain from purchasing any services.</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
  <style>{`

        .refund-page {
          overflow-x: hidden;
        }

        .refund-hero {
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

        .refund-container {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .policy-section {
          background-color: var(--bg-primary, #ffffff);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--border-color, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          border-left: 5px solid var(--primary-color, #0f2942);
        }

        .refund-core-section {
          border-left: 5px solid #dc2626;
          background: #fef2f2;
          border-color: #fecaca;
        }

        .policy-acceptance-section {
          border-left: 5px solid #d97706;
          background-color: #fffbeb;
          border-color: #fde68a;
        }

        .policy-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
        }

        .policy-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: var(--primary-color, #0f2942);
          color: #ffffff;
          border-radius: 50%;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .badge-danger {
          background-color: #dc2626;
        }

        .badge-warning {
          background-color: #d97706;
        }

        .policy-header h3 {
          font-size: 1.25rem;
          color: var(--primary-color, #0f2942);
          margin: 0;
          font-weight: 700;
          line-height: 1.4;
        }

        .policy-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: #334155;
          line-height: 1.7;
          font-size: 0.96rem;
        }

        .policy-body p {
          margin: 0;
        }

        .policy-body a {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .policy-notice-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 4px solid var(--primary-color);
          border-radius: 6px;
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .notice-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .policy-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-left: 1.25rem;
          margin: 0;
        }

        .policy-bullet-list li {
          line-height: 1.65;
          color: #334155;
        }

        .policy-critical-alert {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          border-left: 4px solid #dc2626;
          border-radius: 6px;
          padding: 12px 16px;
          color: #991b1b;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .no-refund-declaration {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #991b1b;
        }

        .flowchart-wrap {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          margin: 0.5rem 0;
        }

        .flowchart-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .flowchart-node {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: var(--primary-color);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 6px;
          text-align: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .flowchart-arrow {
          color: #64748b;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .flowchart-vertical-down {
          color: #64748b;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .step-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px 16px;
        }

        .step-tag {
          background: var(--primary-color);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
          margin-top: 2px;
        }

        .step-content {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .step-callout {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 3px solid #d97706;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 0.88rem;
          color: #475569;
          margin-top: 4px;
        }

        .proviso-block {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .proviso-block h4 {
          font-size: 1rem;
          color: var(--primary-color);
          margin: 0;
          font-weight: 700;
        }

        .policy-table-wrapper {
          overflow-x: auto;
          margin-top: 1.25rem;
          border-radius: 8px;
          border: 1px solid #fecaca;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.05);
        }

        .policy-matrix-table {
          width: 100%;
          min-width: 600px;
          border-collapse: collapse;
          font-size: 0.92rem;
          text-align: left;
        }

        .policy-matrix-table th {
          background-color: #fef2f2;
          color: #991b1b;
          font-weight: 700;
          padding: 12px 16px;
          border-bottom: 2px solid #fecaca;
          border-right: 1px solid #fee2e2;
          font-size: 0.88rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .policy-matrix-table th:last-child {
          border-right: none;
        }

        .policy-matrix-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #fee2e2;
          border-right: 1px solid #fee2e2;
          vertical-align: top;
          color: #334155;
          line-height: 1.6;
        }

        .policy-matrix-table td:last-child {
          border-right: none;
        }

        .policy-matrix-table tr:last-child td {
          border-bottom: none;
        }

        .policy-matrix-table tr:hover td {
          background-color: #fffaf0;
        }

        @media (max-width: 768px) {
          .refund-hero {
            height: 220px;
            margin-top: 70px;
          }

          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }

          .policy-section {
            padding: 1.35rem;
          }

          .step-card {
            flex-direction: column;
            gap: 6px;
          }

          .flowchart-row {
            flex-direction: column;
          }

          .flowchart-arrow {
            transform: rotate(90deg);
          }
        }
      
  `}</style>
</div>
  );
};

export default RefundPolicy;
