import React, { useState, useEffect } from 'react';
import styles from './style.module.css'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import PopupImage from '../../public/assets/Popups/Vikas-Social-Ad-2.png'

const PopupModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        handleShow()
        localStorage.setItem('Name', show);

    }, [show])

    return (


        <>
            <Modal show={show} onHide={handleClose} animation={true}>

                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body >
                    <div>
                        <Image src={PopupImage} alt='popup' className={styles.sectionOut} />
                    </div>
                </Modal.Body>

            </Modal>


        </>


    );
}

export default PopupModal
