
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button, Card, Row, Col, Alert, Modal } from 'react-bootstrap';

export const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'UPI',
    upiId: '',
    gpayId: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (formData.paymentMethod === 'UPI' && !formData.upiId) newErrors.upiId = 'UPI ID is required';
    if (formData.paymentMethod === 'GPay' && !formData.gpayId) newErrors.gpayId = 'GPay ID is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setShowModal(true);
  };

  const handleConfirmPayment = () => {
    setShowModal(false);
    // Simulate payment processing
    setShowSuccess(true);
    // In a real app, integrate with payment gateway like Razorpay or Stripe
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mt-5"
    >
      <h2 className="text-secondary text-center mb-4">Proceed to Payment</h2><hr/>
      <Card className="p-4 shadow-sm">
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Alert variant="success">Payment Confirmed! Your order is on the way.</Alert>
          </motion.div>
        )}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="UPI"
                name="paymentMethod"
                value="UPI"
                checked={formData.paymentMethod === 'UPI'}
                onChange={handleChange}
                inline
              />
              <Form.Check
                type="radio"
                label="GPay"
                name="paymentMethod"
                value="GPay"
                checked={formData.paymentMethod === 'GPay'}
                onChange={handleChange}
                inline
              />
            </div>
          </Form.Group>
          {formData.paymentMethod === 'UPI' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>
              <Form.Group className="mb-3">
                <Form.Label>UPI ID</Form.Label>
                <Form.Control
                  type="text"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleChange}
                  isInvalid={!!errors.upiId}
                />
                <Form.Control.Feedback type="invalid">{errors.upiId}</Form.Control.Feedback>
              </Form.Group>
            </motion.div>
          )}
          {formData.paymentMethod === 'GPay' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>
              <Form.Group className="mb-3">
                <Form.Label>GPay ID</Form.Label>
                <Form.Control
                  type="text"
                  name="gpayId"
                  value={formData.gpayId}
                  onChange={handleChange}
                  isInvalid={!!errors.gpayId}
                />
                <Form.Control.Feedback type="invalid">{errors.gpayId}</Form.Control.Feedback>
              </Form.Group>
            </motion.div>
          )}
          <motion.div >
            <Button variant="warning" style={ {borderRadius: '38px'}} type="submit" className="w50 ">
              Confirm Payment
            </Button>
          </motion.div>
        </Form>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          {formData.paymentMethod === 'UPI' && <p><strong>UPI ID:</strong> {formData.upiId}</p>}
          {formData.paymentMethod === 'GPay' && <p><strong>GPay ID:</strong> {formData.gpayId}</p>}
          <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleConfirmPayment}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};


