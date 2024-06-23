import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
  return (
    <Container className={styles.homeGalleryContainer}>
      <p>We Believe, ICONICs are RARE & crafted BRILLIANTLY</p>
      <Row className={styles?.homegallary}>
        {images?.map((image, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Image src={image.src} alt={image.alt} height={327} width={430} />
          </Col>
        ))}
      </Row>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918162923!2d72.4149336068423!3d23.02015808814217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719141436374!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, filter: "grayscale(1)" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </Container>
  );
};

export default HomeGallery;
