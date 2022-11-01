import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const MobileNav = () => {
  const [li, setLi] = [
    '<li class="nav__item"><a class="nav__link sub__close hasDropdown" href="#">Back<svg width="29px" height="27px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg></a></li>',
  ]

  function navLink(e) {
    e.preventDefault()
    const sibling = e.target.nextElementSibling
    sibling.classList.add('is-active')
    const navSub = document.getElementsByClassName('nav__sub')
    navSub[0].innerHTML += li
    s()
  }

  function s() {
    const x = document.querySelector('.sub__close')
    x.addEventListener('click', function () {
      this.parentElement.parentElement.classList.remove('is-active')
      this.parentElement.remove()
    })
  }

  return (
    <>
      <div id='mobMenu' className='mob-menu mob-menu-hdden'>
        <ul className='nav'>
          <li className='nav__item'>
            <Link href='/home' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Home
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='#' legacyBehavior>
              <a className='nav__link hasDropdown' onClick={(e) => navLink(e)}>
                About{' '}
                <svg
                  width='29px'
                  height='27px'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </a>
            </Link>
            <ul className='nav__sub'>
              <li className='nav__item'>
                <Link href='/about' legacyBehavior>
                  <a className='nav__link'>About Vikas Mantra</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='/about/vision-and-philosophy' legacyBehavior>
                  <a className='nav__link'>Our Vision & Philosophy</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/about/message-from-chairman' legacyBehavior>
                  <a className='nav__link'>Chairman’s Message</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/about/message-from-principal' legacyBehavior>
                  <a className='nav__link'>Principal’s Message</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/about/our-team' legacyBehavior>
                  <a className='nav__link'>Our Team</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/about/blog' legacyBehavior>
                  <a className='nav__link'>Blog</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link href='/admissions' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Admissions
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='/campus' legacyBehavior>
              <a className='nav__link hasDropdown' onClick={(e) => navLink(e)}>
                Campus{' '}
                <svg
                  width='29px'
                  height='27px'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </a>
            </Link>
            <ul className='nav__sub'>
              <li className='nav__item'>
                <Link href='/campus/classrooms' legacyBehavior>
                  <a className='nav__link'>Classrooms</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  href='/campus/facilities-and-Infrastructure'
                  legacyBehavior
                >
                  <a className='nav__link'>Facilities and Infrastructure</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/campus/laboratory' legacyBehavior>
                  <a className='nav__link'>Laboratories</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/campus/speciality-room' legacyBehavior>
                  <a className='nav__link'>Speciality Rooms</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/campus/library' legacyBehavior>
                  <a className='nav__link'>Library</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/campus/technology' legacyBehavior>
                  <a className='nav__link'>Technology</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='/campus/security' legacyBehavior>
                  <a className='nav__link'>Security</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='/campus/healthcare' legacyBehavior>
                  <a className='nav__link'>Healthcare</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='/campus/transportation' legacyBehavior>
                  <a className='nav__link'>Transportation</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link href='/campus' legacyBehavior>
              <a className='nav__link hasDropdown' onClick={(e) => navLink(e)}>
                Learning{' '}
                <svg
                  width='29px'
                  height='27px'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </a>
            </Link>
            <ul className='nav__sub'>
              <li className='nav__item'>
                <Link href='/learning' legacyBehavior>
                  <a className='nav__link'>Why VIKAS MANTRA PUBLIC SCHOOL</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='/learning/curriculum' legacyBehavior>
                  <a className='nav__link'>Curriculum</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/learning/pre-primary-years' legacyBehavior>
                  <a className='nav__link'>Pre-Primary Years</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/learning/curriculum-framework' legacyBehavior>
                  <a className='nav__link'>Curriculum Framework</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='/learning/online-classes' legacyBehavior>
                  <a className='nav__link'>Online Classes</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <Link href='/enquiry-form' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Enquiry Form
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='/mandatory-public-disclosures' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Mandatory Public Disclosures
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='/events' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Events
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='/contact' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Contact Us
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='/careers' legacyBehavior>
              <a className='nav__link' aria-current='page'>
                Career
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileNav
