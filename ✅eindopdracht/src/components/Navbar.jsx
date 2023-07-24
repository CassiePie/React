import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCartDrawer } from "../redux/slices/cartSlice";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleToggleCart = (event) => {
    dispatch(toggleCartDrawer());
  };

  return (
    <header>
      <nav>
        <ul className="tabs">
          <li className="tab">
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li className="tab">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li className="tab" style={{ display: "none" }}>
            <NavLink to="/order">Order</NavLink>
          </li>
        </ul>
      </nav>
      <div className="cart-button" onClick={(e) => handleToggleCart(e)}>
        <CartDrawer />
      </div>
    </header>
  );
}
