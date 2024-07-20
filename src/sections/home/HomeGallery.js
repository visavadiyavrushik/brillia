"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import styles from "../../styles/homegallery.module.css";

const images = [
  { src: "/assets/images/gallery1.png", alt: "Gallery Image 1" },
  { src: "/assets/images/gallery2.png", alt: "Gallery Image 2" },
  { src: "/assets/images/gallery3.png", alt: "Gallery Image 3" },
  { src: "/assets/images/gallery4.png", alt: "Gallery Image 4" },
  { src: "/assets/images/gallery5.png", alt: "Gallery Image 5" },
  { src: "/assets/images/gallery6.png", alt: "Gallery Image 6" },
  { src: "/assets/images/gallery7.png", alt: "Gallery Image 7" },
  { src: "/assets/images/gallery8.png", alt: "Gallery Image 8" },
  { src: "/assets/images/gallery9.png", alt: "Gallery Image 9" },
];

const imageVariants = {
  hidden: { opacity: 0.2, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const GalleryImage = ({ src, alt }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <Col xs={12} md={6} lg={4} ref={ref}>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <motion.a
          href={src}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src={src}
            alt={alt}
            height={327}
            width={430}
            className={styles.galleryImage}
          />
        </motion.a>
      </LightGallery>
    </Col>
  );
};

const HomeGallery = () => {
  const batches = [images.slice(0, 3), images.slice(3, 6), images.slice(6, 9)];

  return (
    <Container className={styles.homeGalleryContainer}>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
      >
        <p>We Believe, ICONICs are RARE & crafted BRILLIANTLY</p>
      </motion.div>

      <Row className={styles.homegallary}>
        {batches.map((batch, batchIndex) => (
          <React.Fragment key={batchIndex}>
            {batch.map((image, imageIndex) => (
              <GalleryImage key={imageIndex} src={image.src} alt={image.alt} />
            ))}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default HomeGallery;
