import styles from './style.module.css'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {

    const pageTitle = 'About'


    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4 '>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>About Us</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={styles.sectionStyle + ' ' + ' whitebg position-relative ' + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-lg-5 col-md-12 position-relative '>

                            <div className={styles.margin + ' pb-5 '}>

                                <div className='AnimeStarts'>
                                    <h2 className='ulineRed AnimeElement'>About VMPS</h2>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className={'pt-5 AnimeElement ' + styles.pLineHeight}>VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu Kanchipuram
                                        is building a distinctive educational platform through a mix of
                                        international learning techniques, experienced academicians and
                                        modern facilities. By blending 21st century learning methodologies
                                        and traditional Indian values, we equip our students to think freely,
                                        dream big and pursue their passions, yet remain firmly connected to
                                        ground realities.
                                    </p>
                                </div>

                                <div className={styles.ResponsiveGroupImageContainer + ' AnimeStarts'}>


                                    {/* <img src='/assets/banners/school-building.png' alt="image" className={styles.ResponsiveGroupImage + ' AnimeElement'} /> */}

                                    <picture>
                                        <source srcSet='/assets/banners/school-building.webp' />
                                        <source srcSet='/assets/banners/school-building.png' />
                                        <img src='/assets/banners/school-building.png' alt="image" className={styles.ResponsiveGroupImage + ' AnimeElement'} />
                                    </picture>

                                </div>

                                <div className='AnimeStarts'>
                                    <p className={styles.pLineHeight + ' AnimeElement'}>Learning is not only limited to books and classroom at Vikas Mantra
                                        Public School, our students are encouraged to pursue their interests
                                        and are given sufficien opportunities to exhibit their talents through
                                        numerous co-curricular activities that are conducted frequently.
                                    </p>
                                </div>

                            </div>


                        </div>

                        <div className='col-lg-6 offset-lg-1 col-md-12 position-relative'>

                            <div className='AnimeStarts'>

                                {/* <img src='/assets/banners/school-building.png' alt="image" className={styles.schoolBuildingImg + ' AnimeElement'} /> */}

                                <picture>
                                    <source srcSet='/assets/banners/school-building.webp' />
                                    <source srcSet='/assets/banners/school-building.png' />
                                    <img src='/assets/banners/school-building.png' alt="image" className={styles.schoolBuildingImg + ' AnimeElement'} />
                                </picture>

                            </div>

                            <div className='position-relative'>

                                <img src='/assets/VMPS.png' alt="image" className={styles.vmpsImg} />

                            </div>
                        </div>


                    </div>

                </div>

            </section>

            <section className="faq randx">
                <div className="container">
                    <div className="row">
                        <div className='AnimeStarts pt-5'>
                            <h2 className='ulineRed AnimeElement'>FAQ's</h2>
                        </div>
                        <div className="col-md-10 AnimeStarts">
                            <div className={'accordion py-5 AnimeElement' + styles.accordionExample} id='accordionExample' >

                                <div className='accordion-item'>

                                    <h2 className='accordion-header' id='headingZero'>
                                        <button
                                            className='accordion-button'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseZero'
                                            aria-expanded='false'
                                            aria-controls='collapseZero'
                                        >
                                            <h5 className='pt-3 AdmissionScrollAnimeElement'>
                                                How does your school keep the CBSE curriculum relevant and engaging?
                                            </h5>
                                        </button>
                                    </h2>

                                    <div
                                        id='collapseZero'
                                        className='accordion-collapse collapse show'
                                        aria-labelledby='headingZero'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body'>
                                            <p className='AdmissionScrollAnimeElement'>
                                                We believe that at Vikas Mantra, your child will acquire academic knowledge and develop essential life skills that will serve them well throughout their journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingOne'>
                                        <button
                                            className='accordion-button collapsed'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseOne'
                                            aria-expanded='true'
                                            aria-controls='collapseOne'
                                        >
                                            <h5 className='pt-3 AdmissionScrollAnimeElement'>
                                                What unique teaching methods cater to diverse learning styles in your school?
                                            </h5>
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseOne'
                                        className='accordion-collapse collapse'
                                        aria-labelledby='headingOne'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body AdmissionScrollAnimeElement'>
                                            Vikas Mantra is committed to providing a nurturing environment where every child can thrive. We offer unique teaching methods and support programs to ensure your child's holistic development.
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingTwo'>
                                        <button
                                            className='accordion-button collapsed'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseTwo'
                                            aria-expanded='false'
                                            aria-controls='collapseTwo'
                                        >
                                            <h5 className='pt-3 AdmissionScrollAnimeElement'>
                                                What programs support student well-being in your CBSE school?
                                            </h5>
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseTwo'
                                        className='accordion-collapse collapse'
                                        aria-labelledby='headingTwo'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body AdmissionScrollAnimeElement'>
                                            Vikas Mantra prioritises student well-being. To support holistic development, we offer counselling, mental health programs, and activities.
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingThree'>
                                        <button
                                            className='accordion-button collapsed'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseThree'
                                            aria-expanded='false'
                                            aria-controls='collapseThree'
                                        >
                                            <h5 className='pt-3 AdmissionScrollAnimeElement'>
                                                How does your school ensure an inclusive environment for all students?
                                            </h5>
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseThree'
                                        className='accordion-collapse collapse'
                                        aria-labelledby='headingThree'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body AdmissionScrollAnimeElement'>
                                            Vikas Mantra is committed to fostering an inclusive environment where all students feel valued and supported. We have implemented various initiatives to ensure this.
                                        </div>
                                    </div>
                                </div>

                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingFour'>
                                        <button
                                            className='accordion-button collapsed'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseFour'
                                            aria-expanded='false'
                                            aria-controls='collapseFour'
                                        >
                                            <h5 className='pt-3 AdmissionScrollAnimeElement'>
                                                How does your school use technology to enhance learning in the CBSE curriculum?
                                            </h5>
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseFour'
                                        className='accordion-collapse collapse'
                                        aria-labelledby='headingFour'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body AdmissionScrollAnimeElement'>
                                            At Vikas Mantra, we use technology for modern learning, providing digital resources, interactive experiences, coding skills, and digital literacy training to equip students for the future.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className={styles.bannerSection + ' d-none d-lg-flex' + ' ' + styles.vectorImg4}>


                <div className='container'>

                    <div className='row'>
                        <div className={' col-lg-5 offset-lg-1 col-md-12 AnimeStarts ' + styles.colZindex}>
                            <h2 className={'pb-2 AnimeElement ' + styles.h2FontSize}>Vikas Mantra Public School,</h2>
                        </div>
                    </div>

                    <div className='row position-relative'>

                        <div className={styles.bannercontent1 + ' col-lg-5 offset-lg-1 col-md-12 '}>

                            <div className='AnimeStarts'>
                                <p className={styles.pLineHeight + ' AnimeElement'}>affiliated to Central Board of Education No : 1931307 was launched
                                    in the academic year 2019-20  by the M.R. EDUCATIONAL AND SOCIAL
                                    TRUST under the chairmanship of  Dr. V. Shanmugaprabhu,
                                </p>
                            </div>

                            <div className='AnimeStarts'>
                                <p className={styles.pLineHeight + ' AnimeElement'}>Dr. Shanmugaprabhu with his team of academic advisors envisioned to
                                    start his first dream  school at Mahindra World City, The primary
                                    aim of the school is to create individuals with the needed
                                    survival and employable skills for a better tomorrow.
                                </p>
                            </div>

                            <div className='AnimeStarts'>
                                <p className={styles.pLineHeight + ' AnimeElement'}>The school began its operations in the academic year June 2019.
                                    At present the school offers classes from
                                </p>
                            </div>

                        </div>

                        <div className={styles.bannercontent2 + ' col-lg-5 col-md-12 '}>

                            <div className='AnimeStarts'>
                                <p className={styles.pLineHeight + ' AnimeElement '}>pre kg to class 11 with affiliation from the Central
                                    Board of Secondary Education, New Delhi and will move to
                                    become a full-fledged  K 12 school before 2024.
                                </p>
                            </div>

                            <div className='AnimeStarts'>
                                <p className={styles.pLineHeight + ' AnimeElement '}> The  learning philosophy of the school is based on creating
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

                        <div className='col-lg-1 col-md-0'>
                            <div></div>
                        </div>

                    </div>

                </div>

            </section>


            <section className={' py-5 d-block d-lg-none '}>

                <div className='container'>

                    <div className='row position-relative'>

                        <div className={'col-lg-12 col-md-12 py-2 ' + styles.order2}>

                            <div className={'AnimeStarts '}>

                                <img src='/assets/banners/staff-group-photo-new.jpg' alt="image" className={styles.ResponsiveImage + ' AnimeElement'} />

                                {/* <picture>
                                    <source srcSet='/assets/banners/staff-group-photo.webp' />
                                    <source srcSet='/assets/banners/staff-group-photo.png' />
                                    <img src='/assets/banners/staff-group-photo.png' alt="image" className={styles.ResponsiveImage + ' AnimeElement'} />
                                </picture> */}

                            </div>

                        </div>

                        <div className={styles.ResponsiveBannercontent1 + ' ' + styles.order3 + ' col-lg-6 col-md-12 '}>

                            <div className='AnimeStarts'>
                                <h2 className='AnimeElement'>Vikas Mantra Public School,</h2>

                                <p className='AnimeElement'>affiliated to Central Board of Education No : 1931307 was launched
                                    in the academic year 2019-20  by the M.R. EDUCATIONAL AND SOCIAL
                                    TRUST under the chairmanship of  Dr. V. Shanmugaprabhu,
                                </p>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='AnimeElement'>Dr. Shanmugaprabhu with his team of academic advisors envisioned to
                                    start his first dream  school at Mahindra World City, The primary
                                    aim of the school is to create individuals with the needed
                                    survival and employable skills for a better tomorrow.
                                </p>

                                <p className='AnimeElement'>The school began its operations in the academic year June 2019.
                                    At present the school offers classes from Lower
                                </p>
                            </div>

                        </div>

                        <div className={styles.ResponsiveBannercontent2 + ' ' + styles.order1 + ' col-lg-6 col-md-12 '}>

                            <div className='AnimeStarts'>
                                <p className='AnimeElement'>Kindergarten to Grade 9 with affiliation from the Central
                                    Board of Secondary Education, New Delhi and will move to
                                    become a full-fledged  K 12 school before 2024.
                                </p>


                                <p className='AnimeElement'> The  learning philosophy of the school is based on creating
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

                </div>

            </section>

        </>

    )
}

export default About;