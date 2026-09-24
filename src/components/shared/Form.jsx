import React, { useState } from 'react';
import { countriesList } from '../../data/contactData';

const Form = ({ className = '', ...props }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    courseName: '',
    country: 'India',
    address: '',
    city: '',
    zipCode: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.firstName || !formData.lastName || !formData.email) return;

    setSubmitted(true);
    setSuccessMsg('Submitting details...');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "4c65807a-e5d0-46e0-9cbd-70d264618cf1",
          subject: `New Cambridge Learning Services Course Registration: ${formData.firstName} ${formData.lastName}`,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          course_name: formData.courseName,
          country: formData.country,
          address: formData.address,
          city: formData.city,
          zip_code: formData.zipCode
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccessMsg('Registration Submitted Successfully! Our counselor will connect with you within 24 hours.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          courseName: '',
          country: 'India',
          address: '',
          city: '',
          zipCode: ''
        });
      } else {
        setSuccessMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Web3Forms Registration Error:", error);
      setSuccessMsg('Network error. Please try again later.');
    }

    setTimeout(() => {
      setSubmitted(false);
      setSuccessMsg('');
    }, 5000);
  };

  return (
    <div className={`registration-form-card ${className}`} {...props}>
      <h3 className="form-title text-center">Registration</h3>
      {successMsg && (
        <div className="form-success-alert">
          {successMsg}
        </div>
      )}
      <form onSubmit={handleSubmit} className="actual-form">
        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John" 
              className="form-control" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe" 
              className="form-control" 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com" 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="courseName">Name of Course *</label>
          <input 
            type="text" 
            id="courseName" 
            name="courseName" 
            value={formData.courseName}
            onChange={handleChange}
            placeholder="e.g. Self-Confidence Building Training" 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country / Region</label>
          <select 
            id="country" 
            name="country" 
            value={formData.country}
            onChange={handleChange}
            className="form-control form-select"
          >
            {countriesList.map((country, idx) => (
              <option key={idx} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address}
            onChange={handleChange}
            placeholder="Street Address, Apartment, Suite" 
            className="form-control" 
          />
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              value={formData.city}
              onChange={handleChange}
              placeholder="Noida" 
              className="form-control" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip / Postal Code</label>
            <input 
              type="text" 
              id="zipCode" 
              name="zipCode" 
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="201318" 
              className="form-control" 
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary form-submit-btn w-100" disabled={submitted}>
          Submit Registration
        </button>
      </form>

      <style>{`
        .registration-form-card {
          background-color: #FFFFFF;
          padding: 2.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          max-width: 520px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }


        .form-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: var(--spacing-lg);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .form-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 3px;
          background: var(--accent-gradient);
          border-radius: 2px;
        }

        .form-success-alert {
          background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
          color: #065F46;
          border: 1px solid #A7F3D0;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-lg);
          font-size: 0.92rem;
          line-height: 1.5;
          text-align: center;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.12);
        }

        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 0;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-color);
          letter-spacing: 0.2px;
        }

        .form-control {
          padding: 0.8rem 1rem;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-sm);
          background-color: #FAF8F5;
          font-size: 0.92rem;
          color: var(--text-dark);
          transition: all var(--transition-fast);
        }

        .form-control:focus {
          background-color: #FFFFFF;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(200, 125, 67, 0.22);
          outline: none;
        }

        .form-control::placeholder {
          color: #94A3B8;
        }

        .form-select {
          cursor: pointer;
        }

        .form-submit-btn {
          margin-top: 0.75rem;
          padding: 0.95rem 0;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        @media (max-width: 480px) {
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 1.15rem;
          }
          
          .registration-form-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
