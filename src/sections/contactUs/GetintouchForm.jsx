"use client";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/contact-us/contactus.module.css";
import Image from "next/image";

const GetintouchForm = () => {
  const addressRef = React.useRef(null);
  const formRef = React.useRef(null);

  const addressInView = useInView(addressRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });
  const formInView = useInView(formRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <Container className={styles.getIntouchContainer}>
      <Row>
        <Col xs={12} md={6} className={styles.formCol}>
          <motion.div
            ref={addressRef}
            initial={{ opacity: 0, y: 20 }}
            animate={addressInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={styles.addressBox}
          >
            <p className={styles.slasTitle}>/ Address</p>
            <h1 className={styles.title}>
              {" "}
              <span>Office </span> Address
            </h1>

            <div>
              <div className={styles.mediaInfo}>
                <Image
                  src="/assets/svg/location.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <p>
                  Pravish Office, Opp Chharodi Lake, S.G. Highway,
                  Ahmedabad-382481
                </p>
              </div>

              <div className={styles.mediaInfo}>
                <Image
                  src="/assets/svg/phone.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <p>+91 787 488 3311</p>
              </div>
              <div className={styles.mediaInfo}>
                <Image
                  src="/assets/svg/email.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <p>info@pravishgroup.com</p>
              </div>
              <Image
                className={styles.addressImage}
                src="/assets/images/brelliaHome2.jpg"
                alt=""
                width={462}
                height={267}
              />
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className={styles.formCol}>
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1>
              <span> Get in </span> TOUCH
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

export default GetintouchForm;
