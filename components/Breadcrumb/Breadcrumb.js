import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'


export const Breadcrumb = ({ pageName }) => {
  return (
    <>
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