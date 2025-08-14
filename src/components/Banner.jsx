import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bannerVideo from "../assets/banner_video.mp4";
import bannerImage from "../assets/styleskating.jpg";
import {DummyPopupAdvertisment} from "./DummyPopupAdvertisment";

export const Banners = () => {
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore");
  };
  const handleShopping = () => {
    navigate("/shopping");
  };
  // const useEffect(()=>{
  //   setTimeout=(()=>setIsVisible(false),100);
  // })
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
    <DummyPopupAdvertisment />
      <section
        className="bsb-hero-5 px-3 bsb-overlay position-relative d-flex align-items-center justify-content-center text-center"
        style={{ minHeight: "800px", overflow: "hidden" }}
      >
        {!videoError ? (
          <video
            playsInline
            autoPlay
            muted
            loop
            onError={() => setVideoError(true)} // If video can't load, switch to image
            className="position-absolute w-100 h-100"
            style={{ objectFit: "cover", zIndex: -1 }}
          >
            <source src={bannerVideo} type="video/mp4" />
            <img
              src={bannerImage}
              alt="Banner Falling back"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </video>
        ) : (
          <img
            src={bannerImage}
            alt="Banner"
            className="position-absolute w-100 h-100"
            style={{ objectFit: "cover", zIndex: -1 }}
          />
        )}

        {/* set for Overlay concept  */}
        <div
          className="position-absolute w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.4)", zIndex: -1 }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="fw-bold display-3 mb-3">
                Discover Your Style.
                <span className="text-warning"> Shop Smarter.</span>
              </h1>
              <p className=" text-white lead mb-9">
                Experience India’s #1 Online Shopping Destination — Trendy,
                Affordable, and Just for You!
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  href="#shop-now"
                  onClick={handleShopping}
                  className="btn btn-warning btn-lg fw-semibold px-4"
                >
                  Start Shopping
                </button>
                <button
                  onClick={handleExplore}
                  className="btn btn-outline-light btn-lg fw-semibold px-4"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
