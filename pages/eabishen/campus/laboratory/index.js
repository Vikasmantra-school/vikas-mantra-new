import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Laboratory = () => {

    const pageTitle = 'Campus'

    return (

        <>


            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>Laboratories</h2>
                        </div>

                    </div>

                </div>

            </section>


            <section className={' pt-5 whitebg position-relative ' + styles.vectorImg5 + ' ' + styles.vectorImg10 + ' ' + styles.sectionPdngBtm}>

                <div className=' container position-relative'>

                    <div className='row align-items-center'>

                        <div className='col-md-6'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Physics Lab
                                </h3>
                            </div>


                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'> Explore our state-of-the-art physics lab, where students engage in
                                    hands-on experiments, discover the laws of the universe, and develop critical scientific skills.
                                    Our well-equipped facility fosters curiosity and innovation, making learning physics an exciting
                                    journey.
                                </p>
                            </div>

                        </div>

                        <div className='col-md-6 position-relative '>

                            <div className='imgBgColor2 pastelSkyBlue AnimeStarts'>

                                <img src='/assets/campus/lab1.png' alt='image' className={styles.labImg1 + ' AnimeElement'} />

                            </div>

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row align-items-center '}>

                        <div className={styles.order2 + ' col-md-6  position-relative'}>

                            <div className='imgBgColorLeft pastelLightGreen AnimeStarts'>

                                <img src='/assets/campus/lab2.png' alt='image' className={styles.labImg2 + ' AnimeElement'} />

                            </div>

                        </div>

                        <div className={styles.order1 + ' col-md-6'}>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Chemistry Labs
                                </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'> Under the guidance of our dedicated educators, the chemistry lab
                                    becomes a haven for exploration, experimentation, and enlightenment. It is here that students
                                    learn to navigate the periodic table, decipher the language of equations, and witness the beauty
                                    of chemical transformations firsthand.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className='row align-items-center'>

                        <div className='col-md-6'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'> Biology Lab
                                </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'> Here, in our meticulously designed laboratory, students embark on
                                    a captivating journey into the heart of biology. Surrounded by cutting-edge equipment and a
                                    nurturing learning environment, our students delve into the intricacies of life itself, from the
                                    tiniest cells to the grand tapestry of ecosystems.
                                </p>
                            </div>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <div className='imgBgColor2 pastelGold AnimeStarts'>

                                <img src='/assets/campus/biology-lab.JPG' alt='image' className={styles.labImg3 + ' AnimeElement'
                                } />

                            </div>

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row align-items-center '}>

                        <div className={styles.order2 + ' col-md-6  position-relative'}>

                            <div className='imgBgColorLeft pastelLightGreen AnimeStarts'>

                                <img src='/assets/campus/math-lab.jpg' alt='image' className={styles.labImg2 + ' AnimeElement'} />

                            </div>

                        </div>

                        <div className={styles.order1 + ' col-md-6 '}>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Maths Lab
                                </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'> Vikas mantra has a Mathematics Laboratory where students can learn
                                    and explore mathematical concepts and verify mathematical facts and theorems through a variety
                                    of activities using different techniques.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className='row align-items-center'>

                        <div className='col-md-6'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'> Computer Science Lab
                                </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'> Welcome to the technological nucleus of Vikas Mantra Public
                                    School – our state-of-the-art Computer Science Lab. Here, innovation converges with education to
                                    empower our students with digital dexterity, fostering a future of limitless possibilities.
                                    Immerse yourself in a world where algorithms, coding, and creativity converge to shape the next
                                    generation of digital pioneers.
                                </p>
                            </div>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <div className='imgBgColor2 pastelGold AnimeStarts'>

                                <img src='/assets/campus/technology.png' alt='image' className={styles.labImg3 + ' AnimeElement'
                                } />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}


export default Laboratory;