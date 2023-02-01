import React from 'react'
import styles from './style.module.css'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { useState, useRef } from 'react'

function Career() {

  const namecheck = useRef()
  const pageTitle = 'Career'

  //form-data-clear-after-submit

  const getInitialState = () => {
    const value = "PGT-ENGLISH";
    return value;
  };

  const [jobOpening, setJobOpening] = useState(getInitialState)
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')

  let errmsg = 'Invalid name';

  const ValidateEmail = () => {

    var lblError = document.getElementById('lblError')

    lblError.innerHTML = ''

    var nameExpr = /[^A-Za-z0-9]+/

    if (!nameExpr.test(namecheck)) {
      lblError.innerHTML = errmsg;
    }
  }



  const [methodOfCommunication, setCommunication] = useState('email')


  //form-sheet-integration

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbw3cVmLmrjniePfI9yHuKwUil6I7y8mSoDK7GLbD5_QL4JQz9wfpXVXKnYJtRJWJiPF4g/exec"
  const [loading, setLoading] = useState(false)



  const handleSubmit = (e) => {
    ValidateEmail();
    e.preventDefault()
    setLoading(true)

    setName('')
    setAddress('')
    setNumber('')
    setJobOpening('')
    setMail('')

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      alert("SUCCESSFULLY SUBMITTED")
      setLoading(false)
    })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>

              <div className='AnimeStarts'>
                <h2 className='AnimeElement'>Careers</h2>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className={'whitebg' + ' ' + 'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>

              <div className='AnimeStarts'>
                <h2 className='ulineRed AnimeElement'>WE ARE HIRING! </h2>
              </div>

              <div className='AnimeStarts'>
                <p className='pt-4 AnimeElement'>
                  At the VIKAS MANTRA PUBLIC SCHOOL the teachers are handpicked
                  through an extensive and exhaustive process. Our selection of
                  the right candidate not only depends on the credentials, but
                  also their student handling abilities.
                </p>
              </div>

              <div className='AnimeStarts'>
                <p className='AnimeElement'>
                  We are committed to building great careers for our students.
                  This mission inspires us to recruit competent and committed
                  faculty.
                </p>
              </div>

              <div className='AnimeStarts'>
                <p className='AnimeElement'>
                  Remuneration & perks will be the best in the Industry and be
                  commensurate with qualification and experience.
                </p>
              </div>

              <div className='AnimeStarts'>
                <p className={styles.textBold + ' AnimeElement'}>
                  Vikas Mantra Public School is looking for qualified, dedicated
                  and learner centric EDUCATORS to join our team in the following
                  positions
                </p>
              </div>

              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className='AnimeStarts'>
                    <td className='AnimeElement'>Pre-Primary</td>
                    <td className='AnimeElement'>
                      <p className='AnimeElement'>Montessori trained </p>
                    </td>
                  </tr>
                  <tr className='AnimeStarts'>
                    <td className='AnimeElement'>Music teacher</td>
                    <td className='AnimeElement'>
                      <p className='AnimeElement'>
                        Classical and Western
                        <br />
                        Full time
                        <br />
                        Qualification: Any Bachelor’s degree
                        <br />
                        Experience : In teaching music (1 year preferred)
                      </p>
                    </td>
                  </tr>
                  <tr className='AnimeStarts'>
                    <td className='AnimeElement'>Primary teacher</td>
                    <td className='AnimeElement'>
                      <p className='AnimeElement'>
                        Trained graduate with B.ed (minimum 2+ years experience,
                        full time)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className='AnimeStarts'>
                <p className='AnimeElement'>
                  Salary will not be a limiting factor for the right candidate.{' '}
                </p>

                <p className='AnimeElement'>
                  Apply with your resume to hr@vikasmantra.org with a passport
                  size photo.
                </p>

                <p className='AnimeElement'>For more details, Call : +91 – 7092450450, +91 – 7330098765</p>

              </div>

            </div>

            <div className='col-md-6'>
              <div className={'imgUp imgBgColor pastelLightPink AnimeStarts ' + ' ' + styles.careerImg}>
                <img
                  src='/assets/banners/we-are-hiring.png'
                  alt='image'
                  className='img-fluid AnimeElement'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          'greybg VectorSpiralBlue position-relative' +
          ' ' +
          'pt60' +
          ' ' +
          'pb60' +
          ' ' +
          styles.careerBg
        }
      >
        <div className='container'>
          <Form ref={formRef} onSubmit={handleSubmit} name="google-sheet" >
            <div className={'row'}>
              <div className={'col-md-10' + ' ' + styles.formCenter}>
                <div className={styles.enquiryForm}>
                  <div className={'row' + ' ' + styles.form}>
                    <div className='col-md-12'>

                      <div className='AnimeStarts'>
                        <h5 className='mb-5 AnimeElement'>Candidate </h5>
                      </div>

                    </div>

                    <div className='col-md-12 col-lg-5 col-sm-12'>
                      <div className='mb-5 AnimeStarts'>
                        <label className='AnimeElement'>Name of the Candidate </label>
                        <Form.Control
                          className={styles.formText + ' AnimeElement'}
                          type='text'
                          name='Name of the Candidate'
                          required
                          onChange={event => setName(event.target.value)}
                          value={name}
                          ref={namecheck}
                          onBlur={ValidateEmail}
                        />
                        <span id='lblError' />
                      </div>

                      <div className='mb-5 AnimeStarts'>
                        <label className='AnimeElement'>Mailing address</label>

                        <Form.Control
                          className={styles.formText + ' ' + 'mb-5 AnimeElement '}
                          type='text'
                          name='Address'
                          required
                          onChange={event => setAddress(event.target.value)}
                          value={address}
                        />

                        <Form.Control
                          className={styles.formText + ' ' + 'mb-5 AnimeElement'}
                          type='text'
                          name='Address'
                        />

                        <Form.Control
                          className={styles.formText + ' ' + 'mb-5 AnimeElement'}
                          type='text'
                          name='Address'

                        />
                      </div>
                    </div>

                    <div className='col-md-12 col-lg-5 col-sm-12 offset-lg-1'>
                      <div className={styles.formPb}>
                        <div className='mb-5 AnimeStarts'>
                          <label className='AnimeElement'>Job Opening</label>

                          {/* <Form.Control
                            className={styles.formText + ' AnimeElement'}
                            type='text'
                            name='Job Opening'
                            required
                            onChange={event => setJobOpening(event.target.value)}
                            value={jobOpening}
                          /> */}

                          {/* <select className={styles.formText + ' AnimeElement form-select '} aria-label="Default select example">
                            <option selected></option>
                            <option value={jobOpening}  name='Job Opening' onChange={event => setJobOpening(event.target.value)} >One</option>
                            <option value={jobOpening} name='Job Opening' onChange={event => setJobOpening(event.target.value)}>Two</option>
                            <option value={jobOpening} name='Job Opening' onChange={event => setJobOpening(event.target.value)}>Three</option>
                          </select> */}

                          <Form.Select aria-label="Default select example" name="Job Opening" value={jobOpening} onChange={event => setJobOpening(event.target.value)} className={styles.formText + ' AnimeElement form-select '}>
                            <option value='PGT-ENGLISH'>PGT-ENGLISH (IX-XI)</option>
                            <option value='PGT-COMMERCE'>PGT-COMMERCE(X&XI)</option>
                            <option value='PGT-SOCIAL SCIENCE'>PGT-SOCIAL SCIENCE(VII&X)</option>
                            <option value='PRT-HINDI'>PRT-HINDI(II,III)</option>
                            <option value='LIBRARIAN'>LIBRARIAN(I-III)</option>
                            <option value='PET'>PET(I-III)</option>
                            <option value='YOGA INSTRUCTOR'>YOGA INSTRUCTOR(I-X)</option>
                            <option value='ART TEACHER'>ART TEACHER(I-V)</option>
                          </Form.Select>

                        </div>
                      </div>

                      <div className='mb-3 AnimeStarts'>
                        <h5 className='mb-4 AnimeElement'>Method of Communication</h5>

                        <div className='form-check AnimeStarts'>
                          <input
                            className='form-check-input coupon_question AnimeElement'
                            type='radio'
                            name='checking-radio'
                            checked={methodOfCommunication == 'email'}
                            onChange={() => setCommunication('email')}
                          />

                          <label
                            className='form-check-label AnimeElement'
                            htmlFor='flexRadioDefault2'
                          >
                            Email
                          </label>

                        </div>
                        <div className='form-check AnimeStarts'>

                          <input
                            className='form-check-input coupon_question AnimeElement'
                            type='radio'
                            name='checking-radio'
                            checked={methodOfCommunication == 'phone'}
                            onChange={() => setCommunication('phone')}
                          />

                          <label
                            className='form-check-label AnimeElement'
                            htmlFor='flexRadioDefault1'
                          >
                            Phone
                          </label>
                        </div>
                      </div>
                      {methodOfCommunication == 'email' && (
                        <div className='mb-3 mail-check'>
                          <label htmlFor='exampleInputEmail1' className='form-label AnimeElement' >
                            Email
                          </label>

                          <input
                            type='email'
                            className={'form-control form-width AnimeElement ' + ' ' + styles.formText}
                            id='txtEmail'
                            name='Mail Id'
                            required
                            onChange={event => setMail(event.target.value)}
                            value={mail}
                          />
                        </div>
                      )}
                      {methodOfCommunication == 'phone' && (
                        <div className='mb-3 phone-check'>
                          <label htmlFor='exampleInputPassword1 AnimeElement ' className='form-label' >
                            Phone
                          </label>
                          <input
                            type='number'
                            className={'form-control form-width AnimeElement ' + ' ' + styles.formText}
                            required
                            name='Number'
                            onChange={event => setNumber(event.target.value)}
                            value={number}
                          />
                        </div>
                      )}

                      <div></div>

                    </div>

                    <a href='#'>
                      <input className={'brownBtn ' + styles.submitBtn} type="submit" value={loading ? " Loading..." : " Submit "} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  )
}

export default Career