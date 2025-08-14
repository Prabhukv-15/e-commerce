import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "./SearchBox";

export const Navbar = () => {
  let navigate = useNavigate();
  const { loguser, logoutUser } = useUser();
  if (process.env.NODE_ENV === "devolpment") {
    console.log("Enter the props Data now navbar", loguser);
  }
  const handleLink = () => {
    navigate("/link");
  };
  const handleToHome = () => {
    navigate("/homes");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="#">
        Nanshiv Shopping
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#" onClick={() => handleToHome()}>
              Home <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => handleLink()}>
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => navigate("/toprating")}
                >
                  Top Ratings
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => navigate("/flashoffers")}
                >
                  Flash Offers
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => navigate("/documentation")}
                >
                  Documentation
                </a>
              </li>
            </ul>
          </li>
          {loguser ? (
            <li className="nav-item">
              <span>Welcome {loguser.username}</span>
              {/* <a className="nav-link disabled" href="#"  onClick={logoutUser}>
                LogOut
              </a> */}
            </li>
          ) : (
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => navigate("/about")}
              >
                About
              </a>
            </li>
          )}
        </ul>
        <nav>
          <SearchBox />
          {/* Other navbar content */}
        </nav>
        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Products "
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};
