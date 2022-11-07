import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const MessageFromChairMan = () => {

    const pageTitle ='About'

    return (

        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className={styles.blogRow1 + 'row py-5'}>

                        <div className='col-md-6'>

                            <h2>Message from Our Chairman</h2>

                        </div>

                    </div>

                </div>

            </section>


            <section className={styles.sectionContainer + ' whitebg position-relative ' + ' ' + styles.vectorImg2 + ' ' + styles.vectorImg7}>

                <div className='container'>

                    <div className='row py-5 align-items-center '>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>

                            {/* <img src='/assets/vectors/Vector3.png' alt="image" className={styles.vectorImg2} /> */}

                            <h3 className='ulineRed'>Dear stake holders,</h3>


                            <p className='pt-5'>Starting a school isn’t toughest job in today’s scenario, but
                                the biggest challenge is making it a successful one by providing
                                holistic education and helping students to build strong character,
                                excellent academic standards, develop intellectual curiosity,
                                build aesthetic qualities along with strong social, emotional
                                and survival  skills. According to me an ideal school should
                                aim to help a child to find the right path in life while providing
                                an excellent base for over all development. Beyond academics at
                                VMPS, we give ample opportunities to all our students equally
                                to explore themselves in sports, co-curricular and performing
                                art activities through experts from the respective fields.
                            </p>

                            <p>
                                At VMPS we  believe in working in consensus with all the stakeholders
                                i.e. parents, students and teachers  by providing a conducive teaching,
                                learning environment and a complete involvement of the parents.
                                We  firmly believe that the role of the teacher is not confined to the
                                subject matter delivered and tested in the answer scripts, rather to
                                work with the students to make it more application oriented for life
                                beyond school walls; hence teachers professional development is also
                                our major focus and area of work.
                            </p>

                            <p>
                                We look forward to all the  valuable suggestions incorporated into our system
                                with the changing time and scenario for the development of the school from the
                                parents and eminent educationists on  our advisory board. On behalf of the
                                School Management we are thankful to you for entrusting the education of
                                your children to us. We assure you that we will make all possible efforts
                                to come up to your expectations.  It is promise that the school will achieve
                                the higher goals set and make it a heaven for children!!
                            </p>

                            <p>Yours Sincerely,</p>

                            <h4>Dr. V. Shanmuga Prabu</h4>

                        </div>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative'>

                            <img src='/assets/banners/chairman.png' alt="image" className={styles.ChairmanImg} />

                            <img src='/assets/VMPS.png' alt="image" className={styles.vmpsImg} />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default MessageFromChairMan;