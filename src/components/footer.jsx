import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import {FaPhone,FaEnvelope,FaFacebook,FaTwitter,FaInstagram,FaQuestionCircle,FaTelegram,FaGoogle, FaYoutube,} from "react-icons/fa";

export const Footer = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const navigate = useNavigate();

//   const handleHelpClick = () => {
//     setShowHelpModal(false);
//   };
  
  const handleHelpClick = () => {
    setShowHelpModal(true);
  };
  const handleCloseModal = () => {
    setShowHelpModal(false);
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row">
          {/* Logo and Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning">Nanshiva Shopping</h5>
            <p>India's leading online shopping destination.</p>
            <p>&copy; {new Date().getFullYear()} Nanshiva Pvt. Ltd.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  onClick={handleAbout}
                  className="text-light text-decoration-none"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleContact}
                  className="text-light text-decoration-none"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/orders" className="text-light text-decoration-none">
                  Orders
                </a>
              </li>
              <li>
                <a href="/home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning">Contact Us</h5>
            <p>
              <FaPhone />{" "}
              <a href="tel:+919876543210" className="text-light ms-2">
                +91 9876543210
              </a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:support@nanshiva.com" className="text-light ms-2">
                support@nanshiva.com
              </a>
            </p>
            <p>
              <FaQuestionCircle
                onClick={handleHelpClick}
                style={{ cursor: "pointer" }}
              />{" "}
              Help
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <h5>Follow Us</h5>
            <div className="flex justify-center items-center mt-4 space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaFacebook size={35} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaTwitter size={35} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://telegram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaTelegram size={35} />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaGoogle size={35} />
              </a>
                            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaYoutube size={35} />
              </a>
            </div>
          </div>
        </div>

        {/* Help Modal */}
        <Modal show={showHelpModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Help & Support</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Customer Support:</strong> +91 9025815302
            </p>
            <p>
              <strong>Email:</strong> support@nanshiva.com
            </p>
            <p>
              <strong>Hours:</strong> 9:00 AM - 9:00 PM IST
            </p>
            <p>
              Need assistance? Contact us for order issues, returns, or queries.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </footer>
  );
};

