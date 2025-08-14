import { Leaf } from "lucide-react";
import React from "react";

export const TopRatings = () => {
  const topRatedItems = [
    { name: "Apple", price: 50, rating: 4.8 },
    { name: "Carrot", price: 20, rating: 4.5 },
    { name: "Banana", price: 30, rating: 3.7 },
    { name: "potato", price: 70, rating: 4.7 },
    { name: "grape", price: 130, rating: 4.1 },
    { name: "chicken", price: 330, rating: 3.7 },
    { name: "fish", price: 350, rating: 2.7 },
  ];

  const renderStars = (rating) => {
    console.log("rendered Start ->",rating)
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= rating ? "#ffd700" : "#ccc",
            marginRight: "2px", padding:"2px 6px"
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#ffffffff",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#ffd700",
          marginBottom: "15px",
          margin:"30px",
          marginRight:"70px"
        }}
      >
        Top Rated Products
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {topRatedItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0.7, 0.3)",
            }}
          >
            <h3
              style={{ fontSize: "18px", color: "#444", marginBottom: "5px" }}
            >
              {item.name}
            </h3>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "5px" }}>
              ₹{item.price}
            </p>
            <div style={{ fontSize: "14px", marginBottom: "5px" }}>
              {renderStars(item.rating)}({item.rating}/5)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
