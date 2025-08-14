import React from 'react';
import { Instagram, Twitter, Facebook, Globe, ShoppingBag } from 'lucide-react';

export const LinkPage=()=> {
      const handleExplore = () => {
    navigate("/explore");
  };
  // Define your list of links here.
  const links = [
    { name: "Instagram", url: "https://www.instagram.com/nanshivashopping", icon: <Instagram size={24} /> },
    { name: "Twitter", url: "https://www.twitter.com/nanshivashopping", icon: <Twitter size={24} /> },
    { name: "Facebook", url: "https://www.facebook.com/nanshivashopping", icon: <Facebook size={24} /> },
    { name: "Official Website", url: "https://www.nanshivashopping.com", icon: <Globe size={24} /> },
    { name: "Explore Products", url: "/explore", icon: <ShoppingBag size={24} /> },
  ];

  return (
    <div className="link-page-container container py-5">

      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f2f5; /* A subtle background for contrast */
        }
        
        .link-page-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 5rem;
            padding-bottom: 5rem;
            text-align: center;
        }

        .link-title {
            font-weight: 700;
            font-size: 2.5rem;
            color: #212529;
            animation: fadeInDown 0.8s ease-out;
        }
        
        .link-subtitle {
            font-size: 1.1rem;
            color: #6c757d;
            animation: fadeInDown 1s ease-out;
            margin-top: -0.5rem;
        }
        
        .link-card {
            border: none;
            border-radius: 1.5rem;
            background-color: #ffffff;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
            width: 100%;
            max-width: 500px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #212529;
            font-weight: 600;
            font-size: 1.1rem;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        .link-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            color: #ffd700  ;
        }
        
        .link-icon {
            margin-right: 1rem;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        `}
      </style>

      <div className="text-center mb-5">
        <h1 className="link-title">Connect with Us</h1>
        <p className="link-subtitle">Find all our links in one place!</p>
      </div>

      <div className="d-flex flex-column align-items-center w-100">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-icon">
              {link.icon}
            </div>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
