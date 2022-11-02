import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const VisionAndPhilosophy = () => {
  const pageTitle = 'About'

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className='pt-4'>
        <div className='container position-relative'>
          <div className='row py-5'>
            <div className='col-md-6'>
              <h2 className={styles.headingPdng}>Our Vision And Philosophy</h2>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.sectionPdng +
          ' greybg position-relative ' +
          ' ' +
          styles.vectorImg5
        }
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 position-relative'>
              <img
                src='/assets/banners/school-building.png'
                alt='image'
                className={styles.schoolBuildingImg}
              />

              <img
                src='/assets/VMPS.png'
                alt='image'
                className={styles.vmpsImg}
              />
            </div>

            <div className='col-md-6 navTab vision-1-Tab'>
              <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link color-black active'
                    id='home-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#home-tab-pane'
                    type='button'
                    role='tab'
                    aria-controls='home-tab-pane'
                    aria-selected='true'
                  >
                    Our Vision
                  </button>
                </li>

                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link color-black'
                    id='profile-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#profile-tab-pane'
                    type='button'
                    role='tab'
                    aria-controls='profile-tab-pane'
                    aria-selected='false'
                  >
                    Our Mission
                  </button>
                </li>
              </ul>

              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home-tab-pane'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                  tabindex='0'
                >
                  <div className='pt-3'>
                    <h2 className='ulineRed'>Our Vision</h2>

                    <p className='pt-5'>
                      Our Vision is to develop knowledgeable, adaptable,
                      responsible compassionate and caring young people with the
                      much needed survival and employable skills to create a
                      peaceful world through intercultural understanding and
                      respect.
                    </p>
                  </div>
                </div>

                <div
                  className='tab-pane fade'
                  id='profile-tab-pane'
                  role='tabpanel'
                  aria-labelledby='profile-tab'
                  tabindex='0'
                >
                  <div className='pt-3'>
                    <h2 className='ulineRed'>Our Mission</h2>
            
                    <p className='pt-5'>
                      Our Mission is to develop knowledgeable, adaptable,
                      responsible compassionate and caring young people with the
                      much needed survival and employable skills to create a
                      peaceful world through intercultural understanding and
                      respect.
                    </p>
                  </div>
                </div>
              </div>

              <div className='pt-5 position-relative'>
                {/* <img src='/assets/vectors/Vector5.png' alt="image" className={styles.vectorImg5} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.sectionPdng +
          ' greybg position-relative' +
          ' ' +
          styles.vectorImg3 +
          ' ' +
          styles.vectorImg6
        }
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 className='ulineRed'>As learners we all strive to be:</h2>
            </div>

            <div className={styles.colpdngRt + ' col-md-6 position-relative'}>

              {/* <img src='/assets/vectors/Vector3.png' alt="image" className={styles.vectorImg3} /> */}

              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>1</h1>
                </div>

                <div>
                  <h2>Inquirers:</h2>

                  <p>
                    We nurture curiosity while developing skills for inquiry and
                    research. We know how to make children learn independently
                    and with others. We make them learn with enthusiasm and
                    sustain their love of learning throughout life.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngLt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>2</h1>
                </div>

                <div>
                  <h2>Caring :</h2>

                  <p>
                    We show empathy, compassion and respect. We have a
                    commitment to service, and we act to make a positive
                    difference in the lives of others and in the world around
                    us.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngRt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>3</h1>
                </div>

                <div>
                  <h2>Knowledgeable :</h2>

                  <p>
                    We develop and use conceptual understanding across a range
                    of disciplines. We engage the students with issues and ideas
                    that have local and global significance.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngLt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>4</h1>
                </div>

                <div>
                  <h2>Risk-takers :</h2>

                  <p>
                    We approach uncertainty with forethought and determination;
                    we work independently and cooperatively to explore new ideas
                    and innovative strategies. We are resourceful and resilient
                    in the face of challenges and change.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngRt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>5</h1>
                </div>

                <div>
                  <h2>Thinkers :</h2>

                  <p>
                    We use critical and creative thinking skills to make our
                    students analyse and take responsible action on complex
                    problems. We exercise initiative in making the students to
                    take reasoned, ethical decisions.
                  </p>

                  <p>
                    Communicators : We ensure that our students express
                    confidently and creatively in more than one language and in
                    many ways. We make them collaborate effectively, listening
                    carefully to the perspectives of other individuals and
                    groups.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngLt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>6</h1>
                </div>

                <div>
                  <h2>Balanced :</h2>

                  <p>
                    We understand the importance of balancing different aspects
                    of our lives – intellectual, physical, and emotional – to
                    achieve well-being for ourselves and others. We recognise
                    our interdependence with other people and with the world in
                    which we live and we make sure that this is passed on to our
                    students as well .
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngRt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>7</h1>
                </div>

                <div>
                  <h2>Principled :</h2>

                  <p>
                    We act with integrity and honesty, with a strong sense of
                    fairness and justice, and with respect for the dignity and
                    rights of people everywhere. We take responsibility for our
                    actions and their consequences.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngLt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>8</h1>
                </div>

                <div>
                  <h2>Reflective :</h2>

                  <p>
                    We make our students to thoughtfully consider the world and
                    their own ideas and experience. We make them work to
                    understand their strengths and weaknesses in order to
                    support learning and personal development. We believe these
                    attributes, and others like them, can help individuals and
                    groups become responsible members of local, national and
                    global communities.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colpdngRt + ' col-md-6'}>
              <div className='d-flex align-items-start text-justify'>
                <div className='position-relative'>
                  <h1 className={styles.numberStyle}>9</h1>
                </div>

                <div>
                  <h2>Open-minded :</h2>

                  <p>
                    We critically appreciate our own cultures and personal
                    histories, as well as the values and traditions of others.
                    We make sure that our students seek and evaluate a range of
                    points of view, so that they are willing to grow from the
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 position-relative'>
              {/* <img src='/assets/vectors/Vector6.png' alt="image" className={styles.vectorImg6} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default VisionAndPhilosophy
