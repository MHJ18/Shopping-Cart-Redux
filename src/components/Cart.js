import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { carts } from "../store/index";
import "./Cart.css";
const Cart = () => {
  const total = useSelector((state) => state.cart.total);
  let dispatch = useDispatch();
  const show = useSelector((state) => state.cart.showCart);
  function shows() {
    dispatch(carts.show());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={shows}>Cart: {total} Items</h3>
    </div>
  );
};

export default Cart;
