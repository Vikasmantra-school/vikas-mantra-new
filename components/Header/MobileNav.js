import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const MobileNav = () => {
  const [li, setLi] = [
    '<li class="nav__item"><a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i>Back</a></li>',
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
              <a className='nav__link' onClick={(e) => navLink(e)}>
                About <i className='fas fa-chevron-right'></i>
              </a>
            </Link>
            <ul className='nav__sub'>
              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>About Vikas Mantra</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Our Vision & Philosophy</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Chairman’s Message</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Principal’s Message</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Our Team</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Blog</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              La Liga
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              Serie A
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              World Cup 2018
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileNav
