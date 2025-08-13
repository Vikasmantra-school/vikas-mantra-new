import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faHdd } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Admissions = () => {
  const pageTitle = 'Admissions'

  function drpDwnClick(e) {
    let id = e.currentTarget.getAttribute('id')
    let activeTab = id.replace('-tab', '')

    let par = document.getElementById(activeTab)

    let child = par.querySelectorAll('.AdmissionAnimeElement')

    child.forEach(function (elem) {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          x: -50,
        },
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
          stagger: 0.2,
        }
      )
    })

    gsap.registerPlugin(ScrollTrigger)

    let textOnly = par.querySelectorAll('.AdmissionScrollAnimeElement')
    textOnly.forEach(function (elem1) {
      gsap.fromTo(
        elem1,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          delay: 0.3,
          duration: 0.6,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: elem1,
            animation: elem1,
            toggleActions: 'play none none none',
            once: true,
          },
        }
      )
      ScrollTrigger.refresh()
    })
  }

  return (
    <>
      <style>
        {` 
        body {
                background: #f3f1f2;
            }
        `}
      </style>

      <Breadcrumb pageName={pageTitle} />
      {/* <Head>
        <title>{pageTitle}| Vikasmantra Public School</title>
        <meta
          name="description"
          content="VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu Kanchipuram is building a distinctive educational platform through a mix of international learning ..."
        />
      </Head> */}

      <section className='pt-4 greybg'>
        <div className='container position-relative'>
          <div className='row py-5'>
            <div className='AdmissionAnimeStarts AnimeStarts'>
              <h2 className={styles.headingPdng + ' AdmissionAnimeElement AnimeElement '}>
                Admissions
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionPdng + ' greybg'}>
        <div className='container'>
          <div className='row align-items-start'>
            <div className='col-md-12 col-lg-4'>
              {/* tab-menu-start */}

              <div
                className={
                  styles.tabWidth +
                  ' nav flex-column nav-pills me-3 responsiveRow AdmissionAnimeStarts AnimeStarts '
                }
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <button
                  className={
                    styles.tabBtn +
                    ' ' +
                    styles.redBorder +
                    ' ' +
                    styles.responsiveRedBorder1 +
                    ' nav-link active text-start color-black position-relative AdmissionScrollAnimeElement AnimeElement '
                  }
                  id='v-pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-home'
                  type='button'
                  aria-controls='v-pills-home'
                  onClick={(e) => drpDwnClick(e)}
                >
                  Admission Overview
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>

                <button
                  className={
                    styles.tabBtn +
                    ' ' +
                    styles.redBorder +
                    ' ' +
                    styles.responsiveRedBorder2 +
                    ' nav-link text-start color-black position-relative AdmissionScrollAnimeElement AnimeElement '
                  }
                  id='admission-timeline-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#admission-timeline'
                  type='button'
                  role='tab'
                  aria-controls='admission-timeline'
                  aria-selected='false'
                  onClick={(e) => drpDwnClick(e)}
                >
                  Admission Timeline
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>

                <button
                  className={
                    styles.tabBtn +
                    ' ' +
                    styles.redBorder +
                    ' ' +
                    styles.responsiveRedBorder3 +
                    ' nav-link text-start color-black position-relative AdmissionScrollAnimeElement AnimeElement '
                  }
                  id='v-pills-messages-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-messages'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-messages'
                  aria-selected='false'
                  onClick={(e) => drpDwnClick(e)}
                >
                  Admission Procedure
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>

                <button
                  className={
                    styles.tabBtn +
                    ' ' +
                    styles.responsiveRedBorder4 +
                    ' nav-link text-start color-black position-relative AdmissionScrollAnimeElement AnimeElement '
                  }
                  id='v-pills-settings-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-settings'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-settings'
                  aria-selected='false'
                  onClick={(e) => drpDwnClick(e)}
                >
                  FAQ
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>
              </div>
              {/* tab-menu-end */}
            </div>
          </div>

          {/* tab-content-start */}
          <div className={'tab-content '} id=' v-pills-tabContent'>
            <div
              className={
                ' tab-pane fade show active ' +
                styles.Tab1BlueVector +
                ' ' +
                styles.tab1RedDotVector +
                ' ' +
                styles.vectorImg16 +
                ' ' +
                styles.vectorImg5
              }
              id='v-pills-home'
              role='tabpanel'
              aria-labelledby='v-pills-home-tab'
              tabIndex='0'
            >
              <div className='row'>
                <div className='col-lg-8 offset-lg-4 col-md-12 '>
                  <div
                    className={
                      styles.schoolBuilding +
                      ' imgUpAdmission1 imgBgColorAdmission1 pastelPurple3 AdmissionAnimeElement AnimeStarts'
                    }
                  >
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={
                        styles.schoolBuildingImg +
                        ' img-fluid AdmissionAnimeElement AnimeElement '
                      }
                    />
                  </div>
                </div>

                <div
                  className={
                    styles.cardmargin1 +
                    ' ' +
                    ' col-lg-8 offset-lg-2 col-md-12 position-relative '
                  }
                >
                  <div className={styles.card1 + ' card'}>
                    <div className='card-body '>
                      <div className='AdmissionAnimeStarts AnimeStarts'>
                        <h5 className='card-title ulineRed AdmissionScrollAnimeElement AnimeElement'>
                          Admission
                        </h5>
                      </div>

                      <div className='AdmissionAnimeStarts AnimeStarts'>
                        <h6 className='card-text pt-5 AdmissionScrollAnimeElement AnimeElement'>
                          At VIKAS MANTRA PUBLIC SCHOOL, admissions are open for the academic year 2025-26 from classes Lower KG to Grade 12. Each grade will have 3 divisions with class strength of no more than 30 students. At VMPS, We aim to create a personalized education experience for each student and provide a platform to maximize each student’s learning and build on individual potential.
                        </h6>
                      </div>

                      <ul className='pt-4 list-points AdmissionAnimeStarts AnimeStarts'>
                        <li className='pt-1 AdmissionScrollAnimeElement AnimeElement'>
                          <img
                            src='/assets/icons/blue-point.png'
                            alt='list-point'
                          />
                          To find out more about admissions at VIKAS MANTRA
                          PUBLIC SCHOOL or to visit the school for an admissions
                          tour
                        </li>
                        <li className='pt-1 AdmissionScrollAnimeElement AnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                          />
                          Please contact the Admission Coordinator between 8.30
                          am and 4.30 pm., Mon-Fri | 9.00 am – 1.00 pm on
                          Saturdays (Except 2nd Sat)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                ' tab-pane fade ' +
                ' ' +
                styles.vectorImg3 +
                ' ' +
                styles.vectorImg9
              }
              id='admission-timeline'
              role='tabpanel'
              aria-labelledby='admission-timeline-tab'
              tabIndex='0'
            >
              <div className={'row '}>
                <div
                  className={
                    styles.Sec2PdngBtm + ' col-lg-8 offset-lg-4 col-md-12'
                  }
                >
                  <div
                    className={
                      ' imgUpAdmission2 imgBgColorAdmission2 pastelBlue3 AdmissionAnimeStarts'
                    }
                  >
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={
                        styles.schoolBuildingImg +
                        ' img-fluid AdmissionAnimeElement '
                      }
                    />
                  </div>
                </div>

                <div className='col-md-8 offset-md-2'>
                  <div></div>
                </div>

                <div
                  className={
                    styles.order3 +
                    ' col-lg-6 col-md-12 py-5 dot-vector-before' +
                    ' ' +
                    styles.tab2RedDotVector
                  }
                >
                  <img
                    src='/assets/banners/student.png'
                    alt='image'
                    className={styles.studentImg + ' AdmissionScrollAnimeElement'}
                  />
                  {/* <picture>
                    <source srcSet='/assets/banners/student.webp' />
                    <source srcSet='/assets/banners/student.png'/>
                    <img src='/assets/banners/student.webp' alt="image" className={ styles.studentImg + ' AdmissionScrollAnimeElement'}/>
                  </picture> */}

                </div>

                <div
                  className={
                    styles.order2 +
                    ' col-lg-5 col-md-12 py-5 position-relative '
                  }
                >
                  <img
                    src='/assets/VMPS.png'
                    alt='image'
                    className={styles.Sec2vmpsImg}
                  />
                  <div className='AdmissionAnimeStarts'>
                    <h2 className='ulineRed AdmissionScrollAnimeElement mobile-heading-size'>
                      Timelines and key milestones for the academic year 2025-26
                      VIKAS MANTRA PUBLIC SCHOOL admissions process
                    </h2>
                  </div>

                  <div className='pt-5'>
                    <table
                      className={
                        ' table table-bordered ' + styles.tableContainer
                      }
                    >
                      <tbody className={styles.tableBody}>
                        <tr
                          className={styles.tableTr + ' AdmissionAnimeStarts'}
                        >
                          <td className='AdmissionScrollAnimeElement'>
                            Admissions Open
                          </td>
                          <td className='AdmissionScrollAnimeElement'>
                            20th November 2024
                          </td>
                        </tr>

                        <tr className='AdmissionAnimeStarts'>
                          <td className='AdmissionScrollAnimeElement'>
                            Application forms available from
                          </td>
                          <td className='AdmissionScrollAnimeElement'>
                          20th November 2024
                          </td>
                        </tr>

                        <tr className='AdmissionAnimeStarts'>
                          <td className='AdmissionScrollAnimeElement'>
                            Rolling-admissions start date
                          </td>
                          <td className='AdmissionScrollAnimeElement'>
                          20th November 2024
                          </td>
                        </tr>

                        <tr className='AdmissionAnimeStarts'>
                          <td className='AdmissionScrollAnimeElement'>
                            Admissions open till
                          </td>
                          <td className='AdmissionScrollAnimeElement'>
                            30th June 2025
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className='AdmissionAnimeStarts'>
                    <p className=' pt-3 AdmissionScrollAnimeElement'>
                      Please note that Admissions for the new academic year
                      2025-26 at VIKAS MANTRA PUBLIC SCHOOL will commence from
                      20th November 2024 and the admissions for this
                      academic year will be closed on 30th June 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                ' tab-pane fade ' +
                ' ' +
                styles.vectorImg3Tab3 +
                ' ' +
                styles.vectorImg6
              }
              id='v-pills-messages'
              role='tabpanel'
              aria-labelledby='v-pills-messages-tab'
              tabIndex='0'
            >
              <div className={'row ' + styles.MobTextNone}>
                <div className=' col-lg-8 offset-lg-4 col-md-12'>
                  <div className='imgUpAdmission2 imgBgColorAdmission2 pastelGold1 AdmissionAnimeStarts '>
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={
                        styles.schoolBuildingImg + ' AdmissionAnimeElement'
                      }
                    />
                  </div>
                </div>

                <div
                  className={
                    styles.cardmargin3 +
                    ' col-md-12 col-lg-8 offset-lg-2 position-relative ' +
                    ' ' +
                    styles.tab3VectorSpiralBlue
                  }
                >
                  <div className={styles.card2 + ' card'}>
                    <div className='card-body'>
                      <div className='AdmissionAnimeStarts'>
                        <h5 className='card-title ulineRed AdmissionScrollAnimeElement '>
                          Eligibility Criteria for all classes
                        </h5>
                      </div>

                      <ul className='pt-5 list-points AdmissionAnimeStarts'>
                        <li className='pt-1 AdmissionScrollAnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                            className=''
                          />
                          Kindergarten – To be eligible for admission, the child
                          must fall into 3 years age category as
                          prescribed and suggested by the central board of
                          secondary education.
                        </li>
                        <li className='pt-1 AdmissionScrollAnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                          />
                          For Junior KG the child must have completed 4 years
                          as on 30th March.
                        </li>
                        <li className='pt-1 AdmissionScrollAnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                          />
                          For Senior KG the child must have completed 5 years
                          as on 30th March.
                        </li>
                        <li className='pt-1 AdmissionScrollAnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                          />
                           For 1st Grade the child must have completed 6 years as on 30th March.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mt-5 '>
                  <div className='AdmissionAnimeStarts'>
                    <h2 className='ulineRed AdmissionScrollAnimeElement '>
                      Admissions Procedure
                    </h2>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div></div>
                </div>

                <div className='row pt60 '>
                  <div className='col-lg-4 col-md-6 col-sm-12 '>
                    <div className='card-wrapper one'>
                      <div className='card-header'>
                        <div className='AdmissionAnimeStarts'>
                          <h1 className='card-header-text2 AdmissionScrollAnimeElement'>
                            Obtain Admissions Kit
                          </h1>
                        </div>

                        <div className='AdmissionAnimeStarts'>
                          <p className='card-header-text3 AdmissionScrollAnimeElement'>
                            Visit the school , meet our admissions officer. Take
                            a tour of the school. Obtain the Admissions Kit from
                            the Admissions Office.
                          </p>
                        </div>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap AdmissionAnimeStarts'>
                            <h1 className='AdmissionScrollAnimeElement'>01</h1>
                            <p className='AdmissionScrollAnimeElement'>step</p>
                          </div>

                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className={styles.plusIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card-wrapper two'>
                      <div className='card-header AdmissionAnimeStarts'>
                        <h1 className='card-header-text2 AdmissionScrollAnimeElement'>
                          Submit Application
                        </h1>
                        <p className='card-header-text3 AdmissionScrollAnimeElement'>
                          Submit the completed Application Form and all
                          supporting documents as per instructions and wait to
                          be called for a personal interview.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap AdmissionAnimeStarts'>
                            <h1 className='AdmissionScrollAnimeElement'>02</h1>
                            <p className='AdmissionScrollAnimeElement'>step</p>
                          </div>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className={styles.plusIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card-wrapper one'>
                      <div className='card-header AdmissionAnimeStarts'>
                        <h1 className='card-header-text2 AdmissionScrollAnimeElement'>
                          Interaction and Interview
                        </h1>
                        <p className='card-header-text3 AdmissionScrollAnimeElement'>
                          Diagnostic tests in Math & Science and Tests of
                          fluency in English will be conducted for students
                          applying from Grade I. Then, personal interviews will
                          be conducted to understand their skills. For
                          Kindergarten classes, interactions will be held for
                          both children and parents.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap AdmissionAnimeStarts'>
                            <h1 className='AdmissionScrollAnimeElement'>03</h1>
                            <p className='AdmissionScrollAnimeElement'>step</p>
                          </div>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className={styles.plusIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card-wrapper two'>
                      <div className='card-header AdmissionAnimeStarts'>
                        <h1 className='card-header-text2 AdmissionScrollAnimeElement'>
                          Admission Results
                        </h1>
                        <p className='card-header-text3 AdmissionScrollAnimeElement'>
                          Admissions results emailed within 3 working days.
                          After which parents can pay the fees within 5 days to
                          confirm the slot.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap AdmissionAnimeStarts'>
                            <h1 className='AdmissionScrollAnimeElement'>04</h1>
                            <p className='AdmissionScrollAnimeElement'>step</p>
                          </div>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className={styles.plusIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card-wrapper one'>
                      <div className='card-header AdmissionAnimeStarts'>
                        <h1 className='card-header-text2 AdmissionScrollAnimeElement'>
                          Admission Fee
                        </h1>
                        <p className='card-header-text3 AdmissionScrollAnimeElement'>
                          Upon receipt of Confirmation Letter, payment of a
                          one-time non-refundable Admission Fee* within 15 days
                          to be paid along with the first term and school
                          essentials fee.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap AdmissionAnimeStarts'>
                            <h1 className='AdmissionScrollAnimeElement'>05</h1>
                            <p className='AdmissionScrollAnimeElement'>step</p>
                          </div>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className={styles.plusIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div></div>
                </div>

                <div className='col-md-12 mt-3'>
                  <p className='mb-5 AdmissionScrollAnimeElement'>
                    Following the VIKAS MANTRA PUBLIC SCHOOL admissions process,
                    the decision to accept a student is based upon a number of
                    factors, including academic potential, previous academic
                    achievements, extra-curricular accomplishments and
                    availability of space in each class. Special consideration
                    will be given to qualified applicants who are siblings of
                    alumni or students currently attending VIKAS MANTRA PUBLIC
                    SCHOOL.
                  </p>
                </div>

                <div className={'col-md-10 '}>
                  <h2 className=' mt-5 mb-3 AdmissionScrollAnimeElement'>
                    Admissions Requirements
                  </h2>

                  <h4 className='AdmissionScrollAnimeElement'>
                    Documents Required:
                  </h4>

                  <p className='AdmissionScrollAnimeElement'>
                    As part of the application process, parents are requested to
                    prepare the following documents for submission to the
                    school.
                  </p>

                  <ul className={styles.ulLineHeight + ' list-points'}>
                    <li className='AdmissionScrollAnimeElement '>
                      <img
                        src='/assets/icons/blue-point.png'
                        alt='list-point'
                      />
                      Application Form, duly filled
                    </li>
                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/pink-point.png'
                        alt='list-point'
                      />
                      3 colour Photos
                    </li>
                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/yellow-point.png'
                        alt='list-point'
                      />
                      Report from Previous School (if available)
                    </li>
                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/green-point.png'
                        alt='list-point'
                      />
                      Copy of the Student’s Aadhar / Passport (if available)
                    </li>
                    <li className='AdmissionScrollAnimeElement'>
                      <img src='/assets/icons/red-point.png' alt='list-point' />
                      Copy of the Student’s Birth Certificate in case of (PIO
                      holders)
                    </li>
                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/orange-point.png'
                        alt='list-point'
                      />
                      Copy of any one of the following as proof of Residence for
                      Parents:{' '}
                    </li>

                    <li className='mt-3 ms-3 AdmissionScrollAnimeElement'>
                      <img src='/assets/icons/lightblue.png' alt='list-point' />
                      Passport/Aadhar / Ration /Voter ID card
                    </li>
                    <li className='ms-3 AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/lightgreen-point.png'
                        alt='list-point'
                      />
                      Most recent water/telephone/electricity/gas bill/ rental
                      agreement
                    </li>
                  </ul>

                  <p className='AdmissionScrollAnimeElement'>
                    Please refer to the checklist provided with the admissions
                    package for a comprehensive list of documents required for
                    the admissions process.
                  </p>

                  <h2 className='mt-5 AdmissionScrollAnimeElement mobile-heading-size'>
                    Procedures to be followed while filling up the form
                  </h2>

                  <ul
                    className={
                      styles.ulLineHeight + ' position-relative list-points '
                    }
                  >
                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/darkblue-point.png'
                        alt='list-point'
                      />
                      Application form to be submitted within 5 working days
                      after buying the form. Duly filled in forms are to be
                      submitted along with copy of birth certificate, address
                      proof, copy of Aadhar, UDIS number ( for students from
                      grade 2 onwards) along with 2 photographs of the child.
                      Please note that without these documents the form will not
                      be accepted. Kindly avoid further requests.
                    </li>

                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/yellow-point.png'
                        alt='list-point'
                      />
                      Admission at Vikas Mantra Public School will be on first
                      on first come basis.
                    </li>

                    <li className='AdmissionScrollAnimeElement'>
                      <img src='/assets/icons/red-point.png' alt='list-point' />
                      Admission for the academic year will be done till the 30th
                      of June every year based on the availability of seats in
                      each class.
                    </li>

                    <li className='AdmissionScrollAnimeElement'>
                      <img
                        src='/assets/icons/green-point.png'
                        alt='list-point'
                      />
                      Each class is limited to 35 students only.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={
                'tab-pane fade ' +
                ' ' +
                styles.vectorImg11 +
                ' ' +
                styles.vectorImg17
              }
              id='v-pills-settings'
              role='tabpanel'
              aria-labelledby='v-pills-settings-tab'
              tabIndex='0'
            >
              <div className='row'>
                <div className='col-lg-8 offset-lg-4 col-md-12'>
                  <div className='imgUpAdmission2 imgBgColorAdmission2 pastelGreen3 '>
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={
                        styles.schoolBuildingImg + ' AdmissionAnimeElement'
                      }
                    />
                  </div>
                </div>

                <div
                  className={
                    styles.sectionPdng4 + ' col-md-10 position-relative'
                  }
                >
                  <img
                    src='/assets/VMPS.png'
                    alt='image'
                    className={styles.Sec4vmpsImg}
                  />

                  <h2 className='ulineRed AdmissionScrollAnimeElement'>FAQ</h2>

                  <div className={'accordion pt-5 ' + styles.accordionExample} id='accordionExample' >




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
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            How do you make decision on admission?
                          </h4>
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
                            Admission decisions are made purely on first come
                            first serve basis for lower classes. It is also made
                            on merit, aptitude of the applicant, and involvement
                            of parents in the applicant’s education. Special
                            consideration will be given to qualified applicants
                            who are siblings of alumni or students currently
                            attending VIKAS MANTRA PUBLIC SCHOOL.
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
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            Do you have a wait list?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseOne'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingOne'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          Yes we do have. A wait list will be created once seats
                          are filled by deserving students on first come first
                          serve basis.
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
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            How are students assessed?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          Applicants to the early years (KG ) are assessed
                          purely on their interaction with the respective heads.
                          Applicants in 1st grade and above are assessed on
                          their written and oral tests administered by the
                          school. Parent&apos;s approach to education and their
                          involvement in their child&apos;s life plays an even
                          more critical role.
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
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            How are parents involved in the school community?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          VIKAS MANTRA PUBLIC SCHOOL is keen to promote talents
                          and resources that are available in the parent
                          community ; that can enrich our school programme. As
                          such, parents are encouraged to participate in the
                          school community and enhance the learning experience
                          of the students either being a volunteer in the
                          library, story telling or chaperoning during a field
                          trip, or being a guest lecture or by being a
                          substitute teacher when the need arises.
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
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            What is the student teacher ratio in each class?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseFour'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingFour'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          As per the CBSE guidelines we follow an 1:35 ratio in
                          our classes.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingFive'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseFive'
                          aria-expanded='false'
                          aria-controls='collapseFive'
                        >
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            Where are your teachers from?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseFive'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingFive'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          Our teachers are from various parts of India . This
                          gives a unique flavour to our campus where they bring
                          in not only the academic credentials but their
                          cultural flavour too.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingSix'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseSix'
                          aria-expanded='false'
                          aria-controls='collapseSix'
                        >
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            What kind of training do you provide your teachers?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseSix'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingSix'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          As per CBSE, We provide continuous professional
                          development and capacity building workshops throughout
                          the year.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingSeven'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseSeven'
                          aria-expanded='false'
                          aria-controls='collapseSeven'
                        >
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            Does the school have its own transport?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseSeven'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingSeven'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          Yes, the school has a dedicated transport facility for
                          students and teachers.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingEight'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseEight'
                          aria-expanded='false'
                          aria-controls='collapseEight'
                        >
                          <h4 className='pt-3 AdmissionScrollAnimeElement'>
                            Are scholarship available to students?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseEight'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingEight'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body AdmissionScrollAnimeElement'>
                          Scholarships will be provided to students at higher
                          class grades. Please contact the Admissions Officer
                          for further details.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tab-content-start */}
        </div>
      </section>
    </>
  )
}

export default Admissions
