import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './style.module.css'
import { useState } from 'react'

function EventsNav({ events }) {
  const [active, setActive] = useState('Beach Day for Kg')

  function tabs(elem, index) {}

  function navLinkClick(e) {
    console.error(e.target.innerText)
    setActive(e.target.innerText)
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
                eventKey='first'
              >
                {active}
              </Nav.Link>
            </Nav.Item>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.dropMenu}>
            {events.map((data, index) => {
              return (
                <Dropdown.Item key={index} onClick={(e) => navLinkClick(e)}>
                  <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey={data.id}>
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
