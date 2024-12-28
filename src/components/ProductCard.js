import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); 
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Buy Now
          </button>
        </div>
        {showMessage && (
          <div className="mt-2 text-green-500 text-sm">Item added to cart!</div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
