import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function CartCard({
  name,
  id,
  quantity,
  removeOneProduct,
  removeProduct,
  addOneProduct,
  image,
  price,
}) {
  return (
    <div className="display-container">
      <div style={{ position: "relative" }}>
        <img className="cart-image" src={`/images/${image}`} alt="" />
        <button
          onClick={() => removeProduct(name)}
          className="remove-btn"
          style={{ position: "absolute" }}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
      <div className="text-alignment">
        <h3 className="product-name">{name}</h3>
        <a className="quantity-style">{quantity}x</a>
        <button
          className="increment-btn"
          onClick={() => {
            addOneProduct(name);
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button
          className="reduce-btn"
          onClick={() => {
            removeOneProduct(name);
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <hr />
        <p> $ {price}</p>
      </div>
    </div>
  );
}

export default CartCard;
