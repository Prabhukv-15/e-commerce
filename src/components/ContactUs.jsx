import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import {DummyPopupAdvertisment} from "./DummyPopupAdvertisment";


export const ContactUs=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
  };

  return (
    <div className="contact-page-container container py-5">
      {/*
      */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f2f5; /* A subtle background for contrast */
        }
        
        .contact-page-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 5rem;
            padding-bottom: 5rem;
        }

        .contact-title {
            font-weight: 700;
            font-size: 2.5rem;
            color: #212529;
            animation: fadeInDown 0.8s ease-out;
        }
        
        .contact-subtitle {
            font-size: 1.1rem;
            color: #6c757d;
            animation: fadeInDown 1s ease-out;
            margin-top: -0.5rem;
        }

        .contact-card {
            border: none;
            border-radius: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            background-color: #ffffff;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .contact-info-card {
            background-color: #f8f9fa;
            border-radius: 1.5rem;
            transition: transform 0.3s ease-in-out;
        }

        .contact-info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .contact-icon-wrapper {
            background-color:  #ffd700;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-right: 1rem;
            transition: transform 0.3s ease-in-out;
        }
        
        .form-control {
            border-radius: 0.75rem;
            padding: 0.75rem 1rem;
            border: 1px solid #dee2e6;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-control:focus {
            border-color: #ffd700;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
        }
        
        .submit-button {
            border-radius: 50px;
            padding: 0.75rem 2.5rem;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        `}
      </style>
      <DummyPopupAdvertisment />

      {/* Main Content Row */}
      <div className="row g-4 justify-content-center w-100">
        <div className="col-12 text-center mb-5">
            <h1 className="contact-title text-warning">Get in Touch</h1><hr/>
            <p className="contact-subtitle">We'd love to hear from you. Send us a message or find us below!</p>
        </div>

        {/* Contact Form Column */}
        <div className="col-lg-7">
          <div className="card contact-card p-4 p-md-5 h-100">
            <h2 className="mb-4 fw-bold">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning submit-button">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="d-flex flex-column h-100">
            <div className="contact-info-card p-4 mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <h5 className="mb-0 fw-bold">Email Address</h5>
              </div>
              <a href="mailto:support@nanshivashopping.com" className="text-decoration-none text-success">support@nanshivashopping.com</a>
            </div>

            <div className="contact-info-card p-4 mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <h5 className="mb-0 fw-bold">Phone Number</h5>
              </div>
              <a href="tel:+911234567890" className="text-decoration-none text-success">+91 9025815302</a>
            </div>

            <div className="contact-info-card p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <h5 className="mb-0 fw-bold">Our Location</h5>
              </div>
              <address className="mb-0 text-muted">
                123 Fresh Market Chennai,<br />
                Tamil Nadu, India
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
