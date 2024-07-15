"use client";
import React, { useState, useRef } from "react";
import { Container, Modal } from "react-bootstrap";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/homeReviews.module.css";

const HomeVideo = () => {
  const [video, setVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className={styles.videoContainer}>
      <Container>
        <motion.div
          ref={ref}
          className={styles.imageDiv}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/images/video.png"
            alt="video"
            width={1321}
            height={684}
            style={{ width: "100%", objectFit: "cover" }}
          />

          {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> */}
          <Image
            onClick={() => setVideo(true)}
            className={styles.playIcon}
            src="/assets/svg/playicon.png"
            alt="video"
            width={75}
            height={75}
          />
          {/* </motion.div> */}
        </motion.div>

        <AnimatePresence>
          {video && (
            <Modal
              show={video}
              fullscreen
              className={styles.iFrameModal}
              onHide={() => setVideo(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-modal-sizes-title-lg"
              as={motion.div}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <iframe
                  className={styles.iframeVideo}
                  src="https://www.youtube-nocookie.com/embed/xyHG9bgeRyQ?autoplay=1&controls=1"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Modal.Body>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default HomeVideo;
