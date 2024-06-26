"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/homeSlider.module.css";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "@vanyapr/react-image-magnifiers";

function HomeSlider() {
  return (
    <Container fluid className={styles.sliderContainer}>
      <Carousel fade controls>
        <Carousel.Item>
          <Image
            src="/assets/images/brelliaHome1.jpg"
            alt="logo"
            className={styles.sliderImage}
            width={1300}
            height={853}
          />

          {/* <GlassMagnifier
            imageSrc="/assets/images/brelliaHome1.jpg"
            imageAlt="Example"
            largeImageSrc="/assets/images/brelliaHome1.jpg" // Optional
            magnifierSize={250}
            // styles={{ zIndex: 1 }}
            className={styles.sliderImage}
            
          /> */}

          <Carousel.Caption className={styles.carouselCaption}>
            <h1>
              <span>BUILDING </span> THE FUTURE <br />
              WITH BRILLIA-nt IDEAS{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/assets/images/brilliaHome3.jpg"
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
      </Carousel>
    </Container>
  );
}

export default HomeSlider;
