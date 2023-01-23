import styles from './style.module.css'
import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'

const MessageFromChairMan = () => {

    const pageTitle = 'About'

    return (

        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className={'row py-5'}>

                        <div className='col-md-6'>

                            <div className='AnimeStarts'>
                                <h2 className='AnimeElement'>Message from Our Chairman</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className={styles.sectionContainer + ' whitebg position-relative ' + ' ' + styles.vectorImg2 + ' ' + styles.vectorImg7}>

                <div className='container'>

                    <div className='row py-5 '>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>

                            <div className={styles.pdngRight}>

                                <div className='AnimeStarts'>
                                    <h3 className='ulineRed AnimeElement'>Dear stake holders,</h3>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='pt-5 AnimeElement'>Starting a school isn’t toughest job in today’s scenario, but
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
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>
                                        At VMPS we  believe in working in consensus with all the stakeholders
                                        i.e. parents, students and teachers  by providing a conducive teaching,
                                        learning environment and a complete involvement of the parents.
                                        We  firmly believe that the role of the teacher is not confined to the
                                        subject matter delivered and tested in the answer scripts, rather to
                                        work with the students to make it more application oriented for life
                                        beyond school walls; hence teachers professional development is also
                                        our major focus and area of work.
                                    </p>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>We look forward to all the  valuable suggestions incorporated into our system with the changing time and scenario for the development of the school from the parents and eminent educationists on  our advisory board. On behalf of the School Management we are thankful to you for entrusting the education of your children to us. We assure you that we will make all possible efforts to come up to your expectations.  It is promise that the school will achieve the higher goals set and make it a heaven for children!!</p>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>Yours Sincerely,</p>
                                </div>

                                <div className='AnimeStarts'>
                                    <h4 className='AnimeElement'>Dr. V. Shanmuga Prabu</h4>
                                </div>

                            </div>

                        </div>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative  '>

                            <div className={'imgBgColor pastelBlue5 imgUp AnimeStarts ' + styles.ImgMargin}>

                                <img src='/assets/banners/chairman.png' alt="image" className={styles.ChairmanImg + ' AnimeElement'} />

                            </div>

                            <img src='/assets/VMPS.png' alt="image" className={styles.vmpsImg} />

                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default MessageFromChairMan;