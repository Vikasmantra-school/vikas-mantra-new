import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

export default function index() {

  const pageTitle = 'Enquiry Form';
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
                Admissions –<br></br>Enquiry Form
              </h2>
            </div>

            <div className={'col-md-7' + ' ' + styles.schoolLogo}>
              <img src='/assets/building-transport.png' alt='image' />
            </div>
          </div>
        </div>
      </section>

      <section className='VectorDot'>
        <div className='container'>

          <div className='row'>
            <div className={'col-md-10 col-xs-12 col-sm-12' + ' ' + styles.formCenter}>
              <div className={styles.enquiryForm}>
              <Form>
                <div className={'row' + ' ' + styles.form}>
                  <div className='col-md-5'>
                    <h5 className='mb-5'>Child Information</h5>

                      <Form.Group className='mb-5' controlId="formBasicEmail">
                        <Form.Label>Name of the Child</Form.Label>
                        <Form.Control className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Student Date of Birth</Form.Label>
                        <Form.Control className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Last Class Studied</Form.Label>
                        <Form.Control className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Name of the Current school</Form.Label>
                        <Form.Control className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Admission seeking for</Form.Label>
                        <Form.Control className={styles.formText} type='text' />
                      </Form.Group>
                  </div>

                  <div className='col-md-5 offset-md-1'>

                    <div className={styles.formPb}>

                      <h5 className='mb-5'>Parent Information : Father</h5>

                        <Form.Group className='mb-5'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control className={styles.formText} type='text' />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control className={styles.formText} type='text' />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Email</Form.Label>
                              <Form.Control className={styles.formText} type='text' />
                            </Form.Group>

                          </div>

                        </div>

                    </div>

                    <div>

                      <h5 className='mb-5'>Parent Information : Mother</h5>
                        <Form.Group className='mb-5'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control className={styles.formText} type='text' />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control className={styles.formText} type='text' />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Email</Form.Label>
                              <Form.Control className={styles.formText} type='text' />
                            </Form.Group>

                          </div>

                        </div>

                    </div>

                  </div>

                  <div className='col-md-11'>
                   
                      <Form.Group className='mb-5'>
                        <Form.Label className='mb-5'> Admission of Communication </Form.Label>
                        <Form.Control className={styles.formText} type='text' />
                      </Form.Group>
                
                    <a href='#'>
                      <Button className={'brownBtn'}>Submit</Button>
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
