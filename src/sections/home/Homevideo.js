import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/homeReviews.module.css";

const HomeVideo = () => {
  return (
    <div style={{ padding: "92px 0" }}>
      <Container>
        <iframe
          className={styles.iframeVideo}
          // width="1321"
          // height="684"
          src="https://www.youtube-nocookie.com/embed/xyHG9bgeRyQ?si=nOqdKLTYdSojSe7H&amp;controls=0"
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Container>
    </div>
  );
};

export default HomeVideo;
