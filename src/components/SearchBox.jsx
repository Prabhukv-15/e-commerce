
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export const SearchBox = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Mock product data (replace with API call in a real app)
  const productsData = [
    { id: 1, name: "Summer Vibes T-Shirt", price: 200, image: "/assets/t-shirt.jpg" },
    { id: 2, name: "Noise-Cancelling Headphones", price: 2199, image: "/assets/eadphonesl.jpg" },
    { id: 3, name: "Stylish Leather Wallet", price: 699, image: "/assets/pexels-vlada-karpovich-4452390.jpg" },
    { id: 4, name: "Luxury Smartwatch", price: 1599, image: "/assets/watch.jpg" },
    { id: 5, name: "Handmade Ceramic Mug", price: 199, image: "/assets/handmade-cup-books-closeup-wooden-surface.jpg" },
    { id: 6, name: "Outdoor Adventure Backpack", price: 5000, image: "/assets/side-view-traveler-discovered-area-with-benches.jpg" },
  ];

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setIsPopupOpen(true);
    } else {
      setSuggestions([]);
      setIsPopupOpen(false);
    }
  }, [searchTerm]);

  // Handle adding product to cart and navigate to orders
  const handleOrderNow = (product) => {
    const newItem = {
      ...product,
      quantity: 1,
    };
    addToCart(newItem);
    setSearchTerm(""); // Clear search after ordering
    setIsPopupOpen(false); // Close popup
    navigate("/searchOrders"); // Navigate to orders page for further processing
    alert(`Added ${product.name} (₹${product.price}) to your orders!`);
  };

  return (
    <div className="search-box-container">
      <style>
        {`
          .search-box-container {
            position: relative;
            width: 100%;
            max-width: 400px;
          }

          .search-input {
            width: 100%;
            padding: 0.75rem 2rem 0.75rem 3rem;
            border: 2px solid #ced4da;
            border-radius: 25px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
          }

          .search-input:focus {
            border-color: #3a4858ff;
            box-shadow: 0 0 5px rgba(64, 87, 112, 0.5);
          }

          .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
          }

          .suggestions-popup {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-height: 300px;
            overflow-y: auto;
            margin-top: 0.5rem;
            display: ${isPopupOpen ? "block" : "none"};
          }

          .suggestion-item {
            padding: 0.75rem 1rem;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .suggestion-item:hover {
            background-color: #f8f9fa;
          }

          .order-now-btn {
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            background-color: #c5910cff;
            color: #fff;
            border: none;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .order-now-btn:hover {
            background-color: #218838;
          }
        `}
      </style>

      <div className="position-relative">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsPopupOpen(suggestions.length > 0)}
          onBlur={() => setTimeout(() => setIsPopupOpen(false), 200)} // Delay to allow button click
        />
        {isPopupOpen && suggestions.length > 0 && (
          <div className="suggestions-popup">
            {suggestions.map((product) => (
              <div key={product.id} className="suggestion-item">
                <div>
                  <p>{product.name}</p>
                  <small>₹{product.price}</small>
                </div>
                <button
                  className="order-now-btn"
                  onClick={() => handleOrderNow(product)}
                >
                  Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

