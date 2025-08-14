import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

export const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("users");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
        });
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to load user data. Please try again.");
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form below this
  const validateForm = () => {
    const newErrors = {}; // initialize concept
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a 10-digit number";
    } else {
    }
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const updatedUser = {
        ...user,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };
      localStorage.setItem("users", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      setError("Failed to save changes. Please try again.");
    }
  };

  const handleCancel = () => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
    setEditMode(false);
    setErrors({});
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">{error}</Alert>
        <Button variant="primary" onClick={() => navigate("/login")}>
          Go to Login
        </Button>
      </div>
    );
  }
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Account</h2>
      <div className="card p-4 shadow-sm">
        <h4>Account Details</h4>
        <button></button>
        {!editMode ? (
          <>
            <div className="mb-3">
              <strong>Name:</strong> {user?.name || "No Name Was Present Now"}
            </div>
            <div className="mb-3">
              <strong>Email:</strong>{" "}
              {user?.email || "No email Was Present Now"}
            </div>
            <div className="mb-3">
              <strong>Phone:</strong>{" "}
              {user?.phone || "No phone Was Present Now"}
            </div>
            <Button variant="warning" onClick={() => setEditMode(true)}>
              Edit Profile
            </Button>
                        <Button className="btn btn-warning back-button mt-3" onClick={goToHome}>
              ← Back
            </Button>
          </>
        ) : (
          <>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="warning" onClick={handleSave} className="me-2">
                Save Changes
              </Button>
              <Button variant="warning" onClick={handleCancel}>
                Cancel
              </Button>
            </Form>

          </>
        )}
      </div>
    </div>
  );
};
