

import React, { useState, useEffect } from "react";
import { ArrowRight, Star, ShoppingCart,ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Explore = () => {

  const { cart, addToCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handleToshop =()=>{
    navigate("")
  }
  const handleHome =()=>{
    navigate("/home");
  }


  const productsData = [
    {
      id: 1,
      name: "Summer Vibes T-Shirt",
      offer: "Flat 30% OFF!",
      price: 200,
      image: "/assets/t-shirt.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "Noise-Cancelling Headphones",
      offer: "Save up to $50",
      price: 2199,
      image: "/assets/eadphonesl.jpg",
      link: "#",
    },
    {
      id: 3,
      name: "Stylish Leather Wallet",
      offer: "Buy 1 Get 1 Free",
      price: 699,
      image: "/assets/pexels-vlada-karpovich-4452390.jpg",
      link: "#",
    },
    {
      id: 4,
      name: "Luxury Smartwatch",
      offer: "Flash Sale - 25% Off",
      price: 1599,
      image: "/assets/watch.jpg",
      link: "#",
    },
    {
      id: 5,
      name: "Handmade Ceramic Mug",
      offer: "Limited Edition",
      price: 199,
      image: "/assets/handmade-cup-books-closeup-wooden-surface.jpg",
      link: "#",
    },
    {
      id: 6,
      name: "Outdoor Adventure Backpack",
      offer: "New Arrival!",
      price: 5000,
      image: "/assets/side-view-traveler-discovered-area-with-benches.jpg",
      link: "#",
    },
  ];
  // const productImage = [
  //   {
  //     image: "/src/assets/side-view-traveler-discovered-area-with-benches.jpg",
  //     image: "/src/assets/handmade-cup-books-closeup-wooden-surface.jpg",
  //     image: "/src/assets/watch.jpg",
  //     image: "/src/assets/pexels-vlada-karpovich-4452390.jpg",
  //     image: "/src/assets/eadphonesl.jpg",
  //     image: "/src/assets/t-shirt.jpg",
  //   },
  // ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Added ${product.name} (₹${product.price}) to your cart!`);
  };

  return (
    <div className="app-container">
      {/* Custom CSS for a modern and responsive design */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa;
          }

          .app-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .section-title {
            font-weight: 700;
            font-size: 2.5rem;
            color: #212529;
          }

          .section-subtitle {
            font-size: 1.1rem;
            color: #6c757d;
            margin-top: -0.5rem;
          }

          .product-card {
            background-color: #ffffff;
            border: none;
            border-radius: 1.5rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            opacity: 0;
            transform: translateY(20px);
          }

          .product-card.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .product-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }

          .product-card-body {
            padding: 1.5rem;
            position: relative;
          }

          .product-name {
            font-weight: 600;
            font-size: 1.25rem;
            color: #212529;
            margin-bottom: 0.5rem;
          }

          .product-offer {
            font-size: 0.9rem;
            color: #28a745;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .add-to-cart-btn {
            position: absolute;
            bottom: 1.5rem;
            right: 1.5rem;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          
          .product-card:hover .add-to-cart-btn {
            opacity: 1;
            transform: scale(1);
          }
          
          .explore-button {
            border-radius: 50px;
            padding: 0.75rem 2rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: transform 0.3s ease;
          }

          .explore-button:hover {
            transform: translateY(-2px);
          }
        `}
      </style>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Explore Nanshiv Worlds Our Latest Deals For This Months!
          </h2>
          <p className="section-subtitle">
            Discover amazing offers and top products just for you.
          </p>
        </div>
        <div className="text-center m1-4 p-2">
          <a href="#" className="btn btn-white"  onClick={()=> handleHome()}>
            Back
            <ArrowLeft size={18} className="explore-icon ms-2" />
          </a>
        </div>
        {/* </div> */}

        <div className="row g-4">
          {productsData.map((product, index) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <div
                className={`product-card h-100 ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 0.3}s` }}
              >
                <a
                  href={product.link}
                  className="text-decoration-none text-dark"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid product-image"
                  />
                  <div className="product-card-body">
                    <h5 className="product-name">{product.name}</h5>
                    <p className="product-offer">
                      <Star size={18} className="offer-icon" />
                      {product.offer}
                    </p>
                    <p className="product-price fw-bold mt-2">
                      {product.price} Rs
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-warning add-to-cart-btn"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action button */}
        <div className="text-center mt-5">
          <a href="#" className="btn btn-warning explore-button" onClick={()=>handleToshop()}>
          products
            <ArrowRight size={18} className="explore-icon ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
};



//           products
//             <ArrowRight size={18} className="explore-icon ms-2" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };


