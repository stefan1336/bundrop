import React from "react";
import { Link } from "react-router-dom";
// Import icons:
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home-container">
      <div className="flex-container flex-column">
        <h2>
          Welcome to Bun Drop! <a className="r-style">®</a>
        </h2>

        <a>The future of burger delivery!</a>
        <br />
        <em>
          We are revolutionizing the way you experience food by bringing your
          favorite burgers straight to your doorstep, delivered with the speed
          and precision of drones.
        </em>
        <br />
        <Link to="/menu">
          <button className="menu-btn">Menu</button>
        </Link>
      </div>
      <img
        className="home-image"
        src="/images/burger-png-png-images-yellow-images-12.png"
        alt=""
      />
    </div>
  );
}

export default Home;
