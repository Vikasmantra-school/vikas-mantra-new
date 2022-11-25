import React from 'react'
import styles from "./style.module.css"
import Button from 'react-bootstrap/Button';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

function MandatoryScreen() {

    const pageTitle = 'Mandatory Public Disclosures'

    const disclosure = [

        {
            title: 'Transfer Certificate Sample',
            url: ''
        },
        {
            title: 'Teaching Staff Details',
            url: ''
        },
        { title: 'Subjects List for Grade Wise 2022-23', url: '' },
        { title: 'Workshop Details of Staff', url: '' },
        { title: 'Student Strength 2022-23', url: '' },
        { title: 'School Management Committee', url: '' },
        { title: 'Self Affidavit Form', url: '' },
        { title: 'Fee Structure for the Academic Year 2022-23', url: '' },
        { title: 'Academic Calendar for 2022 – 23', url: '' },
        { title: 'POCSO COMMITTEE', url: '' },
        { title: 'Contact Details', url: '' },
        { title: 'Infrastructure Details', url: '' },
        { title: 'Correspondent Pledge', url: '' },
        { title: 'Interactive Sessions 2021 – 2022', url: '' },
        { title: 'Self Declaration', url: '' },
        { title: 'Vishaka Committee', url: '' },
        { title: 'CBSE Grant Letter', url: '' },
        { title: 'School Committee List', url: '' },
        { title: 'Copy of the DEO Certificate', url: '' },
        { title: 'Copy of No Objection Certificate', url: '' },
        { title: 'Copy of Recognition Certificate', url: '' },
        { title: 'Copy of Fire Safety Certificate', url: '' },
        { title: 'Copy of Sanitary Certificate', url: '' },
        { title: 'Building Safety Certificate', url: '' },
        { title: 'Trust Registration Certificate', url: '' },
        { title: 'General Information', url: '' },
        { title: 'First Terminal Exam 2022 – 23', url: '' }
    ]
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

                            <div className='AnimeStarts'>
                                <h2 className='ulineRed AnimeStarts'>Mandatory<br /> Public Disclosures</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className={'pt60' + ' ' + 'pb60' + ' ' + styles.disclosueSection}>

                <div className={'container'}>

                    <div className={'row' + ' ' + styles.mdBg}>

                        {disclosure?.map((item, i) => {

                            return (

                                <div className={'col-md-4' + ' ' + 'mb-5'} key={i}>

                                    <div className={styles.disclosureCard + ' AnimeStarts'}>

                                        <p className='AnimeElement'>{item.title}</p>

                                        <a href={item.url}><Button className='AnimeElement brownBtn'>View All</Button></a>

                                    </div>


                                </div>

                            )
                        })}

                    </div>

                </div>

            </section>

        </>
    )
}

export default MandatoryScreen