"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/homeSlider.module.css";

function HomeSlider() {
  return (
    <Container fluid className={styles.sliderContainer}>
      <Carousel fade>
        <Carousel.Item>
          <Image
            src="/assets/images/brelliaHome1.jpg"
            alt="logo"
            className={styles.sliderImage}
            width={1300}
            height={853}
          />

          <Carousel.Caption className={styles.carouselCaption}>
            <h1>
              <span>BUILDING </span> THE FUTURE <br />
              WITH BRILLIA-nt IDEAS{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <Image
            src="/assets/images/brelliaHome1.jpg"
            alt="logo"
            className={styles.sliderImage}
            width={1300}
            height={853}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </Container>
  );
}

export default HomeSlider;
