import React, { useEffect } from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

function PrePrimary() {

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
              <h2>Pre-Primary Years</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'bglogo'}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-5' id='holistic-approach'>
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

                <ul>
                  <li>Developmentally appropriate curriculum</li>
                  <li>Innovative and dynamic teaching styles</li>
                  <li>Brain friendly learning modules</li>
                  <li>Tangible learning outcomes</li>
                  <li>
                    Creative and intellectual curiosity stimulated by suitable
                    learning environment
                  </li>
                  <li>Specialized and adept teachers</li>
                </ul>
              </div>
              <div className='mb-5' id='local-app'>
                <h4 className='ulineRed'>OUR APPROACH</h4>
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
              </div>
              <div className='mb-5' id='recognizing'>
                <h4 className='ulineRed'>Programs</h4>
                <h5 className='pt-4'>
                  “Happy Tots Curriculum Prepares Children for Lifelong
                  /learning!”
                </h5>

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
              <div className='mb-5' id='century'>
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
                  src='/assets/school-building.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>
              <div className={'sticky-sidebar VectorSpiralBlue' + ' ' + 'pt60'}>
                <ul id='progress'>
                  <li className={'node' + ' ' + 'green'}>
                    <Link href='#holistic-approach' legacyBehavior>
                      <a>
                        <p> Our Approach</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#local-app'>
                    <a onClick={(e) => progressClick(e)}>
                      <li className={'node' + ' ' + 'grey'}>
                        <p>Programs</p>
                      </li>
                    </a>
                  </Link>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <Link legacyBehavior href='#recognizing'>
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
