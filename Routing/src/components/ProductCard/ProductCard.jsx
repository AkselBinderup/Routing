export const ProductCard = ({ product }) => {
    return (
      <div style={cardStyle}>
        <h2>{product.title}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
        {product.images && product.images.length > 0 && (
          <img src={product.images[0]} alt={product.title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
        )}
      </div>
    );
  };
  
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "12px",
    width: "250px",
  };