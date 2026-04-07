import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./style.module.css";

import PopupImage from "../../public/assets/Popups/grade-11-mobile-1.png";
import PopupImageDesktop from "../../public/assets/Popups/grade-11-desktop.png";
import { useCampus } from "../../hooks/useCampus";

const PopupSingleModal = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const { campus } = useCampus();

  // const isExcluded = campus !== null;
  const isHomePage = router.pathname === "/";
const isExcluded = campus !== null || !isHomePage;

  useEffect(() => {
    if (isExcluded) return;

    setShow(true);
  }, [campus]);
  if (isExcluded) return null;

  const handleClose = () => setShow(false);

  const handleRedirect = () => {
    setShow(false);
    router.push("/enquiry-form");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation
      dialogClassName={styles.customDialog}
      contentClassName={styles.customContent}>
      <Modal.Header closeButton />

      <Modal.Body onClick={handleRedirect} className={styles.popupClickable}>
        <div>
          {/* Desktop */}
          <div className={styles.desktopImage}>
            <Image
              className={styles.deskimg}
              src={PopupImageDesktop}
              alt="popup-desktop"
            />
          </div>

          {/* Mobile */}
          <div className={styles.mobileImage}>
            <Image src={PopupImage} alt="popup-mobile" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopupSingleModal;
