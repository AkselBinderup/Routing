import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (productId.trim()) {
      navigate(`/products/${productId}`);
      setProductId("");
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Skriv produkt id"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
            <button type="submit">Go</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};
