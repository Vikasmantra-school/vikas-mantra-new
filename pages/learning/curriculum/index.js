import React, { useEffect } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'


function Curriculum() {

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
              <h2>Curriculum</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className={'whitebg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'bglogo VectorDot VectorSpiralCenter'}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className={'mb-5' + ' ' + styles.quotes}>
                <h4>
                  Education is not preparation for <br />
                  life: education is life itself
                </h4>
                <p>- John Dewey</p>
              </div>

              <div className='mb-5 pt-4' id='vikas-mantra'>
                <h4 className='ulineRed'>The VIKAS MANTRA PUBLIC SCHOOL </h4>

                <p className='pt-4'>
                  curriculum is designed to enable students to develop critical
                  and survival skills necessary for success in the real world.
                </p>

                <p>
                  The VIKAS MANTRA PUBLIC SCHOOL curriculum extends beyond
                  academics it incorporates experiential learning and
                  multi-disciplinary teaching methods and encourages active
                  student participation. We offer students a unique curriculum
                  that is based on new-world learning and is supported by the
                  best of Indian pedagogical thinking, the CBSE way.
                </p>

                <p>
                  One of the core tenets behind the VIKAS MANTRA PUBLIC SCHOOL
                  curriculum design is recognition of the fact that learning is
                  a dynamic process and each student learns differently. Our
                  teachers are taught to adopt practices which accommodate
                  differential learning in an age appropriate manner. Students
                  are encouraged in their individual area of interest and
                  teachers ensure that students are exposed to a multitude of
                  topics, scenarios and situations to help them become competent
                  and capable learners.
                </p>

                <p>
                  VIKAS MANTRA PUBLIC SCHOOL curriculum will follow the
                  guidelines set by the central board of secondary education .
                  The curriculum is varied, comprehensive, and organized by
                  topic. Each student benefits from a complementary skill set
                  and the knowledge base of different teachers with classes in 
                   <b> Language Arts | Mathematics | Science | Social Studies |
                  Physical Education | Art and Theatre</b>
                </p>

                <p>
                  English will be the medium of instruction and will be taught
                  as the first language. Tamil/Hindi/Sanskrit will be taught as
                  second/ third language.
                </p>
              </div>

              <div className='mb-5 pt-4' id='pre-primary-years'>
                <h4 className='ulineRed'>
                  Pre-Primary Years (Nursery and Kindergarten)
                </h4>

                <p className='pt-4'>
                  The 21st century will require independent thinkers,
                  responsible citizens, creative problem-solvers and confident
                  decision-makers. Keeping this long-term view in mind, VIKAS
                  MANTRA PUBLIC SCHOOL has designed a Pre-Primary programme to
                  foster a love for learning among younger students.
                </p>

                <p>
                  The curriculum for three- to five-year-olds is based on
                  developmental needs in all aspects of growth: social,
                  physical, intellectual, creative and emotional. Young students
                  differ vastly in their learning abilities and the rate at
                  which they are able to absorb new concepts. Our programme is
                  designed to accommodate this diversity and create a cocoon of
                  learning for each student.
                </p>

                <p>
                  The Pre-Primary years combine self-directed play and
                  unstructured activities to make students aware of and interact
                  with their immediate environment. A special emphasis is laid
                  on creating an environment which enables students to absorb
                  new information through active participation, visual
                  stimulation, and listening. These activities enable students
                  to start gaining a broader understanding of the world we live
                  in.
                </p>

                <p>
                  Gaining positive self-esteem and building confidence through
                  simple activities is an important goal in the Pre-Primary
                  years. Using a combination of the six senses, students are
                  provided with new and unusual experiences to help build their
                  cognitive and physical abilities. They learn to express
                  various emotions, understand basic social interactions and
                  engage with the outside world.
                </p>
              </div>

              <div className='mb-5 pt-4' id='primary-years'>
                <h4 className='ulineRed'>
                Primary Years (Grades I – V)
                </h4>

                <p className='pt-4'>Our Primary curriculum provides a platform for developing basic concepts in Language, Arts, Mathematics, Social Studies and Science. The programme has a dual objective – to introduce students to functional topics and lay the foundation for future learning as well as enable student to strengthen their emotional and social abilities and become independent, courageous and compassionate. This dual focus provides a solid curricular framework, while still allowing us to meet the unique needs of our students.
                </p>

                <p>Apart from building knowledge, there is an equal focus on creativity and encouraging intellectual curiosity. The curriculum ensures that students acquire and build fundamental values, beliefs and abilities which help them decode the world that we live in. All core subjects are complemented through co-curricular activities such as Art, Music, Dance, Sports and Computer Education.
                </p>

              </div>

              <div className='mb-5 pt-4' id='english'>

                <h4 className='ulineRed'>English – Language Arts</h4>

                <p className='pt-4'><b>“Good readers make good writers, and good writers are good readers”
                is the philosophy of the Language Arts department at VIKAS MANTRA PUBLIC SCHOOL.</b></p>

                <p>The goal of the Language Arts programme is to develop good readers, writers, listeners, and speakers. Over the Primary years students will build the stamina and skills to read challenging fiction, non-fiction, and other material that is age appropriate. Students will continue to learn about the world as well as build vocabulary by reading stories and poems from different cultures. Due importance is given to specific aspects of reading such as diction and use of punctuation.
                </p>

                <p>Another strong focus of the Language Arts programme is developing writing skills. Student who enter the Primary years have already learnt to write alphabets and basic words. Our subsequent focus in these years is for students to start writing simple sentences and understanding sentence structure, language usage, and grammar.
                </p>

              </div>

              <div className='mb-5 pt-4' id='mathematics'>

                <h4 className='ulineRed'>Mathematics</h4>

                <p className='pt-4'>Mathematics lessons at VIKAS MANTRA PUBLIC SCHOOL are aligned to the standards set by Central Board of Secondary Education  and adopt best practices from the International education system as well. The programme is balanced and includes whole number concepts, whole number computation, mental math, problem solving, patterns and functions, measurement, geometry, fractions and decimals. Our focus in the Primary years is ensuring that students gain an in-depth understanding of core mathematical concepts.</p>

              </div>

              <div className='mb-5 pt-4' id='socialStudies'>

                <h4 className='ulineRed'>Social Studies</h4>

                <p className='pt-4'>Social Studies represent a combination of history and geography topics which include map reading and deduction, countries and world events, Indian history and human evolution among others. An extensive use of books, external reference materials, current news and articles is made to ensure that classroom discussions are practical and within the context of social and cultural developments. It is the Primary years that students are fully introduced to the concept of research and independent learning. Field trips, art projects, films, guest speakers, role plays, and other expressive activities are incorporated to bring Social Studies to life in the classroom.</p>

              </div>

              <div className='mb-5 pt-4' id='science'>

                <h4 className='ulineRed'>Science</h4>

                <p className='pt-4'>Science classes within the Primary years offer students a glimpse into logical reasoning and theories for how our world works. Science topics are chosen to provide a balance between different scientific faculties and engage students to make learning interesting and fun at the same time. Students are exposed to experimentation and deductive reasoning through hands-on lessons in our junior science lab. Working in teams, they learn basic scientific theories and acquire skills to apply classroom topics in a controlled lab environment.</p>

              </div>

              <div className='mb-5 pt-4' id='why-us'>
                <h4 className='ulineRed'>WHY CHOOSE VIKAS MANTRA?</h4>

                <p className='pt-4'>
                  Vikas Mantra Public School is established with a vision to
                  prepare and equip each child with the necessary survival
                  skills in the 21st century through rigorous academic and
                  technological skills.
                </p>

                <button class="outlineBtn btn">Know More</button>

              </div>
            </div>

            <div className={'col-md-6'}>
              <div className='imgUp imgBgColor'>
                <img
                  src='/assets/banners/learning-banner-1.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>
              <div className={'sticky-sidebar VectorSpiralBlue' + ' ' + 'pt60'}>
                <ul id='progress'>
                  <li className={'node' + ' ' + 'green'}>
                    <Link href='#vikas-mantra' legacyBehavior>
                      <a>
                        <p> The VIKAS MANTRA PUBLIC SCHOOL</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#pre-primary-years'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Pre-Primary Years (Nursery and Kindergarten)</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#primary-years'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Primary Years (Grades I – V)</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#english'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>English – Language Arts</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#mathematics'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Mathematics</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#socialStudies'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Social Studies</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#science'>
                    <a href='#' onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Science</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#why-us'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Why Choose Vikas Mantra</p>
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
export default Curriculum
