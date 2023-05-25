import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import Head from "next/head";


export const Breadcrumb = ({ pageName }) => {
  return (
    <>

      <Head>
        <title>{pageName}| Vikasmantra Public School</title>
        <meta
          name="description"
          content="VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu Kanchipuram is building a distinctive educational platform through a mix of international learning ..."
        />
      </Head>


      <section className='pt-4 VectorLogo '>
        <div className='container position-relative'>
          <div className='row'>
            <div className='col-md-12'>
              <FontAwesomeIcon
                width='18'
                height='16'
                icon={faHouse}
                className={styles.homeIcon}
              />
              |
              <a className='mx-2'>{pageName}</a>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}