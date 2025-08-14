import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";
import { Card, Form, Button } from "react-bootstrap";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    const stored = sessionStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = users.find((u) => u.phoneNumber === phoneNumber || u.email === email);
    if (existingUser) {
      setError("User with this phone number or email already exists.");
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const newUser = { username, phoneNumber, email, password };
    const updatedUsers = [...users, newUser];
    sessionStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    loginUser(newUser);
    navigate("/login");
    setError("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: "url('/src/assets/form-green-plant.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="p-5 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
          <Card.Body className="text-center text-dark-b">
            <h2 className="mb-4">Nanshiv Shopping</h2>
            <p className="text-muted mb-4">Create your account to get started.</p>
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
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
              <Button variant="primary" type="submit" className="w-100 py-2" style={{ borderRadius: "8px" }}>
                Register
              </Button>
              <p className="mt-3 text-center">
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};
// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';


// const Register = ()=>{
//     const[username , setUsername] = useState('');
//     const[password , setPassword] = useState('');
//     const[comfirmPassword , setComfirmPassword] = useState('');
//     const[moblie , setMoblie] = useState('');
//     // const[moblie , setMoblie] = useState('');
//     const[message,setMessage] = useState('');
//     const[error , setError] = useState('');

//     let navigate = useNavigate();

//     const handleSummit = ()=>{
//         e.preventDefault();
//         if(setPassword != setComfirmPassword) 
//             alert("Password Does Not Correctly");
//     }
//     return (
//         <>

//         </>
//     )

// }