"use client";
import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import styles from "../../styles/homeReviews.module.css";
import Image from "next/image";

const HomeVideo = () => {
  const [first, setfirst] = useState(false);
  return (
    <div className={styles.videoContainer}>
      <Container>
        {!first ? (
          <div className={styles.imageDiv}>
            <Image
              src="/assets/images/video.png"
              alt="video"
              width={1321}
              height={684}
              style={{ width: "100%", objectFit: "cover" }}
            />

            <Image
              onClick={() => setfirst(true)}
              className={styles.playIcon}
              src="/assets/svg/playicon.png"
              alt="video"
              width={75}
              height={75}
            />
          </div>
        ) : (
          ""
        )}

        <Modal
          show={first}
          fullscreen
          className={styles.iFrameModal}
          onHide={() => setfirst(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-modal-sizes-title-lg"
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
      </Container>
    </div>
  );
};

export default HomeVideo;
