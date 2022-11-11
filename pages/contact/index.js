import styles from './style.module.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const Contact = () => {
    const pageTitle = 'Contact'

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-5 '>
                <div className='container position-relative'>
                    <div className='row py-5 dot-vector-before red-dot'>
                        <div className='col-sm-8 col-md-6'>
                            <h2 className={styles.headingPdng}>Contact</h2>
                        </div>
                    </div>
                </div>

                <div className={'pastelGreen2 ' + styles.contactBgcolor }>

                    <img src='assets/campus/school-building3.png' alt='image' className={styles.schlBusImg + ' ' + ' img-fluid'} />

                </div>

            </section>

            <section className={styles.sectionPdng + ' whitebg position-relative ' + ' ' + styles.vectorImg13}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 position-relative'></div>

                        <div className='col-md-7 position-relative'></div>
                    </div>
                </div>
            </section>

            <section className={' whitebg pb60 position-relative ' + ' ' + styles.vectorImg10}>
                <div className='container'>
                    <div className={styles.rowPdng + ' row text-center'}>



                        <div className={'col-md-4 ' + ' ' + styles.mobColPdng}>

                            <img src=' /assets/icons/mail.png' alt='image' className={styles.iconsImg} />

                            <div className={styles.paraAlign}>

                                <h4 className='py-4 m-0'>Postal address</h4>

                                <p className='m-0'>
                                    S.No:168,168/3,
                                </p>
                                <p className='m-0'>
                                    Off Mahindra World City,
                                </p>
                                <p className='m-0'>
                                    Anjur - 603204, Chengalpattu
                                </p>
                            </div>
                        </div>

                        <div className={'col-md-4' + ' ' + styles.mobColPdng}>

                            <img src=' /assets/icons/call.png' alt='image' className={styles.iconsImg} />

                            <div className={styles.paraAlign}>

                                <h4 className='py-4'>Phone & Email</h4>
                                <p className='m-0'>info@vikasmantra.org</p>
                                <p className='m-0'>
                                    <a href='tel:+91 - 7092 450 450'>+91 - 7092 450 450</a>
                                </p>
                                <p className='m-0'>
                                    <a href='tel:+91 - 8148 143 834'>+91 - 8148 143 834</a>
                                </p>
                            </div>
                        </div>

                        <div className={'col-md-4 position-relative ' + ' ' + styles.mobColPdng}>

                            <img src='/assets/icons/time.png' alt='image' className={styles.iconsImg} />

                            <div className={styles.paraAlign}>

                                <h4 className='py-4'>Office hours</h4>
                                <p className='m-0'>Monday - Friday</p>
                                <p className='mb-3'> 9.00 am - 4.00 pm</p>
                                <p className='m-0'> Saturday</p>
                                <p className='m-0'> 9.00 am - 1.00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact