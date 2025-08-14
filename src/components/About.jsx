import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutVideo from "../assets/walking_Shopping_Bags_Shopping_3840x2160.mp4";
import bannerImage from "../assets/styleskating.jpg";

export const About = () => {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

    const goToHome = () => {
    navigate("/home");
  };
  return (
    <div className="about-page-wrapper container-fluid p-0">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          .about-page-wrapper {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa; /* Light gray background */
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .video-container {
            position: relative;
            height: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 50vh; /* Minimum height for video on small screens */
          }

          .about-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            min-height: 50vh;
          }

          .content-card {
            background-color: white;
            border-radius: 1rem;
            padding: 2.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
            opacity: 0;
            transform: translateY(20px);
            max-height: 90vh; /* Ensure it fits within the viewport */
            overflow-y: auto; /* Enable scrolling for long content */
          }
          
          .content-card.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .content-card h1,
          .content-card h2 {
            font-weight: 700;
            color: #212529;
          }

          .content-card h1 {
            font-size: 2.5rem;
            color: #f88f18; /* Your brand color from the original code */
          }
          
          .content-card h2 {
            font-size: 1.75rem;
            color: #444;
            margin-top: 1.5rem;
          }

          .content-card p {
            color: #6c757d;
            line-height: 1.6;
          }

          .back-button {
            border-radius: 50px;
            padding: 0.75rem 2rem;
            font-weight: 600;
            margin-top: 1.5rem;
            transition: transform 0.3s ease;
          }

          .back-button:hover {
            transform: translateY(-2px);
          }

          /* Responsive styles for two columns */
          @media (min-width: 992px) {
            .about-page-wrapper .row {
              min-height: 100vh;
            }
            .video-container {
              min-height: 100vh;
            }
          }
        `}
      </style>
      
      <div className="row g-0">
        {/* Left column for the video */}
        <div className="col-lg-6 d-flex align-items-center p-0">
          <div className="video-container w-100">
            <video
              playsInline
              autoPlay
              muted
              loop
              onLoadedData={() => setVideoLoaded(true)}
              className="about-video"
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease-in' }}
              // In case the video fails to load, the image will be the background
              poster={bannerImage}
            >
              <source src={AboutVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right column for the content */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5">
          <div className={`content-card w-100 ${contentVisible ? 'is-visible' : ''}`}>
            <h1 className="mb-4">About Nanshiva Shopping</h1>

            <section className="mb-4">
              <h2>Our Story</h2>
              <p>Founded in 2015, Nanshiva Shopping was born from a simple observation — the way people shop was changing, and the future was clearly digital. ... Over the years, we’ve grown into a dynamic online marketplace, serving customers across the country with a diverse range of categories — from electronics and gadgets to fashion, beauty, and daily essentials.</p>
              <p>The e-commerce industry has transformed the way people purchase products. Where once shopping meant physically visiting stores, standing in queues, and navigating busy marketplaces, today’s customers expect instant access to products, seamless transactions, and rapid delivery — all from the comfort of their homes. Nanshiva Shopping embraces this change while preserving the warmth and personal touch of traditional retail.</p>
            </section>

            <section className="mb-4">
              <h2>Our Mission & Vision</h2>
              <p>Our mission is to bridge the gap between the convenience of modern technology and the authenticity of old-fashioned customer care. We aim to provide our customers with a platform where shopping is not just a transaction but an experience. ... Our long-term vision includes expanding globally, introducing AI-driven personalization for product recommendations, and creating a sustainable delivery ecosystem that minimizes environmental impact.</p>
            </section>

            <section className="mb-4">
              <h2>The E-Commerce Landscape</h2>
              <p>The e-commerce industry is one of the fastest-growing sectors globally, with billions of transactions occurring daily across thousands of platforms. ... Yet, with opportunity comes competition. Customers now have hundreds of platforms to choose from, which means trust and loyalty have become the most valuable currencies in the online marketplace. Nanshiva Shopping thrives by offering transparency, fair pricing, and exceptional post-purchase support — ensuring that once a customer shops with us, they keep coming back.</p>
            </section>

            <section className="mb-4">
              <h2>Our Commitment to Customers</h2>
              <p>We believe that a successful e-commerce platform is built on three pillars: speed, quality, and trust. That’s why we invest heavily in advanced inventory management systems, maintain partnerships with reliable courier services, and continuously upgrade our website and mobile app for faster, smoother performance. ... Should any issue arise, our customer support team is ready to resolve it quickly, ensuring your peace of mind.</p>
            </section>

            <section className="mb-4">
              <h2>Looking Ahead</h2>
              <p>As the e-commerce industry continues to evolve, we remain committed to innovation. Future plans include expanding into same-day delivery services, integrating augmented reality (AR) for virtual try-ons, and offering curated subscription boxes for groceries, gadgets, and lifestyle products. ... We see Nanshiva Shopping not just as a platform to buy products, but as a lifestyle companion.</p>
            </section>

            <button
              className="btn btn-warning back-button"
              onClick={goToHome}
            >
             ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

