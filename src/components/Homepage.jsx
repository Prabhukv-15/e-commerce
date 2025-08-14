
import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Homepage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const handlePrivacy=()=>{
    navigate("/privacy");
  }

  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Summer Vibes T-Shirt",
      price: 200,
      image: "/assets/t-shirt.jpg",
      link: "https://www.ottostore.com/collections/shirts?srsltid=AfmBOop4ol-b_WwU0ihbbsMJePt1kHnRzx21vFcHf-jdRmjCFUgrcTxt",
    },
    {
      id: 2,
      name: "Noise-Cancelling Headphones",
      price: 2199,
      image: "/assets/eadphonesl.jpg",
      link: "https://www.gonoise.com/products/noise-pure-pods-open-ear-headphones?variant=40406688890967&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&utm_campaign=18427462047&tw_source=google&tw_adid=&tw_campaign=18427462047&gad_source=1&gad_campaignid=18431033257&gbraid=0AAAAADg92wIOQqo5NltP3xxpHHJPnqAxJ&gclid=CjwKCAjw7_DEBhAeEiwAWKiCC8I597MYrBMybov9Kprz8uAZKsmms-xUIe6taeEIQ_EQqahrcuaOgBoCjfoQAvD_BwE",
    },
    {
      id: 3,
      name: "Stylish Leather Wallet",
      price: 699,
      image: "/assets/pexels-vlada-karpovich-4452390.jpg",
      link: "https://louisphilippe.abfrl.in/c/men-wallets?srsltid=AfmBOoqw5s9bDsID0GPpLWVm8_9nm4ynq2WFCBJ5qoBEAmxSB9SSjiW8",
    },
    {
      id: 4,
      name: "Luxury Smartwatch",
      price: 1599,
      image: "/assets/watch.jpg",
      link: "https://www.fireboltt.com/collections/luxe-collection?srsltid=AfmBOorSgDuywc_WSJA52-9KLqx3XzprTw-SaeD2PckFqgGjGnF3Ac8f",
    },
  ];

  return (
    <div className="homepage">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          .homepage {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa;
            color: #212529;
          }

          .hero-section {
            position: relative;
            height: 60vh;
            background: url('/assets/jacket.jpg') no-repeat center center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #ffffff;
            padding: 2rem;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .shop-now-btn {
            border-radius: 50px;
            padding: 0.75rem 2rem;
            font-weight: 600;
            background-color: #ffc107;
            border: none;
            transition: transform 0.3s ease;
          }

          .shop-now-btn:hover {
            transform: translateY(-2px);
            background-color: #ffca2c;
          }

          .featured-section {
            padding: 4rem 0;
            background-color: #ffffff;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2rem;
          }

          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            padding: 0 1rem;
          }

          .product-card {
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .product-card:hover {
            transform: translateY(-5px);
          }

          .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .product-info {
            padding: 1rem;
            text-align: center;
          }

          .product-name {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .product-price {
            font-size: 1rem;
            color: #28a745;
            font-weight: 500;
          }

          .view-details {
            display: inline-block;
            margin-top: 0.5rem;
            color: #007bff;
            text-decoration: none;
            font-weight: 500;
          }

          .view-details:hover {
            text-decoration: underline;
          }

          .footer {
            background-color: #212529;
            color: #ffffff;
            padding: 2rem 0;
            text-align: center;
            margin-top: 2rem;
          }

          .footer-links a {
            color: #ffffff;
            margin: 0 1rem;
            text-decoration: none;
          }

          .footer-links a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Nanshiv World</h1>
          <p className="hero-subtitle">
            Discover the best deals and products tailored for you!
          </p>
          <Link to="/explore" className="btn shop-now-btn">
            Shop Now <ArrowRight size={18} className="ms-2" />
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = "/assets/placeholder.jpg";
                }}
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price} Rs</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-details"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy" onClick={()=> handlePrivacy()}>Privacy Policy</a>
        </div>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Nanshiv World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
