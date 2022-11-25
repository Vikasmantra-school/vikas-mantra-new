import React, { useEffect } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

function CurriculumFrameWork() {
  const pageTitle = 'Learning'

  function progressClick(e) {}

  useEffect(() => {
    // progress timeline
    let learningDivs = document.querySelectorAll('.learningDivs')
    window.addEventListener('scroll', Scroll, false)

    function Scroll() {
      learningDivs.forEach((lds) => {
        let sectionTop = lds.getBoundingClientRect().top
        var ids = lds.getAttribute('id')
        var id = document.getElementById(ids + '-li')

        if (id.previousElementSibling !== null && sectionTop < 60) {
          id.previousElementSibling.children[0].classList.add('green')
          id.previousElementSibling.children[0].classList.remove('grey')
          id.classList.add('green')
          id.classList.remove('grey')
        } else if (id.previousElementSibling !== null && sectionTop > 30) {
          id.previousElementSibling.children[0].classList.remove('green')
          id.previousElementSibling.children[0].classList.add('grey')
          id.classList.remove('green')
          id.classList.add('grey')
        } else {
        }
      })
    }
  }, [])
  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>

              <div className='AnimeStarts'>
                <h2 className='AnimeElement'>Curriculum Framework</h2>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section
        className={
          'whitebg' +
          ' ' +
          'pt60' +
          ' ' +
          'pb60' +
          ' ' +
          'bglogo VectorDot VectorSpiralCenter'
        }
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 curriculum-tab'>
              <div className='mb-5 learningDivs' id='vikas-mantra'>

                <div className='AnimeStarts'>
                  <h4 className='ulineRed AnimeElement'>
                    VIKAS MANTRA PUBLIC SCHOOL Co-curricular offers students a
                    diverse Co-curricular programme which includes, Sports, Arts,
                    Music, Dance and Computer Education
                  </h4>
                </div>

                <div className='AnimeStarts'>
                  <p className='pt-4 AnimeElement'>
                    The VIKAS MANTRA PUBLIC SCHOOL Co-curricular programme is
                    central to our philosophy of providing a platform for
                    all-round development of students. The co-curricular agenda is
                    broad, diverse and meant to engage students in activities
                    beyond academics. The Primary, Middle, and High Schools each
                    organize and participate in a mix of activities and events
                    that are age-appropriate and challenging. Our co-curricular
                    programme allows students to apply what they have learnt in
                    the classroom, explore new interests and develop a new
                    dimension to their personality.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <p className='AnimeElement'>
                    Within the co-curricular programme, VIKAS MANTRA PUBLIC SCHOOL
                    Co-curricular lays particular emphasis on various Art forms.
                    The Arts are an integral part of our programme, in keeping
                    with our educational philosophy which is devoted to
                    cultivating well-rounded students. When our students work
                    together to organise a musical production or think critically
                    about 3D modelling or put together a mural, they are involved
                    in experiences that help build confidence and creativity that
                    can be applied to any human enterprise.
                  </p>
                </div>

              </div>

              <div className='mb-3 pt-4 learningDivs' id='sports'>

                <div className='AnimeStarts'>
                  <h4 className={styles.vectorImg2 + ' ulineRed AnimeElement '}>Sports</h4>
                </div>

                <div className='AnimeStarts'>
                  <p className='pt-4 AnimeElement'>
                    Sports form a cornerstone of student activities at VIKAS
                    MANTRA PUBLIC SCHOOL and help students find a balance between
                    athletic and academic pursuits. Our sports programme
                    reinforces and implements our aim to provide each student with
                    a well-rounded experience. At VIKAS MANTRA PUBLIC SCHOOL,
                    sports activities embody values such as commitment,
                    sportsmanship, teamwork, resilience, and healthy competition.
                    VIKAS MANTRA PUBLIC SCHOOL students live, breathe and imbibe
                    these values by learning valuable lessons through practice and
                    dedication, and from winning and losing on the playing field.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <p className='py-2 AnimeElement'>
                    <b>
                      Sports activities are broken down largely into indoor and
                      outdoor sports
                    </b>
                  </p>
                </div>

                <div className={styles.navTabContainer + ' greybg'}>
                  <nav className='curriculumNav'>
                    <div className='nav nav-tabs greybg AnimeStarts ' id='nav-tab' role='tablist' >
                      <button className='nav-link color-black active text-start' id='nav-home-tab' data-bs-toggle='tab' data-bs-target='#nav-home' type='button' role='tab' aria-controls='nav-home' aria-selected='true' >
                        <p className={' m-0 AnimeElement ' + ' ' + styles.highlights}>
                          Highlights of
                          <br />
                          <span>Indoor sports activities</span>
                        </p>
                      </button>

                      <button
                        className='nav-link color-black text-start'
                        id='nav-profile-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#nav-profile'
                        type='button'
                        role='tab'
                        aria-controls='nav-profile'
                        aria-selected='false'
                      >
                        <p className={' m-0 AnimeElement ' + ' ' + styles.highlights}>
                          Highlights of
                          <br />
                          <span>Outdoor sports activities</span>
                        </p>
                      </button>
                    </div>
                  </nav>

                  <div className='tab-content' id='nav-tabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='nav-home'
                      role='tabpanel'
                      aria-labelledby='nav-home-tab'
                      tabIndex='0'
                    >
                      <ul className='mb-0 list-points AnimeStarts'>
                        <li className='pt-4 AnimeElement'>
                          <img
                            src='/assets/icons/green-point.png'
                            alt='list-point'
                          />{' '}
                          Physical Education and Yoga form core elements of the
                          sports curriculum
                        </li>

                        <li className='pt-3 AnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                          />{' '}
                          Well designed, spacious and child-safe play
                          environment for younger students
                        </li>

                        <li className='py-3 AnimeElement'>
                          <img
                            src='/assets/icons/red-point.png'
                            alt='list-point'
                          />{' '}
                          Common room for indoor sports such as Table Tennis,
                          Carrom and Chess
                        </li>
                      </ul>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='nav-profile'
                      role='tabpanel'
                      aria-labelledby='nav-profile-tab'
                      tabIndex='0'
                    >
                      <ul className='mb-0 list-points AnimeStarts'>
                        <li className='pt-4 AnimeElement'>
                          <img
                            src='/assets/icons/green-point.png'
                            alt='list-point'
                          />
                          1.5 acre playground for outdoor sports such as
                          Football, Cricket and Athletics
                        </li>

                        <li className='pt-3 AnimeElement'>
                          <img
                            src='/assets/icons/pink-point.png'
                            alt='list-point'
                          />
                          Dedicated Volleyball and Basketball courts
                        </li>

                        <li className='py-3 AnimeElement'>
                          <img
                            src='/assets/icons/red-point.png'
                            alt='list-point'
                          />
                          Specialised training in Basketball, Football and
                          Athletics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mb-3 pt-4 AnimeStarts'>

                <p className='pt-2 AnimeElement'>
                  VIKAS MANTRA PUBLIC SCHOOL will partner with nearby gymkhana
                  facilities to provide access to other sports such as swimming,
                  tennis, badminton and squash.
                </p>

                <p className='py-2 AnimeElement'>
                  Sports at VIKAS MANTRA PUBLIC SCHOOL represent one side of
                  non-academic learning and are supported by a robust
                  Co-Curricular programme.
                </p>

              </div>

              <div className={styles.navTabContainer + ' greybg mt-3'}>
                <nav className='curriculumNav'>
                  <div className='nav nav-tabs greybg curriculum-tab-1 AnimeStarts' id='nav-tab' role='tablist' >
                    <button
                      className='nav-link color-black active text-start'
                      id='nav-dance-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-dance'
                      type='button'
                      role='tab'
                      aria-controls='nav-Dance'
                      aria-selected='true'
                    >
                      <h6 className='AnimeElement'>Dance</h6>
                    </button>

                    <button
                      className='nav-link color-black text-start '
                      id='nav-music-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-music'
                      type='button'
                      role='tab'
                      aria-controls='nav-Music'
                      aria-selected='false'
                    >
                      <h6 className='AnimeElement'>Music</h6>
                    </button>

                    <button
                      className='nav-link color-black text-start'
                      id='nav-theater-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-theater'
                      type='button'
                      role='tab'
                      aria-controls='nav-theater'
                      aria-selected='false'
                    >
                      <h6 className='AnimeElement'>Theater</h6>
                    </button>

                    <button
                      className='nav-link color-black text-start'
                      id='nav-visualArt-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-visualArt'
                      type='button'
                      role='tab'
                      aria-controls='nav-visualArt'
                      aria-selected='false'
                    >
                      <h6 className='AnimeElement'>Visual Art</h6>
                    </button>
                  </div>
                </nav>

                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active '
                    id='nav-dance'
                    role='tabpanel'
                    aria-labelledby='nav-dance-tab'
                    tabIndex='0'
                  >

                    <div className='AnimeStarts'>
                      <p className='pt-3 AnimeElement'>
                        The dance programme part of VIKAS MANTRA PUBLIC SCHOOL
                        Co-curricular includes traditional Indian classical dance
                        techniques such as Bharatnatyam , Folk as well as Western
                        dance forms. Dance provides students with an opportunity
                        to find creative expression and cultural exposure.
                        Physical dance lessons are combined with lessons on the
                        history of dance and discussions on the cultural context
                        of the dance form.
                      </p>
                    </div>

                  </div>

                  <div
                    className='tab-pane fade '
                    id='nav-music'
                    role='tabpanel'
                    aria-labelledby='nav-music-tab'
                    tabIndex='0'
                  >

                    <div className='AnimeStarts'>
                      <p className='pt-3 AnimeElement'>
                        Students at VIKAS MANTRA PUBLIC SCHOOL are exposed to both
                        Indian and Western music forms. Indian music allows
                        students to immerse themselves in India’s rich cultural
                        heritage and history. Western music gives students a wider
                        context and sensitises them to appreciating art forms that
                        are foreign and new. Besides Theory of Music lessons and
                        classes for practising vocal and instrumental music, the
                        school Band and the Choir provide platforms where students
                        can perform and showcase their talent.
                      </p>
                    </div>

                  </div>

                  <div
                    className='tab-pane fade '
                    id='nav-theater'
                    role='tabpanel'
                    aria-labelledby='nav-theater-tab'
                    tabIndex='0'
                  >

                    <div className='AnimeStarts'>
                      <p className='pt-3 AnimeElement'>
                        At VIKAS MANTRA PUBLIC SCHOOL, offerings in theatre
                        include basic acting, advanced improvisation, technical
                        theatre and film analysis classes. Dramatic productions,
                        including musicals and plays, are staged at regular
                        intervals. Theatre allows our students to be creative and
                        serves as an outlet for individual expression. Students
                        are also exposed to film and drama screenings and to guest
                        lectures by renowned theatre personalities.
                      </p>
                    </div>

                  </div>

                  <div
                    className='tab-pane fade'
                    id='nav-visualArt'
                    role='tabpanel'
                    aria-labelledby='nav-visualArt-tab'
                    tabIndex='0'
                  >
                    <div className='AnimeStarts'>
                      <p className='pt-3 AnimeElement'>
                        Art forms such as modelling, sculpting, animation and
                        photography provide our students with an opportunity to
                        learn art theory, investigate new ideas and explore their
                        creativity through diverse techniques and materials.
                        Guided by a faculty of dedicated art teachers who are
                        committed to nurturing, challenging, and inspiring young
                        artists to think outside the box, VIKAS MANTRA PUBLIC
                        SCHOOL students experience the thrill and importance of
                        visual arts in a tangible and meaningful way. The
                        Co-Curricular programme at VIKAS MANTRA PUBLIC SCHOOL is
                        supported by a wide variety of Sports activities.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className='AnimeStarts'>
                <h4 className=' ulineRed pt-5 AnimeElement ' id='other-learning-Opportunities'>
                  Other Learning Opportunities
                </h4>
              </div>

              <div className='AnimeStarts'>
                <p className='pt-4 AnimeElement'>
                  Co-curricular programmes. While our core programme is aimed at
                  formal learning, a range of in-house clubs, field trips and
                  community service initiatives provide students much-needed
                  interaction with the environment that we live in. These
                  alternate learning opportunities help students enhance group
                  interaction skills, create interdependence and foster team
                  spirit.
                </p>
              </div>

              <div className={styles.navTabContainer3 + ' greybg'}>
                <nav className='curriculumNav'>
                  <div
                    className='nav nav-tabs greybg curriculum-tab-1 AnimeStarts '
                    id='nav-tab'
                    role='tablist'
                  >
                    <button
                      className='nav-link color-black active text-start '
                      id='nav-studentClub-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-studentClub'
                      type='button'
                      role='tab'
                      aria-controls='nav-studentClub'
                      aria-selected='true'
                    >
                      <h6 className='AnimeElement'>Student Clubs</h6>
                    </button>

                    <button
                      className='nav-link color-black text-start '
                      id='nav-communityServices-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-communityServices'
                      type='button'
                      role='tab'
                      aria-controls='nav-communityServices'
                      aria-selected='false'
                    >
                      <h6 className='AnimeElement'>Community Service</h6>
                    </button>

                    <button
                      className='nav-link color-black text-start '
                      id='nav-fieldTrip-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-fieldTrip'
                      type='button'
                      role='tab'
                      aria-controls='nav-fieldTrip'
                      aria-selected='false'
                    >
                      <h6 className='AnimeElement'>Field Trips and Excursions</h6>
                    </button>
                  </div>
                </nav>

                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-studentClub'
                    role='tabpanel'
                    aria-labelledby='nav-studentClub-tab'
                    tabIndex='0'
                  >
                    <div className='AnimeStarts'>
                      <p className='pt-3 AnimeElement'>
                        Students are encouraged to participate in clubs which
                        provide an early exposure to life beyond academics. These
                        clubs provide an avenue for students to explore their
                        personal interests through fun social activities.
                      </p>
                    </div>

                    <div className='AnimeStarts'>
                      <h6 className='AnimeElement'>Clubs at VIKAS MANTRA PUBLIC SCHOOL</h6>
                    </div>

                    <ul className='list-points AnimeStarts'>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/blue-point.png'
                          alt='list-point'
                        />
                        Eco club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/pink-point.png'
                          alt='list-point'
                        />
                        Photography club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/yellow-point.png'
                          alt='list-point'
                        />
                        Robotics club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/lightgreen-point.png'
                          alt='list-point'
                        />
                        Cookery club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/orange-point.png'
                          alt='list-point'
                        />
                        Math club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/darkblue-point.png'
                          alt='list-point'
                        />
                        Literary club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/red-point.png'
                          alt='list-point'
                        />
                        Theatre club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/lightblue.png'
                          alt='list-point'
                        />
                        Social Welfare club
                      </li>
                      <li className='pt-3 AnimeElement'>
                        <img
                          src='/assets/icons/green-point.png'
                          alt='list-point'
                        />
                        Astronomy club
                      </li>
                    </ul>
                  </div>

                  <div
                    className='tab-pane fade '
                    id='nav-communityServices'
                    role='tabpanel'
                    aria-labelledby='nav-communityServices-tab'
                    tabIndex='0'
                  >

                    <div className='AnimeStarts'>
                      <p className='pt-3 AnimeElement'>
                        Community service forms the third pillar of the alternate
                        learning platform at VIKAS MANTRA PUBLIC SCHOOL. We
                        believe that Community Service plays a key role in
                        developing a sense of social responsibility amongst
                        students and its maximum impact is when this sense is
                        developed at an early age. Community Service activities
                        provide students with an opportunity to learn about their
                        communities, serve those living in their communities and
                        learn from those experiences.
                      </p>
                    </div>

                    <div className='AnimeStarts'>
                      <p className='AnimeElement'>
                        Right from Elementary School all the way up to High
                        School, students and teachers participate in
                        community-oriented activities. Throughout the year,
                        students engage in programmes which connect them to local
                        community organizations. One such organization that they
                        work closely with is the VIKAS MANTRA PUBLIC SCHOOL
                        Foundation which allows VIKAS MANTRA PUBLIC SCHOOL
                        students to participate in social activities organized to
                        benefit students of weaker classes of society. These
                        collectively help build a sense of grassroots reality
                        within our students and help them give back to the society
                        to which they belong.
                      </p>
                    </div>

                  </div>

                  <div
                    className='tab-pane fade AnimeStarts'
                    id='nav-fieldTrip'
                    role='tabpanel'
                    aria-labelledby='nav-fieldTrip-tab'
                    tabIndex='0'
                  >

                    <p className='pt-3 AnimeElement'>
                      Field trips augment classroom learning at VIKAS MANTRA
                      PUBLIC SCHOOL. They not only provide a break from the
                      routine of chalk and books but also serve to expand
                      student horizons through interaction with the local
                      community. Field trips in the early learning years serve
                      as an opportunity for our younger students to experience a
                      world outside school and incorporate enquiry based
                      learning platforms. These outings also enable students and
                      their teachers to interact in a more informal setting
                      creating opportunities to build on interpersonal skills
                      and student-teacher relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='imgUp imgBgColor pastelBlue AnimeStarts'>
                <img
                  src='/assets/curriculum-framework.png'
                  alt='image'
                  className='img-fluid AnimeElement'
                />
              </div>
              <div className={'sticky-sidebar VectorSpiralBlue' + ' ' + 'pt60'}>
                <ul id='progress'>
                  <li id='vikas-mantra-li ' className={'node' + ' AnimeStarts ' + 'green'}>
                    <Link href='#sports' legacyBehavior>
                      <a>
                        <p className='AnimeElement'> Sports</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li id='sports-li' className={'node' + ' AnimeStarts ' + 'grey'}>
                    <Link legacyBehavior href='#other-learning-Opportunities'>
                      <a onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Other Learning Opportunities</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default CurriculumFrameWork
