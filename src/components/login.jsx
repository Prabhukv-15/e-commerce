import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";
import { Card, Form, Button } from "react-bootstrap";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    const stored = sessionStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    try {
      if (
        users.some((u) =>u.phoneNumber === phoneNumber &&u.username === username &&u.password === password)
      ) {
        navigate("/home");
        setError("");
      }
    } catch (error) {
      setError(true);
    }
  }, [username, phoneNumber, password, navigate]); // Trigger navigation on valid credentials

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = users.find(
      (u) => u.phoneNumber === phoneNumber && u.username === username
    );
    if (existingUser) {
      if (existingUser.password === password) {
        loginUser(existingUser);
        navigate("/home");
        setError("");
      } else {
        setError("Incorrect Password");
      }
    } else {
      const newUser = { username, phoneNumber, password };
      const updatedUsers = [...users, newUser];
      sessionStorage.setItem("users", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      loginUser(newUser);
      navigate("/home");
      setError("");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage:
          "url('/assets/form-green-plant.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className="p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <Card.Body className="text-center">
            <h2 className="mb-4">Nanshiv Shopping</h2>
            <p className="text-muted mb-4">
              Welcome back! Please login to your account.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
              {error && <p className="text-danger mb-3">{error}</p>}
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2"
                style={{ borderRadius: "8px" }}
              >
                Login
              </Button>
              <p className="mt-3 text-center">
                Don’t have an account? <Link to="/register">Register here</Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};
