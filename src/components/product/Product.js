import React from "react";
import "./Product.css";

const product = (props) => {
  console.log(props.product);

  const { img, name, seller, price, stock  } = props.product;

  return (
    <div className="product">
      <div className="img-part">
        <img src={img} alt="product image" />
      </div>

      <div className="text-part">
        <h4 className="product-name">{name}</h4>
        <br />

        <p>
          <small>by: {seller}</small>
        </p>
        <br />

        <p>
          <strong> {price}</strong>
        </p>
        <br />

        <p>
          <small>Only {stock} left in stock -order soon </small>
        </p>

        <button className="addToCart-button"
          onClick={()=> props.handleAddToCart(props.product)}
        >
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default product;
