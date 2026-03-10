import React from 'react';
import styles from './style.module.css';
import { Breadcrumb } from '/components/Breadcrumb/Breadcrumb';
import Table from 'react-bootstrap/Table';

function MandatoryScreen() {
  const pageTitle = 'Mandatory Public Disclosures';

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
                    <td>NAME OF THE SCHOOL</td>
                    <td>VIKAS MANTRA PUBLIC SCHOOL</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>AFFILIATION NO.(IF APPLICABLE)</td>
                    <td>1930634</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>SCHOOL CODE (IF APPLICABLE)</td>
                    <td>55607</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>COMPLETE ADDRESS WITH PIN CODE</td>
                    <td>
                      VANDALUR-KELAMBAKKAM HIGH ROAD, MAMBAKKAM, CHENGALPATTU
                      DISTRICT - 603127
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>PRINCIPAL NAME</td>
                    <td>V.G.SURESH</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>PRINCIPAL QUALIFICATION</td>
                    <td>M.C.A., M.TECH. B.ED.,</td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>SCHOOL EMAIL ID</td>
                    <td>principal.mbkm@vikasmantra.org</td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                    <td>9840540996</td>
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
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Affiliation-26.pdf'
                        target='_blank'>
                        Annexure 1
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL
                      CERTIFICATE, AS APPLICABLE
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Trust-26.pdf'
                        target='_blank'>
                        Annexure 2
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF
                      APPLICABLE, BY THE STATE GOVT./UT
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/NOC-26.pdf'
                        target='_blank'>
                        Annexure 3
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND
                      IT&apos;S RENEWAL IF APPLICABLE
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Recoginition-26.pdf'
                        target='_blank'>
                        Annexure 4
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE
                      NATIONAL BUILDING CODE
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Building-safety-26.pdf'
                        target='_blank'>
                        Annexure 5
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>
                      COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE
                      COMPETENT AUTHORITY
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Fire-26.pdf'
                        target='_blank'>
                        Annexure 6
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>
                      COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR
                      AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION
                    </td>
                    <td>
                      <a
                        href='https://drive.google.com/drive/folders/1ppZ_hz5mAHLuiXTd_DW9PwT4R8IYQ43c'
                        rel='noopener noreferrer'
                        target='_blank'>
                        Annexure 7
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>
                      COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Sanitary-26.pdf'
                        target='_blank'>
                        Annexure 8
                      </a>
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
                    <td>FEE STRUCTURE OF THE SCHOOL</td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/fee-structure.pdf'
                        target='_blank'>
                        Annexure 9
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>ANNUAL ACADEMIC CALENDER</td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Annual-Calendar-26.pdf'
                        target='_blank'>
                        Annexure 10
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/SMC-26.pdf'
                        target='_blank'>
                        Annexure 11
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/PTA-26.pdf'
                        target='_blank'>
                        Annexure 12
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER
                      APPLICABILITY
                    </td>
                    <td>
                      <a
                        href='/mambakkam/mandatory-public-disclosures/pdf/Board-result-26.pdf'
                        target='_blank'>
                        Annexure 13
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60' + ' ' + styles.mdBg}>
            <h4>Staff (Teaching)</h4>

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
                    <td>PRINCIPAL</td>
                    <td>V.G.SURESH</td>
                  </tr>

                  <tr>
                    <td rowSpan='4'>2</td>
                    <td>TOTAL NO. OF TEACHERS</td>
                    <td>147</td>
                  </tr>

                  <tr>
                    <td>PGT</td>
                    <td>19</td>
                  </tr>

                  <tr>
                    <td>TGT</td>
                    <td>63</td>
                  </tr>

                  <tr>
                    <td>PRT</td>
                    <td>48</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>TEACHERS SECTION RATIO</td>
                    <td>1:1.5</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>DETAILS OF SPECIAL EDUCATOR</td>
                    <td>CHANDRA</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                    <td>VANITHA</td>
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
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>2023</td>
                    <td>208</td>
                    <td>206</td>
                    <td>99.4%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2024</td>
                    <td>249</td>
                    <td>249</td>
                    <td>100.0%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2025</td>
                    <td>239</td>
                    <td>239</td>
                    <td>100.0%</td>
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
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>2023</td>
                    <td>440</td>
                    <td>437</td>
                    <td>99.32%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2024</td>
                    <td>508</td>
                    <td>508</td>
                    <td>100.0%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2025</td>
                    <td>173</td>
                    <td>172</td>
                    <td>99.42%</td>
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
                    <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td>
                    <td>12140</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td>
                    <td>85 &amp; 3642</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN
                      SQ MTR)
                    </td>
                    <td>7 &amp; 372</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>INTERNET FACILITY</td>
                    <td>YES</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>NO. OF GIRLS TOILETS</td>
                    <td>80</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>NO. OF BOYS TOILETS</td>
                    <td>86</td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>
                      LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING
                      THE INFRASTRUCTURE OF THE SCHOOL
                    </td>
                    <td>
                      <a
                        href='https://youtu.be/c7JaPcJP7Us'
                        rel='noopener noreferrer'
                        target='_blank'>
                        https://youtu.be/c7JaPcJP7Us
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className={'row pt60'}>
            <h4>Teacher Details</h4>

            <div className='table-responsive'>
              <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                <tbody>
                  <tr className={styles.tableBorderColor}>
                    <td>S.No</td>
                    <td>TEACHER NAME</td>
                    <td>DESIGNATION</td>
                    <td>QUALIFICATION</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Geethakumari S</td>
                    <td>PGT</td>
                    <td>M.SC</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>R.Kavitha</td>
                    <td>PGT</td>
                    <td>MSC,BED</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Anitha .T</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Aby Prasad</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Maheshwari .P</td>
                    <td>PET</td>
                    <td>M.PED</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Nandhini</td>
                    <td>PET</td>
                    <td>M.PED</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Dhinesh. M.S</td>
                    <td>PET</td>
                    <td>M.PED</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Madhan kumar</td>
                    <td>TGT</td>
                    <td>BFA</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Usha R</td>
                    <td>PRT</td>
                    <td>B.com</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Nupur Chattopadhyay</td>
                    <td>PRT</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Eswari. P</td>
                    <td>PRT</td>
                    <td>M.A</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>S.Danila Perciyal</td>
                    <td>PRT</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Soni Das</td>
                    <td>PRT</td>
                    <td>M.A</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>M. Yuvarani</td>
                    <td>PRT</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Preethy. M</td>
                    <td>TGT</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Athiparasakthi. A</td>
                    <td>PRT</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Anbumani. S</td>
                    <td>PRT</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Jalaja Ganesh</td>
                    <td>PRT</td>
                    <td>M.COM</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>A. Sangeetha</td>
                    <td>PRT</td>
                    <td>M.A</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Jayanthi. R</td>
                    <td>PRT</td>
                    <td>M.Phil, M.sc(Maths)</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>Ramya. D</td>
                    <td>TGT</td>
                    <td>B.sc</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>KARTHICK N</td>
                    <td>PRT</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>A.AnnieChristina</td>
                    <td>PRT</td>
                    <td>M.SC,M.Ed</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>Sathya. P</td>
                    <td>PRT</td>
                    <td>B.SC</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>P. Gomathi</td>
                    <td>PRT</td>
                    <td>B.SC</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Durga. K</td>
                    <td>PRT</td>
                    <td>M.A</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>S.Indumathi</td>
                    <td>PRT</td>
                    <td>B.SC BIO TECH</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>S. Soundharya</td>
                    <td>PRT</td>
                    <td>M.COM</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>Vinodharshini. R</td>
                    <td>PRT</td>
                    <td>M.A</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>Parani. T</td>
                    <td>PRT</td>
                    <td>B.A</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>A. Gopiga</td>
                    <td>PRT</td>
                    <td>B.E</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>MS.MERLIN</td>
                    <td>PRT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>KANCHAN KUMARI</td>
                    <td>TGT</td>
                    <td>B.Ed</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>G.NELSIA</td>
                    <td>TGT</td>
                    <td>B.Ed</td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>Priyaja</td>
                    <td>PRT</td>
                    <td>B.Sc</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>Nishanthi</td>
                    <td>TGT</td>
                    <td>M.SC</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>MARIAPPAN</td>
                    <td>PGT</td>
                    <td>MPhil</td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>N Rajadurai</td>
                    <td>TGT</td>
                    <td>DIPLOMA IN MACH ENGG</td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>R.NARMATHA</td>
                    <td>TGT</td>
                    <td>PHD</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>Nirmala Lawrence</td>
                    <td>PGT</td>
                    <td>phd</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>P RAJESH</td>
                    <td>PGT</td>
                    <td>M.Sc</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>Therasa</td>
                    <td>TGT</td>
                    <td>M.Phil</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>Chinnaiyan.K</td>
                    <td>PRINCIPAL</td>
                    <td>M.sc., M.Phil</td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>CHRISTURAJA</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>TIRUPATTUR MOHAMED SAMEER</td>
                    <td>PGT</td>
                    <td>M.Com</td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>K Padma Devi</td>
                    <td>PGT</td>
                    <td>PhD</td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>NIRMALRAJ</td>
                    <td>PGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>MARIYA ANUSHIYA A</td>
                    <td>PET</td>
                    <td>bped</td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>PETCHIMUTHU V</td>
                    <td>PET</td>
                    <td>MCA</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>Malini S</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>Subhashini Balaji</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>SELVAKUMAR H</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>R.SUBHASRI</td>
                    <td>TGT</td>
                    <td>B.Com</td>
                  </tr>
                  <tr>
                    <td>54</td>
                    <td>VIJAYALAKSHMI J</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>T CHITRA</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>56</td>
                    <td>S VIGNESHWARAN</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>57</td>
                    <td>M KAVITHA</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>SUMITHA S</td>
                    <td>PRT</td>
                    <td>B.SC</td>
                  </tr>
                  <tr>
                    <td>59</td>
                    <td>MAHESWARI S</td>
                    <td>PRT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>P T JANANI</td>
                    <td>TGT</td>
                    <td>ME</td>
                  </tr>
                  <tr>
                    <td>61</td>
                    <td>RAJESWARI K</td>
                    <td>PRT</td>
                    <td>M.SC</td>
                  </tr>
                  <tr>
                    <td>62</td>
                    <td>REENADEVI N</td>
                    <td>TGT</td>
                    <td>MPHIL</td>
                  </tr>
                  <tr>
                    <td>63</td>
                    <td>REETA A</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>64</td>
                    <td>PRIYYANKA P KUCHEKAR</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>V.Pavithra</td>
                    <td>PRT</td>
                    <td>M.SC</td>
                  </tr>
                  <tr>
                    <td>66</td>
                    <td>KANAKA MADHAVAN</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>BEULAH SELVIN</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>68</td>
                    <td>Z MOHAMMED NASEEMUDEEN</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>69</td>
                    <td>SHAHANAZ BEGUM M</td>
                    <td>TGT</td>
                    <td>BA</td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>Janani R</td>
                    <td>PRT</td>
                    <td>M.SC</td>
                  </tr>
                  <tr>
                    <td>71</td>
                    <td>ESTHER JENIFER J</td>
                    <td>PRT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>72</td>
                    <td>MEENA</td>
                    <td>PRT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>73</td>
                    <td>MADURA</td>
                    <td>PRT</td>
                    <td>BE</td>
                  </tr>
                  <tr>
                    <td>74</td>
                    <td>GEETHA V</td>
                    <td>PRT</td>
                    <td>M.A</td>
                  </tr>
                  <tr>
                    <td>75</td>
                    <td>REVATHI S</td>
                    <td>PRT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>76</td>
                    <td>FELCI SHEELA DELFI S</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>77</td>
                    <td>RADHA M</td>
                    <td>PRT</td>
                    <td>MBA</td>
                  </tr>
                  <tr>
                    <td>78</td>
                    <td>AMAL PRINCY</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>79</td>
                    <td>SREEMATHI V</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>80</td>
                    <td>PRABHAVATHY R</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>81</td>
                    <td>KIRUTHIKA P</td>
                    <td>PRT</td>
                    <td>MBA</td>
                  </tr>
                  <tr>
                    <td>82</td>
                    <td>M.KIRUTHIGA</td>
                    <td>TGT</td>
                    <td>MCA</td>
                  </tr>
                  <tr>
                    <td>83</td>
                    <td>M.MUTHULAKSHMI</td>
                    <td>TGT</td>
                    <td>BBA</td>
                  </tr>
                  <tr>
                    <td>84</td>
                    <td>VIJAYALAKSHMI M</td>
                    <td>PRT</td>
                    <td>B.COM</td>
                  </tr>
                  <tr>
                    <td>85</td>
                    <td>Karpagam M</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>86</td>
                    <td>BHUVANESWARI R</td>
                    <td>PRT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>87</td>
                    <td>K. DHANASEKAR</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>88</td>
                    <td>ARCHANA VERMA</td>
                    <td>PRT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>89</td>
                    <td>GEETHA A</td>
                    <td>NTT</td>
                    <td>BISM</td>
                  </tr>
                  <tr>
                    <td>90</td>
                    <td>EZHILARASI V</td>
                    <td>PRT</td>
                    <td>M.SC</td>
                  </tr>
                  <tr>
                    <td>91</td>
                    <td>PRIYANKA S</td>
                    <td>NTT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>92</td>
                    <td>RUBINI V</td>
                    <td>NTT</td>
                    <td>MCOM</td>
                  </tr>
                  <tr>
                    <td>93</td>
                    <td>HEMA PULLELIL LALITHA</td>
                    <td>PRT</td>
                    <td>B.SC</td>
                  </tr>
                  <tr>
                    <td>94</td>
                    <td>SIVARANJINI V</td>
                    <td>NTT</td>
                    <td>BE</td>
                  </tr>
                  <tr>
                    <td>95</td>
                    <td>A SHEELA</td>
                    <td>NTT</td>
                    <td>BA</td>
                  </tr>
                  <tr>
                    <td>96</td>
                    <td>HEMA PRIYA K</td>
                    <td>NTT</td>
                    <td>BA</td>
                  </tr>
                  <tr>
                    <td>97</td>
                    <td>KEERTHI SOWJANYA</td>
                    <td>NTT</td>
                    <td>BE</td>
                  </tr>
                  <tr>
                    <td>98</td>
                    <td>SHIRLY JOHN</td>
                    <td>NTT</td>
                    <td>BA</td>
                  </tr>
                  <tr>
                    <td>99</td>
                    <td>KAVITHA S</td>
                    <td>PGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>PRASANTH R</td>
                    <td>TGT</td>
                    <td>MSC</td>
                  </tr>
                  <tr>
                    <td>101</td>
                    <td>Gokul kumar</td>
                    <td>TGT</td>
                    <td>MA VIOLIN</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>SATHYAPRIYA R</td>
                    <td>PGT</td>
                    <td>M.C.A, M.A</td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>Aswinah Zeenath A</td>
                    <td>TGT</td>
                    <td>MA</td>
                  </tr>
                  <tr>
                    <td>104</td>
                    <td>Pooja Patil</td>
                    <td>TGT</td>
                    <td>B TECH</td>
                  </tr>
                  <tr>
                    <td>105</td>
                    <td>Avipsa Parida</td>
                    <td>TGT</td>
                    <td>M PHIL</td>
                  </tr>
                  <tr>
                    <td>106</td>
                    <td>ANURAG GAUR</td>
                    <td>PRT</td>
                    <td>B.A. GEOGRAPHY</td>
                  </tr>
                  <tr>
                    <td>107</td>
                    <td>ALISHA MASRAM</td>
                    <td>TGT</td>
                    <td>M.Sc.,</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MandatoryScreen;
