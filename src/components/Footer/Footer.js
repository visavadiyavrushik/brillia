import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              {" "}
              <Image
                className={styles.logo}
                src="/assets/logo/logo.png"
                alt="Logo"
                width={167}
                height={56}
              />
              <p>
                Redefining Luxury in Ahmedabad. Discover exquisite apartments
                and commercial spaces designed to elevate your lifestyle.
              </p>
            </Col>
            <Col xs={12} md={{ span: 3, offset: 1 }}>
              <div className={styles.links}>
                <p>
                  <Link href="#">About Basil Skyline </Link>
                </p>
                <p>
                  <Link href="#">The Empiirean</Link>{" "}
                </p>
                <p>
                  <Link href="#">Vienza</Link>
                </p>
                <p>
                  <Link href="#">Basil Skyline </Link>
                </p>
                <p>
                  <Link href="#">Ignite By Pravish </Link>
                </p>
              </div>
            </Col>
            <Col xs={12} md={{ span: 4, offset: 1 }}>
              <div className={styles.mediaInfo}>
                <Image
                  src="/assets/svg/location.svg"
                  alt=""
                  width={15}
                  height={15}
                />

                <p>
                  Pravish Office, Opp Chharodi Lake, S.G. Highway,
                  Ahmedabad-382481
                </p>
              </div>

              <div className={styles.mediaInfo}>
                <Image
                  src="/assets/svg/phone.svg"
                  alt=""
                  width={15}
                  height={15}
                />

                <p>+91 787 488 3311</p>
              </div>
              <div className={styles.mediaInfo}>
                <Image
                  src="/assets/svg/email.svg"
                  alt=""
                  width={15}
                  height={15}
                />

                <p>info@pravishgroup.com</p>
              </div>

              <div className={styles.socialIcons}>
                <a href="#">
                  <Image
                    src="/assets/svg/x.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/svg/youtube.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/svg/instagram.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/svg/facebook.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/svg/whatsapp.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <footer className={styles.bottomFoother}>
        <Container>
          <p>Copyright © 2024 Pravish Group, All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
