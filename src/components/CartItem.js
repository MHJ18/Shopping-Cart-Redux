import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { carts } from "../store/index";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(carts.removeitem(id));
  };
  const addHandler = () => {
    dispatch(carts.additem(id));
  };
  let results = 0;
  
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
