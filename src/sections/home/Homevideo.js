import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

const HomeVideo = () => {
  return (
    <div style={{ padding: "92px 0" }}>
      <Container>
        <Image
          src="/assets/images/video.png"
          alt="video"
          width={1321}
          height={684}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Container>
    </div>
  );
};

export default HomeVideo;
