"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SlideIn.module.css";

export default function SlideIn({ children, direction = "left", once = true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${styles.animateSlide} ${
        isVisible ? (direction === "left" ? styles.slideInLeft : styles.slideInRight) : ""
      }`}
    >
      {children}
    </div>
  );
}
