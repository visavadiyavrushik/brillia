// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import styles from "../../styles/homeReviews.module.css";

// const HomeReviews = () => {
//   return (
//     <Container className={styles.reviewsContainer}>
//       <Row className={styles.reviewsContent}>
//         <Col
//           xs={11}
//           md={{ span: 8, offset: 2 }}
//           className={styles.reviewsContentCol}
//         >
//           <div className={styles.quoteIcon}>
//             <p>
//               The interactions with the company&apos;s representatives, led by
//               Engineer Nizar Saba, were cordial and respectful. Throughout all
//               stages of the project, Nizar provided diligent support and
//               remained accessible even after the renovation was completed. The
//               work was executed proficiently and reliably, ultimately fulfilling
//               our expectations while adhering to deadlines.
//             </p>

//             <div className={styles.reviewerName}>
//               <p>Vikram Patel</p>
//               <span>Ahmedabad,INDIA </span>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HomeReviews;
"use client";
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import styles from "../../styles/homeReviews.module.css";

const ReviewComponent = () => (
  <Container className={styles.reviewsContainer}>
    <div className={styles.reviewsContent} style={{ padding: "0 5px" }}>
      <div className={styles.reviewsContentCol}>
        <Carousel controls={false}>
          <Carousel.Item>
            <div className={styles.quoteIcon}>
              <p>
                The interactions with the company&apos;s representatives, led by
                Engineer Nizar Saba, were cordial and respectful. Throughout all
                stages of the project, Nizar provided diligent support and
                remained accessible even after the renovation was completed. The
                work was executed proficiently and reliably, ultimately
                fulfilling our expectations while adhering to deadlines.
              </p>

              <div className={styles.reviewerName}>
                <p>Vikram Patel</p>
                <span>Ahmedabad, INDIA</span>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={styles.quoteIcon}>
              <p>
                The interactions with the company&apos;s representatives, led by
                Engineer Nizar Saba, were cordial and respectful. Throughout all
                stages of the project, Nizar provided diligent support and
                remained accessible even after the renovation was completed. The
                work was executed proficiently and reliably, ultimately
                fulfilling our expectations while adhering to deadlines.
              </p>

              <div className={styles.reviewerName}>
                <p>Vikram Patel</p>
                <span>Ahmedabad, INDIA</span>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>{" "}
      </div>
    </div>
  </Container>
);

export default ReviewComponent;
