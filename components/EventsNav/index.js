import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './style.module.css'

function EventsNav() {
  return (
    <>
      <Nav className='flex-column'>
        <Dropdown className={styles.dropdowns}>
          <Dropdown.Toggle id='dropdown-basic'>
            <Nav.Item>
              <Nav.Link className={styles.tabNavLink} eventKey='first'>
                Beach Day
              </Nav.Link>
            </Nav.Item>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.dropMenu}>
            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='second'>
                  Be the Change
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='third'>
                  Best Emerging School
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='forth'>
                  Children&apos;s Day
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='fifth'>
                  Friendship Day
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='six'>
                  Girl Child Protection Day
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='seven'>
                  Independence Day Celebrations
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='eight'>
                  International Yoga Day Celebration
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='nine'>
                  Investiture Ceremony
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='ten'>
                  Janmashtami celebrations
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='eleven'>
                  KG Graduation
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='twevle'>
                  National Sports Day
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='thirteen'>
                  Newspaper Feature Article
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Nav.Item>
                <Nav.Link className={styles.tabNavLink} eventKey='forteen'>
                  Science Expo
                </Nav.Link>
              </Nav.Item>
            </Dropdown.Item>

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="fifteen">Sense Booth</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="sixteen">Skating Competiton</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="seventeen">Student Excursion</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>

            {/* <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="eighteen">The Journey</Nav.Link>
                </Nav.Item>

            </Dropdown.Item> */}

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="nineteen">This School&apos;s Got Talent 2019</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="twenty">Yellow Day</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="twenty-one">Young Leaders Awards</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>

            <Dropdown.Item>

                <Nav.Item>
                    <Nav.Link className={styles.tabNavLink} eventKey="twenty-two">Investiture Ceremony 2021 - 22</Nav.Link>
                </Nav.Item>

            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </>
  )
}

export default EventsNav
