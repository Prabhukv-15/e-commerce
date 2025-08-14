import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Headers } from "./headers"; 
import { Banners } from "./Banner"; 
import { Cards } from "./Cards";
import { useCart } from "../context/CartContext";

export const Fashion = () => {
  const { category } = useParams(); // Correctly destructure category from useParams
  const [categoryItems, setCategoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //  sertSearchTerm -> setSearchTerm
  const { cart, addToCart } = useCart();
  let navigate = useNavigate();
  // const [cart, setCart] = useState([]);

  // Image mapping for each item
  const itemImages = {
    "t-shirt": "/assets/t-shirt.jpg",
    "jeans": "/assets/jeans.jpg",
    "shirt": "/assets/shirt.jpg",
    "dress": "/assets/womens_cloths.jpg",
    "skirt": "/assets/sirt.jpg", //grils        D:\projects\company\frontend/src/assets/hat.jpg      D:\projects\company\frontend\src\assets\womens_cloths.jpg
    "top": "/assets/top_1.jpg",
    "jacket": "/assets/jacket.jpg",
    "shoes": "/assets/shoes.jpg",
    "hat": "/assets/hat.jpg",
  };
  const itemPrices = {
    "T-Shirt": 500,
    "Jeans": 1500,
    "Shirt": 800,
    "Dress": 1200,
    "Skirt": 700,
    "Top": 600,
    "Jacket": 2000,
    "Shoes": 1800,
    "Hat": 400,
  };

  useEffect(() => {
    const fetchItems = () => {
      const categories = {
        "mens-clothes": ["T-Shirt", "Jeans", "Shirt"],
        "womens-clothes": ["Dress", "Skirt", "Top"],
        "kids-fashion": ["Jacket", "Shoes", "Hat"],
      };
      const normalizedCategory = category?.toLowerCase().replace(/'/g, "") || ""; // Handle undefined category
      console.log("normailized category ->", normalizedCategory);
      setCategoryItems(categories[normalizedCategory] || []);
      console.log("setcategory was setup ");
    };
    fetchItems();
  }, [category]);

  const handleAddToCart = (item) => {
    const price = itemPrices[item] || 0 || null;
    const newItem = {
       name: item,
       price 
      };
    addToCart(newItem);
    window.confirm(`Added ${item} (₹${Price}) to your cart!`);
  };

  // Filter items based on search term
  const filteredItems = categoryItems.filter(
    (item) => item.toLowerCase().includes(searchTerm.toLowerCase()),
    // console.log("serach items ->", searchTerm)
  );
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      {/* <Headers /> */}
      <div className="content-wrapper d-flex">
        <main
          className="flex-grow-1"
          style={{ padding: "20px", minHeight: "50vh" }}
        >
          <div className="text-center mb-5">
            <h1 className="display-4 text-secondary fw-bold">
              Category: {category?.replace("-", " & ") || "Fashion"}
            </h1>
            <p className="lead text-muted">
              Explore the best {category?.replace("-", " & ") || "Fashion"} at
              Nanshiva Shopping!
            </p>
            {/* Search Input */}
            <input
              type="text"
              className="form-control w-50 mx-auto mb-4"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-white mt-3" onClick={goToHome}>
              ← Back to Home
            </button>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {filteredItems.map((item, index) => (
                <div className="col" key={index}>
                  <div className="card h-100">
                    <img
                      src={
                        itemImages[item.toLowerCase()] || "https://via.placeholder.com/286x180"
                      }
                      className="card-img-top"
                      alt={item}
                      style={{ objectFit: "cover" , height: "180px" }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/286x180";
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item}</h5>
                      <p className="card-text flex-grow-1">
                        Price: ₹{itemPrices[item] || "N/A"}
                        High-quality {item} available.
                      </p>
                      <button
                        className="btn btn-warning mt-auto"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

