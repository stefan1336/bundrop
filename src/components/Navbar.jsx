import React from "react";
import { Link } from "react-router-dom";
// import images from "../images/logo-color.png";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="nav-container">
      <Link to="/about">
        <img className="logo-image" src="/images/logo-color.png" alt="Logo" />
      </Link>
      <Link to="/">
        <div className="header-container">
          <h1>Bun Drop</h1>
        </div>
      </Link>
      <div
        className="hamburgermenu navigation"
        style={{ position: "relative" }}
      >
        {hamburgerOpen ? (
          <ul style={{ position: "absolute", right: "2rem", bottom: -33 }}>
            <Link to="/menu">
              <li className="item-style">Menu</li>
            </Link>
            <Link to="/cart">
              <li className="item-style">Cart</li>
            </Link>
            <Link to="/about">
              <li className="item-style">About</li>
            </Link>
          </ul>
        ) : (
          ""
        )}

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <style jsx>
        {`     
        
        .navigation {
        /* text-decoration: none; */
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        float: right;
        
        /* margin: 20 0px;
        padding: 0 25px; */
        }

        .navigation ul {
        display: ${hamburgerOpen ? "inline" : "none"}
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        float: right;
        margin: 20 0px;
        padding: 0 25px; 
        }

        .navigation ul li {
        list-style-type: none;
        padding-right: 10px;
        }  `}
      </style>
    </div>
  );
}

export default Navbar;
