import React, { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import { timeline } from '../../../components/Timeline/Timeline'

function PrePrimary() {
  const pageTitle = 'PrePrimary'

  function progressClick(e) {
    const progress = document.getElementById('progress')
    progress.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    timeline()
  }, [timeline])

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>

              <div className='AnimeStarts'>
                <h2 className='AnimeElement'>Pre-Primary Years</h2>
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
              <div className='mb-5 learningDivs' id='happy-tots'>

                <div className='AnimeStarts'>
                  <h4 className='ulineRed AnimeElement'>Happy Tots</h4>
                </div>

                <div className='AnimeStarts'>
                  <p className='pt-4 AnimeElement'>
                    formulated the approach of SPICE, which a child must wholly
                    foster during the kindergarten years.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <p className='AnimeElement'>
                    We help the children develop their critical thinking skills
                    and intellectual curiosity that fuels success in their
                    kindergarten classrooms and beyond.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <p className='AnimeElement'>
                    The findings from these streams of research helped us to
                    Arrive at the 5 core skill areas i.e., SPICE and also provided
                    an insight into the foremost fundamentals of a high quality
                    early childhood education programmes, which encompasses the
                    primary fundamentals of a top-notch kindergarten programme.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <p className='AnimeElement'>
                    The program has been designed to address the following areas
                    of:
                  </p>
                </div>

                <ul className='list-points AnimeStarts'>
                  <li className='AnimeElement'>
                    <img src='/assets/icons/blue-point.png' alt='list-point' />{' '}
                    Developmentally appropriate curriculum
                  </li>
                  <li className='AnimeElement'>
                    <img src='/assets/icons/pink-point.png' alt='list-point' />{' '}
                    Innovative and dynamic teaching styles
                  </li>
                  <li className='AnimeElement'>
                    <img
                      src='/assets/icons/yellow-point.png'
                      alt='list-point'
                    />{' '}
                    Brain friendly learning modules
                  </li>
                  <li className='AnimeElement'>
                    <img
                      src='/assets/icons/lightgreen-point.png'
                      alt='list-point'
                    />{' '}
                    Tangible learning outcomes
                  </li>
                  <li className='AnimeElement'>
                    <img
                      src='/assets/icons/orange-point.png'
                      alt='list-point'
                    />{' '}
                    Creative and intellectual curiosity stimulated by suitable
                    learning environment
                  </li>
                  <li className='AnimeElement'>
                    <img
                      src='/assets/icons/darkblue-point.png'
                      alt='list-point'
                    />{' '}
                    Specialized and adept teachers
                  </li>
                </ul>
              </div>
              <div className='mb-5 learningDivs' id='our-approach'>

                <div className='AnimeStarts'>
                  <h4 className='ulineRed AnimeElement'>Our Approach</h4>
                </div>

                <div className='AnimeStarts'>
                  <p className='pt-4 AnimeElement'>
                    Vikas Mantra Public School follows the futuristic Early Years
                    Curriculum “ Happy Tots’ in the KG classes. “ Happy Tots” is
                    one of the pioneering curriculum for the Kindergarteners
                    focusing on the development of the five vital skills Social,
                    Physical, Intellectual, Creative and Emotional ( SPICE)
                    amongst children in their early years. It is a unique
                    curriculum exclusively designed for children in the age group
                    2-5 years to enhance their whole brain development by Dr. K R
                    Maalathi, one of the senior educators in India.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <img
                    src='/assets/learning/spice-banner.jpg'
                    alt=''
                    className='img-fluid mt-4 AnimeElement'
                  />
                </div>

              </div>

              <div className='mb-5 learningDivs' id='programs'>

                <div className='AnimeStarts'>
                  <h4 className='ulineRed AnimeElement'>Programs</h4>
                </div>

                <div className='AnimeStarts'>
                  <p className='pt-4 AnimeElement'>
                    <b>
                      “Happy Tots Curriculum Prepares Children for Lifelong
                      /learning!”
                    </b>
                  </p>
                </div>


                <div className='AnimeStarts'>
                  <p className='pt-4 AnimeElement'>
                    Happy Tots offers a well-structured curriculum for all three
                    levels of Kindergarten: Preschool, Junior and Senior
                    kindergarten. The program engages children in exciting
                    learning activities specifically designed to meet the
                    developmental needs and help them advance to the next level.
                    The curriculum emphasizes language and literacy, cognitive
                    development, social-emotional skills, physical activity and
                    creativity.
                  </p>
                </div>

                <div className='AnimeStarts'>
                  <p className='AnimeElement'>
                    The core principles of “Happy Tots “begin with the simple
                    truth that each child has a unique and individual nature,
                    worthy of respect, nurture and celebration. “ Happy Tots
                    “believe that children are natural learners who gain knowledge
                    by doing and communicating – that is why we always plan active
                    and engaging experiences for your children . It is the goal of
                    Happy Tots to facilitate experiences that promote children’s
                    natural curiosity to actively learn, while creating an
                    environment that allows children to grown and develop at their
                    own pace.
                  </p>
                </div>

              </div>
              <div className='mb-5 learningDivs' id='why-us'>

                <button className='outlineBtn btn'>Know More</button>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='imgUp imgBgColor pastelYellow AnimeStarts'>
                <img
                  src='/assets/pre-primary.png'
                  alt='image'
                  className='img-fluid AnimeElement'
                />
              </div>
               
              <div className={'sticky-sidebar VectorSpiralBlue' + ' AnimeStarts ' + 'pt60'}>
                <ul id='progress'>
                  <li id='happy-tots-li' className={'node' + ' ' + 'green'}>
                    <Link href='#happy-tots' legacyBehavior>
                      <a>
                        <p className='AnimeElement'> Happy Tots</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li id='our-approach-li' className={'node' + ' AnimeStarts ' + 'grey'}>
                    <Link legacyBehavior href='#our-approach'>
                      <a onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Our Approach</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li id='programs-li' className={'node' + ' AnimeStarts ' + 'grey'}>
                    <Link legacyBehavior href='#programs'>
                      <a onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Programs</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li id='why-us-li' className={'node' + ' AnimeStarts ' + 'grey'}>
                    <Link legacyBehavior href='#why-us'>
                      <a onClick={(e) => progressClick(e)}>
                        <p className='AnimeElement'>Why Choose Vikas Mantra</p>
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

export default PrePrimary
