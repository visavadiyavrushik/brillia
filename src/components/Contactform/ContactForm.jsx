"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Col, Container, Row, Form, Button, Carousel } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/contactform.module.css";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container className={styles.formContainer}>
      <Row>
        <Col xs={12} md={6}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Carousel controls>
              <Carousel.Item>
                <Image
                  src="/assets/images/contactForm.png"
                  alt="image"
                  width={558}
                  height={752}
                  className={styles.formImage}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/assets/images/contactForm.png"
                  alt="image"
                  width={258}
                  height={752}
                  className={styles.formImage}
                />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className={styles.formCol}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1>
              <span> FIND YOUR </span> RIGHT PROPERTY
            </h1>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>
                  Name<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>

              <Form.Group controlId="formContact">
                <Form.Label>
                  Contact <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>

              <Form.Group controlId="formOfficeArea">
                <Form.Label>Current Office Area (Optional)</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>

              <Form.Group controlId="formLivingArea">
                <Form.Label>Current area of living (Optional)</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>

              <Form.Group
                controlId="formLivingAreas"
                style={{ display: "flex" }}
              >
                <Form.Check
                  type="radio"
                  id={`default`}
                  name="radiog"
                  label={`Investment`}
                  style={{
                    marginRight: `34px`,
                    marginBottom: "34px",
                    marginTop: "16px",
                  }}
                />

                <Form.Check
                  type="radio"
                  name="radiog"
                  id={`default1`}
                  label={`End Use`}
                  style={{
                    marginRight: `34px`,
                    marginBottom: "34px",
                    marginTop: "16px",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>
                  Email<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control size="sm" type="email" />
              </Form.Group>

              <Form.Group controlId="formRemark">
                <Form.Label>Special Remark</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
