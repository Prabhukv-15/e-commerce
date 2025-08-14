import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export const FlashOffers = () => {
    const navigate= useNavigate();
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  const flashOffers = [
    { name: "Banana", originalPrice: 30, discount: 20, discountedPrice: 24, image: "/src/assets/banana.jpg" },
    { name: "Potato", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/potato.jpg" },
    { name: "chips", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/chips.jpg" },
    { name: "namkeen", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/namkeen.jpg" },
    { name: "apples", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/apple.jpg" },
    { name: "Potato", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/potato.jpg" },
    { name: "jeans", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/jeans.jpg" },
    { name: "hat", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/hat.jpg" },
    { name: "Skirt", originalPrice: 15, discount: 15, discountedPrice: 12.75, image: "/src/assets/sirt.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };
    const goToHome = () => {
    navigate("/home");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fdfdfdff", marginBottom: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#ffd700", marginBottom: "15px", marginTop: "15px" }}>Flash Offers</h2>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "15px" }}>Hurry! Offer ends in: <span style={{ color: "#e63946", fontWeight: "bold" }}>{formatTime(timeLeft)}</span></p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {flashOffers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{ width: "200px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", textAlign: "center" }}
          >
            <img src={offer.image} alt={offer.name} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "18px", color: "#444", marginBottom: "5px" }}>{offer.name}</h3>
            <p style={{ fontSize: "16px", color: "#666", textDecoration: "line-through", marginBottom: "5px" }}>₹{offer.originalPrice}</p>
            <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "bold", marginBottom: "5px" }}>₹{offer.discountedPrice} ({offer.discount}% off)</p>
          </motion.div>
        ))}
      </div>
            <button style={{ fontSize: "15px", backgroundColor: "#ffd700",color:"black", border:"none",padding:"5px 10px 3px 4px", marginBottom: "15px", marginTop: "15px",borderRadius:"15px" ,marginLeft:"94%" }} onClick={goToHome}>
            ← Back
            </button>
    </div>
  );
};

