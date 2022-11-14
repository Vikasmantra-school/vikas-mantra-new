import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useState, useRef } from 'react'


const EnquiryForm = () => {
  const pageTitle = 'Enquiry Form'

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbx03T_Gd3qn7GKJ99OrxmuXC4JkQ-hNbfJBpC3iuukhSvwI90YyscbgN4ZCrnRK72JRRQ/exec"
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      alert('Thank You :) Our admission officer will contact you shortly')
      setLoading(false)
    })
      .catch(err => console.log(err))
  }


  return (
    <>
      <style>{`

    body {
    background: #F5F5F5;
    }

    `}</style>

      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + ' ' + styles.eqBg}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2>
                Admissions –<br />
                Enquiry Form
              </h2>
            </div>

            <div className={'col-md-6 offset-lg-1 pastelBlue imgbg'}>
              <img
                className='img-fluid'
                src='/assets/building-transport.png'
                alt='building-transpor'
              />
            </div>
          </div>
        </div>
      </section>

      <section className={'VectorDot position-relative' + ' ' + styles.formTop}>
        <div className='container'>
          <div className='row'>
            <div
              className={
                'col-xl-10 col-lg-11 col-md-12 col-sm-12 mt-xs-5' +
                ' ' +
                styles.formCenter
              }
            >
              <div className={styles.enquiryForm}>
                <Form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                  <div className={'row' + ' ' + styles.form}>
                    <div className='col-md-5'>
                      <h5 className='mb-5'>Child Information</h5>

                      <Form.Group className='mb-5' controlId='formBasicEmail'>
                        <Form.Label>Name of the Child</Form.Label>
                        <Form.Control name='Name' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Student Date of Birth</Form.Label>
                        <Form.Control name='DOB' className={styles.formText} type='date' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Last Class Studied</Form.Label>
                        <Form.Control name='Last Class Studied' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Name of the Current school</Form.Label>
                        <Form.Control name='Name Of The Current School' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Admission seeking for</Form.Label>
                        <Form.Control name='Admission Seeking For' className={styles.formText} type='text' />
                      </Form.Group>
                    </div>

                    <div className='col-md-5 offset-md-1'>
                      <div className={styles.formPb}>
                        <h5 className='mb-5'>Parent Information : Father</h5>

                        <Form.Group className='mb-5'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control

                            name='Father Name'
                            className={styles.formText}
                            type='text'
                          />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>
                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                name='Father Number'
                                className={styles.formText}
                                type='number'
                              />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                name='Father Email'
                                className={styles.formText}
                                type='email'
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className='mb-5'>Parent Information : Mother</h5>
                        <Form.Group className='mb-5'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            name='Mother Name'
                            className={styles.formText}
                            type='text'
                          />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>
                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                name='Mother Number'
                                className={styles.formText}
                                type='number'
                              />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                name='Mother Email'
                                className={styles.formText}
                                type='email'
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-11'>
                      <Form.Group className='mb-5'>
                        <Form.Label className='mb-5'>
                          Admission of Communication
                        </Form.Label>
                        <Form.Control name='Admission Of Communication' className={styles.formText} type='text' />
                      </Form.Group>

                      <a href='#'>
                        <input type="submit" className={'brownBtn ' + styles.submitBtn } value={loading ? "Loading..." : "Submit"}/>
                        {/* < className={'brownBtn'} type="submit" value={loading ? "Loading..." : "Send"}>Submit</Button> */}
                      </a>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EnquiryForm;