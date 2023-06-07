import React, { useState, useEffect } from "react";

function Summary(props) {
  const [randomTime, setRandomTime] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
    localStorage.clear();
  }, []);

  useEffect(() => {
    deliveryTime();
  }, []);

  const deliveryTime = () => {
    const minMinutes = 1;
    const maxMinutes = 60;
    const randomMinutes = Math.floor(
      Math.random() * (maxMinutes - minMinutes + 1) + minMinutes
    );
    setRandomTime(randomMinutes);
  };

  return (
    <div className="">
      <div className="flex-container flex-column">
        {randomTime !== null && (
          <h2>
            {props.f}Your order will be delivered in {randomTime} min.
          </h2>
        )}
        <em>Best regards Burger Bun</em>
      </div>
    </div>
  );
}

export default Summary;
