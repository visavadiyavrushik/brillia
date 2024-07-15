"use client";
import React, { useRef } from "react";
import { Container, Carousel } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/homeReviews.module.css";

const ReviewComponent = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Container className={styles.reviewsContainer}>
      <div className={styles.reviewsContent} style={{ padding: "0 5px" }}>
        <div className={styles.reviewsContentCol}>
          <Carousel controls={false}>
            <Carousel.Item>
              <motion.div
                className={styles.quoteIcon}
                ref={ref1}
                variants={itemVariants}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
              >
                <p>
                  The interactions with the company&apos;s representatives, led
                  by Engineer Nizar Saba, were cordial and respectful.
                  Throughout all stages of the project, Nizar provided diligent
                  support and remained accessible even after the renovation was
                  completed. The work was executed proficiently and reliably,
                  ultimately fulfilling our expectations while adhering to
                  deadlines.
                </p>

                <div className={styles.reviewerName}>
                  <p>Vikram Patel</p>
                  <span>Ahmedabad, INDIA</span>
                </div>
              </motion.div>
            </Carousel.Item>

            <Carousel.Item>
              <motion.div
                className={styles.quoteIcon}
                ref={ref2}
                variants={itemVariants}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
              >
                <p>
                  The interactions with the company&apos;s representatives, led
                  by Engineer Nizar Saba, were cordial and respectful.
                  Throughout all stages of the project, Nizar provided diligent
                  support and remained accessible even after the renovation was
                  completed. The work was executed proficiently and reliably,
                  ultimately fulfilling our expectations while adhering to
                  deadlines.
                </p>

                <div className={styles.reviewerName}>
                  <p>Vikram Patel</p>
                  <span>Ahmedabad, INDIA</span>
                </div>
              </motion.div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default ReviewComponent;
