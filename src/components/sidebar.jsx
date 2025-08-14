import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "./AddToCart";
import { Modal, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Logout } from "./Logout";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const { cart, addToCart } = useCart(); // Only need cart to display count
  const navigate = useNavigate();

  const handleOrderClick = () => {
    setShowOrderPopup(true);
  };

  const handleClosePopup = () => {
    setShowOrderPopup(false);
  };

  const handleSettingsClick = () => {
    navigate("/logout");
    alert("Basic Settings Opened - Customize as needed!");
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleCategorySelect = (category) => {
    navigate(`/category/${category.toLowerCase().replace(/ & /g, "-")}`);
  };
  const handleFashionSelect = (category) => {
    navigate(`/fashion/${category.toLowerCase().replace(/'/g, "")}`);
  };
  const handleOrders = () => {
    navigate("/orders");
  };
  const handleAccount = () => {
    navigate("/account");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="btn btn-light"
        onClick={toggleSidebar}
        style={{ position: "fixed", top: "68px", left: "-9px", zIndex: 1002 }}
      >
        {sidebar ? "← " : "→ "}

        {cart.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}
            <span className="visually-hidden">cart items</span>
          </span>
        )}
      </button>

      {/* Sidebar */}
      {sidebar && (
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style={{
            width: "180px",
            height: "90vh",
            position: "fixed",
            top: "56px",
            left: "0",
            zIndex: 1001,
          }}
        >
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Grocery
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategorySelect("Fruits & Vegetables")}
                  >
                    Fruits & Vegetables
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategorySelect("Meat & Fish")}
                  >
                    Meat & Fish
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategorySelect("Snacks")} >Snacks
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="fashionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">  Fashion </a>
              <ul className="dropdown-menu" aria-labelledby="fashionDropdown">
                <li>
                  <a  className="dropdown-item" href="#"  onClick={() => handleFashionSelect("mens-clothes")}>  Men's Clothes </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleFashionSelect("womens-clothes")}
                  >
                    Women's Clothes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleFashionSelect("kids-fashion")}
                  >
                    Kids Fashion
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark" onClick={handleOrders}>
                Orders <span className="text-success">({cart.length})</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark"
                onClick={() => handleSettingsClick}
              >
                Settings
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="text-dark">Profile</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleAccount()}
                >
                  Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#"  onClick={()=>handleSettingsClick()}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};


