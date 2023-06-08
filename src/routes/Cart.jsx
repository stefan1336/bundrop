import React, { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [getPrice, setPrice] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cartItems);
  }, []);

  useEffect(() => {
    const price = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setPrice(price);
  }, [cartItems]);

  function removeProduct(name) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCartItems = cartItems.filter((e) => e.name !== name);

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  }

  const addOneProduct = (cartItem) => {
    console.log(cartItem);
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    const itemToUpdate = localStorageCartItems.find((i) => i.name === cartItem);

    itemToUpdate.quantity++;

    localStorage.setItem("cart", JSON.stringify(localStorageCartItems));
    setCartItems(localStorageCartItems);
  };

  const removeOneProduct = (cartItem) => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCartItems = localStorageCartItems.map((item) => {
      if (item.name === cartItem) {
        item.quantity--;
      }
      return item;
    });

    const filteredCartItems = updatedCartItems.filter(
      (item) => item.quantity > 0
    );

    localStorage.setItem("cart", JSON.stringify(filteredCartItems));
    setCartItems(filteredCartItems);
  };

  return (
    <div>
      <div className="headline-container">
        <h2>Cart</h2>
      </div>
      <Link to="/checkout">
        <div className="order-container">
          <button className="order-btn">Order</button>
        </div>
      </Link>
      <div className="headline-container">
        <div className="cart-container">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              id={item.id}
              price={item.price * item.quantity}
              image={item.image}
              quantity={item.quantity}
              removeProduct={removeProduct}
              addOneProduct={addOneProduct}
              removeOneProduct={removeOneProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
