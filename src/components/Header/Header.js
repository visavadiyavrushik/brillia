// "use client";
// import Image from "next/image";
// import { Button } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import styles from "../../styles/header.module.css";
// import Link from "next/link";
// import { motion } from "framer-motion";

// function Header() {
//   return (
//     <Navbar collapseOnSelect expand="xl" className={styles?.navbar}>
//       <Container>
//         <Nav.Link href="/">
//           <motion.img
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             src="/assets/logo/logo.png"
//             alt="Logo"
//             width={167}
//             height={56}
//           ></motion.img>
//         </Nav.Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className="justify-content-end"
//         >
//           <Nav className={styles.navItems}>
//             <Nav.Link eventKey={2} href="/">
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Home
//               </motion.span>
//             </Nav.Link>
//             <Nav.Link eventKey={2} href="#">
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Legacy of Pravish
//               </motion.span>
//             </Nav.Link>
//             <Nav.Link eventKey={2} href="#">
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Why BRILLIA ?
//               </motion.span>
//             </Nav.Link>

//             <Nav.Link
//               href="/assets/BrilliaBrochure.pdf"
//               target="_blank"
//               legacyBehavior
//             >
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Brochure
//               </motion.span>
//             </Nav.Link>
//           </Nav>
//           <Link href="/contact-us" passHref>
//             <Button className={styles.contactusBtn}>
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Contact us
//               </motion.span>
//             </Button>
//           </Link>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Header() {
  return (
    <Navbar collapseOnSelect expand="xl" className={styles?.navbar}>
      <Container>
        <Nav.Link href="/">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <Nav className={styles.navItems}>
              <Nav.Link eventKey={2} href="/">
                <motion.span variants={navVariants}>Home</motion.span>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <motion.span variants={navVariants}>
                  Legacy of Pravish
                </motion.span>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <motion.span variants={navVariants}>Why BRILLIA ?</motion.span>
              </Nav.Link>
              <Nav.Link
                href="/assets/BrilliaBrochure.pdf"
                target="_blank"
                legacyBehavior
              >
                <motion.span variants={navVariants}>Brochure</motion.span>
              </Nav.Link>

              <Link href="/contact-us" passHref>
                <Button className={styles.contactusBtn}>
                  {/* <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  > */}
                  Contact us
                  {/* </motion.span> */}
                </Button>
              </Link>
            </Nav>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
