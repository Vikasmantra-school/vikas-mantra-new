import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Laboratory = () => {

    const pageTitle = 'Campus'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Laboratories</h2>

                    </div>

                </div>

            </section>


            <section className={'pt-5 whitebg position-relative ' + styles.vectorImg5 + ' ' + styles.vectorImg10 + ' ' + styles.sectionPdngBtm}>

                <div className='container position-relative'>

                    <div className='row align-items-center'>

                        <div className='col-md-5'>

                            <h3 className='ulineRed'>VIKAS MANTRA PUBLIC
                                SCHOOL Labs
                            </h3>

                            <p className='pt-5'>make learning come alive for our students. They serve as vehicles which
                                tie theory to practical application. Our labs are individually designed
                                based on related subject matter and equipped with the latest working
                                models, specimens, tools and experiments – all of which come together
                                to allow students to learn by application.
                            </p>

                        </div>

                        <div className='col-md-6 position-relative offset-md-1'>

                            <div>
                                <img src='/assets/campus/lab1.png' alt="image" className={styles.labImg1} />
                            </div>
                            
                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row align-items-center'}>

                        <div className={styles.order2 + ' col-md-6 offset-md-1 position-relative'}>

                            <img src='/assets/campus/lab2.png' alt="image" className={styles.labImg2} />

                        </div>

                        <div className={styles.order1 + ' col-md-5'}>

                            <h3 className='ulineRed'>Science Labs
                            </h3>

                            <p className='pt-5'>VIKAS MANTRA PUBLIC SCHOOL Labs include a Junior Science Lab is
                                complemented by customised Physics, Chemistry and Biology Labs
                                for the senior school. Science labs play an important role in
                                our objective of ensuring that students are ready for the real
                                world by the time they graduate from VIKAS MANTRA PUBLIC SCHOOL.
                                These labs offer practical exposure to essential everyday constructs
                                and provide a window for students to experience first-hand,
                                concepts that they learn in class.
                            </p>

                        </div>

                    </div>

                    <div className='row align-items-center'>

                        <div className='col-md-5'>

                            {/* <img src='/assets/vectors/Vector10.png' alt="image" className={styles.vectorImg10} /> */}

                            <h3 className='ulineRed'> Art Labs
                            </h3>

                            <p className='pt-5'>VIKAS MANTRA PUBLIC SCHOOL Labs also include Art Labs focus on experiential
                                learning and aim to instil a sense of creative expression in students through
                                pictorial and graphical representation. Our Art Labs are used as a vital tool
                                in enabling the visual and tactile learning experience.
                            </p>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <div>

                                <img src='/assets/campus/lab3.png' alt="image" className={styles.labImg3} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}


export default Laboratory;