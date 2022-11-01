import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const Classrooms = () => {

    const pageTitle = 'Campus'

    return (
        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4 '>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Classrooms</h2>

                    </div>

                </div>

            </section>

            <section className={'greybg py-5 VectorDot position-relative ' + styles.vectorImg9 + ' ' + styles.vectorImg10  }>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            <h3>Spacious, vibrant, well-lit
                                and contemporary
                            </h3>

                            <hr className={styles.hrLine} />

                            <p className='pt-3'>are some of the words that describe a typical classroom at
                                VIKAS MANTRA PUBLIC SCHOOL. Classrooms are designed to enable the student to
                                maximise his/her individual learning while at school. A typical classroom at
                                VIKAS MANTRA PUBLIC SCHOOL accommodates up to 30 students. Each classroom is
                                air-conditioned and has student safe furniture with rounded edges to prevent
                                injury. The furniture design goes a step forward to ensure that the student
                                is comfortable and helps maintain correct posture at all times. Classrooms
                                are also equipped with smart board systems, allowing teachers and students
                                to present relevant content as per learning requirements.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/classroom.png' alt="image" className={styles.classroomImg} />

                        </div>

                        <div className='col-md-8'>

                            <p className='py-3'>Apart from aesthetics, classrooms are designed to allow students
                                to express their personalities and emotions. The layout and space planning is
                                grade-appropriate and leaves room to incorporate student work, mood boards,
                                bulletin boards, reading corners and other such elements. More than anything,
                                we envision the classroom to be a living, breathing organism that changes colour,
                                texture and character based on its students and the topic du jour.
                            </p>

                        </div>

                    </div>

                    <div className='row py-5'>

                        <div className='col-md-12'>

                            <h3>About our classrooms</h3>

                            <hr className={styles.hrLine} />

                        </div>

                        <div className={styles.pdngZero + ' col-md-3 py-4'}>

                            <ul>
                                <li>Large (575 sq ft), well-ventilated
                                    and naturally-lit
                                </li>
                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-3 py-4'}>

                            <ul>

                                <li>Air-conditioned classrooms.</li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-3 py-4'}>

                            <ul>

                                <li>Student safe furniture</li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-3 py-4'}>

                            <ul>

                                <li>Storage  space for
                                    every student</li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-3 py-4'}>

                            <ul>

                                <li>Racks, pegs and pigeon holes for
                                    students to organise activity material</li>

                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <ul>

                                <li>Wi-Fi-enabled</li>

                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <ul>

                                <li>Interactive boards</li>

                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <ul>

                                <li>Reading corners to promote
                                    the habit of reading</li>

                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <ul>

                                <li>Mini libraries\ within classrooms with
                                    appropriate reading material</li>

                            </ul>

                        </div>

                        <div className='col-md-3 position-relative'>

                            {/* <img src='/assets/vectors/Vector9.png' alt="image" className={styles.vectorImg9} /> */}

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Classrooms;