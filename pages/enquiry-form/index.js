import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;


export default function index() {
  const pageTitle = 'Enquiry Form'

  //sheet-integration
  const [form, setForm] = useState({
    name: '',
    dob: '',
    lastClassStudied: '',
    nameOfTheCurrentSchool: '',
    admissionSeekingFor: '',
    fatherName: '',
    fatherNumber: '',
    fatherEmail: '',
    motherName: '',
    motherNumber: '',
    motherEmail: '',
    admissionOfCommunication: '',
  });


  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      form.name !== '' &&
      form.email !== '' &&
      form.topic !== '' &&
      form.description !== ''
    ) {
      const newRow = {
        FullName: form.name,
        Email: form.email,
        Topic: form.topic,
        Description: form.description,
      };

      appendSpreadsheet(newRow);
    }
    alert('success');
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
                <Form onSubmit={submitForm}>
                  <div className={'row' + ' ' + styles.form}>
                    <div className='col-md-5'>
                      <h5 className='mb-5'>Child Information</h5>

                      <Form.Group className='mb-5' controlId='formBasicEmail'>
                        <Form.Label>Name of the Child</Form.Label>
                        <Form.Control onChange={handleChange} name='name' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Student Date of Birth</Form.Label>
                        <Form.Control onChange={handleChange} name='dob' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Last Class Studied</Form.Label>
                        <Form.Control onChange={handleChange} name='lastClassStudied' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Name of the Current school</Form.Label>
                        <Form.Control onChange={handleChange} name='nameOfTheCurrentSchool' className={styles.formText} type='text' />
                      </Form.Group>

                      <Form.Group className='mb-5'>
                        <Form.Label>Admission seeking for</Form.Label>
                        <Form.Control onChange={handleChange} name='admissionSeekingFor' className={styles.formText} type='text' />
                      </Form.Group>
                    </div>

                    <div className='col-md-5 offset-md-1'>
                      <div className={styles.formPb}>
                        <h5 className='mb-5'>Parent Information : Father</h5>

                        <Form.Group className='mb-5'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            name='fatherName'
                            className={styles.formText}
                            type='text'
                          />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>
                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                onChange={handleChange} name='fatherNumber'
                                className={styles.formText}
                                type='number'
                              />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                onChange={handleChange} name='fatherEmail'
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
                            onChange={handleChange} name='motherName'
                            className={styles.formText}
                            type='text'
                          />
                        </Form.Group>

                        <div className='mb-5'>
                          <div className='row'>
                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                onChange={handleChange} name='motherNumber'
                                className={styles.formText}
                                type='number'
                              />
                            </Form.Group>

                            <Form.Group className='col-md-6 mb-5'>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                onChange={handleChange} name='motherEmail'
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
                        <Form.Control onChange={handleChange} name='admissionOfCommunication' className={styles.formText} type='text' />
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
