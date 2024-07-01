"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import styles from "../../styles/homeSlider.module.css";
import { GlassMagnifier } from "@vanyapr/react-image-magnifiers";

function HomeSlider() {
  return (
    <Container fluid className={styles.sliderContainer}>
      <Carousel fade controls>
        <Carousel.Item>
          {/* <Image
            src="/assets/images/brelliaHome1.jpg"
            alt="logo"
            className={styles.sliderImage}
            width={1300}
            height={853}
          /> */}

          <GlassMagnifier
            imageSrc="/assets/images/brilliaHome1Gray.jpg"
            imageAlt="Example"
            largeImageSrc="/assets/images/brelliaHome1.jpg" // Optional
            magnifierSize={250}
            // styles={{ zIndex: 1 }}
            className={styles.sliderImage}
          />

          <Carousel.Caption className={styles.carouselCaption}>
            <motion.h1
              initial={{ x: 120, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                durationIn: 0.64,
                easeIn: [0.43, 0.13, 0.23, 0.96],
              }}
              exit={{
                x: 120,
                opacity: 0,
              }}
              transition={{
                durationIn: 0.64,
                easeIn: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <span>BUILDING </span> THE FUTURE <br />
              WITH BRILLIA-nt IDEAS{" "}
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <Image
            src="/assets/images/brilliaHome3.jpg"
            alt="logo"
            className={styles.sliderImage}
            width={1300}
            height={853}
          /> */}

          <GlassMagnifier
            imageSrc="/assets/images/brilliaHome3Gray.jpg"
            imageAlt="Example"
            largeImageSrc="/assets/images/brilliaHome3.jpg"
            magnifierSize={250}
            // styles={{ zIndex: 1 }}
            className={styles.sliderImage}
          />

          <Carousel.Caption className={styles.carouselCaption}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>BUILDING </span> THE FUTURE <br />
              WITH BRILLIA-nt IDEAS{" "}
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HomeSlider;
