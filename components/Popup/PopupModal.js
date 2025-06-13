import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import PopupImage from "../../public/assets/Popups/maambakkam-mobile-popup.png";
import PopupImageDesktop from "../../public/assets/Popups/maambakkam-desktop-popup.png";
// import PopupImageMobile from "../../public/assets/Popups/maambakkam-mobile-popup.png";
import SecondPopupImage from "../../public/assets/Popups/topper.jpg";
import SecondPopupImageDesktop from "../../public/assets/Popups/topper-desk.png";
import { useRouter } from "next/router";
import styles from "./style.module.css";

const PopupModal = () => {
  const router = useRouter();

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const handleCloseFirst = () => {
    setShowFirst(false);
    localStorage.setItem("Name", false);

    setTimeout(() => {
      setShowSecond(true);
    }, 8000);
  };
  const handleCloseSecond = () => {
    setShowSecond(false);
  };

  const handleRedirect = () => {
    router.push("/mambakkam");
  };

  useEffect(() => {
    const visited = sessionStorage.getItem("Name");
    if (!visited || visited === "false") {
      setShowFirst(true);
      sessionStorage.setItem("Name", "true");
    }
  }, []);
  return (
    <>
      <Modal
        show={showFirst}
        onHide={handleCloseFirst}
        animation={true}
        dialogClassName={styles.customDialog}
        contentClassName={styles.customContent}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body onClick={handleRedirect} style={{ cursor: "pointer" }}>
          <div>
            {/* Desktop Image */}
            <div className={styles.desktopImage}>
              <Image
                className={styles.deskimg}
                src={PopupImageDesktop}
                alt="popup-desktop"
              />
            </div>
            {/* Mobile Image */}
            <div className={styles.mobileImage}>
              <Image src={PopupImage} alt="popup-mobile" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSecond}
        onHide={handleCloseSecond}
        animation={true}
        dialogClassName={styles.customDialog}
        contentClassName={styles.customContent}>
        <Modal.Header closeButton />
        <Modal.Body style={{ cursor: "pointer" }}>
          {/* Desktop Image */}
          <div className={styles.desktopImage}>
            <Image
              className={styles.deskimg}
              src={SecondPopupImageDesktop}
              alt="popup-desktop"
            />
          </div>
          {/* Mobile Image */}
          <div className={styles.mobileImage}>
            <Image src={SecondPopupImage} alt="popup-mobile" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModal;
