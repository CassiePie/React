import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "../styles/productDrawer.css";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.total);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCart = () => setIsOpen(!isOpen);

  const handleIncreaseQuantity = (index) => {
    const item = cartItems[index];
    item && item.quantity < 10
      ? dispatch(
          updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 })
        )
      : alert("Maximum quantity reached");
  };

  const handleDecreaseQuantity = (index) => {
    const item = cartItems[index];
    item && item.quantity > 1
      ? dispatch(updateCartItemQuantity({ index, quantity: item.quantity - 1 }))
      : dispatch(removeFromCart(index));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => dispatch(clearCart());

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // console.log(cartItems);

  return (
    <div
      className={`fixed-action-btn cart-drawer-container ${
        isOpen ? "open" : ""
      }`}
    >
      <button
        className="btn-floating btn-large waves-effect waves-light cart-button sticky"
        onClick={handleToggleCart}
      >
        CART
        <span className="cart-item-count">{cartItems.length}</span>
      </button>
      {isOpen && (
        <div className="cart-drawer-container-open">
          <div className="cart-drawer">
            <div className="cart-drawer-header">
              <span>Your Cart</span>
              <button className="btn-flat" onClick={handleToggleCart}>
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="cart-drawer-body">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-name">
                        <span>{item.naam}</span>
                        {typeof item.prijs === "number" && (
                          <span>€{item.prijs.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="cart-item-controls">
                        <button
                          className="btn-flat"
                          onClick={() => handleDecreaseQuantity(index)}
                        >
                          <i className="btn">-</i>
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn-flat"
                          onClick={() => handleIncreaseQuantity(index)}
                        >
                          <button className="btn">+</button>
                        </button>
                        <button
                          className="btn-flat"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          <button className="btn-flat">delete</button>
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="cart-total">
                    <p>Total: €{cartTotal ? cartTotal.toFixed(2) : "0.00"}</p>
                    <div className="cart-controls">
                      <button className="btn" onClick={handleClearCart}>
                        Clear Cart
                      </button>
                      <Link to="/order" className="btn">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
