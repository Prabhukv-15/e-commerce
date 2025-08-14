import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

export const Cards = () => {
  const{ cart, addToCart} =useCart();
  const handleAddToCart= (product)=>{
    const price = product.price || Math.floor(Math.random() * 1000); // Fixed random price generation
    const image = product.imageUrl || "/assets/placeholder.jpg"; // Fallback image
    const newItem = {
      name: product.title || "Unnamed Product", // Fallback name
      image,
      price,
    };
    addToCart(newItem);
    // const newItems = [... ]
  }
  const products = [
    { id: 1, imageUrl: "/assets/whiteTshit.jpg" ||[], title: "White T-Shirt", text: "A classic white t-shirt for everyday wear." },
    { id: 2, imageUrl: "/assets/pexels-timothy-paule-ii-614774-1433191.jpg" ||[], title: "Fashion Jacket", text: "Stylish jacket for all seasons." },
    { id: 3, imageUrl: "/assets/westernstyl.jpg", title: "Western Style"||[], text: "Trendy western outfit for men." },
    { id: 4, imageUrl: "/assets/womenkids.jpg", title: "Women & Kids"||[], text: "Fashion for women and kids collection." },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-3">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (product.id - 1) * 0.1 }}
              whileHover={{ scale: 1.30 }}
            >
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "300px", width: "100%" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1 text-center">{product.text}</Card.Text>
                  <div className="text-center mt-auto">
                    <Button variant="warning" className="w-75 rounded-pill py-1"  onClick={()=>handleAddToCart(product)}>
                      Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

