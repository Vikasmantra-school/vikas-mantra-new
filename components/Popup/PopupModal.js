import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import PopupImageDesktop from '../../public/assets/Popups/mindfull.jpg';
import PopupImageMobile from '../../public/assets/Popups/maambakkam-mobile-popup.png';
import { useRouter } from 'next/router';
import styles from './style.module.css';

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
                            <Image className={styles.deskimg} src={PopupImageDesktop} alt="popup-desktop" />
                        </div>
                        {/* Mobile Image */}
                        <div className={styles.mobileImage} >
                            <Image src={PopupImageDesktop} alt="popup-mobile" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PopupModal;
