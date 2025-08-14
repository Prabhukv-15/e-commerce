import React, { useState } from "react";

export const AddToCart = ({ addToCart }) => {
  const [addCart, setAddCart] = useState([]);
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleAddToCart = () => {
    if (product.name && product.price) {
      const newItem = { ...product, price: parseFloat(product.price) };
      setAddCart([...addCart, newItem]);
      if (addToCart) {
        addToCart(newItem);
      }
      setProduct({ name: "", price: "" });
    } else {
      alert("Please enter both product name and price!");
    }
  };

  return (
    <div className="p-3">
      <h4>Add to Cart</h4>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Price (₹)"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <button className="btn btn-success" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <ul className="list-group mt-3">
        {addCart.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

