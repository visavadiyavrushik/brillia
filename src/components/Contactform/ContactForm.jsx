"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row, Form, Button, Carousel } from "react-bootstrap";
import styles from "../../styles/contactform.module.css";

const ContactForm = () => {
  return (
    <Container className={styles.formContainer}>
      <Row>
        <Col xs={12} md={6}>
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
        </Col>
        <Col xs={12} md={6} className={styles.formCol}>
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
            <Form.Group controlId="formLivingAreas" style={{ display: "flex" }}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
