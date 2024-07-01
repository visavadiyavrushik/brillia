import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/contact-us/contactus.module.css";

const ContactBanner = () => {
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
          Contact <span> us </span>
        </h1>
      </div>
    </Container>
  );
};

export default ContactBanner;
