import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Transportation = () => {

    const pageTitle = 'Campus'

    return (

        <>


            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Transportation</h2>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' greybg position-relative ' + ' ' + styles.vectorImg11}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            <h3 className='ulineRed'>VIKAS MANTRA
                                PUBLIC SCHOOL   </h3>

                            <p className='pt-5'>has access to a fleet of buses to accommodate student and
                                staff transportation to and from the school. School bus movement can be
                                tracked via SMS allowing parents to predict arrival and departure times
                                accurately. Bus fees for students are payable on term basis and are based
                                on distances between the school and the student’s pick-up/drop-off point.
                            </p>

                            {/* <img src='/assets/vectors/Vector11.png' alt="image" className={styles.vectorImg11} /> */}

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/school-bus.png' alt="image" className={styles.schlBusImg} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Transportation;