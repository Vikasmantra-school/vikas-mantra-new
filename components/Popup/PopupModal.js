import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import PopupImage from "../../public/assets/Popups/grade-11-mobile-popup.png";
import PopupImageDesktop from "../../public/assets/Popups/grade-11-desktop-popup.png";
import SecondPopupImage from "../../public/assets/Popups/second-popup-mobile.png";
import SecondPopupImageDesktop from "../../public/assets/Popups/second-popup-desktop.png";
import { useRouter } from "next/router";
import styles from "./style.module.css";

const PopupModal = () => {
  const router = useRouter();

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [triggerSecond, setTriggerSecond] = useState(false);

  const isExcluded = router.pathname.startsWith("/mambakkam-site");

  useEffect(() => {
    if (isExcluded) return;
    
    // Always show the first modal on mount or path change
    setShowFirst(true);
  }, [router.pathname, isExcluded]);

  const handleCloseFirst = () => {
    setShowFirst(false);
    // We set a trigger here instead of showing the modal immediately
    setTriggerSecond(true);
  };

  const handleOnExitedFirst = () => {
    // This runs AFTER the first modal animation finishes
    if (triggerSecond) {
      setTimeout(() => {
        setShowSecond(true);
        setTriggerSecond(false);
      }, 1000); // Your requested 1-second delay
    }
  };

  const handleCloseSecond = () => {
    setShowSecond(false);
  };

  const handleRedirect = () => {
    setShowFirst(false);
    router.push("/enquiry-form");
  };

  if (isExcluded) return null;

  return (
    <>
      <Modal
        show={showFirst}
        onHide={handleCloseFirst}
        onExited={handleOnExitedFirst} // Crucial for preventing scroll-lock glitches
        animation={true}
        dialogClassName={styles.customDialog}
        contentClassName={styles.customContent}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body onClick={handleRedirect} style={{ cursor: "pointer" }}>
          <div>
            <div className={styles.desktopImage}>
              <Image
                className={styles.deskimg}
                src={PopupImageDesktop}
                alt="popup-desktop"
                priority // Better for LCP
              />
            </div>
            <div className={styles.mobileImage}>
              <Image src={PopupImage} alt="popup-mobile" priority />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSecond}
        onHide={handleCloseSecond}
        animation={true}
        dialogClassName={styles.customDialog}
        contentClassName={styles.customContent}
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ cursor: "pointer" }}>
          <div className={styles.desktopImage}>
            <Image
              className={styles.deskimg}
              src={SecondPopupImageDesktop}
              alt="second-popup-desktop"
            />
          </div>
          <div className={styles.mobileImage}>
            <Image src={SecondPopupImage} alt="second-popup-mobile" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModal;