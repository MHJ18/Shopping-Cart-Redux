import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { carts } from "../store/index";
import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  let state = useSelector((state) => {
    return state.cart.itemsList;
  });

  const dispatch = useDispatch();
  function adda() {
    dispatch(
      carts.add({
        name,
        id,
        price,
      })
    );
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={adda}>Add to cart</button>
    </div>
  );
};

export default Product;
