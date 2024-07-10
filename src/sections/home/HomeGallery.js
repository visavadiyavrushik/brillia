"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import styles from "../../styles/homegallery.module.css";

const HomeGallery = () => {
  const images = [
    { src: "/assets/images/gallery1.png", alt: "Gallery Image 1" },
    { src: "/assets/images/gallery2.png", alt: "Gallery Image 2" },
    { src: "/assets/images/gallery3.png", alt: "Gallery Image 3" },

    { src: "/assets/images/gallery4.png", alt: "Gallery Image 4" },
    { src: "/assets/images/gallery5.png", alt: "Gallery Image 5" },
    { src: "/assets/images/gallery6.png", alt: "Gallery Image 6" },

    { src: "/assets/images/gallery7.png", alt: "Gallery Image 4" },
    { src: "/assets/images/gallery8.png", alt: "Gallery Image 5" },
    { src: "/assets/images/gallery9.png", alt: "Gallery Image 6" },
  ];

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <Container className={styles.homeGalleryContainer}>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        {" "}
        <p>We Believe, ICONICs are RARE & crafted BRILLIANTLY</p>
      </motion.div>

      <Row className={styles?.homegallary}>
        {images?.map((image, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <LightGallery
              onInit={onInit}
              th
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={327}
                  width={430}
                />
              </a>
            </LightGallery>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeGallery;
