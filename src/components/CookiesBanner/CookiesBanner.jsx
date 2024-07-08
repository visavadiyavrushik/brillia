"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/cookieBanner.module.css";
import { Container } from "react-bootstrap";

const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.bannerStyle}>
      <Container className={styles.container}>
        <p>
          We use cookies to provide you the best experience on our website. By
          continuing to use our site, we will assume you are happy with it.
        </p>
        <button onClick={acceptCookies}>Got it</button>
      </Container>
    </div>
  );
};

export default CookiesBanner;
