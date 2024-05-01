import React, { useState } from 'react';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add product to the database
    console.log('Product added:', { productName, price });
    setProductName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
