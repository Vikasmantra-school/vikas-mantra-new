import styles from './style.module.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const About = () => {

    const pageTitle = 'About'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>About Us</h2>

                    </div>

                </div>

            </section>

            <section className={styles.sectionStyle + ' ' + ' whitebg position-relative ' + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            {/* <img src='/assets/banners/school-building.png' alt="image" className={styles.schoolBuildingImg} /> */}
                            {/* <img src='/assets/vectors/Vector3.png' alt="image" className={styles.vectorImg2} /> */}

                        </div>

                        <div className='col-md-7 position-relative '>

                            <div className={styles.margin + ' py-5 '}>

                                <h2 className='ulineRed'>About VMPS</h2>

                                <p className={'pt-5 ' + styles.pLineHeight}>VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu Kanchipuram
                                    is building a distinctive educational platform through a mix of
                                    international learning techniques, experienced academicians and
                                    modern facilities. By blending 21st century learning methodologies
                                    and traditional Indian values, we equip our students to think freely,
                                    dream big and pursue their passions, yet remain firmly connected to
                                    ground realities.
                                </p>

                                <p className={styles.pLineHeight}>Learning is not only limited to books and classroom at Vikas Mantra
                                    Public School, our students are encouraged to pursue their interests
                                    and are given sufficien opportunities to exhibit their talents through
                                    numerous co-curricular activities that are conducted frequently.
                                </p>

                            </div>

                            <img src='/assets/VMPS.png' alt="image" className={styles.vmpsImg} />

                        </div>

                    </div>

                </div>

            </section>

            <section className={styles.bannerSection + ' d-none d-lg-flex' + ' ' + styles.vectorImg4}>


                <div className='container'>

                    <div className='row'>
                        <div className={' col-md-5 offset-md-1 ' + styles.colZindex}>
                            <h2 className={'pb-2 ' + styles.h2FontSize}>Vikas Mantra Public School,</h2>
                        </div>
                    </div>

                    <div className='row position-relative'>

                        <div className={styles.bannercontent1 + ' col-md-5 offset-md-1 '}>

                            <div>

                                <p className={styles.pLineHeight}>affiliated to Central Board of Education No : 1931307 was launched
                                    in the academic year 2019-20  by the M.R. EDUCATIONAL AND SOCIAL
                                    TRUST under the chairmanship of  Dr. V. Shanmugaprabhu,
                                </p>

                                <p className={styles.pLineHeight}>Dr. Shanmugaprabhu with his team of academic advisors envisioned to
                                    start his first dream  school at Mahindra World City, The primary
                                    aim of the school is to create individuals with the needed
                                    survival and employable skills for a better tomorrow.
                                </p>

                                <p className={styles.pLineHeight}>The school began its operations in the academic year June 2019.
                                    At present the school offers classes from Lower
                                </p>

                            </div>

                        </div>

                        <div className={styles.bannercontent2 + ' col-md-5 '}>

                            <div>

                                <p className={styles.pLineHeight}>Kindergarten to Grade 9 with affiliation from the Central
                                    Board of Secondary Education, New Delhi and will move to
                                    become a full-fledged  K 12 school before 2024.
                                </p>

                                <p className={styles.pLineHeight}> The  learning philosophy of the school is based on creating
                                    an unequalled educational experience through a kaleidoscope of
                                    intellectual stimulation, engaging co-curricular programmes,
                                    active community participation and relevant  national and global
                                    exposure. VIKAS MANTRA PUBLIC SCHOOL adopts a student-centric
                                    approach that is designed to encourage and enhance individual
                                    talent by focussing on each child’s strengths, developmental
                                    needs and areas of interest.
                                </p>

                            </div>

                        </div>

                        <div className='col-md-1'>
                            <div></div>
                        </div>

                    </div>

                </div>

            </section>




            <section className={' py-5 d-block d-lg-none '}>

                <div className='container'>

                    <div className='row position-relative'>

                        <div className='col-md-12'>

                            <img src='/assets/banners/staff-group-photo.png' alt="image" className={styles.ResponsiveImage} />

                        </div>

                        <div className={styles.ResponsiveBannercontent1 + ' col-md-6'}>

                            <h2>Vikas Mantra Public School,</h2>

                            <p>affiliated to Central Board of Education No : 1931307 was launched
                                in the academic year 2019-20  by the M.R. EDUCATIONAL AND SOCIAL
                                TRUST under the chairmanship of  Dr. V. Shanmugaprabhu,
                            </p>

                            <p>Dr. Shanmugaprabhu with his team of academic advisors envisioned to
                                start his first dream  school at Mahindra World City, The primary
                                aim of the school is to create individuals with the needed
                                survival and employable skills for a better tomorrow.
                            </p>

                            <p>The school began its operations in the academic year June 2019.
                                At present the school offers classes from Lower
                            </p>

                        </div>

                        <div className={styles.ResponsiveBannercontent2 + ' col-md-6'}>

                            <div>
                                <br /><br />
                            </div>

                            <p>Kindergarten to Grade 9 with affiliation from the Central
                                Board of Secondary Education, New Delhi and will move to
                                become a full-fledged  K 12 school before 2024.
                            </p>


                            <p> The  learning philosophy of the school is based on creating
                                an unequalled educational experience through a kaleidoscope of
                                intellectual stimulation, engaging co-curricular programmes,
                                active community participation and relevant  national and global
                                exposure. VIKAS MANTRA PUBLIC SCHOOL adopts a student-centric
                                approach that is designed to encourage and enhance individual
                                talent by focussing on each child’s strengths, developmental
                                needs and areas of interest.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </>

    )
}

export default About;