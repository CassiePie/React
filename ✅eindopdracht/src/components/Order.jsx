import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container">
      <h2 className="center-align">Checkout</h2>
      <table className="striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.naam}</td>
              <td>€ {item.prijs}</td>
              <td>{item.quantity}</td>
              <td>€ {item.prijs * item.quantity}</td>
              <td>
                <button
                  className="btn-flat"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <button className="btn">delete</button>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total:</td>
            <td>€ {cartTotal}</td>
          </tr>
        </tbody>
      </table>
      <div className="center-align">
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
