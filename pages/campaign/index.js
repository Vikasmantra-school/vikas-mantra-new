import style from './style.module.css'
import Navbar from '../../components/Header/CampaignNav'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router';


const Campaign = () => {

    //programatically navigate
    const router = useRouter();

    //form-data-clear-after-submit

    const [name, setName] = useState('')
    const [mail, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [city, setCity] = useState('')


    //form-sheet-integration

    const formRef = useRef(null)
    const scriptUrl = ""


    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()


        const selectedLocation = formRef.current.location.value;
        scriptUrl = selectedLocation === "chengalpattu" ? "https://script.google.com/macros/s/AKfycbyVyubaE6ub1Ydips6uiLN8xRm2HmJihPHvM3l_n9m-cXPAdrqSmYNiObtnFt43eY6Gmg/exec" : "https://script.google.com/macros/s/AKfycbx_WrZhW68cvYm2CBAvNXX6mgLfg9T_pceoNNaDAAPvJiTdhk46GdyybeCHm4fH5JCdhw/exec";


        setLoading(true)

        setName('');
        setEmail('');
        setNumber('');
        setMessage('');



        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            alert('Our admission officer will contact you shortly');
            setLoading(false)
            router.push('/contact')
        })
            .catch(err => console.log(err))
    }

    return (
        <>
          <main className="campaignPage">
            <Navbar />
    
            <section className={style.campaignSection}>
              <img
                src="/assets/banners/Admission-Open.png"
                className={"img-fluid " + " " + style.WebBannerImg}
                alt="banner-image"
              />
              <img
                src="/assets/mobile-banners/Admission-Open-Mob.png"
                className={"img-fluid " + " " + style.MobBannerImg}
                alt="banner-image"
              />
            </section>
    
            <section className={style.formSection} id="form">
              <div className={style.formContainer + " " + " container"}>
                <div className={style.formRow + " " + " row align-items-center "}>
                  <div className="col-md-8">
                    <div className={style.formTextContainer}>
                      <h1 className={style.textWhite}>
                        Get ready for an unparalleled educational experience.
                      </h1>
                      <h4 className={style.textWhite}>
                        Begin your child&apos;s path towards a bright future.
                      </h4>
                    </div>
                  </div>
    
                  <div className="col-md-4 text-center">
                    <div className={style.formColumnContainer + " p-4"}>
                      <h2>
                        Vikas Mantra Public School – Now in Chengalpattu & Mambakkam{" "}
                      </h2>
    
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        name="google-sheet">
                        <input type="hidden" name="form_tools_form_id" value="2" />
    
                        <ul className="p-0">
                          <li className={style.formLi}>
                            <span className="material-symbols-outlined">
                              location_on
                            </span>
                            <select
                              className={style.formSelectField}
                              name="location"
                              required
                              onChange={(e) => {
                                setCity(e.target.value);
                              }}
                              value={city}>
                              <option value="" disabled>
                                Select Location
                              </option>
                              <option value="chengalpattu">Chengalpattu</option>
                              <option value="mambakkam">Mambakkam</option>
                            </select>
                          </li>
                          <li className={style.formLi}>
                            <span className="material-symbols-outlined">
                              person
                            </span>
                            <input
                              className={
                                style.formInputField + " " + style.inputName
                              }
                              type="text"
                              name="Name"
                              placeholder="Name"
                              required
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              value={name}
                            />
                          </li>
    
                          <li className={style.formLi}>
                            <span className="material-symbols-rounded">mail</span>
                            <input
                              className={
                                style.formInputField + " " + style.inputEmail
                              }
                              type="text"
                              name="Email"
                              placeholder="Email id"
                              required
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={mail}
                            />
                          </li>
    
                          <li className={style.formLi}>
                            <span className="material-symbols-rounded">
                              phone_iphone
                            </span>
                            <input
                              className={
                                style.formInputField + " " + style.inputPhone
                              }
                              type="text"
                              name="Phone"
                              placeholder="Phone"
                              required
                              onChange={(e) => {
                                setNumber(e.target.value);
                              }}
                              value={number}
                            />
                          </li>
                          <li className={style.formLi}>
                            <span className="material-symbols-rounded">
                              short_text
                            </span>
                            <input
                              className={style.formInputField + " mb-2"}
                              type="textarea"
                              name="Message"
                              placeholder="Your Message"
                              onChange={(e) => {
                                setMessage(e.target.value);
                              }}
                              value={message}
                            />
                          </li>
                          <li className="my-3">
                            <input
                              className={
                                style.formInputField + " " + style.inputSubmit
                              }
                              value={loading ? "Loading..." : "Send"}
                              type="submit"
                              name="submit"
                              placeholder="Register Now"
                            />
                          </li>
    
                          <li className={style.privacy}>
                            We respect your privacy.
                          </li>
    
                          <Link href="tel:+917092450450">
                            <a className={style.phone_link}>
                              <li className={style.callIcon}>
                                <span className="material-symbols-outlined">
                                  phone_in_talk
                                </span>
                                <span>: +91 7092 450 450</span>
                              </li>
                            </a>
                          </Link>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <section
              className={style.bgWhite + " py-5" + " " + style.welcomeSection}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <img
                      src="/images/fade.png"
                      alt="vikas-mantra-student"
                      className={style.studentImg}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <h1>WELCOME TO VIKAS MANTRA PUBLIC SCHOOL</h1>
                    <p className="pt-3">
                      Vikas Mantra Public School is established with a vision to
                      prepare and equip each child with the necessary survival
                      skills in the 21st century through rigorous academic and
                      technological skills. Learning at Vikas Mantra places equal
                      emphasis on academic excellence and the social, physical,
                      emotional, and development of our students. We aim for our
                      students to find identity, meaning, and purpose in life
                      through connections to the community, to the natural world,
                      and through humanitarian values such as compassion and
                      integrity.
                    </p>
                  </div>
                </div>
    
                <div className="row py-5 align-items-center text-center">
                  <div className="col-lg-12">
                    <h2 className={style.fw700 + " " + style.startText}>
                      Start your Child&apos;s Journey Towards Exceptional Learning
                    </h2>
                    <h4
                      className={
                        style.fw700 + " " + " py-2 " + style.ExperienceText
                      }>
                      &quot;Experience our world-class Education&quot;
                    </h4>
                  </div>
                </div>
    
                <div className="row">
                  <div className={style.textBox + " col-md-12 col-lg-6"}>
                    <div className={style.textBoxCntr + " " + style.la}>
                      <img
                        src="images/icon/infrastructure.png"
                        alt="facilities-image"
                      />
                      <h2>Facilities & Infrastructure</h2>
                      <p>
                        Located in Mahindra city, our spacious and vibrant campus is
                        spread over 4 acres to support an active learning
                        environment.
                      </p>
                    </div>
                  </div>
    
                  <div className={style.textBox + " col-lg-6 col-md-12"}>
                    <div className={style.textBoxCntr + " " + style.com}>
                      <img
                        src="images/icon/discussion.png"
                        alt="facilities-image"
                      />
                      <h2>Essential Skills</h2>
                      <p>
                        We make sure to tap the untapped potential in each child,
                        thereby fostering social, physical, and emotional
                        development in our students.{" "}
                      </p>
                    </div>
                  </div>
    
                  <div className={style.textBox + " col-lg-6 col-md-12"}>
                    <div className={style.textBoxCntr + " " + style.extra}>
                      <img src="images/icon/ballet.png" alt="facilities-image" />
                      <h2>Extracurricular Activities</h2>
                      <p>
                        Co-curricular activities that ensure an all-around growth
                        and development in our students.
                      </p>
                    </div>
                  </div>
    
                  <div className={style.textBox + " col-lg-6 col-md-12"}>
                    <div className={style.textBoxCntr + " " + style.Conf}>
                      <img
                        src="images/icon/school-bus.png"
                        alt="facilities-image"
                      />
                      <h2>Transportation</h2>
                      <p>
                        Our school has access to a fleet of buses for both students
                        and staff transportation with facilities to track bus
                        movements via SMS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <section className={style.bgWhite + " py-5 " + " " + style.sectionPdng}>
              <div className="container">
                <hr className={style.hrLine} />
              </div>
            </section>
    
            <section className={style.facilitySection + " " + style.bgWhite}>
              <div className="container campaignsplide">
                <div className="row text-center">
                  <h1 className="pb-5">School Facilities</h1>
                </div>
    
                <div className="row pb-4">
                  <div className="col-md-12">
                    <Splide
                      options={{
                        rewind: true,
                        gap: "6rem",
                        perPage: 3,
                        pagination: false,
                        arrows: true,
                        breakpoints: {
                          660: {
                            perPage: 1,
                            arrows: false,
                            pagination: true,
                          },
                          992: {
                            perPage: 2,
                          },
                          1200: {
                            perPage: 3,
                          },
                        },
                      }}>
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/lab2.png"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Well-equipped Chemistry, Physics, and Biology
                            Laboratories
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/technology.webp"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Computer Lab equipped with sufficient number of
                            Computers and Accessories
                          </p>
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/Speciality-room.webp"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>Large rooms for Dance, Music, Craft, and Art</p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/medical-room.jpeg"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Clean and well-maintained Medical room for students who
                            become ill during the school day
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/library.webp"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Our Libraries contain a wide range of Books and Journals
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/lab3.webp"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            The Activity rooms are designed to make Learning more
                            Enjoyable and Exciting
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/classroom.webp"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>Broad & Clean Classrooms with Cross Ventilation</p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/school-bus.png"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            School bus services transport children to and from
                            school
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/facilities/indoor.JPG"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Indoor activities such as table tennis, chess, and board
                            games are available
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/campaign/skating.jpg"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Indoor and outdoor sports courts, as well as a sports
                            area
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.facilityCard}>
                          <img
                            src="/images/facilities/basketball.JPG"
                            className="img-fluid"
                            alt="image"
                          />
                          <p>
                            Excellent outdoor volleyball, basketball, football, and
                            throwball courts
                          </p>
                        </div>
                      </SplideSlide>
                    </Splide>
                  </div>
                </div>
              </div>
            </section>
    
            <section className={style.bgWhite + " py-5 " + " " + style.sectionPdng}>
              <div className="container">
                <hr className={style.hrLine} />
              </div>
            </section>
    
            <section className={style.facilitySection + " " + style.bgWhite}>
              <div className="container campaignsplide testimonialslide">
                <div className="row text-center">
                  <h1 className="pb-5">Testimonials</h1>
                </div>
    
                <div className="row pb-4">
                  <div className="col-md-12">
                    <Splide
                      options={{
                        rewind: true,
                        gap: "8rem",
                        perPage: 1,
                        pagination: false,
                        arrows: true,
                        breakpoints: {
                          660: {
                            perPage: 1,
                            arrows: false,
                            pagination: true,
                          },
                          992: {
                            perPage: 1,
                          },
                          1200: {
                            perPage: 1,
                          },
                        },
                      }}>
                      <SplideSlide>
                        <div className={style.testimonialcard}>
                          <p>
                            It was very nice and help the children to improve the
                            speech. Avoid the stage fear. Thanks for organizing such
                            events and expecting more events. Very good initiate.
                            This kind of programmes will help to find our child
                            knowledge also improve thinking skill. Keep it up.
                          </p>
                          <p>
                            <b>– Parent of Sathvik T.M. (Grade – I)</b>
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.testimonialcard}>
                          <p>
                            The event is very nice to bring up hidden talents of the
                            kids and also helps to shed their shyness and
                            inhibitions to face number of people. Keep up the good
                            work.
                          </p>
                          <p>
                            <b>– Parent of Kavitha (SR.KG)</b>
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.testimonialcard}>
                          <p>
                            It’s a very good platform for the students to show cast
                            their ideas, thoughts and skills without any fear to
                            elaborate themselves in front of all hands….
                          </p>
                          <p>
                            <b>– Parent of Anirudhi (Grade – II)</b>
                          </p>
                        </div>
                      </SplideSlide>
    
                      <SplideSlide>
                        <div className={style.testimonialcard}>
                          <p>
                            It’s a very good opportunity to the students to enhance
                            their extracurricular skills n to know about themselves
                            where they are good at..!
                          </p>
                          <p>
                            <b>– Parent of Riddhi (Grade – II)</b>
                          </p>
                        </div>
                      </SplideSlide>
                    </Splide>
                  </div>
                </div>
              </div>
            </section>
    
            <section className={style.bgWhite + " py-5 " + " " + style.sectionPdng}>
              <div className="container">
                <hr className={style.hrLine} />
              </div>
            </section>
    
            <section className={style.footerSection + " pt-3 pb-5"}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-5">
                    <h1>Location</h1>
                    <h3>Vikas Mantra Public School</h3>
    
                    <p>
                      S.No:168,168/3, Off Mahindra World City,
                      <br /> Anjur 603204, Chengalpattu
                    </p>
    
                    <h4>Phone:</h4>
                    <p>
                      <Link href="tel:+917092450450">
                        <a>+91 - 7092 450 450</a>
                      </Link>
                    </p>
                    <p>
                      <Link href="tel:+918148143834">
                        <a>+91 - 8148 143 834</a>
                      </Link>
                    </p>
    
                    <h4>Email:</h4>
                    <p>
                      <Link href="mailto:info@vikasmantra.org">
                        <a>info@vikasmantra.org</a>
                      </Link>
                    </p>
                    <p>
                      <Link href="mailto:admissions@vikasmantra.org">
                        <a>admissions@vikasmantra.org</a>
                      </Link>
                    </p>
    
                    <h4>Office hours:</h4>
                    <p>Monday - Friday -9.00 am - 4.00 pm</p>
                    <p>Saturday 9.00 am - 1.00 pm</p>
                  </div>
    
                  <div className={"col-lg-7 col-md-12 " + style.locationCol}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15567.054801096552!2d80.0215743!3d12.7288327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1945122a83ac015!2sVikas%20Mantra%20Public%20School!5e0!3m2!1sen!2sin!4v1663411503934!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="text-center bg-dark py-2">
              <p className={"m-0 " + style.copyText}>
                Copyrights © 2023. All rights reserved.
              </p>
            </section>
    
            <section>
              <div className="container">
                <div className="row watsapp-icon">
                  <div className="col-sm-12">
                    <a
                      className="whatsappDiv"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=7330098765">
                      <img
                        className="CampaignwhatsappImg"
                        src="/assets/icons/whatsapp.png"
                        alt="whatsapp-icon"
                      />
                    </a>
    
                    <a
                      className="phoneDiv"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="tel:+917092450450">
                      <img
                        className="campaignphoneImg"
                        src="/assets/icons/phone-icon.png"
                        alt="phone-icon"
                      />
                    </a>
    
                    <a href="#form" className="fixed-app callBtn">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      );
}

export default Campaign;