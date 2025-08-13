import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { useState, useRef } from 'react'


const EnquiryForm = () => {
  const pageTitle = 'Enquiry Form'

  //form-data-clear-after-submit

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [lastClass, setLastClass] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [admissionSeeking, setAdmissionSeeking] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherEmail, setFatherEmail] = useState('');
  const [fatherNumber, setFatherNumber] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherEmail, setMotherEmail] = useState('');
  const [motherNumber, setMotherNumber] = useState('');
  const [admissionCommunication, setAdmissionCommunication] = useState('');


  //form-sheet-integration
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbx03T_Gd3qn7GKJ99OrxmuXC4JkQ-hNbfJBpC3iuukhSvwI90YyscbgN4ZCrnRK72JRRQ/exec"
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    //form-data-clear-after-submit
    setName('');
    setDob('');
    setLastClass('');
    setCurrentSchool('');
    setAdmissionSeeking('');
    setFatherEmail('');
    setFatherName('');
    setFatherNumber('');
    setMotherName('');
    setMotherEmail('');
    setMotherNumber('');
    setAdmissionCommunication('');

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

      <section className={'pt60 pb60 ' + ' ' + ' ' + styles.eqBg}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>

              <div className='AnimeStarts'>
                <h2 className='AnimeElement'>
                  Admissions Enquiry Form
                </h2>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className={'VectorDot position-relative pb80' + ' ' + styles.formTop}>
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

                      <div className='AnimeStarts'>
                        <h5 className='mb-5 AnimeElement'>Child Information</h5>
                      </div>

                      <Form.Group className='mb-5 AnimeStarts' controlId='formBasicEmail'>
                        <Form.Label className='AnimeElement'>Name of the Child</Form.Label>
                        <Form.Control
                          required
                          name='Name'
                          className={styles.formText}
                          type='text'
                          value={name}
                          onChange={event => setName(event.target.value)} />
                      </Form.Group>

                      <Form.Group className='mb-5 AnimeStarts'>
                        <Form.Label className='AnimeElement'>Student Date of Birth</Form.Label>
                        <Form.Control
                          required
                          name='DOB'
                          className={styles.formText}
                          type='date'
                          value={dob}
                          onChange={event => setDob(event.target.value)} />
                      </Form.Group>

                      <Form.Group className='mb-5 AnimeStarts'>
                        <Form.Label className='AnimeElement'>Last Class Studied</Form.Label>
                        <Form.Control
                          required
                          name='Last Class Studied'
                          className={styles.formText}
                          type='text'
                          value={lastClass}
                          onChange={event => setLastClass(event.target.value)} />
                      </Form.Group>

                      <Form.Group className='mb-5 AnimeStarts'>
                        <Form.Label className='AnimeElement'>Name of the Current school</Form.Label>
                        <Form.Control
                          required
                          name='Name Of The Current School'
                          className={styles.formText}
                          type='text'
                          value={currentSchool}
                          onChange={event => setCurrentSchool(event.target.value)} />
                      </Form.Group>

                      <Form.Group className='mb-5 AnimeStarts'>
                        <Form.Label className='AnimeElement'>Admission seeking for</Form.Label>
                        <Form.Control
                          required
                          name='Admission Seeking For'
                          className={styles.formText}
                          type='text'
                          value={admissionSeeking}
                          onChange={event => setAdmissionSeeking(event.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className='col-md-5 offset-md-1'>
                      <div className={styles.formPb}>

                        <div className='AnimeStarts'>
                        <h5 className='mb-5 AnimeElement'>Parent Information : Father</h5>
                        </div>

                        <Form.Group className='mb-5 AnimeStarts'>
                          <Form.Label className='AnimeElement'>Name</Form.Label>
                          <Form.Control
                            required
                            name='Father Name'
                            className={styles.formText}
                            type='text'
                            value={fatherName}
                            onChange={event => setFatherName(event.target.value)}
                          />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>
                            <Form.Group className='col-md-6 mb-5 AnimeStarts'>
                              <Form.Label className='AnimeElement'>Phone Number</Form.Label>
                              <Form.Control
                                required
                                name='Father Number'
                                className={styles.formText}
                                type='number'
                                value={fatherNumber}
                                onChange={event => setFatherNumber(event.target.value)}
                              />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5 AnimeStarts'>
                              <Form.Label className='AnimeElement'>Email</Form.Label>
                              <Form.Control
                                required
                                name='Father Email'
                                className={styles.formText}
                                type='email'
                                value={fatherEmail}
                                onChange={event => setFatherEmail(event.target.value)}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>

                      <div className='AnimeStarts'>
                        <h5 className='mb-5 AnimeElement'>Parent Information : Mother</h5>
                        <Form.Group className='mb-5'>
                          <Form.Label className='AnimeElement'>Name</Form.Label>
                          <Form.Control
                            required
                            name='Mother Name'
                            className={styles.formText}
                            type='text'
                            value={motherName}
                            onChange={event => setMotherName(event.target.value)}
                          />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>
                            <Form.Group className='col-md-6 mb-5 AnimeStarts'>
                              <Form.Label className='AnimeElement'>Phone Number</Form.Label>
                              <Form.Control
                                required
                                name='Mother Number'
                                className={styles.formText}
                                type='number'
                                value={motherNumber}
                                onChange={event => setMotherNumber(event.target.value)}
                              />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5 AnimeStarts'>
                              <Form.Label className='AnimeElement'>Email</Form.Label>
                              <Form.Control
                                required
                                name='Mother Email'
                                className={styles.formText}
                                type='email'
                                value={motherEmail}
                                onChange={event => setMotherEmail(event.target.value)}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-11'>
                      <Form.Group className='mb-5 AnimeStarts'>
                        <Form.Label className='mb-5 AnimeElement'>
                          Address for Communication
                        </Form.Label>
                        <Form.Control
                          required
                          name='Admission Of Communication'
                          className={styles.formText}
                          type='text'
                          value={admissionCommunication}
                          onChange={event => setAdmissionCommunication(event.target.value)} />
                      </Form.Group>

                      <a href='#'>
                        <input type="submit" className={'brownBtn ' + styles.submitBtn} value={loading ? "Loading..." : "Submit"} />
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