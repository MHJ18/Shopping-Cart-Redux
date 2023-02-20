import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  let items = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {items.map((res) => {
          return (
            <li key={res.id}>
              <CartItem
                id={res.id}
                price={res.price}
                name={res.name}
                quantity={res.quantity}
                total={res.totalPrice}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
