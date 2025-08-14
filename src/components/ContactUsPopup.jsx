
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export const ContactUsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const hasSeenContactPopup = localStorage.getItem("hasSeenContactPopup");
    if (!hasSeenContactPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenContactPopup", "true"); // Mark as seen for this session
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Us Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    handleClose(); // Close after submission it
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="contact-us-overlay">
      <style>
        {`
          .contact-us-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
          }

          .contact-us-popup {
            background-color: #ffffff;
            border-radius: 1rem;
            padding: 2rem;
            width: 90%;
            max-width: 400px;
            position: relative;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease-out;
          }

          @keyframes slideIn {
            from { transform: translateY(-100vh); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .contact-us-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            color: #6c757d;
            transition: color 0.3s ease;
          }

          .contact-us-close:hover {
            color: #dc3545;
          }

          .contact-us-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #212529;
            text-align: center;
          }

          .contact-us-text {
            font-size: 1rem;
            color: #6c757d;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .contact-us-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-us-input {
            padding: 0.75rem;
            border: 1px solid #ced4da;
            border-radius: 0.5rem;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
          }

          .contact-us-input:focus {
            border-color: #ffd700;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          .contact-us-textarea {
            padding: 0.75rem;
            border: 1px solid #ced4da;
            border-radius: 0.5rem;
            font-size: 1rem;
            height: 100px;
            resize: vertical;
            outline: none;
            transition: border-color 0.3s ease;
          }

          .contact-us-textarea:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(255, 221, 0, 0.5);
          }

          .contact-us-btn {
            padding: 0.75rem;
            border-radius: 0.5rem;
            background-color: #ffd700;
            color: #fff;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .contact-us-btn:hover {
            background-color: #ffd700;
          }
        `}
      </style>

      <div className="contact-us-popup">
        <button className="contact-us-close" onClick={handleClose}>
          <X size={24} />
        </button>
        <h2 className="contact-us-title">Contact Us</h2>
        <p className="contact-us-text">
          Have questions or need assistance? Let us know!
        </p>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="contact-us-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="contact-us-input"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="contact-us-textarea"
            required
          />
          <button type="submit" className="contact-us-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
