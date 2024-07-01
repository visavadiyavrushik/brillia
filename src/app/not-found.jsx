import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/contact-us/contactus.module.css";

const NotFound = () => {
  return (
    <Container fluid className={styles.ContactImageContainer}>
      <div className={styles.ContactImageDiv}>
        <Image
          className={styles.ContactImage}
          alt="image"
          src="/assets/images/contact.png"
          width={1328}
          height={630}
          priority
        />
        <h1>
          404 <span> Page Not Found </span>
        </h1>
      </div>
    </Container>
  );
};

export default NotFound;
