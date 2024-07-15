"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/homeSlider.module.css";
import { GlassMagnifier } from "@vanyapr/react-image-magnifiers";

function HomeSlider() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const textVariants1 = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.64, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const textVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Container fluid className={styles.sliderContainer}>
      <Carousel fade controls>
        <Carousel.Item>
          <GlassMagnifier
            imageSrc="/assets/images/brilliaHome1Gray.jpg"
            imageAlt="Example"
            largeImageSrc="/assets/images/brelliaHome1.jpg" // Optional
            magnifierSize={250}
            className={styles.sliderImage}
          />

          <Carousel.Caption className={styles.carouselCaption}>
            <motion.h1
              ref={ref1}
              variants={textVariants1}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
            >
              <span>BUILDING </span> THE FUTURE <br />
              WITH BRILLIA-nt IDEAS
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <GlassMagnifier
            imageSrc="/assets/images/brilliaHome3Gray.jpg"
            imageAlt="Example"
            largeImageSrc="/assets/images/brilliaHome3.jpg"
            magnifierSize={250}
            className={styles.sliderImage}
          />

          <Carousel.Caption className={styles.carouselCaption}>
            <motion.h1
              ref={ref2}
              variants={textVariants2}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
            >
              <span>BUILDING </span> THE FUTURE <br />
              WITH BRILLIA-nt IDEAS
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HomeSlider;
