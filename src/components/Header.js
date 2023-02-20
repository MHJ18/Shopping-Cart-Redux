import React from "react";
import Cart from "./Cart";
import "./Header.css";
 import { useDispatch, useSelector } from "react-redux";
 import { action1 } from "../store/index";
 const Header = () => {
   const dispatch = useDispatch();
   const log = function (e) {
     dispatch(action1.logout());
   };
   return (
     <header>
       <nav className="header-nav">
         <ul className="header-ul d-flex justify-content-center">
           <li>
             <h2
               className="header-h2"
               style={{ fontFamily: "monospace", fontSize: "30px" }}
             >
               Redux Shopping App
             </h2>
           </li>
           <li>
             <Cart />
           </li>
           <li>
             <button className="btn btn-dark butn" onClick={log}>
               Logout
             </button>
           </li>
         </ul>
       </nav>
     </header>
   );
 };

export default Header;
