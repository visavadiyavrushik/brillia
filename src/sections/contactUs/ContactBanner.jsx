"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/contact-us/contactus.module.css";

const ContactBanner = () => {
  const bannerRef = useRef(null);
  const inView = useInView(bannerRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <Container fluid className={styles.ContactImageContainer}>
      <motion.div
        ref={bannerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={styles.ContactImageDiv}
      >
        <Image
          className={styles.ContactImage}
          alt="image"
          src="/assets/images/contact.png"
          width={1328}
          height={630}
          priority
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact <span> us </span>
        </motion.h1>
      </motion.div>
    </Container>
  );
};

export default ContactBanner;
