import Image from 'next/image'
import VikasLogo from '../../public/assets/VikasLogo.png'
import styles from './style.module.css'
import Link from 'next/link'
import { useState, useRef } from 'react'

export const Footer = () => {

  //form-data-clear-after-submit

  const [name, setName] = useState('')
  const [mail, setEmail] = useState('')
  const [number, setNumber] = useState('')


  //form-sheet-integration

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzx3dMf1Pp-SqClOxBO0UnERO_cqNBB6kNuLV5y6q84At15I5NwelXIpxuWiB44A2rY/exec"
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setName('');
    setEmail('');
    setNumber('');

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      alert('Our admission officer will contact you shortly');
      setLoading(false)
    })
      .catch(err => console.log(err))
  }
  return (
    <div className={styles.section + ' pt-5 pb-4 '}>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-4 col-md-12'>
            <div className={styles.formCol}>
              <div className='mb-5'>
                <h6>VISIT THE SCHOOL</h6>
                <h3>FOR AN ADMISSION TOUR</h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} name="google-sheet" >
                <div className='mb-3'>
                  <input
                    type='text'
                    className={styles.formInput + ' form-control'}
                    placeholder='Name'
                    required
                    name='Name'
                    onChange={event => setName(event.target.value)}
                    value={name}
                  />
                </div>

                <div className='mb-3'>
                  <input
                    type='email'
                    className={styles.formInput + ' form-control'}
                    aria-describedby='emailHelp'
                    placeholder='Email'
                    required
                    name='Email'
                    onChange={event => setEmail(event.target.value)}
                    value={mail}
                  />
                </div>

                <div className='mb-3'>
                  <input
                    type='number'
                    className={styles.formInput + ' form-control'}
                    placeholder='Number'
                    required
                    name='Phone'
                    onChange={event => setNumber(event.target.value)}
                    value={number}
                  />
                </div>

                <div className='mb-3'>

                  <input type="submit" value={loading ? "Loading..." : "Send"} className={styles.sendBtn + ' btn btn-light mt-4'} />

                </div>

              </form>

              <p className='mt-4'>
                Our admission officer will contact you shortly
              </p>
            </div>
          </div>

          <div className=' offset-lg-1 col-lg-7 col-md-12'>
            <div className='row align-items-center'>


              <div className={'col-md-4 '}>
                <div className={styles.logoCol}>
                  <Image src={VikasLogo} alt='image' className={styles.logo} />
                </div>
              </div>

              <div className={'col-md-8 '}>
                <div className={styles.aboutCol}>
                  <h3>ABOUT</h3>
                  <p>
                    Vikas Mantra Public School is established with a vision to
                    prepare and equip each child with the necessary survival
                    skills in the 21st century through rigorous academic and
                    technological skills.
                  </p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className={' col-md-6'}>
                <div className={styles.contactUs}>
                  <h3>CONTACT US</h3>
                  <p> S.No:168,168/3, Off Mahindra World City, </p>
                  <p> Anjur 603204, Chengalpattu</p>
                  <p> info@vikasmantra.org</p>
                  <p> admissions@vikasmantra.org</p>
                </div>
              </div>

              <div className={'col-md-6 '}>
                <div className={styles.quickLinksCol}>
                  <h3>QUICK LINKS</h3>
                  <div className={styles.quickLink + ' row'}>
                    <div className='col-6 col-md-4 col-lg-4 col-sm-4'>
                      <Link href='/about' legacyBehavior>
                        <a className='nav-link'>About Us</a>
                      </Link>

                      <Link href='/campus/classrooms' legacyBehavior>
                        <a className='nav-link'>Campus</a>
                      </Link>

                      <Link href='/learning' legacyBehavior>
                        <a className='nav-link'>Learning</a>
                      </Link>
                    </div>

                    <div className='col-6 col-md-4 col-lg-4 col-sm-4'>

                      <Link href='/enquiry-form' legacyBehavior>
                        <a className='nav-link'>EnquiryForm</a>
                      </Link>

                      <Link href='/events' legacyBehavior>
                        <a className='nav-link'>Events</a>
                      </Link>

                      <Link href='/admissions' legacyBehavior>
                        <a className='nav-link'>Admissions</a>
                      </Link>
                    </div>

                    <div className='col-6 col-md-4 col-lg-4 col-sm-4'>
                      <Link href='/about/our-team' legacyBehavior>
                        <a className='nav-link'>Faculty</a>
                      </Link>

                      <Link href='/careers' legacyBehavior>
                        <a className='nav-link'>Careers</a>
                      </Link>

                      <Link href='/contact' legacyBehavior>
                        <a className='nav-link'>Contact</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.hrLine} />
      <p className={'text-center mt-4' + ' ' + styles.bottomText}>
        Vikas Mantra Public School © 2022 | All Rights Reserved | Coded by <Link href='https://benfy.co/' ><a target='_blank' rel="noopener noreferrer">Benfy</a></Link>
      </p>
    </div>
  )
}
