import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

export const OrderList = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment");
  };
  const handleBackToHome=()=>{
    navigate("/home");
  }

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mt-4"
    >
      <h4 className="mb-4">Your Orders</h4>
      {cart.length > 0 ? (
        <Card className="p-4 shadow-sm">
          {cart.length === 0 ? (
            <p>Your no odered now . . . </p>
          ) : (
            <Row>
              {cart.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="mb-3"
                >
                  <Row className="align-items-center">
                    <Col md={2}>
                      <Image
                        src={
                          item.image ||
                          "/src/assets/happy-beautiful-couple.jpg"
                        }
                        alt={item.name || product.name}
                        fluid
                        rounded
                        onError={(e) => {
                          e.target.src =
                            "/src/assets/happy-beautiful-couple.jpg";
                        }}
                      />
                    </Col>
                    <Col md={4}>
                      <h6>{item.name || product.name}</h6>
                      <p className="text-muted">Price: ₹{item.price}</p>
                      <p className="text-muted">
                        Quantity: {item.quantity || 1}
                      </p>
                    </Col>
                    <Col md={6} className="text-end">
                      <p className="fw-bold">
                        Total: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </Col>
                  </Row>
                  <hr />
                </motion.div>
              ))}
            </Row>
          )}

          <div className="text-end mt-3">
            <h5 className="mb-2">
              Grand Total: ₹
              {cart
                .reduce(
                  (sum, item) => sum + item.price * (item.quantity || 1),
                  0
                )
                .toFixed(2)}
            </h5>
            <Button
              variant="warning"
              onClick={handlePayment}
              className="w-25 p-3"
              style={{ borderRadius: "198px" }}
            >
              Payment
            </Button>
          </div>
        </Card>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-5 border rounded"
        >
          <p className="mb-3">
            No items in your cart yet! Please get some products.
          </p>
          <Button
            variant="warning"
            style={{ borderRadius: "18px" }}
            onClick={() => navigate("/explore")}
          >
            Shop Now
          </Button>
        </motion.div>
      )}
    </motion.div>
    <button onClick={()=> handleBackToHome()} href="#" type="button" className="btn btn-warning  m-5">Back</button>
    </>
  );
};

