import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import VisionMission from '../../../components/VisionMission'

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
          ' whitebg position-relative ' +
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
      
      <VisionMission />

    
    </>
  )
}
export default VisionAndPhilosophy
