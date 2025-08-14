import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Logout = () => {
  const[currentpath,setCurrentpath] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("users");
      alert("Logged out successfully!");
      navigate("/login");
    }
    else{
      // const stay = location.pathname[currentpath];
      alert("Stay On WebSite !");
      navigate(location.pathname); // stay on current pth
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Logout</h2>
      <div className="card p-4">
        <h4>Are you sure you want to logout?</h4>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};