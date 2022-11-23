import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const Admissions = () => {
  const pageTitle = 'Admissions'

  return (
    <><style>
      {` body {
  background: #f3f1f2;
  }

  `}
    </style>

      <Breadcrumb pageName={pageTitle} />

      <section className='pt-4 greybg'>
        <div className='container position-relative'>
          <div className='row py-5'>
            <h2 className={styles.headingPdng}>Admissions</h2>
          </div>
        </div>
      </section>

      <section className={styles.sectionPdng + ' greybg'}>
        <div className='container'>
          <div className='row align-items-start'>
            <div className='col-md-12 col-lg-4'>
              {/* tab-menu-start */}

              <div className={styles.tabWidth + ' nav flex-column nav-pills me-3 responsiveRow '}
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'>
                <button className={ styles.tabBtn + ' ' + styles.redBorder + ' ' + styles.responsiveRedBorder1 + ' nav-link active text-start color-black position-relative' }
                  id='v-pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-home'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-home'
                  aria-selected='true'>
                  Admission Overview
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>

                <button className={ styles.tabBtn + ' ' + styles.redBorder + ' ' + styles.responsiveRedBorder2 + ' nav-link text-start color-black position-relative' }
                  id='v-pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-profile'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-profile'
                  aria-selected='false'>
                  Admission Timeline
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>

                <button className={ styles.tabBtn + ' ' + styles.redBorder + ' ' + styles.responsiveRedBorder3 + ' nav-link text-start color-black position-relative' }
                  id='v-pills-messages-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-messages'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-messages'
                  aria-selected='false'>
                  Admission Procedure
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={styles.leftIcon}
                  />
                </button>

                <button className={ styles.tabBtn + ' ' + styles.responsiveRedBorder4 + ' nav-link text-start color-black position-relative ' }
                  id='v-pills-settings-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-settings'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-settings'
                  aria-selected='false'>
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
            <div className={' tab-pane fade show active ' + styles.Tab1BlueVector + ' ' +
              styles.tab1RedDotVector + ' ' + styles.vectorImg16 + ' ' + styles.vectorImg5}
              id='v-pills-home' role='tabpanel' aria-labelledby='v-pills-home-tab' tabIndex='0'>
              <div className='row'>
                <div className='col-lg-8 offset-lg-4 col-md-12 '>

                  <div className={styles.schoolBuilding + ' imgUpAdmission1 imgBgColorAdmission1 pastelPurple3 '}>
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={styles.schoolBuildingImg + ' img-fluid'}
                    />
                  </div>

                </div>

                <div className={ styles.cardmargin1 + ' ' + ' col-lg-8 offset-lg-2 col-md-12 position-relative ' }>
                  <div className={styles.card1 + ' card'}>
                    <div className='card-body'>
                      <h5 className='card-title ulineRed'>Admission</h5>

                      <h6 className='card-text pt-5'>
                        At VIKAS MANTRA PUBLIC SCHOOL, admissions are open
                        for
                        the academic year 2022-23 from classes Lower KG to
                        Grade
                        9. Each grade will have 3 divisions with class
                        strength
                        of no more than 30 students. At VMPS ,we aim to
                        create a
                        personalised education experience for each student
                        and
                        provide a platform to maximise each student’s
                        learning
                        and build on individual potential.
                      </h6>

                      <ul className='pt-4 list-points '>
                        <li className='pt-1'>
                          <img src="/assets/icons/blue-point.png" alt='list-point' />
                          To find out more about admissions at VIKAS MANTRA
                          PUBLIC SCHOOL or to visit the school for an
                          admissions
                          tour
                        </li>
                        <li className='pt-1'>
                          <img src="/assets/icons/pink-point.png" alt='list-point' />
                          Please contact the Admission Coordinator between
                          8.30
                          am and 4.30 pm., Mon-Sat | 9.00 am – 1.00 pm on
                          Saturdays (Except 2nd Sat)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={ ' tab-pane fade ' + ' ' + styles.vectorImg3 + ' ' + styles.vectorImg9 }
              id='v-pills-profile'
              role='tabpanel'
              aria-labelledby='v-pills-profile-tab'
              tabIndex='0'>
              <div className={'row '}>

                <div className={styles.Sec2PdngBtm + ' col-lg-8 offset-lg-4 col-md-12'}>

                  <div className={' imgUpAdmission2 imgBgColorAdmission2 pastelBlue3'}>
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={styles.schoolBuildingImg + ' img-fluid'}
                    />
                  </div>

                </div>

                <div className='col-md-8 offset-md-2'>
                  <div></div>
                </div>

                <div className={ styles.order3 + ' col-lg-6 col-md-12 py-5 dot-vector-before' + ' ' + styles.tab2RedDotVector }>
                  <img
                    src='/assets/banners/student.png'
                    alt='image'
                    className={styles.studentImg}
                  />
                </div>

                <div
                  className={
                    styles.order2 + ' col-lg-5 col-md-12 py-5 position-relative '
                  }>
                  <img
                    src='/assets/VMPS.png'
                    alt='image'
                    className={styles.Sec2vmpsImg}
                  />

                  <h2 className='ulineRed'>
                    Timelines and key milestones for the academic year
                    2022-23
                    VIKAS MANTRA PUBLIC SCHOOL admissions process
                  </h2>

                  <div className='pt-5'>
                    <table
                      className={
                        ' table table-bordered ' + styles.tableContainer
                      }>
                      <tbody className={styles.tableBody}>
                        <tr className={styles.tableTr}>
                          <td>Admissions Open</td>
                          <td>15th October 2021</td>
                        </tr>

                        <tr>
                          <td>Application forms available from</td>
                          <td>15th October 2021</td>
                        </tr>

                        <tr>
                          <td>Rolling-admissions start date</td>
                          <td>15th October 2021</td>
                        </tr>

                        <tr>
                          <td>Admissions open till</td>
                          <td>30th June 2022</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className=' pt-3'>
                    Please note that Admissions for the new academic year
                    2022-23 at VIKAS MANTRA PUBLIC SCHOOL will commence from
                    23rd November 2021 and the admissions will for this
                    academic
                    year will be closed on 30th June 2022.
                  </p>
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
              tabIndex='0'>
              <div className={'row ' + styles.MobTextNone}>
                <div className=' col-lg-8 offset-lg-4 col-md-12'>

                  <div className='imgUpAdmission2 imgBgColorAdmission2 pastelGold1 '>
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={styles.schoolBuildingImg}
                    />
                  </div>
                </div>

                <div className={ styles.cardmargin3 + ' col-md-12 col-lg-8 offset-lg-2 position-relative ' + ' ' + styles.tab3VectorSpiralBlue }>
                  <div className={styles.card2 + ' card'}>
                    <div className='card-body'>
                      <h5 className='card-title ulineRed'>
                        Eligibility Criteria for all classes
                      </h5>

                      <ul className='pt-5 list-points'>
                        <li className='pt-1'>
                          <img src="/assets/icons/blue-point.png" alt='list-point' />
                          Kindergarten – To be eligible for admission, the
                          child
                          must fall into the following age category as
                          prescribed and suggested by the central board of
                          secondary education.
                        </li>
                        <li className='pt-1'>
                          <img src="/assets/icons/pink-point.png" alt='list-point' />
                          For Junior KG the child must have completed 3. 5
                          years
                          as on 30th June.
                        </li>
                        <li className='pt-1'>
                          <img src="/assets/icons/yellow-point.png" alt='list-point' />
                          For Senior KG the child must have completed 4.5
                          years
                          as on 30th June.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mt-5 '>
                  <h2 className='ulineRed'>Admissions Procedure</h2>
                </div>

                <div className='col-md-6'>
                  <div></div>
                </div>

                <div className='row pt60 '>
                  <div className='col-lg-4 col-md-6 col-sm-12 '>
                    <div className='card-wrapper one'>
                      <div className='card-header'>
                        <h1 className='card-header-text2'>
                          Obtain Admissions Kit
                        </h1>
                        <p className='card-header-text3'>
                          Visit the school , meet our admissions officer.
                          Take a
                          tour of the school. Obtain the Admissions Kit from
                          the
                          Admissions Office for Rs.600, payable by cash or
                          card.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap'>
                            <h1>01</h1>
                            <p>step</p>
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
                      <div className='card-header'>
                        <h1 className='card-header-text2'>
                          Submit Application
                        </h1>
                        <p className='card-header-text3'>
                          Submit the completed Application Form and all
                          supporting documents as per instructions and
                          wait to
                          be called for a personal interview.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap'>
                            <h1>02</h1>
                            <p>step</p>
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

                    <div className="card-wrapper one">
                      <div className="card-header">
                        <h1 className="card-header-text2">Interaction
                          and Interview</h1>
                        <p className="card-header-text3">
                          Diagnostic tests in Math & Science and Tests
                          of fluency in
                          English will be conducted for students
                          applying from Grade I.
                          Then, personal interviews will be conducted to
                          understand their
                          skills. For Kindergarten classes, interactions
                          will be held for
                          both children and parents.</p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap'>
                            <h1>03</h1>
                            <p>step</p>
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
                      <div className='card-header'>
                        <h1 className='card-header-text2'>Admission
                          Results</h1>
                        <p className='card-header-text3'>
                          Admissions results emailed within 5 working
                          days.
                          After which parents can pay the fees within
                          7 days to
                          confirm the slot.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap'>
                            <h1>04</h1>
                            <p>step</p>
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
                      <div className='card-header'>
                        <h1 className='card-header-text2'>Admission
                          Fee</h1>
                        <p className='card-header-text3'>
                          Upon receipt of Confirmation Letter,
                          payment of a
                          one-time non-refundable Admission Fee*
                          within 15 days
                          to be paid along with the first term and
                          school
                          essentials fee.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='footer-content-wrap'>
                          <div className='footer-text-wrap'>
                            <h1>05</h1>
                            <p>step</p>
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
                  <p className='mb-5'>
                    Following the VIKAS MANTRA PUBLIC SCHOOL
                    admissions process,
                    the decision to accept a student is based upon
                    a number of
                    factors, including academic potential,
                    previous academic
                    achievements, extra-curricular accomplishments
                    and
                    availability of space in each class. Special
                    consideration
                    will be given to qualified applicants who are
                    siblings of
                    alumni or students currently attending VIKAS
                    MANTRA PUBLIC
                    SCHOOL.
                  </p>
                </div>

                <div className={'col-md-10 '}>
                  <h2 className=' mt-5 mb-3'>Admissions
                    Requirements</h2>

                  <h4>Documents Required:</h4>

                  <p>
                    As part of the application process, parents
                    are requested to
                    prepare the following documents for submission
                    to the
                    school.
                  </p>

                  <ul className={styles.ulLineHeight + ' list-points'}>
                    <li>
                      <img src="/assets/icons/blue-point.png" alt='list-point' />
                      Application Form, duly filled
                    </li>
                    <li>
                      <img src="/assets/icons/pink-point.png" alt='list-point' />
                      3 colour Photos
                    </li>
                    <li>
                      <img src="/assets/icons/yellow-point.png" alt='list-point' />
                      Report from Previous School (if available)
                    </li>
                    <li>
                      <img src="/assets/icons/green-point.png" alt='list-point' />
                      Copy of the Student’s Aadhar / Passport (if
                      available)
                    </li>
                    <li>
                      <img src="/assets/icons/red-point.png" alt='list-point' />
                      Copy of the Student’s Birth Certificate in
                      case of (PIO
                      holders)
                    </li>
                    <li>
                      <img src="/assets/icons/orange-point.png" alt='list-point' />
                      Copy of any one of the following as proof of
                      Residence for
                      Parents:{' '}
                    </li>

                    <li className='mt-3 ms-3'>
                      <img src="/assets/icons/lightblue.png" alt='list-point' />
                      Passport/Aadhar / Ration /Voter ID card
                    </li>
                    <li className='ms-3'>
                      <img src="/assets/icons/lightgreen-point.png" alt='list-point' />
                      Most recent water/telephone/electricity/gas
                      bill/ rental
                      agreement
                    </li>
                  </ul>

                  <p className=''>
                    Please refer to the checklist provided with
                    the admissions
                    package for a comprehensive list of documents
                    required for
                    the admissions process.
                  </p>

                  <h2 className='mt-5'>
                    Procedures to be followed while filling up the
                    form
                  </h2>

                  <ul className={styles.ulLineHeight + ' position-relative list-points '}>
                    <li>
                      <img src="/assets/icons/darkblue-point.png" alt='list-point' />
                      Application form to be submitted within 5
                      working days
                      after buying the form. Duly filled in forms
                      are to be
                      submitted along with copy of birth
                      certificate, address
                      proof, copy of Aadhar, UDIS number ( for
                      students from
                      grade 2 onwards) along with 2 photographs of
                      the child.
                      Please note that without these documents the
                      form will not
                      be accepted. Kindly avoid further requests.
                    </li>

                    <li>
                      <img src="/assets/icons/yellow-point.png" alt='list-point' />
                      Admission at Vikas Mantra Public School will
                      be on first
                      on first come basis.
                    </li>

                    <li>
                      <img src="/assets/icons/red-point.png" alt='list-point' />
                      Admission for the academic year will be done
                      till the 30th
                      of June every year based on the availability
                      of seats in
                      each class.
                    </li>

                    <li>
                      <img src="/assets/icons/green-point.png" alt='list-point' />
                      Each class is limited to 35 students only.</li>
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
              tabIndex='0'>
              <div className='row'>
                <div className='col-lg-8 offset-lg-4 col-md-12'>

                  <div className='imgUpAdmission2 imgBgColorAdmission2 pastelGreen3'>
                    <img
                      src='/assets/banners/school-building2.png'
                      alt='image'
                      className={styles.schoolBuildingImg}
                    />
                  </div>
                </div>

                <div
                  className={
                    styles.sectionPdng4 + ' col-md-10 position-relative'}>
                  <img
                    src='/assets/VMPS.png'
                    alt='image'
                    className={styles.Sec4vmpsImg}
                  />

                  <h2 className='ulineRed'>FAQ</h2>

                  <div
                    className={'accordion pt-5 ' +
                      styles.accordionExample}
                    id='accordionExample'>
                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingSeven'>
                        <button
                          className='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseSeven'
                          aria-expanded='false'
                          aria-controls='collapseSeven'>
                          <h4 className='pt-3'>
                            How do you make decision on admission?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseSeven'
                        className='accordion-collapse collapse
                                      show'
                        aria-labelledby='headingSeven'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          <p>
                            Admission decisions are made purely on
                            first come
                            first serve basis for lower classes.
                            It is also made
                            on merit, aptitude of the applicant,
                            and involvement
                            of parents in the applicant’s
                            education. Special
                            consideration will be given to
                            qualified applicants
                            who are siblings of alumni or students
                            currently
                            attending VIKAS MANTRA PUBLIC SCHOOL.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingOne'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'>
                          <h4 className='pt-3'>Do you have a wait
                            list?</h4>
                        </button>
                      </h2>
                      <div
                        id='collapseOne'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingOne'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          Yes we do have. A wait list will be
                          created once seats
                          are filled by deserving students on
                          first come first
                          serve basis.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingTwo'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseTwo'
                          aria-expanded='false'
                          aria-controls='collapseTwo'>
                          <h4 className='pt-3'>How are students
                            assessed?</h4>
                        </button>
                      </h2>
                      <div
                        id='collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          Applicants to the early years (KG ) are
                          assessed
                          purely on their interaction with the
                          respective heads.
                          Applicants in 1st grade and above are
                          assessed on
                          their written and oral tests
                          administered by the
                          school. Parent&apos;s approach to
                          education and their
                          involvement in their child&apos;s life
                          plays an even
                          more critical role.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingThree'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'>
                          <h4 className='pt-3'>
                            How are parents involved in the school
                            community?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          VIKAS MANTRA PUBLIC SCHOOL is keen to
                          promote talents
                          and resources that are available in the
                          parent
                          community ; that can enrich our school
                          programme. As
                          such, parents are encouraged to
                          participate in the
                          school community and enhance the
                          learning experience
                          of the students either being a volunteer
                          in the
                          library, story telling or chaperoning
                          during a field
                          trip, or being a guest lecture or by
                          being a
                          substitute teacher when the need arises.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingFour'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseFour'
                          aria-expanded='false'
                          aria-controls='collapseFour'>
                          <h4 className='pt-3'>
                            What is the student teacher ratio in
                            each class?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseFour'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingFour'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          As per the CBSE guidelines we follow an
                          1:35 ratio in
                          our classes.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingFive'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseFive'
                          aria-expanded='false'
                          aria-controls='collapseFive'>
                          <h4 className='pt-3'>
                            Where are your teachers from?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseFive'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingFive'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          Our teachers are from various parts of
                          India . This
                          gives a unique flavour to our campus
                          where they bring
                          in not only the academic credentials but
                          their
                          cultural flavour too.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingSix'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseSix'
                          aria-expanded='false'
                          aria-controls='collapseSix'>
                          <h4 className='pt-3'>
                            What kind of training do you provide
                            your teachers?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseSix'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingSix'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          As per CBSE, We provide continuous
                          professional
                          development and capacity building
                          workshops throughout
                          the year.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingSeven'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseSeven'
                          aria-expanded='false'
                          aria-controls='collapseSeven'>
                          <h4 className='pt-3'>
                            Does the school have its own
                            transport?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseSeven'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingSeven'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          Yes, the school has a dedicated
                          transport facility for
                          students and teachers.
                        </div>
                      </div>
                    </div>

                    <div className='accordion-item'>
                      <h2 className='accordion-header'
                        id='headingEight'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseEight'
                          aria-expanded='false'
                          aria-controls='collapseEight'>
                          <h4 className='pt-3'>
                            Are scholarship available to students?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id='collapseEight'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingEight'
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          Scholarships will be provided to
                          students at higher
                          class grades. Please contact the
                          Admissions Officer
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
        </div >
      </section >
    </>)
}

export default Admissions

