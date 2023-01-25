import React from 'react'
import styles from './style.module.css'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import Table from 'react-bootstrap/Table'

function MandatoryScreen() {
  const pageTitle = 'Mandatory Public Disclosures'

  return (
    <>
      <style>{`

                   body {
                        background: #F5F5F5;
                       }

                    `}</style>

      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2 className='ulineRed'>
                Mandatory
                <br /> Public Disclosures
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className={'pb60' + ' ' + styles.disclosueSection}>
        <div className={'container'}>
          <div className={'row'}>
            <h4>General Information</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>Information</td>
                    <td>Details</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>NAME OF THE SCHOOL*</td>
                    <td>VIKAS MANTRA PUBLIC SCHOOL</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>AFFILIATION NO.(IF APPLICABLE)</td>
                    <td>1931307</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>SCHOOL CODE (IF APPLICABLE)</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>COMPLETE ADDRESS WITH PIN CODE*</td>
                    <td>
                      168/3 OFF MAHINDRA WORLD CITY ANJUR VILLAGE, CHENGALPATTU
                      , TAMILNADU - 603204
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>PRINCIPAL NAME*</td>
                    <td>MRS PRIYANKA GHOSH JESURAJ</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>PRINCIPAL QUALIFICATION*</td>
                    <td>M.COM B.ED</td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>SCHOOL EMAIL ID*</td>
                    <td>info@vikasmantra.org</td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>CONTACT DETAILS (LANDLINE/MOBILE)*</td>
                    <td>6380978251</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60'}>
            <h4>Documents and Information</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>DOCUMENTS/INFORMATION </td>
                    <td>
                      LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL&apos;S WEBSITE
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>
                      COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT
                      EXTENSION OF AFFILIATION, IF ANY
                    </td>
                    <td>
                      <a href='#'>Annexure 1</a>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL
                      CERTIFICATE, AS APPLICABLE*
                    </td>
                    <td>
                      <a href='/pdf/trust-registration-certificate.pdf' target='_blank'>Annexure 2</a>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF
                      APPLICABLE, BY THE STATE GOVT./UT*
                    </td>
                    <td>
                      <a href='/pdf/noc.pdf' target='_blank'>Annexure 3</a>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND
                      IT&apos;S RENEWAL IF APPLICABLE*
                    </td>
                    <td>
                      <a href='/pdf/certificate-of-recognition.pdf'>Annexure 4</a>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE
                      NATIONAL BUILDING CODE*
                    </td>
                    <td>
                      <a href='/pdf/building-safety.pdf' target='_blank'>Annexure 5</a>
                    </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>
                      COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE
                      COMPETENT AUTHORITY*
                    </td>
                    <td>
                      <a href='/pdf/fire-safety.pdf' target='_blank'>Annexure 6</a>
                    </td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>
                      COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR
                      AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF
                      CERTIFICATION BY SCHOOL*
                    </td>
                    <td>
                      <a href='/pdf/deo.pdf' target='_blank'>Annexure 7</a>
                    </td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>
                      COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES
                    </td>
                    <td>
                      <a href='/pdf/sanitary-certificate-2023-2024.pdf' target='_blank'>Annexure 8</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <p>
              <b>NOTE:</b> THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES
              OF ABOVE LISTED DOCUMETNS BY CHAIRMAN/MANAGER/SECRETARY AND
              PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED
              DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION
              AS PER NORMS.
            </p>
          </div>
          <div className={'row pt60'}>
            <h4>Results and Academics</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>DOCUMENTS/INFORMATION </td>
                    <td>
                      LINKS OF UPLOADED DOCUMENTS <br></br> ON YOUR
                      SCHOOL&apos;S WEBSITE
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>FEE STRUCTURE OF THE SCHOOL*</td>
                    <td>
                      <a href='/pdf/vmps-fee-structure-2022.pdf' target='_blank'>Annexure 9</a>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>ANNUAL ACADEMIC CALENDER* </td>
                    <td>
                      <a href='/pdf/academic-calendar.pdf' target='_blank'>Annexure 10</a>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)*</td>
                    <td>
                      <a href='/pdf/smc-1.pdf' target='_blank'>Annexure 11</a>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS*</td>
                    <td>
                    <a href='/pdf/pta-2022.pdf' target='_blank'>Annexure 12</a>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER
                      APPLICABILITY
                    </td>
                    <td>
                      <a href='#'>Annexure 13</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60' + ' ' + styles.mdBg}>
            <h4>Staff(Teaching)</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>INFORMATION</td>
                    <td>DETAILS</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>PRINCIPAL*</td>
                    <td>MRS PRIYANKA GHOSH JESURAJ</td>
                  </tr>

                  <tr>
                    <td rowspan='4'>2</td>
                    <td>TOTAL NO. OF TEACHERS* </td>
                    <td>47</td>
                  </tr>

                  <tr>
                    <td>PGT*</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>TGT*</td>
                    <td>16</td>
                  </tr>

                  <tr>
                    <td>PRT*</td>
                    <td>11</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>TEACHERS SECTION RATIO*</td>
                    <td>35:1</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>DETAILS OF SPECIAL EDUCATOR*</td>
                    <td>MS LATHA BABU B.Sc B.Ed MDA SPECIAL EDUCATOR</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER*</td>
                    <td>MS SHARMILI M.Sc COUNSELLING PSYCOLOGY</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60'}>
            <h4>Result Class : X</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>YEAR </td>
                    <td>NO. OF REGISTERED STUDENTS</td>
                    <td>NO. OF STUDENTS PASSED</td>
                    <td>PASS PERCENTAGE</td>
                    <td>REMARKS</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>EG. 78.56</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60'}>
            <h4>Result Class : XII</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>YEAR </td>
                    <td>NO. OF REGISTERED STUDENTS</td>
                    <td>NO. OF STUDENTS PASSED</td>
                    <td>PASS PERCENTAGE</td>
                    <td>REMARKS</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1 EG. 78.56</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60' + ' ' + styles.mdBg}>
            <h4>School and Infrastructure</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>INFORMATION </td>
                    <td>DETAILS</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)*</td>
                    <td>13961</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)*</td>
                    <td>38 and 41</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN
                      SQ MTR)*{' '}
                    </td>
                    <td>3 and 65</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>INTERNET FACILITY*</td>
                    <td>YES</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>NO. OF GIRLS TOILETS*</td>
                    <td>3</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>NO. OF BOYS TOILETS*</td>
                    <td>3</td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>
                      LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING
                      THE INFRASTRUCTURE OF THE SCHOOL
                    </td>
                    <td><a href="https://www.youtube.com/watch?v=JJrU/EOgfaZw81=149s">https://www.youtube.com/watch?v=JJrU/EOgfaZw81=149s</a></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MandatoryScreen
