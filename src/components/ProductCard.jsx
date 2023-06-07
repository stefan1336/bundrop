import React, { useState } from "react";

function ProductCard({
  id,
  name,
  type,
  description,
  image,
  category,
  addToLocalStorage,
  price,
}) {
  return (
    <div
      className="display-container"
      style={{
        backgroundColor:
          category == "Drink"
            ? "CornflowerBlue"
            : category == "Side"
            ? "Coral"
            : "",
      }}
    >
      <div style={{ position: "relative" }}>
        <img className="product-image" src={`/images/${image}`} alt="" />

        <button
          onClick={() => {
            addToLocalStorage(id);
          }}
          className="add-btn"
          style={{ position: "absolute" }}
        >
          ADD
        </button>
      </div>
      <div className="text-alignment">
        <h3 className="product-name">{name}</h3>
        <hr />
        <h4 className="product-name">Type: {type}</h4>
        <p> $ {price}</p>
        <em>{description}</em>
      </div>
    </div>
  );
}

export default ProductCard;
