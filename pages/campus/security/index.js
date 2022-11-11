import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Security = () => {

    const pageTitle = 'Campus'

    return (
        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Security</h2>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' whitebg position-relative ' + ' ' + styles.vectorImg10 + ' ' + styles.vectorImg11}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            {/* <img src='/assets/vectors/Vector10.png' alt="image" className={styles.vectorImg10} /> */}

                            <h3 className='ulineRed'>Security at VIKAS MANTRA
                                PUBLIC SCHOOL</h3>

                            <p className='pt-5'>is maintained through a combination of trained and
                                well-qualified security personnel who man various entry and exit points.
                                Strategically located CCTV cameras at various points in the campus
                                monitor and keep track of movement within the premises. Security measures
                                such as fire alarms, fire extinguishers, key card access, etc. are
                                installed as per government norms and follow best practice in security
                                management. Entry of non-authorised personnel on the campus is strictly
                                prohibited.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <div className='imgBgColor pastelRed2'>

                                <img src='/assets/campus/security.png' alt="image" className={styles.securityImg} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Security;