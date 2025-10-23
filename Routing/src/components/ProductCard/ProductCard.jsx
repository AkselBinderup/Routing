export const ProductCard = ({ product }) => {
    return (
      <div style={cardStyle}>
        <h2>{product.title}</h2>
        <p><strong>Pris:</strong> {Math.round(product.price*7.5)} dkk</p>
        <p>{product.description}</p>
        <img src={product.images[0]} 
        alt={product.title} 
        style={{ width: "100%", maxHeight: "200px" }} />
      </div>
    );
  };
  
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "12px",
    width: "250px",
  };