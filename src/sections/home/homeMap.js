import React from "react";
import { Container } from "react-bootstrap";

const HomeMap = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.272169444979!2d72.53590947580336!3d23.123724879103026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830017da207f%3A0x2054c696690c996e!2sBRILLIA!5e0!3m2!1sen!2sin!4v1719409530685!5m2!1sen!2sin"
        width="100%"
        height="450"
        className="mapIframe"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default HomeMap;
