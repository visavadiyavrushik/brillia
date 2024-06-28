import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/homeReviews.module.css";

const HomeVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <Container>
        <iframe
          className={styles.iframeVideo}
          // width="1321"
          // height="684"
          src="https://www.youtube-nocookie.com/embed/xyHG9bgeRyQ?si=nOqdKLTYdSojSe7H&amp;controls=0"
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Container>
    </div>
  );
};

export default HomeVideo;
