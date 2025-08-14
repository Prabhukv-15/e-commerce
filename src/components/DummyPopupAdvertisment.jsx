
import React, { useState, useEffect } from "react";
import { X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const DummyPopupAdvertisment = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("DummyPopupAdvertisment mounted");

  useEffect(() => {
    console.log("useEffect triggered, hasSeenAd:", localStorage.getItem("hasSeenAd"));
    const hasSeenAd = localStorage.getItem("hasSeenAd");
    if (!hasSeenAd) {
      console.log("Setting timer for popup");
      const timer = setTimeout(() => {
        console.log("Timer completed, setting isOpen to true");
        setIsOpen(true);
      }, 5000); // Show after 5 seconds
      return () => {
        console.log("Cleaning up timer");
        clearTimeout(timer);
      };
    } else {
      console.log("Ad already seen, skipping popup");
    }
  }, []);

  const handleClose = () => {
    console.log("Closing popup");
    setIsOpen(false);
    localStorage.setItem("hasSeenAd", "true"); // Mark as seen for this session
  };

  // Ad content
  const adContent = {
    image: "/src/assets/laddykidssss0.jpg", // Ensure this is in public/assets
    title: "Special Offer!",
    description: "Get 20% off on all T-Shirts this week only.",
    link: "https://www.amazon.in/s?k=t-shirt",
  };

  if (!isOpen) {
    console.log("isOpen is false, returning null");
    return null;
  }

  console.log("Rendering popup with isOpen true");

  return (
    <div className="popup-ad-overlay" style={{ zIndex: 3000 }}>
      <style>
        {`
          .popup-ad-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
          }

          .popup-ad {
            background-color: #ffffff;
            border-radius: 1rem;
            padding: 2rem;
            width: 90%;
            max-width: 500px;
            position: relative;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease-out;
          }

          @keyframes slideIn {
            from { transform: translateY(-100vh); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .popup-ad-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
          }

          .popup-ad-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #212529;
          }

          .popup-ad-description {
            font-size: 1rem;
            color: #6c757d;
            margin-bottom: 1rem;
          }

          .popup-ad-close {
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

          .popup-ad-close:hover {
            color: #dc3545;
          }

          .popup-ad-btn {
            border-radius: 50px;
            padding: 0.75rem 1.5rem;
            font-weight: 600;
            background-color: #28a745;
            color: #fff;
            border: none;
            transition: background-color 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .popup-ad-btn:hover {
            background-color: #218838;
          }
        `}
      </style>

      <div className="popup-ad">
        <button className="popup-ad-close" onClick={handleClose}>
          <X size={24} />
        </button>
        <img
          src={adContent.image}
          alt="Ad Banner"
          className="popup-ad-image"
          onError={(e) => {
            console.log("Image failed to load, using placeholder");
            e.target.src = "/assets/placeholder.jpg";
          }}
        />
        <h2 className="popup-ad-title">{adContent.title}</h2>
        <p className="popup-ad-description">{adContent.description}</p>
        <a
          href={adContent.link}
          target="_blank"
          rel="noopener noreferrer"
          className="popup-ad-btn"
        >
          Shop Now <ShoppingBag size={18} />
        </a>
      </div>
    </div>
  );
};

