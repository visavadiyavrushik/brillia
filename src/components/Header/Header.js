"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/header.module.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles?.navbar}>
      <Container>
        <Nav.Link href="#home">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={167}
            height={56}
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className={styles.navItems}>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Legacy of Pravish
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Why BRILLIA ?
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Brochure
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Investor
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Client Portal
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              IGNITE
            </Nav.Link>
          </Nav>
          <Button className={styles.contactusBtn}>Contact us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
