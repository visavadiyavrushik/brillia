"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
    { src: "/assets/images/gallery7.png", alt: "Gallery Image 7" },
    { src: "/assets/images/gallery8.png", alt: "Gallery Image 8" },
    { src: "/assets/images/gallery9.png", alt: "Gallery Image 9" },
  ];

  const batches = [images.slice(0, 3), images.slice(3, 6), images.slice(6, 9)];

  const controls = useAnimation();
  const ref = useRef([]);
  const [visibleBatches, setVisibleBatches] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBatches((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      ref.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <Container className={styles.homeGalleryContainer}>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
      >
        <p>We Believe, ICONICs are RARE & crafted BRILLIANTLY</p>
      </motion.div>

      <Row className={styles.homegallary}>
        {batches.map((batch, batchIndex) => (
          <React.Fragment key={batchIndex}>
            {batch.map((image, imageIndex) => (
              <Col
                key={imageIndex}
                xs={12}
                md={6}
                lg={4}
                ref={(el) => (ref.current[batchIndex] = el)}
              >
                <LightGallery
                  // onInit={() =>
                  //   console.log("lightGallery has been initialized")
                  // }
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                >
                  <motion.a
                    href={image.src}
                    variants={imageVariants}
                    initial="hidden"
                    animate={visibleBatches > batchIndex ? "visible" : "hidden"}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      height={327}
                      width={430}
                      className={styles.galleryImage}
                    />
                  </motion.a>
                </LightGallery>
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default HomeGallery;
