
import React from "react";
import { Link } from "react-router-dom";

export const Privacy = () => {
  return (
    <div className="privacy-page">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          .privacy-page {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa;
            color: #212529;
            padding: 4rem 2rem;
            min-height: 100vh;
          }

          .privacy-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          .privacy-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #212529;
            text-align: center;
          }

          .privacy-section {
            margin-bottom: 2rem;
          }

          .privacy-section h2 {
            font-size: 1.75rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #343a40;
          }

          .privacy-section p {
            font-size: 1rem;
            line-height: 1.6;
            color: #495057;
          }

          .privacy-footer {
            text-align: center;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #dee2e6;
          }

          .privacy-footer a {
            color: #ffbf00ff;
            text-decoration: none;
            font-weight: 500;
          }

          .privacy-footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>

        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Nanshiv World. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your data when you use
            our website and services.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Data We Collect</h2>
          <p>
            We may collect the following information:
            <ul>
              <li>Personal information (e.g., name, email, address) when you
              place an order.</li>
              <li>Usage data (e.g., IP address, browser type) to improve our
              services.</li>
              <li>Cookies and similar technologies for analytics and
              personalization.</li>
            </ul>
          </p>
        </div>

        <div className="privacy-section">
          <h2>3. How We Use Your Data</h2>
          <p>
            We use your data to:
            <ul>
              <li>Process and fulfill your orders.</li>
              <li>Provide customer support and improve user experience.</li>
              <li>Send promotional offers (with your consent).</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>
          </p>
        </div>

        <div className="privacy-section">
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with:
            <ul>
              <li>Service providers (e.g., payment processors, shipping
              companies).</li>
              <li>Legal authorities if required by law.</li>
            </ul>
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your data from
            unauthorized access, alteration, or disclosure. However, no online
            transmission is 100% secure.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
            <ul>
              <li>Access, correct, or delete your personal data.</li>
              <li>Opt-out of marketing communications.</li>
              <li>File a complaint with a data protection authority.</li>
            </ul>
          </p>
        </div>

        <div className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <ul>
              <li>Email: support@nanshivworld.com</li>
              <li>Phone: +91-123-456-7890</li>
            </ul>
            Last updated: {new Date().toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="privacy-footer">
          <p>
            &copy; {new Date().getFullYear()} Nanshiv World. All rights reserved.
            <br />
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};