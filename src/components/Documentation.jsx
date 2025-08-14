import React from "react";
import { useNavigate } from "react-router-dom";
import { Headers } from "./headers";
import { Banners } from "./Banner";          //
import { TopRatings } from "./TopRatings";
import { FlashOffers } from "./FlashOffers";


export const Documentation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "15px",
            }}
          >
            Nanshiva Shopping - Developer Documentation
          </h1>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
              }}
            >
              Introduction
            </h2>
            <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.6" }}>
              This documentation provides an overview of the "Top Ratings" and
              "Flash Offers" components integrated into the Nanshiva Shopping
              website. These features enhance user engagement by showcasing
              high-rated products and time-sensitive discounts.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
              }}
            >
              Top Ratings Component
            </h2>
            <p
              style={{ fontSize: "16px", color: "#666", marginBottom: "10px" }}
            >
              Displays a list of top-rated products with names, prices, and star
              ratings.
            </p>
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
                overflowX: "auto",
                fontFamily: "monospace",
                color: "#333",
              }}
            >
              {`import React from "react";

export const TopRatings = () => {
  const topRatedItems = [
    { name: "Apple", price: 50, rating: 4.8 },
    { name: "Carrot", price: 20, rating: 4.5 },
    { name: "Banana", price: 30, rating: 4.7 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#ffd700" : "#ccc", marginRight: "2px" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", marginBottom: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>Top Rated Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {topRatedItems.map((item, index) => (
          <div key={index} style={{ width: "200px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h3 style={{ fontSize: "18px", color: "#444", marginBottom: "5px" }}>{item.name}</h3>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "5px" }}>₹{item.price}</p>
            <div style={{ fontSize: "14px", marginBottom: "5px" }}>{renderStars(item.rating)} ({item.rating}/5)</div>
          </div>
        ))}
      </div>
    </div>
  );
};`}
            </pre>
            <p style={{ fontSize: "16px", color: "#666", marginTop: "10px" }}>
              <strong>Usage:</strong> Import and add `<TopRatings />` to any
              page (e.g., `Home.jsx`). Customize `topRatedItems` with your
              product data.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
              }}
            >
              Flash Offers Component
            </h2>
            <p
              style={{ fontSize: "16px", color: "#666", marginBottom: "10px" }}
            >
              Displays flash sale items with discounts and a countdown timer.
            </p>
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
                overflowX: "auto",
                fontFamily: "monospace",
                color: "#333",
              }}
            >
              {`import React, { useState, useEffect } from "react";

export const FlashOffers = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  const flashOffers = [
    { name: "Banana", originalPrice: 30, discount: 20, discountedPrice: 24 },
    { name: "Potato", originalPrice: 15, discount: 15, discountedPrice: 12.75 },
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
    return \`\${hours}h \${minutes}m \${secs}s\`;
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff3e6", marginBottom: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#e63946", marginBottom: "15px" }}>Flash Offers</h2>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "15px" }}>Hurry! Offer ends in: <span style={{ color: "#e63946", fontWeight: "bold" }}>{formatTime(timeLeft)}</span></p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {flashOffers.map((offer, index) => (
          <div key={index} style={{ width: "200px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h3 style={{ fontSize: "18px", color: "#444", marginBottom: "5px" }}>{offer.name}</h3>
            <p style={{ fontSize: "16px", color: "#666", textDecoration: "line-through", marginBottom: "5px" }}>₹{offer.originalPrice}</p>
            <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "bold", marginBottom: "5px" }}>₹{offer.discountedPrice} ({offer.discount}% off)</p>
          </div>
        ))}
      </div>
    </div>
  );
};`}
            </pre>
            <p style={{ fontSize: "16px", color: "#666", marginTop: "10px" }}>
              <strong>Usage:</strong> Import and add `<FlashOffers />` to any
              page. Adjust `flashOffers` and `timeLeft` for your offers and
              timer duration.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
              }}
            >
              Setup Instructions
            </h2>
            <ol
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                paddingLeft: "20px",
              }}
            >
              <li>
                Place `TopRatings.jsx` and `FlashOffers.jsx` in the `components`
                directory.
              </li>
              <li>Import and add components to a page (e.g., `Home.jsx`).</li>
              <li>
                Ensure `react` and `react-dom` are installed (`npm install react
                react-dom`).
              </li>
              <li>
                Verify `bootstrap` CSS is imported in `App.jsx` for consistent
                styling.
              </li>
            </ol>
          </section>

          <button
            style={{
              marginTop: "20px",
              backgroundColor: "#ffd700",
              color: "#ffffff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
            onClick={goToHome}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#123459ff")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#153659ff")}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};
