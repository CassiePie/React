import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import "../styles/productCard.css";

export default function ProductCard({ item: product, index }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [sauzen, setSauzen] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedSaus, setSelectedSaus] = useState(null);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const item = {
      ...product,
      sauzen: selectedSaus ? [selectedSaus] : [],
    };

    dispatch(addToCart({ item, quantity }));
    setExpanded(true);
  };

  const handleIncreaseQuantity = (e) => {
    e.stopPropagation();
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleToggleOptions = () => {
    setExpanded(!expanded);
  };

  const handleToggleSaus = (selectedSaus) => {
    console.log(selectedSaus);
    setSelectedSaus(selectedSaus);
    // console.log(selectedSaus);
  };

  if (!product) {
    return null;
  }

  return (
    <div
      className={`product-card ${expanded ? "product-card--expanded" : ""}`}
      onClick={handleToggleOptions}
    >
      <div className="product-info">
        <h4 className="product-name">{product && product.naam}</h4>
        <p className="product-price">€ {product.prijs}</p>
      </div>
      {expanded && (
        <div className="product-options">
          {product.naam === "broodjes" || product.naam === "frieten" ? (
            <div className="sauzen-options">
              <h5>Select sauzen:</h5>
              {product.sauzen.map((saus, i) => (
                <div
                  key={`${saus.naam}-${i}`}
                  className={`saus-option ${
                    selectedSaus === saus.naam ? "selected" : ""
                  }`}
                  onClick={() => handleToggleSaus(saus.naam)}
                >
                  {saus.naam} (€ {saus.prijs})
                </div>
              ))}
            </div>
          ) : null}
          <div className="quantity-options">
            <button className="quantity-btn" onClick={handleDecreaseQuantity}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn" onClick={handleIncreaseQuantity}>
              +
            </button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}
