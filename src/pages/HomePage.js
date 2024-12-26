import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filterProducts = (category) => {
    setFilteredProducts(
      products.filter(product => product.category === category)
    );
  };

  return (
    <div>
      <h1>All Products</h1>
      <div>
        <button onClick={() => filterProducts('electronics')}>Electronics</button>
        <button onClick={() => filterProducts('clothing')}>Clothing</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
