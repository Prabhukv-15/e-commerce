import React, { useState } from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export const SectionSubHeader = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {cart, addToCart} = useCart();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleOrderNow = (product) => {
    alert(
      `Ordering ${product.name} for ${product.price}. Redirecting to payment...`
    );
    // Add payment navigation logic here
  };
  const handleAddToCart= (product)=>{
    const price = parseFloat(product.price.replace("₹", "")) ||0;
    const image = product.img || " " ;
    const newItems = { name: product.name , price, image , quantity: 1,};
    addToCart(newItems);
    window.confirm( `Ordering ${product.name} for ${product.price}. Redirecting to payment...`);
  }
  const sections = [
    {
      title: "Top Deals",
      items: [
        {
          img: "/assets/tablet.png",
          title: "Apple iPads",
          subtitle: "Shop Now!",
          relatedProducts: [
            {
              brand: "Apple",
              name: "iPad Air (2022)",
              specs: "10.9-inch Liquid Retina, M1 Chip, 64GB",
              price: "₹54,900",
              discount: "10% off",
            },
            {
              brand: "Apple",
              name: "iPad Pro 11-inch",
              specs: "11-inch Liquid Retina XDR, M2 Chip, 128GB",
              price: "₹81,900",
              discount: "5% off",
            },
          ],
        },
        {
          img: "/assets/picture.png",
          title: "Instax Cameras",
          subtitle: "From ₹3,999",
          relatedProducts: [
            {
              brand: "Fujifilm",
              name: "Instax Mini 11",
              specs: "Instant Film, Auto Exposure, Selfie Mode",
              price: "₹5,499",
              discount: "20% off",
            },
            {
              brand: "Fujifilm",
              name: "Instax Square SQ1",
              specs: "Square Format Film, Auto Focus",
              price: "₹9,999",
              discount: "15% off",
            },
          ],
        },
        // Add similar mock data for other items
        {
          img: "/assets/cologne.png",
          title: "Perfume & more",
          subtitle: "Min 50% Off",
          relatedProducts: [
            {
              brand: "Versace",
              name: "Eros Eau de Toilette",
              specs: "100ml, Fresh & Woody Scent",
              price: "₹4,500",
              discount: "50% off",
            },
            {
              brand: "Chanel",
              name: "No.5 Eau de Parfum",
              specs: "50ml, Floral Aldehyde",
              price: "₹8,000",
              discount: "30% off",
            },
          ],
        },
        {
          img: "/assets/usb-cable.png",
          title: "Grab Now",
          subtitle: "From ₹49",
          relatedProducts: [
            {
              brand: "Anker",
              name: "USB-C Cable 3ft",
              specs: "Nylon Braided, 60W PD",
              price: "₹499",
              discount: "20% off",
            },
            {
              brand: "Belkin",
              name: "USB-C to Lightning",
              specs: "1m, MFi Certified",
              price: "₹1,499",
              discount: "10% off",
            },
          ],
        },
        {
          img: "/assets/phone-charger.png",
          title: "Buy Now",
          subtitle: "From ₹99",
          relatedProducts: [
            {
              brand: "Mi",
              name: "33W Fast Charger",
              specs: "USB-A, Quick Charge 3.0",
              price: "₹999",
              discount: "25% off",
            },
            {
              brand: "Samsung",
              name: "25W Super Fast Charger",
              specs: "USB-C, PD",
              price: "₹1,499",
              discount: "15% off",
            },
          ],
        },
        {
          img: "/assets/pencils.png",
          title: "Apple Pencil",
          subtitle: "Shop Now",
          relatedProducts: [
            {
              brand: "Apple",
              name: "Apple Pencil (2nd Gen)",
              specs: [
                "Squeeze: Apply a squeeze to invoke a palette for tool selection, line weights, and colorsBarrel Roll: Rotate the pencil to change orientation of brush or pen—thanks to a built-in gyroscopeHaptic Feedback: A custom haptic engine responds with a subtle pulse when you squeeze or double-tapDouble-Tap: Swiftly swap between tools such as pen and eraserApple Pencil Hover: See a preview or “virtual shadow”where your mark will land—super helpful for precisionFind My Integration: Lost your Apple Pencil Pro? No sweat—it’s trackable via the Find My app",
              ],
              price: "₹11,900",
              discount: "5% off",
            },
            {
              brand: "Apple",
              name: "Apple Pencil (2nd Gen)",
              specs: [
                "Squeeze: Apply a squeeze to invoke a palette for tool selection, line weights, and colorsBarrel Roll: Rotate the pencil to change orientation of brush or pen—thanks to a built-in gyroscopeHaptic Feedback: A custom haptic engine responds with a subtle pulse when you squeeze or double-tapDouble-Tap: Swiftly swap between tools such as pen and eraserApple Pencil Hover: See a preview or “virtual shadow”where your mark will land—super helpful for precisionFind My Integration: Lost your Apple Pencil Pro? No sweat—it’s trackable via the Find My app",
              ],
              price: "₹100,900",
              discount: "115% off",
            },
            {
              brand: "Apple",
              name: "Apple Pencil Pro",
              specs: [
                "Squeeze: Apply a squeeze to invoke a palette for tool selection, line weights, and colorsBarrel Roll: Rotate the pencil to change orientation of brush or pen—thanks to a built-in gyroscopeHaptic Feedback: A custom haptic engine responds with a subtle pulse when you squeeze or double-tapDouble-Tap: Swiftly swap between tools such as pen and eraserApple Pencil Hover: See a preview or “virtual shadow”where your mark will land—super helpful for precisionFind My Integration: Lost your Apple Pencil Pro? No sweat—it’s trackable via the Find My app",
              ],
              price: "₹12,900",
              discount: "New Launch",
            },
            {
              brand: "Apple",
              name: "Apple Pencil Pro Max",
              specs: [
                "Squeeze: Apply a squeeze to invoke a palette for tool selection, line weights, and colorsBarrel Roll: Rotate the pencil to change orientation of brush or pen—thanks to a built-in gyroscopeHaptic Feedback: A custom haptic engine responds with a subtle pulse when you squeeze or double-tapDouble-Tap: Swiftly swap between tools such as pen and eraserApple Pencil Hover: See a preview or “virtual shadow”where your mark will land—super helpful for precisionFind My Integration: Lost your Apple Pencil Pro? No sweat—it’s trackable via the Find My app",
              ],
              price: "₹12,900",
              discount: "New Launch",
            },
          ],
        },
      ],
    },
    {
      title: "Cloths, Accessories & More",
      items: [
        {
          img: "/assets/wedding-dress.png",
          title: "Wedding Dress",
          subtitle: "From ₹1699",
          relatedProducts: [
            {
              brand: "Manyavar",
              name: "Bridal Lehenga",
              specs: "Silk, Embroidered, Red",
              price: "₹15,999",
              discount: "20% off",
            },
            {
              brand: "Sabyasachi",
              name: "Wedding Saree",
              specs: "Banarasi Silk, Gold Zari",
              price: "₹25,000",
              discount: "10% off",
            },
          ],
        },
        {
          img: "/assets/high-heel.png",
          title: "High Heels",
          subtitle: "From ₹89",
          relatedProducts: [
            {
              brand: "Bata",
              name: "Stiletto Heels",
              specs: "Leather, 4-inch, Black",
              price: "₹1,999",
              discount: "30% off",
            },
            {
              brand: "Mochi",
              name: "Block Heels",
              specs: "Suede, 2-inch, Nude",
              price: "₹1,499",
              discount: "25% off",
            },
          ],
        },
        {
          img: "/assets/baseball-cap.png",
          title: "Caps",
          subtitle: "Upto 80% Off",
          relatedProducts: [
            {
              brand: "Nike",
              name: "Baseball Cap",
              specs: "Cotton, Adjustable, Black",
              price: "₹999",
              discount: "40% off",
            },
            {
              brand: "Adidas",
              name: "Snapback Cap",
              specs: "Polyester, Flat Brim",
              price: "₹1,199",
              discount: "35% off",
            },
          ],
        },
        {
          img: "/assets/smart-watch.png",
          title: "Smart Watch",
          subtitle: "From ₹1399",
          relatedProducts: [
            {
              brand: "Noise",
              name: "ColorFit Pro 4",
              specs: "1.72-inch AMOLED, Heart Rate, 7 Days Battery",
              price: "₹2,999",
              discount: "50% off",
            },
            {
              brand: "boAt",
              name: "Xtend Smartwatch",
              specs: "1.69-inch LCD, SpO2, 14 Sports Modes",
              price: "₹1,999",
              discount: "60% off",
            },
          ],
        },
        {
          img: "/assets/icons8-shirt-99.png",
          title: "Shirts",
          subtitle: "Upto 70% Off",
          relatedProducts: [
            {
              brand: "NIVICK",
              name: "Men Solid Casual Blue Shirt",
              specs: "Cotton, Regular Fit, Available in S-XXL",
              price: "₹369",
              discount: "75% off",
            },
            {
              brand: "NIVICK",
              name: "Men Solid Casual Beige Shirt",
              specs: "Cotton, Slim Fit, Available in S-XXL",
              price: "₹369",
              discount: "75% off",
            },
            {
              brand: "NIVICK",
              name: "Men Solid Casual Pink Shirt",
              specs: "Cotton, Regular Fit, Available in S-XXL",
              price: "₹369",
              discount: "75% off",
            },
            {
              brand: "NIVICK",
              name: "Men Self Design Casual Maroon Shirt",
              specs: "Cotton Blend, Slim Fit, Available in S-XXL",
              price: "₹319",
              discount: "77% off",
            },
          ],
        },
        {
          img: "/assets/camera-bag.png",
          title: "Camera Bags",
          subtitle: "Min 50% Off",
          relatedProducts: [
            {
              brand: "Lowepro",
              name: "Protactic BP 450 AW II",
              specs: "Waterproof, 15L, DSLR Compatible",
              price: "₹8,999",
              discount: "20% off",
            },
            {
              brand: "Manfrotto",
              name: "Advanced2 Shoulder Bag",
              specs: "Padded, 10L, Mirrorless Camera Fit",
              price: "₹4,499",
              discount: "30% off",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container py-4">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-5">
          <h4 className="fw-bold mb-3">{section.title}</h4>
          <div className="row g-4">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="col-6 col-sm-4 col-md-3 col-lg-2 text-center"
                onClick={() => handleItemClick(item)}
                style={{ cursor: "pointer" }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid mb-2"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="mb-0 fw-semibold">{item.title}</p>
                <small className="text-muted">{item.subtitle}</small>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Modal show={!!selectedItem} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title} - Related Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <Row className="g-4">
              {selectedItem.relatedProducts.map((product, index) => (
                <Col md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-100 shadow-sm">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          <strong>Brand:</strong> {product.brand}
                          <br />
                          <strong>Specifications:</strong> {product.specs}
                          <br />
                          <strong>Price:</strong> {product.price} <br />
                          <strong>Discount:</strong> {product.discount}
                        </Card.Text>
                        <Button
                          variant="warning "
                          className="mt-auto"
                          onClick={() => handleAddToCart(product)}
                        >
                          Order Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};