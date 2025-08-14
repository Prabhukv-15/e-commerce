
import React from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const ShoppingPage = () => {
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const price = item ? item.price || Math.floor(Math.random() * 1000) : Math.floor(Math.random() * 1000);
    const newProduct = { name: item?.name || item, price };
    addToCart(newProduct);
    // window.alert(`Added ${newProduct.name} (₹${newProduct.price}) to your Cart!`);
  };

  const handleExplore = () => {
    navigate("/explore");
  };

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <button
        className="btn btn-secondary mt-3 ms-5"
        type="button"
        onClick={goToHome}
        aria-label="Back to Home"
      >
        Back to Home
      </button>
      <div>
        {/* Navbar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
            <Container>
              <Navbar.Brand href="#" className="d-flex align-items-center">
                <h4 className="mb-0 text-secondary">Shopping Contact -</h4>
                <small className="ms-3 text-muted">+91 9025815302</small>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-center"
              >
                <Nav className="mx-auto">
                  <Nav.Link href="#" className="mx-2">Home</Nav.Link>
                  <Nav.Link href="#" className="mx-2">New Collection</Nav.Link>
                  <Nav.Link href="#" className="mx-2">Gentleman</Nav.Link>
                  <Nav.Link href="#" className="mx-2">Jones</Nav.Link>
                  <Nav.Link href="#" className="mx-2">Men's Wear</Nav.Link>
                  <Nav.Link href="#" className="mx-2">Sale</Nav.Link>
                  <Nav.Link href="#" className="mx-2">Latest Blogs</Nav.Link>
                  <Nav.Link href="#" className="mx-2">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-light py-5 text-center position-relative overflow-hidden"
          style={{
            backgroundImage: "url(/src/assets/greenwithwhite.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <motion.h1
              className="display-3 fw-bold text-dark"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Men's Collection
            </motion.h1>
            <motion.p
              className="lead text-dark"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              From shirts, jackets, watches, sneakers, hats
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                onClick={handleExplore}
                variant="dark"
                size="lg"
                className="mt-3"
              >
                Explore NOW
              </Button>
            </motion.div>
          </Container>
        </motion.div>

        {/* Features Section */}
        <Container className="py-4">
          <Row className="text-center">
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <h5>FREE SHIPPING</h5>
                <p>Free shipping on orders $200+</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <h5>30 DAYS RETURN</h5>
                <p>Simply return within 30 days</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <h5>100% PAYMENT SECURE</h5>
                <p>We ensure safe transactions</p>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Product Categories */}
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 bg-warning text-dark shadow-sm">
                  <Card.Img
                    variant="top"
                    src="/src/assets/hat.jpg"
                    alt="Men's Sunglasses"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Button
                      variant="outline-white"
                      onClick={() => handleAddToCart({ name: "Men's Sunglasses" })}
                      className="w-100"
                    >
                      <h5>Men's Sunglasses</h5>
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="border-0 bg-warning text-dark shadow-sm">
                  <Card.Img
                    variant="top"
                    src="/src/assets/sneakers.jpg"
                    alt="Men's Sneaker"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Button
                      variant="outline-white"
                      onClick={() => handleAddToCart({ name: "Men's Sneaker" })}
                      className="w-100"
                    >
                      <h5>Men's Sneaker</h5>
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="border-0 bg-warning text-dark shadow-sm">
                  <Card.Img
                    variant="top"
                    src="/src/assets/t-shirt.jpg"
                    alt="Men's T-Shirt"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Button
                      variant="outline-white"
                      onClick={() => handleAddToCart({ name: "Men's T-Shirt" })}
                      className="w-100"
                    >
                      <h5>Collection of 2019 Men's T-Shirt</h5>
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
