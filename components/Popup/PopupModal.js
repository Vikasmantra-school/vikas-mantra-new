import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import PopupImageDesktop from '../../public/assets/Popups/maambakkam.desktop-popup.png';
import PopupImageMobile from '../../public/assets/Popups/maambakkam-mobile-popup.png';
import { useRouter } from 'next/router';

const PopupModal = () => {
    const router = useRouter();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        localStorage.setItem('Name', false);
    };

    const handleShow = () => {
        setShow(true);
        localStorage.setItem('Name', true);
    };

    const handleRedirect = () => {
        router.push('/mambakkam');
    };

    useEffect(() => {
        handleShow();
        localStorage.setItem('Name', show);
    }, []);

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true} dialogClassName={styles.customDialog}  contentClassName={styles.customContent}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body onClick={handleRedirect} style={{ cursor: 'pointer' }}>
                    <div>
                        {/* Desktop Image */}
                        <div className={styles.desktopImage}>
                            <Image src={PopupImageDesktop} alt="popup-desktop" />
                        </div>
                        {/* Mobile Image */}
                        <div className={styles.mobileImage}>
                            <Image src={PopupImageMobile} alt="popup-mobile" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PopupModal;
