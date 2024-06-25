import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/homeSlider.module.css";
import Image from "next/image";

const OurValues = () => {
  return (
    <>
      <Container>
        <div className={styles.ourValues}>
          <p>/ OUR VALUES</p>
          <h1>OPENNESS ✦ INTEGRITY ✦ TRANSPARENCY</h1>
        </div>
      </Container>
      <Container>
        <section className={styles.iconicApprochSection}>
          <div className={styles.iconicApproch}>
            <Image
              src="/assets/images/iconic.jpg"
              alt="image"
              style={{ objectFit: "cover" }}
              width={1300}
              height={658}
            />
            <h1>An ICONIC Approach</h1>
          </div>
        </section>
      </Container>
    </>
  );
};

export default OurValues;
