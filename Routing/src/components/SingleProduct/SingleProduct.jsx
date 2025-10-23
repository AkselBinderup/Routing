import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const SingleProduct = () => {
  const { id } = useParams();  
  const navigate = useNavigate();  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <p>Loader produkter...</p>;
  if (!product) return <p>Produkt ikke fundet!</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
         tilbage
      </button>

      <h1>{product.title}</h1>
      <img
        src={product.images[0]}
        alt={product.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "20px" }}
      />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>

      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
    </div>
  );
};
