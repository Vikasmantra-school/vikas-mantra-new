import React, { useEffect, useRef } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { learning } from '../../data/learning'
import { timeline } from '../../components/Timeline/Timeline'

function Learning() {
  const pageTitle = 'Learning'

  function progressClick(e) {
    // console.log('hi')
    const progress = document.getElementById('progress')
    progress.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    timeline()
  }, [])

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-lg-6 col-md-7 col-sm-12'>
              <div className='AnimeStarts'>
                <h2 className='AnimeElement'>Why VIKAS MANTRA PUBLIC SCHOOL</h2>
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
            <div className='col-md-6'>
              {learning.map((item, index) => (
                <div
                  className='mb-5 learningDivs AnimeStarts '
                  id={item.id}
                  key={index}
                >
                  <h4 className='ulineRed AnimeElement '>{item.title}</h4>
                  <p className='pt-4 AnimeElement '>{item.desc}</p>
                </div>
              ))}
            </div>

            <div
              className={'col-md-6 learningLogo' + ' ' + styles.vectorSpiral}
            >
              <div className='imgUp imgBgColor pastelLightGreen AnimeStarts'>
                <img
                  src='/assets/banners/school-building.png'
                  alt='image'
                  className='img-fluid AnimeElement'
                />
              </div>

              <div className={'sticky-sidebar' + ' ' + 'pt60'}>
                <ul id='progress'>
                  <li
                    id='holistic-approach-li'
                    className={'node' + ' ' + 'green'}
                  >
                    <Link href='#holistic-approach' legacyBehavior>
                      <a className='aTag'>
                        <p> Holistic Approach</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li id='local-app-li' className={'node' + ' ' + 'grey'}>
                    <Link legacyBehavior href='#local-app'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Global Outlook, Local Application</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='recognizing-li'>
                    <Link legacyBehavior href='#recognizing'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Recognizing That Every Child is Unique</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='century-li'>
                    <Link legacyBehavior href='#century'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>21st Century Ready Infrastructure</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='talentedFaculty-li'>
                    <Link legacyBehavior href='#talentedFaculty'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Talented Faculty</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='richCurriculum-li'>
                    <Link legacyBehavior href='#richCurriculum'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Rich Curriculum</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='windowWorld-li'>
                    <Link legacyBehavior href='#windowWorld'>
                      <a
                        className='aTag'
                        href='#'
                        onClick={(e) => progressClick(e)}
                      >
                        <p>Window to the World</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='wirelessWorld-li'>
                    <Link legacyBehavior href='#wirelessWorld'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Technologically Wired for a Wireless World</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='smorgasbord-li'>
                    <Link legacyBehavior href='#smorgasbord'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>A Smorgasbord of Co-Curricular Choices</p>
                      </a>
                    </Link>
                  </li>
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
