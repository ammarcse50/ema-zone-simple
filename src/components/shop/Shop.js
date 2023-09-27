import React from "react";

import fakeData from "../../fakeData/products.json";

import { useState } from "react";

import "./Shop.css";
import Product from "../product/Product.js";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);

  const [products, setProducts] = useState(first10);

  const handleAddToCart = () => {
    console.log("product added");
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((pd) => (
            <Product handleAddToCart={handleAddToCart} product={pd}></Product>
          ))}
        </ul>
      </div>

      <div className="cart-container">
        <h1>This is cart</h1>
      </div>
    </div>
  );
};
export default Shop;
