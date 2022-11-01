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
        className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'bglogo VectorDot VectorSpiralCenter'}
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

              <div className='mb-5' id='vikas-mantra'>
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
                  Language Arts | Mathematics | Science | Social Studies |
                  Physical Education | Art and Theatre
                </p>

                <p>
                  English will be the medium of instruction and will be taught
                  as the first language. Tamil/Hindi/Sanskrit will be taught as
                  second/ third language.
                </p>
              </div>

              <div className='mb-5' id='pre-primary-years'>
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

              <div className='mb-5' id='why-us'>
                <h4 className='ulineRed'>WHY CHOOSE VIKAS MANTRA?</h4>

                <p className='pt-4'>
                  Vikas Mantra Public School is established with a vision to
                  prepare and equip each child with the necessary survival
                  skills in the 21st century through rigorous academic and
                  technological skills.
                </p>
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

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Primary Years (Grades I – V)</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>English – Language Arts</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Mathematics</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Social Studies</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a href='#' onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Science</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
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
