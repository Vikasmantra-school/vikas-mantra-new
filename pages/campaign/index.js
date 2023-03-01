import style from './style.module.css'
import Navbar from '../../components/Header/CampaignNav'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Campaign = () => {
    return (
        <>
            <Navbar />

            <section className={style.campaignSection}>
                <img src="./images/banner/desktop-banner.png" class="img-fluid" />
            </section>


            <section className={style.formSection}>
                <div class={style.formContainer + ' ' + ' container'}>
                    <div class={style.formRow + ' ' + ' row align-items-center '}>

                        <div class="col-md-7 offset-md-1">
                            <div className={style.formTextContainer}>
                                <h1 className={style.textWhite}>Get ready for an unparalleled educational experience.</h1>
                                <h4 className={style.textWhite}>Begin your child's path towards a bright future.</h4>
                            </div>
                        </div>

                        <div class="col-md-4 text-center">
                            <div class={style.formColumnContainer + ' p-4'}>
                                <h2>Top CBSE School @Chengalpattu</h2>

                                <form action="#" method="post">

                                    <input type="hidden" name="form_tools_form_id" value="2" />

                                    <ul className='p-0'>
                                        <li><input className={style.formInputField} type="text" name="name" placeholder="Name" required /></li>
                                        <li><input className={style.formInputField} type="text" name="email" placeholder="Email id" required /></li>
                                        <li><input className={style.formInputField} type="text" name="phone" placeholder="Phone" required /></li>
                                        <li><input className={style.formInputField + ' mb-2'} type="textarea" name="message" placeholder="Your Message" /></li>
                                        <li><input className={style.formInputField} type="submit" name="submit" value="Register Now" /></li>

                                        <li class={style.privacy}>We respect your privacy.</li>

                                        <a class={style.phone_link} href="tel:+917092450450">
                                            <li>
                                                <i class="material-icons"></i>: +91 7092 450 450
                                            </li>
                                        </a>


                                    </ul>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={style.bgWhite + ' py-5'}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img src='/images/fade.png' alt='vikas-mantra-student' className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h1>WELCOME TO VIKAS MANTRA PUBLIC SCHOOL</h1>
                            <p className='pt-3'>Vikas Mantra Public School is established with a vision to prepare and equip each child with the necessary survival skills in the 21st century through rigorous academic and technological skills. Learning at Vikas Mantra places equal emphasis on academic excellence and the social, physical, emotional, and development of our students. We aim for our students to find identity, meaning, and purpose in life through connections to the community, to the natural world, and through humanitarian values such as compassion and integrity.</p>
                        </div>
                    </div>


                    <div className='row py-5 align-items-center text-center'>
                        <div className='col-md-8 offset-md-2 '>
                            <h2 className={style.fw700}>Start your child's journey towards exceptional learning</h2>
                        </div>
                    </div>


                    <div className='row'>

                        <div className={style.textBox + ' col-md-6'}>
                            <div className={style.textBoxCntr + ' ' + style.la}>
                                <img src="images/icon/infrastructure.png" />
                                <h2>Facilities & Infrastructure</h2>
                                <p>Located in Mahindra city, our spacious and vibrant campus is spread over 4 acres to support an active learning environment.</p>
                            </div>
                        </div>


                        <div className={style.textBox + ' col-md-6'}>
                            <div className={style.textBoxCntr + ' ' + style.com}>
                                <img src="images/icon/discussion.png" />
                                <h2>Essential Skills</h2>
                                <p>We make sure to tap the untapped potential in each child, thereby fostering social, physical, and emotional development in our students. </p>
                            </div>
                        </div>

                        <div className={style.textBox + ' col-md-6'}>
                            <div className={style.textBoxCntr + ' ' + style.extra}>
                                <img src="images/icon/ballet.png" />
                                <h2>Extracurricular Activities</h2>
                                <p>Co-curricular activities that ensure an all-around growth and development in our students.</p>
                            </div>
                        </div>

                        <div className={style.textBox + ' col-md-6'}>
                            <div className={style.textBoxCntr + ' ' + style.Conf}>
                                <img src="images/icon/school-bus.png" />
                                <h2>Transportation</h2>
                                <p>Our school has access to a fleet of buses for both students and staff transportation with facilities to track bus movements via SMS.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className={style.bgWhite + ' py-5'}>
                <div className='container'>
                    <hr className={style.hrLine} />
                </div>
            </section>

            <section className={style.facilitySection + ' ' + style.bgWhite}>
                <div className='container'>
                    <div className='row text-center'>
                        <h1 className='pb-5'>School Facilities</h1>
                    </div>

                    <div className='row'>

                        <div className='col-md-12'>

                            <Splide
                                options={{
                                    rewind: true,
                                    gap: '2rem',
                                    perPage: 3,
                                    pagination: false,
                                    arrows: true,
                                    breakpoints: {
                                        992: {
                                            perPage: 4,
                                        },

                                    },
                                }}
                            >

                                <SplideSlide>
                                    <div className={style.facilityCard}>
                                        <img src='/images/facilities/faclities-1.jpg' className='img-fluid' alt='image' />
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.facilityCard}>
                                        <img src='/images/facilities/faclities-2.jpg' className='img-fluid' alt='image' />
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.facilityCard}>
                                        <img src='/images/facilities/faclities-3.jpg' className='img-fluid' alt='image' />
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.facilityCard}>
                                        <img src='/images/facilities/faclities-4.jpg' className='img-fluid' alt='image' />
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.facilityCard}>
                                        <img src='/images/facilities/faclities-5.jpg' className='img-fluid' alt='image' />
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.facilityCard}>
                                        <img src='/images/facilities/faclities-6.jpg' className='img-fluid' alt='image' />
                                    </div>
                                </SplideSlide>

                            </Splide>

                        </div>
                    </div>

                </div>
            </section>

            <section className={style.bgWhite + ' py-5'}>
                <div className='container'>
                    <hr className={style.hrLine} />
                </div>
            </section>


            <section className={style.facilitySection + ' ' + style.bgWhite}>
                <div className='container'>
                    <div className='row text-center'>
                        <h1 className='pb-5'>School Facilities</h1>
                    </div>

                    <div className='row'>

                        <div className='col-md-12'>

                            <Splide
                                options={{
                                    rewind: true,
                                    gap: '8rem',
                                    perPage: 1,
                                    pagination: false,
                                    arrows: true,
                                    breakpoints: {
                                        992: {
                                            perPage: 4,
                                        },

                                    },
                                }}
                            >

                                <SplideSlide>
                                    <div className={style.testimonialcard}>
                                        <p>It was very nice and help the children to improve the speech. Avoid the stage fear. Thanks for organizing such events and expecting more events. Very good initiate. This kind of programmes will help to find our child knowledge also improve thinking skill. Keep it up.</p>
                                        <p><b>– Parent of Sathvik T.M. (Grade – I)</b></p>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.testimonialcard}>
                                        <p>The event is very nice to bring up hidden talents of the kids and also helps to shed their shyness and inhibitions to face number of people. Keep up the good work.</p>
                                        <p><b>– Parent of Kavitha (SR.KG)</b></p>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.testimonialcard}>
                                        <p>It’s a very good platform for the students to show cast their ideas, thoughts and skills without any fear to elaborate themselves in front of all hands….</p>
                                        <p><b>– Parent of Anirudhi (Grade – II)</b></p>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className={style.testimonialcard}>
                                        <p>It’s a very good opportunity to the students to enhance their extracurricular skills n to know about themselves where they are good at..!</p>
                                        <p><b>– Parent of Riddhi (Grade – II)</b></p>
                                    </div>
                                </SplideSlide>


                            </Splide>

                        </div>
                    </div>

                </div>
            </section>


            <section className={style.bgWhite + ' py-5'}>
                <div className='container'>
                    <hr className={style.hrLine}/>
                </div>
            </section>

            <section className={style.footerSection + ' pt-3 pb-5'}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h1>Location</h1>
                            <h3>Vikas Mantra Public School</h3>

                            <p>S.No:168,168/3, Off Mahindra World City,<br /> Anjur 603204, Chengalpattu</p>

                            <h4>Phone:</h4>
                            <p><a href='tel:+917092450450'>+91 - 7092 450 450</a></p>
                            <p><a href='tel:+918148143834'>+91 - 8148 143 834</a></p>

                            <h4>Email:</h4>
                            <p><a href='emailto:info@vikasmantra.org'>info@vikasmantra.org</a></p>
                            <p><a href='emailto:admissions@vikasmantra.org'>admissions@vikasmantra.org</a></p>

                            <h4>Office hours:</h4>
                            <p>Monday - Friday -9.00 am - 4.00 pm</p>
                            <p>Saturday 9.00 am - 1.00 pm</p>

                        </div>

                        <div className={'col-md-7 ' + style.locationCol}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15567.054801096552!2d80.0215743!3d12.7288327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1945122a83ac015!2sVikas%20Mantra%20Public%20School!5e0!3m2!1sen!2sin!4v1663411503934!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className='text-center bg-dark py-2'>
                <p className={'m-0 ' + style.copyText}>Copyrights © 2022. All rights reserved.</p>
            </section>

        </>
    );
}

export default Campaign;