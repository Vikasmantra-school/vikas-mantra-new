import React, { useEffect } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

function Learning() {
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
            <div className='col-xl-5 col-lg-6 col-md-7 col-sm-12'>
              <h2>Why VIKAS MANTRA PUBLIC SCHOOL</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          'greybg' +
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
            <div className='col-md-6'>
              <div className='mb-5' id='holistic-approach'>
                <h4 className='ulineRed'>Holistic Approach</h4>
                <p className='pt-4'>
                  Learning at Vikas Mantra places equal emphasis on academic
                  excellence and on the social, physical emotional and
                  development of our students. We aim for our students to find
                  identity, meaning, and purpose in life through connections to
                  the community, to the natural world, and through humanitarian
                  values such as compassion and integrity.
                </p>
              </div>
              <div className='mb-5' id='local-app'>
                <h4 className='ulineRed'>Global Outlook, Local Application</h4>
                <p className='pt-4'>
                  Learning at Vikas Mantra places equal emphasis on academic
                  excellence and on the social, physical emotional and
                  development of our students. We aim for our students to find
                  identity, meaning, and purpose in life through connections to
                  the community, to the natural world, and through humanitarian
                  values such as compassion and integrity.
                </p>
              </div>
              <div className='mb-5' id='recognizing'>
                <h4 className='ulineRed'>
                  Recognizing That Every Child is Unique
                </h4>
                <p className='pt-4'>
                  We recognize that every child comes to our institution with a
                  learning style that is different from his/her peers. Learning
                  at Vikas Mantra accommodates this and provides for a broad
                  range of activities and learning platforms to enable each
                  student to grow as per his/her natural ability.
                </p>
              </div>
              <div className='mb-5' id='century'>
                <h4 className='ulineRed'>21st Century Ready Infrastructure</h4>
                <p className='pt-4'>
                  The campus at VIKAS MANTRA PUBLIC SCHOOL is spread over 2
                  acres of open space in Anjur Village. The infrastructure is
                  designed on the principles of free movement within campus to
                  encourage collaboration and group learning. The labs are
                  equipped with the latest equipment; classrooms are large and
                  designed to foster an engaging and fun learning environment.
                </p>
              </div>
              <div className='mb-5' id='talentedFaculty'>
                <h4 className='ulineRed'>Talented Faculty</h4>
                <p className='pt-4'>
                  The VIKAS MANTRA PUBLIC SCHOOL faculty have been handpicked to
                  ensure that they bring the right attitude and approach in
                  engaging with students, are successful in implementing the
                  school’s vision and come with the right qualifications. In
                  fact we aim for at least 10% of our teachers to have advanced
                  educational degrees and at least 20% of our teachers to have
                  themselves received some form of international education,
                  either within or outside India.
                </p>
              </div>
            </div>

            <div
              className={'col-md-6 learningLogo' + ' ' + styles.vectorSpiral}
            >
              <div className='imgUp'>
                <img
                  src='/assets/school-building.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>
              <div className={'sticky-sidebar' + ' ' + 'pt60'}>
                <ul id='progress'>
                  <li className={'node' + ' ' + 'green'}>
                    <Link href='#holistic-approach' legacyBehavior>
                      <a>
                        <p> Holistic Approach</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#local-app'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Global Outlook, Local Application</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#recognizing'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Recognizing That Every Child is Unique</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#century'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>21st Century Ready Infrastructure</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#talentedFaculty'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Talented Faculty</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Rich Curriculum</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a href='#' onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Window to the World</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Technologically Wired for a Wireless World</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>A Smorgasbord of Co-Curricular Choices</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Putting Community Engagement at the Forefront</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Preparing for Life Beyond School</p>
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
export default Learning
