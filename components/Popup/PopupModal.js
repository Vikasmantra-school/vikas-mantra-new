import React, { useState, useEffect } from 'react';
import styles from './style.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import PopupImage from '../../public/assets/Popups/Vikas-Social-Ad-2.png'

const PopupModal = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const setTimeoutFunc = () => {
    //     setTimeout(() => {
    //         handleShow()
    //     }, 2000)
    // }

    // useEffect(() => {
    //     setTimeoutFunc()
    // }), []

    useEffect(() => {
        setTimeout(() => {
            handleShow(true)
        }, 2000)
    }, [])





    return (


        <>
            <Modal show={show} onHide={handleClose} animation={true}>

                <Modal.Body >
                    <div>
                        <Image src={PopupImage} alt='popup' className={styles.sectionOut} />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>

            {/* <section className={styles.section}>
                <div className='container'>
                    <div className='col-md-6'>
                        <Image src={PopupImage} alt='popup' className={styles.sectionOut} />
                    </div>
                </div>
            </section> */}


        </>


    );
}

export default PopupModal
