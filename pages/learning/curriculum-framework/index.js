import React, { useEffect } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

function CurriculumFrameWork() {

  const pageTitle = 'Learning'

  function progressClick(e) {
    const progressLink = e.target.closest('li')
    const progressLinkNode = e.target.parentNode.parentNode.previousSibling
    progressLink.classList.add('green')
    progressLink.classList.remove('grey')
    progressLink.classList.add('activated')
    progressLinkNode.classList.add('dividerActivated')
  }

  useEffect(() => {
    var list = document.getElementById('progress'),
      next = document.getElementById('next'),
      clear = document.getElementById('clear'),
      children = list.children,
      completed = 0
    // simulate activating a node
    next.addEventListener(
      'click',
      function () {
        // count the number of completed nodes.
        completed = completed === 0 ? 1 : completed + 2
        if (completed > children.length) return
        // for each node that is completed, reflect the status
        // and show a green color!
        for (var i = 0; i < completed; i++) {
          console.log(children[i].children[0])
          children[i].children[0].classList.remove('grey')
          children[i].children[0].classList.add('green')
          // if this child is a node and not divider,
          // make it shine a little more
          if (i % 2 === 0) {
            children[i].children[0].classList.add('activated')
          }
        }
      },
      false
    )
    // clear the activated state of the markers
    clear.addEventListener(
      'click',
      function () {
        for (var i = 0; i < children.length; i++) {
          children[i].children[0].classList.remove('green')
          children[i].children[0].classList.remove('activated')
          children[i].children[0].classList.add('grey')
        }
        completed = 0
      },
      false
    )
  }, [])
  return (
    <>
      <Breadcrumb pageName={pageTitle} />
      
      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2>Curriculum Framework</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'bglogo'}>
        <div className='container'>
          <div className='row'>

            <div className='col-md-6 curriculum-tab'>

              <div className='mb-5' id='vikas-mantra'>

                <h4 className='ulineRed'>VIKAS MANTRA PUBLIC SCHOOL
                  Co-curricular offers students a diverse
                  Co-curricular programme which
                  includes, Sports, Arts, Music, Dance
                  and Computer Education. </h4>

                <p className='pt-4'>The VIKAS MANTRA PUBLIC SCHOOL Co-curricular programme is central to our philosophy of providing a platform for all-round development of students. The co-curricular agenda is broad, diverse and meant to engage students in activities beyond academics. The Primary, Middle, and High Schools each organize and participate in a mix of activities and events that are age-appropriate and challenging. Our co-curricular programme allows students to apply what they have learnt in the classroom, explore new interests and develop a new dimension to their personality.</p>

                <p>Within the co-curricular programme, VIKAS MANTRA PUBLIC SCHOOL Co-curricular lays particular emphasis on various Art forms. The Arts are an integral part of our programme, in keeping with our educational philosophy which is devoted to cultivating well-rounded students. When our students work together to organise a musical production or think critically about 3D modelling or put together a mural, they are involved in experiences that help build confidence and creativity that can be applied to any human enterprise.</p>

              </div>

              <div className='mb-3' id='pre-primary-years'>

                <h4 className={ styles.vectorImg2 + ' ulineRed' }>Sports</h4>

                <p className='pt-4'>Sports form a cornerstone of student activities at VIKAS MANTRA PUBLIC SCHOOL and help students find a balance between athletic and academic pursuits. Our sports programme reinforces and implements our aim to provide each student with a well-rounded experience. At VIKAS MANTRA PUBLIC SCHOOL, sports activities embody values such as commitment, sportsmanship, teamwork, resilience, and healthy competition. VIKAS MANTRA PUBLIC SCHOOL students live, breathe and imbibe these values by learning valuable lessons through practice and dedication, and from winning and losing on the playing field.</p>

                <h5 className=' py-2'>
                  Sports activities are broken down largely into indoor and outdoor sports
                </h5>

                <div className={styles.navTabContainer + ' whitebg'}>

                  <nav>

                    <div className="nav nav-tabs whitebg" id="nav-tab" role="tablist">

                      <button className="nav-link color-black active text-start" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        <p className='m-0'>Highlights of</p>
                        <h6>Indoor sports activities</h6>
                      </button>

                      <button className="nav-link color-black text-start" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <p className='m-0'>Highlights of</p>
                        <h6>Outdoor sports activities</h6>
                      </button>

                    </div>

                  </nav>

                  <div className="tab-content" id="nav-tabContent">

                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                      <ul className='mb-0'>

                        <li className='pt-4'>Physical Education and Yoga form core elements of the sports curriculum</li>

                        <li className='pt-3'>Well designed, spacious and child-safe play environment for younger students</li>

                        <li className='py-3'>Common room for indoor sports such as Table Tennis, Carrom and Chess</li>

                      </ul>

                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">

                      <ul className='mb-0'>

                        <li className='pt-4'>Physical Education and Yoga form core elements of the sports curriculum</li>

                        <li className='pt-3'>Well designed, spacious and child-safe play environment for younger students</li>

                        <li className='py-3'>Common room for indoor sports such as Table Tennis, Carrom and Chess</li>

                      </ul>

                    </div>

                  </div>

                </div>

              </div>

              <div className='mb-3'>

                <p className='pt-2'>VIKAS MANTRA PUBLIC SCHOOL will partner with nearby gymkhana facilities to provide access to other sports such as swimming, tennis, badminton and squash.</p>

                <p className='py-2'>Sports at VIKAS MANTRA PUBLIC SCHOOL represent one side of non-academic learning and are supported by a robust Co-Curricular programme.</p>

              </div>

              <div className={styles.navTabContainer + ' whitebg mt-3'}>

                <nav>

                  <div className="nav nav-tabs whitebg curriculum-tab-1" id="nav-tab" role="tablist">

                    <button className="nav-link color-black active text-start" id="nav-dance-tab" data-bs-toggle="tab" data-bs-target="#nav-dance" type="button" role="tab" aria-controls="nav-Dance" aria-selected="true">
                      <h6>Dance</h6>
                    </button>

                    <button className="nav-link color-black text-start " id="nav-music-tab" data-bs-toggle="tab" data-bs-target="#nav-music" type="button" role="tab" aria-controls="nav-Music" aria-selected="false">
                      <h6>Music</h6>
                    </button>

                    <button className="nav-link color-black text-start" id="nav-theater-tab" data-bs-toggle="tab" data-bs-target="#nav-theater" type="button" role="tab" aria-controls="nav-theater" aria-selected="false">
                      <h6>Theater</h6>
                    </button>

                    <button className="nav-link color-black text-start" id="nav-visualArt-tab" data-bs-toggle="tab" data-bs-target="#nav-visualArt" type="button" role="tab" aria-controls="nav-visualArt" aria-selected="false">
                      <h6>Visual Art</h6>
                    </button>

                  </div>

                </nav>

                <div className="tab-content" id="nav-tabContent">

                  <div className="tab-pane fade show active" id="nav-dance" role="tabpanel" aria-labelledby="nav-dance-tab" tabindex="0">
                    <p className='pt-3'>The dance programme part of VIKAS MANTRA PUBLIC SCHOOL Co-curricular includes traditional Indian classical dance techniques such as Bharatnatyam , Folk as well as Western dance forms. Dance provides students with an opportunity to find creative expression and cultural exposure. Physical dance lessons are combined with lessons on the history of dance and discussions on the cultural context of the dance form.</p>
                  </div>

                  <div className="tab-pane fade" id="nav-music" role="tabpanel" aria-labelledby="nav-music-tab" tabindex="0">
                    <p className='pt-3'>The dance programme part of VIKAS MANTRA PUBLIC SCHOOL Co-curricular includes traditional Indian classical dance techniques such as Bharatnatyam , Folk as well as Western dance forms. Dance provides students with an opportunity to find creative expression and cultural exposure. Physical dance lessons are combined with lessons on the history of dance and discussions on the cultural context of the dance form.</p>
                  </div>

                  <div className="tab-pane fade" id="nav-theater" role="tabpanel" aria-labelledby="nav-theater-tab" tabindex="0">
                    <p className='pt-3'>The dance programme part of VIKAS MANTRA PUBLIC SCHOOL Co-curricular includes traditional Indian classical dance techniques such as Bharatnatyam , Folk as well as Western dance forms. Dance provides students with an opportunity to find creative expression and cultural exposure. Physical dance lessons are combined with lessons on the history of dance and discussions on the cultural context of the dance form.</p>
                  </div>

                  <div className="tab-pane fade" id="nav-visualArt" role="tabpanel" aria-labelledby="nav-visualArt-tab" tabindex="0">
                    <p className='pt-3'>The dance programme part of VIKAS MANTRA PUBLIC SCHOOL Co-curricular includes traditional Indian classical dance techniques such as Bharatnatyam , Folk as well as Western dance forms. Dance provides students with an opportunity to find creative expression and cultural exposure. Physical dance lessons are combined with lessons on the history of dance and discussions on the cultural context of the dance form.</p>
                  </div>

                </div>

              </div>

              <h4 className='ulineRed pt-5'>Other Learning Opportunities</h4>

              <p className='pt-4'>Co-curricular programmes. While our core programme is aimed at formal learning, a range of  in-house clubs, field trips and community service initiatives provide students much-needed interaction with the environment that we live in. These alternate learning opportunities help students enhance group interaction skills, create interdependence and foster team spirit.</p>

              <div className={styles.navTabContainer3 + ' whitebg'}>

                <nav>

                  <div className="nav nav-tabs whitebg curriculum-tab-1" id="nav-tab" role="tablist">

                    <button className="nav-link color-black active text-start" id="nav-studentClub-tab" data-bs-toggle="tab" data-bs-target="#nav-studentClub" type="button" role="tab" aria-controls="nav-studentClub" aria-selected="true">
                      <h6>Student Clubs</h6>
                    </button>

                    <button className="nav-link color-black text-start" id="nav-communityServices-tab" data-bs-toggle="tab" data-bs-target="#nav-communityServices" type="button" role="tab" aria-controls="nav-communityServices" aria-selected="false">
                      <h6>Community Service</h6>
                    </button>

                    <button className="nav-link color-black text-start" id="nav-fieldTrip-tab" data-bs-toggle="tab" data-bs-target="#nav-fieldTrip" type="button" role="tab" aria-controls="nav-fieldTrip" aria-selected="false">
                      <h6>Field Trips and Excursions</h6>
                    </button>

                  </div>

                </nav>

                <div className="tab-content" id="nav-tabContent">

                  <div className="tab-pane fade show active" id="nav-studentClub" role="tabpanel" aria-labelledby="nav-studentClub-tab" tabindex="0">

                    <p className='pt-3'>Students are encouraged to participate in clubs which provide an early exposure to life beyond academics. These clubs provide an avenue for students to explore their personal interests through fun social activities.</p>

                    <h6>Clubs at VIKAS MANTRA PUBLIC SCHOOL</h6>

                    <ul>
                      <li className='pt-3'>Eco club</li>
                      <li className='pt-3'>Photography club</li>
                      <li className='pt-3'>Robotics club</li>
                      <li className='pt-3'>Cookery club</li>
                      <li className='pt-3'>Math club</li>
                      <li className='pt-3'>Literary club</li>
                      <li className='pt-3'>Theatre club</li>
                      <li className='pt-3'>Social Welfare club</li>
                      <li className='pt-3'>Astronomy club</li>
                    </ul>

                  </div>

                  <div className="tab-pane fade" id="nav-communityServices" role="tabpanel" aria-labelledby="nav-communityServices-tab" tabindex="0">

                    <p className='pt-3'>Students are encouraged to participate in clubs which provide an early exposure to life beyond academics. These clubs provide an avenue for students to explore their personal interests through fun social activities.</p>

                    <h6>Clubs at VIKAS MANTRA PUBLIC SCHOOL</h6>

                    <ul>
                      <li className='pt-3'>Eco club</li>
                      <li className='pt-3'>Photography club</li>
                      <li className='pt-3'>Robotics club</li>
                      <li className='pt-3'>Cookery club</li>
                      <li className='pt-3'>Math club</li>
                      <li className='pt-3'>Literary club</li>
                      <li className='pt-3'>Theatre club</li>
                      <li className='pt-3'>Social Welfare club</li>
                      <li className='pt-3'>Astronomy club</li>
                    </ul>

                  </div>

                  <div className="tab-pane fade" id="nav-fieldTrip" role="tabpanel" aria-labelledby="nav-fieldTrip-tab" tabindex="0">

                    <p className='pt-3'>Students are encouraged to participate in clubs which provide an early exposure to life beyond academics. These clubs provide an avenue for students to explore their personal interests through fun social activities.</p>

                    <h6>Clubs at VIKAS MANTRA PUBLIC SCHOOL</h6>

                    <ul>
                      <li className='pt-3'>Eco club</li>
                      <li className='pt-3'>Photography club</li>
                      <li className='pt-3'>Robotics club</li>
                      <li className='pt-3'>Cookery club</li>
                      <li className='pt-3'>Math club</li>
                      <li className='pt-3'>Literary club</li>
                      <li className='pt-3'>Theatre club</li>
                      <li className='pt-3'>Social Welfare club</li>
                      <li className='pt-3'>Astronomy club</li>
                    </ul>

                  </div>

                </div>

              </div>


            </div>

            <div className={'col-md-6'}>
              <div className='imgUp'>
                <img
                  src='/assets/banners/learning-banner-1.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>
              <div className={'sticky-sidebar VectorSpiralBlue' + ' ' + 'pt60'}>
                <ul id='progress'>

                  <li className={'node' + ' ' + 'green'}>
                    <Link href='#vikas-mantra' legacyBehavior><a><p> Sports</p></a></Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#pre-primary-years'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Dance</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Music</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Theater</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>visual Art</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Other Learning Opportunities</p>
                      </li>
                    </a>
                  </Link>


                </ul>
                <input
                  type='button'
                  value='Next'
                  id='next'
                  className='d-none'
                />
                <input
                  type='button'
                  value='Clear'
                  id='clear'
                  className='d-none'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default CurriculumFrameWork;