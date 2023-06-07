import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  function addToLocalStorage(id) {
    // öka quantity med 1 om id matchar
    // Hämta produkten i min databas där id stämmer överrens
    const product = allProducts.find((product) => product.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      // existingItem.price = +product.price;
      existingItem.quantity++;
      existingItem.price += product.price;
    } else {
      let item = {
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        category: product.category,
        id: product.id,
      };
      cart.push(item);
    }

    // letar efter cart i localstorage, om det inte finns så skapas en tom array
    // let cart = JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div>
      <div className="headline-container">
        <h2>Menu</h2>
      </div>
      <div className="product-container">
        {allProducts.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            description={p.description}
            image={p.image}
            category={p.category}
            price={p.price}
            addToLocalStorage={addToLocalStorage}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
