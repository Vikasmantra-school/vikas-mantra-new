import React from 'react'
import styles from './style.module.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useState, useRef } from 'react'

function Career() {
  const ValidateEmail = () => {
    var email = document.getElementById('txtEmail').value
    var lblError = document.getElementById('lblError')
    lblError.innerHTML = ''
    var expr =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!expr.test(email)) {
      lblError.innerHTML = 'Invalid email address.'
    }
  }

  const pageTitle = 'Career'

  const [methodOfCommunication, setCommunication] = useState('email')


  //form-sheet-integration

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbw3cVmLmrjniePfI9yHuKwUil6I7y8mSoDK7GLbD5_QL4JQz9wfpXVXKnYJtRJWJiPF4g/exec"
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

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
              <h2>Careers</h2>
            </div>
          </div>
        </div>
      </section>

      <section className={'whitebg' + ' ' + 'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className='ulineRed'>WE ARE HIRING! </h2>

              <p className='pt-4'>
                At the VIKAS MANTRA PUBLIC SCHOOL the teachers are handpicked
                through an extensive and exhaustive process. Our selection of
                the right candidate not only depends on the credentials, but
                also their student handling abilities.
              </p>

              <p>
                We are committed to building great careers for our students.
                This mission inspires us to recruit competent and committed
                faculty.
              </p>

              <p>
                Remuneration & perks will be the best in the Industry and be
                commensurate with qualification and experience.
              </p>

              <p className={styles.textBold}>
                Vikas Mantra Public School is looking for qualified, dedicated
                and learner centric EDUCATORS to join our team in the following
                positions
              </p>

              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr>
                    <td>Pre-Primary</td>
                    <td>
                      <p>Montessori trained </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Music teacher</td>
                    <td>
                      <p>
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
                  <tr>
                    <td>Primary teacher</td>
                    <td>
                      <p>
                        Trained graduate with B.ed (minimum 2+ years experience,
                        full time)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <p>
                Salary will not be a limiting factor for the right candidate.{' '}
              </p>
              <p>
                Apply with your resume to hr@vikasmantra.org with a passport
                size photo.
              </p>
              <p>For more details, Call : +91 – 7092450450, +91 – 7330098765</p>
            </div>

            <div className='col-md-6'>
              <div className={'imgUp imgBgColor pastelLightPink' + ' ' + styles.careerImg}>
                <img
                  src='/assets/banners/we-are-hiring.png'
                  alt='image'
                  className='img-fluid'
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
                      <h5 className='mb-5'>Candidate </h5>
                    </div>

                    <div className='col-md-12 col-lg-5 col-sm-12'>
                      <div className='mb-5'>
                        <label>Name of the Candidate </label>
                        <Form.Control className={styles.formText} type='text' name='Name of the Candidate' />
                      </div>

                      <div className='mb-5'>
                        <label>Mailing address</label>

                        <Form.Control
                          className={styles.formText + ' ' + 'mb-5'}
                          type='text'
                          name='Address'
                        />

                        <Form.Control
                          className={styles.formText + ' ' + 'mb-5'}
                          type='text'
                          name='Address'
                        />

                        <Form.Control
                          className={styles.formText + ' ' + 'mb-5'}
                          type='text'
                          name='Address'
                        />
                      </div>
                    </div>

                    <div className='col-md-12 col-lg-5 col-sm-12 offset-lg-1'>
                      <div className={styles.formPb}>
                        <div className='mb-5'>
                          <label>Job Opening</label>

                          <Form.Control
                            className={styles.formText}
                            type='text'
                            name='Job Opening'
                          />
                        </div>
                      </div>

                      <div className='mb-3'>
                        <h5 className='mb-4'>Method of Communication</h5>

                        <div className='form-check '>
                          <input
                            className='form-check-input coupon_question'
                            type='radio'
                            name='checking-radio'
                            checked={methodOfCommunication == 'email'}
                            onChange={() => setCommunication('email')}
                          />

                          <label
                            className='form-check-label'
                            for='flexRadioDefault2'
                          >
                            Email
                          </label>

                        </div>
                        <div className='form-check '>

                          <input
                            className='form-check-input coupon_question'
                            type='radio'
                            name='checking-radio'
                            checked={methodOfCommunication == 'phone'}
                            onChange={() => setCommunication('phone')}
                          />

                          <label
                            className='form-check-label'
                            for='flexRadioDefault1'
                          >
                            Phone
                          </label>
                        </div>
                      </div>
                      {methodOfCommunication == 'email' && (
                        <div className='mb-3 mail-check'>
                          <label
                            for='exampleInputEmail1'
                            className='form-label'
                          >
                            Email
                          </label>
                          <input
                            type='email'
                            className={
                              'form-control form-width' + ' ' + styles.formText
                            }
                            id='txtEmail'
                            onBlur={ValidateEmail}
                            required='true'
                            name='Mail Id'
                          ></input>
                          <span id='lblError'></span>
                        </div>
                      )}
                      {methodOfCommunication == 'phone' && (
                        <div className='mb-3 phone-check'>
                          <label
                            for='exampleInputPassword1'
                            className='form-label'
                          >
                            Phone
                          </label>
                          <input
                            type='number'
                            className={
                              'form-control form-width' + ' ' + styles.formText
                            }
                            required='true'
                            name='Number'
                          ></input>
                        </div>
                      )}

                      <div></div>

                    </div>

                    <a href='#'>
                      <Button className={'brownBtn'} type="submit" value={loading ? " Loading..." : " Submit "}>Submit</Button>
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