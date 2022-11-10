import Image from 'next/image'
import VikasLogo from '../../public/assets/VikasLogo.png'
import styles from './style.module.css'
import Link from 'next/link'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Footer = () => {
  const SERVICE_ID = 'service_z5uvtt8'
  const TEMPLATE_ID = 'template_a202rme'
  const USER_ID = 'roN6mvqkDGDuTSSHW'

  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      }
    )
    e.target.reset()
  }
  return (
    <div className={styles.section + ' pt-5 pb-4 '}>
      <div className='container'>
        <div className='row '>
          <div className={'col-md-4 '}>
            <div className={styles.formCol}>
              <div className='mb-5'>
                <h6>VISIT THE SCHOOL</h6>
                <h3>FOR AN ADMISSION TOUR</h3>
              </div>

              <form onSubmit={handleOnSubmit}>
                <div className='mb-3'>
                  <input
                    type='text'
                    className={styles.formInput + ' form-control'}
                    placeholder='Name'
                    required
                    name='user_name'
                  />
                </div>

                <div className='mb-3'>
                  <input
                    type='email'
                    className={styles.formInput + ' form-control'}
                    aria-describedby='emailHelp'
                    placeholder='Email'
                    required
                    name='user_email'
                  />
                </div>

                <div className='mb-3'>
                  <input
                    type='number'
                    className={styles.formInput + ' form-control'}
                    placeholder='Number'
                    required
                    name='user_number'
                  />
                </div>

                <button
                  type='submit'
                  className={styles.sendBtn + ' btn btn-light mt-4'}
                >
                  Send
                </button>
              </form>

              <p className='mt-4'>
                Our admission officer will contact you shortly
              </p>
            </div>
          </div>

          <div className=' offset-md-1 col-md-7'>
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
                    <div className='col-md-4'>
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

                    <div className='col-md-4'>
                      <Link href='/events' legacyBehavior>
                        <a className='nav-link'>Events</a>
                      </Link>

                      <Link href='/admissions' legacyBehavior>
                        <a className='nav-link'>Admissions</a>
                      </Link>

                      <Link href='/mandatory-public-disclosures' legacyBehavior>
                        <a className='nav-link'>Faculty</a>
                      </Link>
                    </div>

                    <div className='col-md-4'>
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
        Vikas Mantra Public School © 2020 | All Rights Reserved | Coded by Benfy
      </p>
    </div>
  )
}
export default Footer
