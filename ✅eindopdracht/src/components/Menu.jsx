import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "../styles/menu.css";

export default function Menu() {
  const { categories, sauzen } = useSelector((state) => state.menu);

  return (
    <div className="menu-container">
      <h2 className="menu-title">MENU</h2>

      {Object.values(categories).map((category) => (
        <div key={category.naam} className="category">
          <h3 className="category-title">{category.naam}</h3>
          <div className="menu-items">
            {category.producten.map((item) => (
              <ProductCard key={item.naam} item={item} sauzen={sauzen} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
