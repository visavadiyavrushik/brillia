import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/homeSlider.module.css";
import Image from "next/image";

export const OurValues = () => {
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
              //   style={{ objectFit: "contain" }}
              width={1440}
              height={705}
            />
            <h1>An ICONIC Approach</h1>
          </div>
        </section>
      </Container>
    </>
  );
};
