import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Healthcare = () => {

    const pageTitle = 'Campus'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Healthcare</h2>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' whitebg position-relative ' + ' ' + styles.vectorImg12 + ' ' + styles.vectorImg10}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            {/* <img src='/assets/vectors/Vector12.png' alt="image" className={styles.vectorImg12} /> */}

                            <h3 className='ulineRed'>Security at VIKAS MANTRA
                                PUBLIC SCHOOL   </h3>

                            <p className='pt-5'>The good health of our students, faculty and staff is
                                of the utmost importance to us. To ensure this, VIKAS MANTRA PUBLIC SCHOOL
                                has set up a dedicated, fully-functional healthcare centre staffed with a
                                qualified nurse. The nurse is present during school hours and attends to
                                day to day ailments, conducts regular health check-ups and holds workshops
                                on hygiene, sanitation and medical safety. In addition, there is also a
                                provision for a doctor on call, should the need arise for a doctor to be
                                present on campus. For emergencies and situations that are beyond the
                                scope of the healthcare centre, we have tied up with a leading hospital
                                located within 15 minutes from the school campus. VIKAS MANTRA PUBLIC
                                SCHOOL also has access to ambulance services from nearby hospitals for
                                any medical emergencies.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/healthcare.png' alt="image" className={styles.securityImg} />

                        </div>

                        <div className='row pt-5'>

                            <div className='col-md-5 position-relative'>

                                <h3 className='ulineRed'>Our healthcare centre
                                    infrastructure includes:</h3>

                                <ul className='pt-5'>

                                    <li className='pt-3'> First aid kits, basic medicines & medical supplies</li>

                                    <li className='pt-3'>Full-time qualified nurse</li>

                                </ul>

                                {/* <img src='/assets/vectors/Vector10.png' alt="image" className={styles.vectorImg10} /> */}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Healthcare;