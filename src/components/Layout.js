import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let results = 0;
  const show = useSelector((state) => state.cart.showCart);
  let totalprice = useSelector((state) => state.cart.itemsList);
  totalprice.forEach((element) => {
    results = results + element.totalPrice;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {show && <CartItems />}
        <div className="total-price">
          <h3>Total: ${results}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
