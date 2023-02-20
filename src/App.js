import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { action } from "./store/index";
function App() {
  const state = useSelector((state) => {
    return state.auth.loggedin;
  });
  const states = useSelector((state) => {
    return state.cart.itemsList;
  });

  return (
    <div className="App">
      {!state && <Auth />}
      {state && <Layout />}
    </div>
  );
}

export default App;
