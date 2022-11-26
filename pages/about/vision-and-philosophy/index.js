import styles from './style.module.css'
import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import VisionMission from '../../../components/VisionMission'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const VisionAndPhilosophy = () => {
  gsap.registerPlugin(ScrollTrigger)

  const pageTitle = 'About'

  //gsap-integration

  useEffect(() => {
    const parentTrigger = document.querySelectorAll('.parentAnimeStarts')
    parentTrigger.forEach(fadeIn)

    function fadeIn(elem) {
      let text = elem.querySelectorAll('.fading')
      gsap.fromTo(
        text,
        {
          autoAlpha: 0,
          y: 50
        },
        {
          delay: 0.5,
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: text,
            animation: text,
            toggleActions: 'play none none none',
            once: true,
          }
        }
      )
    }
  }, [])


  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className='pt-4 parentAnimeStarts '>
        <div className='container position-relative'>
          <div className='row py-5'>
            <div className='col-md-6'>
              <h2 className={styles.headingPdng + ' fading'}>Our Vision And Philosophy</h2>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.sectionPdng + ' whitebg position-relative parentAnimeStarts ' + ' ' + styles.vectorImg5}>
        <div className='container'>
          <div className='row'>

            <div className='col-md-5 navTab vision-1-Tab '>
              <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link color-black active fading'
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
                    className='nav-link color-black fading'
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

              <div className=' tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home-tab-pane'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                  tabIndex='0'
                >
                  <div className='pt-3'>
                    <h2 className='ulineRed fading'>Our Vision</h2>

                    <p className='pt-5 fading'>
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
                  tabIndex='0'
                >
                  <div className='pt-3'>
                    <h2 className='ulineRed fading'>Our Mission</h2>

                    <p className='pt-5 fading'>
                      Our Mission is to educate young minds to be lifelong
                      learners in this dynamic world. We aspire to develop
                      outstanding world citizens who can contribute to the
                      well-being of their society by playing an active role.
                    </p>
                  </div>
                </div>
              </div>

              <div className='pt-5 position-relative'>

              </div>
            </div>

            <div className='col-md-6 offset-md-1 position-relative'>
              <img
                src='/assets/banners/school-building.png'
                alt='image'
                className={styles.schoolBuildingImg + ' fading'}
              />

              <img
                src='/assets/VMPS.png'
                alt='image'
                className={styles.vmpsImg + ' fading'}
              />
            </div>

          </div>
        </div>
      </section>

      <VisionMission />
    </>
  )
}
export default VisionAndPhilosophy
