
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Headers } from "./headers";
import { Banners } from "./Banner";
import { Cards } from "./Cards";
import { useCart } from "../context/CartContext";

export const Category = () => {
  const { category } = useParams(); // Get the category param from the URL
  const [categoryItems, setCategoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  let navigate = useNavigate();
  const { cart, addToCart } = useCart();
  // const [cart, setCart] = useState([]);

  // Image mapping for each item
  const itemImages = {
    apples: "/assets/apple.jpg", //D:\projects\company\frontend
    bananas: "/assets/banana.jpg",
    guava:"/assets/Guava.jpg",
    apricot:"/assets/Apricot.jpg",
    rambutan:"/assets/Rambutan.jpg",
    mango:"/assets/Mango.jpg",
    cherry:"/assets/Cherry.jpg",
    pineapple:"/assets/Pineapple.jpg",
    potato: "/assets/potato.jpg",
    grape: "/assets/graphs.jpg",
    carrots: "/assets/corrat.jpg",
    chicken: "/assets/chicken.jpg",
    fish: "/assets/fish.jpg",
    mutton: "/assets/mutton.jpg",
    chips: "/assets/chips.jpg",
    biscuits: "/assets/biuscut.jpg",
    namkeen: "/assets/namkeen.jpg",
    Samosa:"/assets/Samosa.jpg",
    Pakora:"/assets/Pakora.jpg",
    cutlet:"/assets/Cutlet.jpg",           
    dhokla:"/assets/Dhokla.jpg",
    misalpav:"/assets/MisalPav.jpg",
    panipuri:"/assets/PaniPuri.jpg",
    vadapav:"/assets/VadaPav.jpg",
    eggpuff:"/assets/EggPuff.jpg",
    Jalebi:"/assets/Jalebi.jpg",
    upma:"/assets/Upma.jpg",
    beaf:"/assets/beaf.jpg",
    chickentikkamasala:"/assets/beaf.jpg",
    chickenchettinad:"/assets/chedinad.jpg" //D:\projects\company\frontend\src\assets\chedinad.jpg
  };
  const itemPrices = {
    Apples: 50,
    Bananas: 30,
    Carrots: 20,
    mango:40,
    cherry:90,
    rambutan:15,
    apricot:80,
    pineapple:60,
    vadapav:30,
    dhokla:78,
    upma:26,
    guava:80,
    panipuri:25,
    cutlet:45,
    Chicken: 200,
    eggpuff:15,
    Fish: 150,
    Mutton: 300,
    Chips: 20,
    Biscuits: 15,
    Namkeen: 25,
    Pakora:20,
    Samosa:12,
    beaf:500,
    misalpav:80,
    chickentikkamasala:200,
    chickenchettinad:200,
    
    // ChickenChettinad:200,
  };

  useEffect(() => {
    // Simulate fetching category items based on the URL param
    const fetchCategoryItems = () => {
      const categories = {
        "fruits-vegetables": [
          "Apples",
          "Bananas",
          "Carrots",
          "potato",
          "grape","cherry","pineapple","guava","mango","apricot","rambutan"
        ],//,"Pineapple","Guava","Mango","Cherry","Apricot","Rambutan"
        "meat-fish": ["Chicken", "Fish", "Mutton", "beaf","chickentikkamasala","chickenchettinad"],
        "snacks": ["Chips", "Biscuits", "Namkeen","dhokla","panipuri","vadapav","eggpuff","cutlet","upma","misalpav"],//"Dhokla","PaniPuri","VadaPav","EggPuff","Cutlet","Upma","MisalPav"
      };
      const normalizedCategory = category.toLowerCase();
      console.log(normalizedCategory);
      setCategoryItems(categories[normalizedCategory] || []);
    };
    fetchCategoryItems();
  }, [category]); // Re-run when category changes

  const handleAddToCart = (item) => {
    const price = itemPrices[item] || 0;
    const image = itemImages[item.toLowerCase()]||"";
    const newItem = { name: item, price ,image };
    addToCart(newItem); //add dirly
    // window.dispatchEvent(new CustomEvent("addToCart", { detail: newItem }));
    window.confirm(`Added ${item} (₹${price}) to your cart!`);
  };
  // Filter items based on search term
  const filteredItems = categoryItems.filter(
    (item) => item.toLowerCase().includes(searchTerm.toLowerCase()),
    // console.log("serach items ->", searchTerm)
  );
  const goToHome = () => {
    navigate("/home");
  };

  const goToOrders = () => {
    navigate("/orders");
  };

  return (
    <>
      <div className="content-wrapper d-flex">
        <main
          className="flex-grow-1"
          style={{ padding: "20px", minHeight: "50vh" }}
        >
          <div className="text-center mb-5">
            <h1 className="display-4 text-black fw-bold">
              Category: {category?.replace("-", " & ") || "Grocery"}
            </h1>
            <p className="lead text-muted">
              Explore the best {category?.replace("-", " & ") || "Grocery"} at
              Nanshiva Shopping!
            </p>
            <input
              type="text"
              className="form-control w-50 mx-auto mb-4"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-secondary m-3" onClick={goToHome}>
              ← Back to Home
            </button>
          <button className="btn btn-secondary m-5" onClick={goToOrders}>
            View Orders
          </button>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {filteredItems.map((item, index) => (
                <div className="col" key={index}>
                  <div className="card h-100">
                    <img
                      src={
                        itemImages[item.toLowerCase()] ||
                        "https://via.placeholder.com/286x180"
                      }
                      className="card-img-top"
                      alt={item}
                      style={{ objectFit: "cover", height: "180px", width:"100%"}}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/286x180?text=Image+Not+Found";
                        // e.target.src = <h5 className="card-title">{item}</h5>;
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item}</h5>
                      <p className="card-text flex-grow-1">
                        Price: ₹{itemPrices[item] || "N/A"}
                      </p>
                      <button
                        className="btn btn-warning mt-auto"
                        onClick={() => handleAddToCart(item)} //cart={addToCart[item]}
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
}