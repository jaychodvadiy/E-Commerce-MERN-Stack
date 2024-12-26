import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <a to={`/product/${product.id}`} className="text-blue-500">View Details</a>
    </div>
  );
};

export default ProductCard;
