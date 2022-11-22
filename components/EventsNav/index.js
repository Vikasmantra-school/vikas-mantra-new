import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './style.module.css'
import { gsap, Power3, Power2 } from 'gsap'

function EventsNav({ events }) {
  const [active, setActive] = useState('Beach Day for Kg')

  function tabs(elem, index) {}

  function navLinkClick(e) {
    setActive(e.target.innerText)
  }

  function drpDwnClick() {
    let text = document.querySelectorAll('.bottomToTop')

    gsap.fromTo(
      text,
      {
        opacity: 0,
        x: -10,
      },
      {
        x: 0,
        duration: 0.6,
        opacity: 1,
        stagger: 0.2,
      }
    )
  }

  useEffect(() => {
    let link = document.querySelectorAll('.tab-pane.active .ulineRed')
    link.forEach(tabs)
  }, [])

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
                      onClick={drpDwnClick}
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
