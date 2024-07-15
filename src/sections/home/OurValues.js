"use client";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/homeSlider.module.css";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const OurValues = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const textVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <Container>
        <div className={styles.ourValues} ref={ref1}>
          {/* <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          > */}
          <p>
            <Typewriter
              words={["/ OUR VALUES"]}
              loop={1}
              cursor={false}
              // cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <h1>
            <motion.span
              variants={wordVariants}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className={styles.word}
            >
              OPENNESS ✦{" "}
            </motion.span>{" "}
            <motion.span
              variants={wordVariants}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className={styles.word}
            >
              INTEGRITY ✦{" "}
            </motion.span>{" "}
            <motion.span
              variants={wordVariants}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className={styles.word}
            >
              TRANSPARENCY
            </motion.span>
          </h1>
          {/* </motion.div> */}
        </div>
      </Container>
      <Container>
        <section className={styles.iconicApprochSection}>
          <div className={styles.iconicApproch} ref={ref2}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
            >
              <Image
                src="/assets/images/iconic.jpg"
                alt="image"
                style={{ objectFit: "cover" }}
                width={1300}
                height={658}
              />
              <motion.h1
                variants={wordVariants}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
              >
                An ICONIC Approach
              </motion.h1>
            </motion.div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default OurValues;
