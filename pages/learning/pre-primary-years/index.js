import React, { useEffect ,useRef } from 'react'
// import styles from './style.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

function PrePrimary() {

  const pageTitle = 'PrePrimary'
  const myRef = useRef(null)
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
    })

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
    console.log(listOfLearningDivs)
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
    //
  }, [])

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2>Pre-Primary Years</h2>
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
              <div className='mb-5' id='happy-tots'>
                <h4 className='ulineRed'>Happy Tots </h4>
                <p className='pt-4'>
                  formulated the approach of SPICE, which a child must wholly
                  foster during the kindergarten years.
                </p>

                <p>
                  We help the children develop their critical thinking skills
                  and intellectual curiosity that fuels success in their
                  kindergarten classrooms and beyond.
                </p>

                <p>
                  The findings from these streams of research helped us to
                  Arrive at the 5 core skill areas i.e., SPICE and also provided
                  an insight into the foremost fundamentals of a high quality
                  early childhood education programmes, which encompasses the
                  primary fundamentals of a top-notch kindergarten programme.
                </p>

                <p>
                  The program has been designed to address the following areas
                  of:
                </p>

                <ul className='list-points'>
                  <li><img src="/assets/icons/blue-point.png" alt="list-point" /> Developmentally appropriate curriculum</li>
                  <li><img src="/assets/icons/pink-point.png" alt="list-point" /> Innovative and dynamic teaching styles</li>
                  <li><img src="/assets/icons/yellow-point.png" alt="list-point" /> Brain friendly learning modules</li>
                  <li><img src="/assets/icons/lightgreen-point.png" alt="list-point" /> Tangible learning outcomes</li>
                  <li><img src="/assets/icons/orange-point.png" alt="list-point" /> Creative and intellectual curiosity stimulated by suitable
                    learning environment
                  </li>
                  <li><img src="/assets/icons/darkblue-point.png" alt="list-point" /> Specialized and adept teachers</li>
                </ul>
              </div>
              <div className='mb-5' id='our-approach'>
                <h4 className='ulineRed'>Our Approach</h4>
                <p className='pt-4'>
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

                <img src="/assets/learning/spice-banner.jpg"  alt='' className='img-fluid mt-4'/>

              </div>
              <div className='mb-5' id='programs'>
                <h4 className='ulineRed'>Programs</h4>
                <p className='pt-4'><b>“Happy Tots Curriculum Prepares Children for Lifelong
                  /learning!”</b></p>

                <p className='pt-4'>
                  Happy Tots offers a well-structured curriculum for all three
                  levels of Kindergarten: Preschool, Junior and Senior
                  kindergarten. The program engages children in exciting
                  learning activities specifically designed to meet the
                  developmental needs and help them advance to the next level.
                  The curriculum emphasizes language and literacy, cognitive
                  development, social-emotional skills, physical activity and
                  creativity.
                </p>

                <p>
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
              <div className='mb-5' id='why-us'>
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
              <div className='imgUp imgBgColor pastelYellow'>
                <img
                  src='/assets/pre-primary.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>
              <div className={'sticky-sidebar VectorSpiralBlue' + ' ' + 'pt60'}>
                <ul id='progress'>

                
                  <Link href='#happy-tots' legacyBehavior>
                    <a>
                    <li className={'node' + ' ' + 'green'}>
                      <p> Happy Tots</p>
                    </li>
                    </a>
                  </Link>
                  
                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#our-approach'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Our Approach</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#programs'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Programs</p>
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

export default PrePrimary
