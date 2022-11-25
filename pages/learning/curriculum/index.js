import React, { useEffect } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import { curriculum } from '../../../data/curriculum'

function Curriculum() {
  const pageTitle = 'Curriculum'

  function progressClick(e) {
    const progress = document.getElementById('progress')
    progress.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    //
    const progress = document.getElementById('progress')
    let learningDivs = document.querySelectorAll('.learningDivs')
    let listOfLearningDivs = progress.querySelectorAll('.node')
    // console.log(listOfLearningDivs)
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
              <div className={'mb-5 AnimeStarts ' + ' ' + styles.quotes}>
                <h4 className='AnimeElement'>
                  Education is not preparation for <br />
                  life: education is life itself
                </h4>
                <p className='AnimeElement'>- John Dewey</p>
              </div>

              {curriculum.map((item, index) => (
                <div className='mb-5 learningDivs AnimeStarts ' id={item.id} key={index}>
                  <h4 className='ulineRed AnimeElement'>{item.title}</h4>
                  {item.desc?.map((it, i) => (
                    <p key={i} className={i === 0 ? 'pt-4 AnimeElement' : 'AnimeElement' }>
                      {it}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className={'col-md-6 learningLogo ' + ' ' + styles.vectorSpiral} >
              <div className='imgUp imgBgColor pastelLightGreen AnimeStarts'>
                <img
                  src='/assets/banners/school-building.png'
                  alt='image'
                  className='img-fluid AnimeElement'
                />
              </div>

              <div className={'sticky-sidebar' + ' ' + 'pt60'}>
                <ul id='progress' className=''>
                  <li id='vikas-mantra-li' className={'node' + ' AnimeStarts ' + 'green'}>
                    <Link href='#vikas-mantra' legacyBehavior>
                      <a className='aTag'>
                        <p className='AnimeElement'> The VIKAS MANTRA PUBLIC SCHOOL</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li
                    id='pre-primary-years-li'
                    className={'node' + ' AnimeStarts ' + 'grey'}
                  >
                    <Link legacyBehavior href='#pre-primary-years'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Pre-Primary Years (Nursery and Kindergarten)</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' AnimeStarts ' + 'grey'} id='primary-years-li'>
                    <Link legacyBehavior href='#primary-years'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Primary Years (Grades I – V)</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' AnimeStarts ' + 'grey'} id='english-li'>
                    <Link legacyBehavior href='#english'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>English – Language Arts</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' AnimeStarts ' + 'grey'} id='mathematics-li'>
                    <Link legacyBehavior href='#mathematics'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Mathematics</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' AnimeStarts ' + 'grey'} id='socialStudies-li'>
                    <Link legacyBehavior href='#socialStudies'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Social Studies</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' AnimeStarts ' + 'grey'} id='science-li'>
                    <Link legacyBehavior href='#science'>
                      <a
                        className='aTag'
                        href='#'
                        onClick={(e) => progressClick(e)}
                      >
                        <p className='AnimeElement'>Science</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' AnimeStarts ' + 'grey'} id='why-us-li'>
                    <Link legacyBehavior href='#why-us'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>WHY CHOOSE VIKAS MANTRA?</p>
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
export default Curriculum
