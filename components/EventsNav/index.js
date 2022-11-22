import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './style.module.css'
import { gsap } from 'gsap'

function EventsNav({ events }) {
  const [active, setActive] = useState('Beach Day for Kg')

  function navLinkClick(e) {
    setActive(e.target.innerText)
  }

  function drpDwnClick(e, dataId) {
    const sec = document.getElementById(dataId)

    let text = sec.querySelectorAll('.bottomToTop')

    gsap.fromTo(
      text,
      {
        opacity: 0,
        x: -10,
      },
      {
        x: 0,
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
      }
    )
  }

  return (
    <>
      <Nav className='flex-column eventsMenu'>
        <Dropdown className={styles.dropdowns}>
          <Dropdown.Toggle id=''>
            <Nav.Item>
              <Nav.Link
                className={styles.tabNavLink + ' tabNavlinkColor first'}
              >
                {active}
              </Nav.Link>
            </Nav.Item>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.dropMenu}>
            {events.map((data, index) => {
              return (
                <Dropdown.Item
                  className={styles.dropDownItemNav}
                  key={index}
                  onClick={(e) => navLinkClick(e)}
                >
                  <Nav.Item>
                    <Nav.Link
                      className={styles.tabNavLink}
                      eventKey={data.id}
                      onClick={(e) => drpDwnClick(e, data.id)}
                    >
                      {data.dropdown}
                    </Nav.Link>
                  </Nav.Item>
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </>
  )
}

export default EventsNav
