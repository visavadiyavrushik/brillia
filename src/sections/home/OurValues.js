"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "../../styles/homeSlider.module.css";
import Image from "next/image";

const OurValues = () => {
  return (
    <>
      <Container>
        <div className={styles.ourValues}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p>/ OUR VALUES</p>
            <h1>OPENNESS ✦ INTEGRITY ✦ TRANSPARENCY</h1>
          </motion.div>
        </div>
      </Container>
      <Container>
        <section className={styles.iconicApprochSection}>
          <div className={styles.iconicApproch}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/assets/images/iconic.jpg"
                alt="image"
                style={{ objectFit: "cover" }}
                width={1300}
                height={658}
              />
              <h1>An ICONIC Approach</h1>
            </motion.div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default OurValues;
