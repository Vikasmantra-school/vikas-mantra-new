"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      title="Scroll to Top"
      className={`${styles.scrollToTop} ${isVisible ? styles.show : ""}`}
      onClick={scrollToTop}>
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 5.83333L2.91667 15.4167L0 12.5L12.5 0L25 12.5L22.0833 15.4167L12.5 5.83333Z" fill="white"/>
</svg>

    </button>
  );
}
