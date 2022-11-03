import React from 'react'
import styles from "./style.module.css"
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Table from 'react-bootstrap/Table';

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

                            <h2 className='ulineRed'>Mandatory<br /> Public Disclosures</h2>

                        </div>

                    </div>

                </div>

            </section>

            <section className={'pb60' + ' ' + styles.disclosueSection}>

                <div className={'container'}>

                    <div className={'row' + ' ' + styles.mdBg}>

                        <h4>General Information</h4>

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
                                <td></td>
                                </tr>

                                <tr>
                                <td>3</td>
                                <td>SCHOOL CODE (IF APPLICABLE)</td>
                                <td></td>
                                </tr>

                                <tr>
                                <td>4</td>
                                <td>COMPLETE ADDRESS WITH PIN CODE*</td>
                                <td>168/3 OFF MAHINDRA WORLD CITY ANJUR VILLAGE, CHENGALPATTU , TAMILNADU - 603204</td>
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
                                <td>principal@vikasmantra.org</td>
                                </tr>

                                <tr>
                                <td>8</td>
                                <td>CONTACT DETAILS (LANDLINE/MOBILE)*</td>
                                <td></td>
                                </tr>

                               
                            </tbody>

                        </Table> 

                    </div>

                    <div className={'row' + ' ' + styles.mdBg}>

                        <h4>Documents and Information</h4>

                        <Table bordered className={'mt-4' + ' ' + styles.tableborder}>
                   
                            <tbody>
                                <tr className={styles.tableBorderColor}>
                                <td>S.No</td>
                                <td>DOCUMENTS/INFORMATION </td>
                                <td>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE</td>
                                </tr>

                                <tr>
                                <td>1</td>
                                <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                                <td><a href="#">Annexure 1</a></td>
                                </tr>

                                <tr>
                                <td>2</td>
                                <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE*</td>
                                <td><a href="#">Annexure 2</a></td>
                                </tr>

                                <tr>
                                <td>3</td>
                                <td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT*</td>
                                <td><a href="#">Annexure 3</a></td>
                                </tr>

                                <tr>
                                <td>4</td>
                                <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE*</td>
                                <td><a href="#">Annexure 4</a></td>
                                </tr>

                                <tr>
                                <td>5</td>
                                <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE*</td>
                                <td><a href="#">Annexure 5</a></td>
                                </tr>

                                <tr>
                                <td>6</td>
                                <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY*</td>
                                <td><a href="#">Annexure 6</a></td>
                                </tr>

                                <tr>
                                <td>7</td>
                                <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL*</td>
                                <td><a href="#">Annexure 7</a></td>
                                </tr>

                                <tr>
                                <td>8</td>
                                <td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                                <td><a href="#">Annexure 8</a></td>
                                </tr>

                               
                            </tbody>

                        </Table> 

                        <p><b>NOTE:</b> THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED DOCUMETNS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.</p>

                    </div>

                </div>

            </section>




        </>
    )
}

export default MandatoryScreen