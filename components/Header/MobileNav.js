import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { chengalpattuMenu, mambakkamMenu } from "../../data/menu";
import { useCampus } from "../../hooks/useCampus";

const MobileNav = ({}) => {
  const router = useRouter();

  const { asPath } = useRouter();

  const { campus, isMambakkam, isChengalpattu } = useCampus();

  let subMenu = null;
  if (isMambakkam) {
    subMenu = {
      bg: "#45458A",
      color: "#fff",
      headText: "Mambakkam",
      afflNo: "1930634",
    };
  } else if (isChengalpattu) {
    subMenu = {
      bg: "#FFB800",
      color: "#1D1D1D",
      headText: "Chengalpattu",
      afflNo: "1931307",
    };
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      let menu = document.getElementById("mobMenu");
      let sMenu = document.getElementById("mobSubMenu");
      menu.classList.add("mob-menu-hdden");
      sMenu.classList.add("mob-menu-hdden");
      let hamburger = document.getElementById("hamburger");
      hamburger.classList.remove("is-active");
      let sHamburger = document.querySelector(".mobSubHamburger");
      sHamburger?.classList.remove("is-active");
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  function navLink(e) {
    const submenu = e.currentTarget.nextElementSibling;
    submenu.classList.add("is-active");
  }

  function subClose(e) {
    e.preventDefault();
    const submenu = e.currentTarget.closest(".nav__sub");
    submenu.classList.remove("is-active");
  }

  return (
    <>
      <div id="mobMenu" className="mob-menu mob-menu-hdden">
        <ul className="nav">
          <li className="nav__item">
            <Link href="/" legacyBehavior>
              <a className="nav__link" aria-current="page">
                Home
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
              About{" "}
              <svg
                width="29px"
                height="27px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            <ul className="nav__sub">
              <li className="nav__item">
                <a
                  onClick={(e) => subClose(e)}
                  className="nav__link sub__close hasDropdown"
                  href="#">
                  Back
                  <svg
                    width="29px"
                    height="27px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <Link href="/about" legacyBehavior>
                  <a className="nav__link">About Vikas Mantra</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/about/vision-and-philosophy" legacyBehavior>
                  <a className="nav__link">Our Vision & Philosophy</a>
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/about/message-from-chairman" legacyBehavior>
                  <a className="nav__link">Chairman’s Message</a>
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/about/message-from-advisor" legacyBehavior>
                  <a className="nav__link"> Our Advisor</a>
                </Link>
              </li>

              {/* <li className="nav__item">
                  <Link href="/about/message-from-principal" legacyBehavior>
                    <a className="nav__link">Principal’s Message</a>
                  </Link>
                </li> */}

              {/* <li className="nav__item">
                  <Link href="/about/our-team" legacyBehavior>
                    <a className="nav__link">Our Team</a>
                  </Link>
                </li> */}

              {/* <li className="nav__item">
                  <Link href="/about/blog" legacyBehavior>
                    <a className="nav__link">Blog</a>
                  </Link>
                </li> */}
            </ul>
          </li>
           <li className="nav__item">
            <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
              Admissions{" "}
              <svg
                width="29px"
                height="27px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            <ul className="nav__sub">
              <li className="nav__item">
                <a
                  onClick={(e) => subClose(e)}
                  className="nav__link sub__close hasDropdown"
                  href="#">
                  Back
                  <svg
                    width="29px"
                    height="27px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <Link href="/admissions#v-pills-home" legacyBehavior>
                  <a className="nav__link">Admission Overview</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/admissions#admission-timeline" legacyBehavior>
                  <a className="nav__link">Admission Timeline</a>
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/admissions#v-pills-messages" legacyBehavior>
                  <a className="nav__link">Admission Procedure</a>
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/enquiry-form" legacyBehavior>
                  <a className="nav__link"> Enquiry Form</a>
                </Link>
              </li>

              
            </ul>
          </li>
          {/* <li className="nav__item">
              <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
                Campus{" "}
                <svg
                  width="29px"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <ul className="nav__sub">
                <li className="nav__item">
                  <a
                    onClick={(e) => subClose(e)}
                    className="nav__link sub__close hasDropdown"
                    href="#">
                    Back
                    <svg
                      width="29px"
                      height="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <Link href="/campus/classrooms" legacyBehavior>
                    <a className="nav__link">Classrooms</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/campus/facilities-and-Infrastructure"
                    legacyBehavior>
                    <a className="nav__link">Facilities and Infrastructure</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/campus/laboratory" legacyBehavior>
                    <a className="nav__link">Laboratories</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/campus/speciality-room" legacyBehavior>
                    <a className="nav__link">Speciality Rooms</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/campus/library" legacyBehavior>
                    <a className="nav__link">Library</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/campus/technology" legacyBehavior>
                    <a className="nav__link">Technology</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/campus/security" legacyBehavior>
                    <a className="nav__link">Security</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/campus/healthcare" legacyBehavior>
                    <a className="nav__link">Healthcare</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/campus/transportation" legacyBehavior>
                    <a className="nav__link">Transportation</a>
                  </Link>
                </li>
              </ul>
            </li> */}
          <li className="nav__item">
            <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
              Learning{" "}
              <svg
                width="29px"
                height="27px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            <ul className="nav__sub">
              <li className="nav__item">
                <a
                  onClick={(e) => subClose(e)}
                  className="nav__link sub__close hasDropdown"
                  href="#">
                  Back
                  <svg
                    width="29px"
                    height="27px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <Link href="/learning" legacyBehavior>
                  <a className="nav__link">Why VIKAS MANTRA PUBLIC SCHOOL</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/learning/curriculum" legacyBehavior>
                  <a className="nav__link">Curriculum</a>
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/learning/pre-primary-years" legacyBehavior>
                  <a className="nav__link">Pre-Primary Years</a>
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/learning/curriculum-framework" legacyBehavior>
                  <a className="nav__link">Curriculum Framework</a>
                </Link>
              </li>

              {/* <li className="nav__item">
                  <Link href="/learning/online-classes" legacyBehavior>
                    <a className="nav__link">Online Classes</a>
                  </Link>
                </li> */}
            </ul>
          </li>
          <li className="nav__item">
            <Link href="https://www.parentsalarmapp.com/" legacyBehavior>
              <a className="nav__link" target="_blank" aria-current="page">
                VMPS Login
              </a>
            </Link>
          </li>
          {/* <li className="nav__item">
              <Link href="/enquiry-form" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Enquiry Form
                </a>
              </Link>
            </li> */}
          {/* <li className="nav__item">
              <Link href="/mandatory-public-disclosures" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Mandatory Public Disclosures
                </a>
              </Link>
            </li> */}
          {/* <li className="nav__item">
              <Link href="/events" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Gallery
                </a>
              </Link>
            </li> */}
          <li className="nav__item">
            <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
              Contact
              <svg
                width="29px"
                height="27px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            <ul className="nav__sub">
              <li className="nav__item">
                <a
                  onClick={(e) => subClose(e)}
                  className="nav__link sub__close hasDropdown"
                  href="#">
                  Back
                  <svg
                    width="29px"
                    height="27px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav__link">Contact Us</a>
                </Link>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="tel:+917448450450">
                  +91 7448450450
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link href="/careers" legacyBehavior>
              <a className="nav__link" aria-current="page">
                Career
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div
        id="mobSubMenu"
        className="mob-menu otherMob mob-submenu mob-menu-hdden">
        {isMambakkam ? (
          <ul
            className="nav"
            style={{
              backgroundColor: subMenu?.bg || "#f5f5f5",
            }}>
            <li className="nav__item">
              <Link href="/mambakkam-site" legacyBehavior>
                <a className="nav__link pt-0" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
                About Us
                <svg
                  width="29px"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <ul
                className="nav__sub"
                style={{
                  backgroundColor: subMenu?.bg || "#f5f5f5",
                }}>
                <li className="nav__item">
                  <a
                    onClick={(e) => subClose(e)}
                    className="nav__link sub__close hasDropdown"
                    href="#">
                    Back
                    <svg
                      width="29px"
                      height="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <Link
                    href="/mambakkam-site/about/message-from-principal"
                    legacyBehavior>
                    <a className="nav__link">Principal&apos;s Message</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/mambakkam-site/about/blog" legacyBehavior>
                    <a className="nav__link">Blog</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="nav__item"
              style={{
                backgroundColor: subMenu?.bg || "#f5f5f5",
              }}>
              <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
                Life of Campus
                <svg
                  width="29px"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <ul
                className="nav__sub"
                style={{
                  backgroundColor: subMenu?.bg || "#f5f5f5",
                }}>
                <li className="nav__item">
                  <a
                    onClick={(e) => subClose(e)}
                    className="nav__link sub__close hasDropdown"
                    href="#">
                    Back
                    <svg
                      width="29px"
                      height="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <Link href="/learning" legacyBehavior>
                    <a className="nav__link">Why VIKAS MANTRA PUBLIC SCHOOL</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/mambakkam-site/campus/classrooms" legacyBehavior>
                    <a className="nav__link">Classrooms</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/mambakkam-site/campus/laboratory" legacyBehavior>
                    <a className="nav__link">Laboratories</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/mambakkam-site/campus/speciality-room"
                    legacyBehavior>
                    <a className="nav__link">Speciality Rooms</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/mambakkam-site/campus/technologys"
                    legacyBehavior>
                    <a className="nav__link">Technology</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/mambakkam-site/campus/security" legacyBehavior>
                    <a className="nav__link">Security</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/mambakkam-site/campus/healthcare" legacyBehavior>
                    <a className="nav__link">Healthcare</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/mambakkam-site/campus/transportation"
                    legacyBehavior>
                    <a className="nav__link">Transportation</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <Link href="/mambakkam-site/events" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Gallery
                </a>
              </Link>
            </li>
          </ul>
        ) : isChengalpattu ? (
          <ul
            className="nav chengalpattu-menu"
            style={{
              backgroundColor: subMenu?.bg || "#f5f5f5",
            }}>
            <li className="nav__item">
              <Link href="/chengalpattu-site" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Our Campus
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
                About Us
                <svg
                  width="29px"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <ul
                className="nav__sub"
                style={{
                  backgroundColor: subMenu?.bg || "#f5f5f5",
                }}>
                <li className="nav__item">
                  <a
                    onClick={(e) => subClose(e)}
                    className="nav__link sub__close hasDropdown"
                    href="#">
                    Back
                    <svg
                      width="29px"
                      height="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                {/* <li className="nav__item">
                  <Link href="/chengalpattu-site/about" legacyBehavior>
                    <a className="nav__link">About Vikas Mantra</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/about/vision-and-philosophy"
                    legacyBehavior
                  >
                    <a className="nav__link">Our Vision & Philosophy</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/about/message-from-chairman"
                    legacyBehavior
                  >
                    <a className="nav__link">Chairman’s Message</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/about/message-from-advisor"
                    legacyBehavior
                  >
                    <a className="nav__link"> Our Advisor</a>
                  </Link>
                </li> */}

                <li className="nav__item">
                  <Link href="/about/message-from-principal" legacyBehavior>
                    <a className="nav__link">Principal’s Message</a>
                  </Link>
                </li>

                {/* <li className="nav__item">
                  <Link href="/chengalpattu-site/about/our-team" legacyBehavior>
                    <a className="nav__link">Our Team</a>
                  </Link>
                </li> */}

                <li className="nav__item">
                  <Link href="/chengalpattu-site/about/blog" legacyBehavior>
                    <a className="nav__link">Blog</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav__item">
              <Link href="/chengalpattu-site/admissions" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Admissions
                </a>
              </Link>
            </li> */}
            <li className="nav__item">
              <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
                Campus{" "}
                <svg
                  width="29px"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <ul
                className="nav__sub"
                style={{
                  backgroundColor: subMenu?.bg || "#f5f5f5",
                }}>
                <li className="nav__item">
                  <a
                    onClick={(e) => subClose(e)}
                    className="nav__link sub__close hasDropdown"
                    href="#">
                    Back
                    <svg
                      width="29px"
                      height="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/classrooms"
                    legacyBehavior>
                    <a className="nav__link">Classrooms</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/facilities-and-Infrastructure"
                    legacyBehavior>
                    <a className="nav__link">Facilities and Infrastructure</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/laboratory"
                    legacyBehavior>
                    <a className="nav__link">Laboratories</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/speciality-room"
                    legacyBehavior>
                    <a className="nav__link">Speciality Rooms</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link href="/chengalpattu-site/campus/library" legacyBehavior>
                    <a className="nav__link">Library</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/technology"
                    legacyBehavior>
                    <a className="nav__link">Technology</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/security"
                    legacyBehavior>
                    <a className="nav__link">Security</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/healthcare"
                    legacyBehavior>
                    <a className="nav__link">Healthcare</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/campus/transportation"
                    legacyBehavior>
                    <a className="nav__link">Transportation</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav__item">
              <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
                Learning{' '}
                <svg
                  width="29px"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <ul className="nav__sub"
              style={{
                  backgroundColor: subMenu?.bg || '#f5f5f5',
                }}>
                <li className="nav__item">
                  <a
                    onClick={(e) => subClose(e)}
                    className="nav__link sub__close hasDropdown"
                    href="#"
                  >
                    Back
                    <svg
                      width="29px"
                      height="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <Link href="/chengalpattu-site/learning" legacyBehavior>
                    <a className="nav__link">Why VIKAS MANTRA PUBLIC SCHOOL</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/learning/curriculum"
                    legacyBehavior
                  >
                    <a className="nav__link">Curriculum</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/learning/pre-primary-years"
                    legacyBehavior
                  >
                    <a className="nav__link">Pre-Primary Years</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/learning/curriculum-framework"
                    legacyBehavior
                  >
                    <a className="nav__link">Curriculum Framework</a>
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href="/chengalpattu-site/learning/online-classes"
                    legacyBehavior
                  >
                    <a className="nav__link">Online Classes</a>
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav__item">
              <Link href="/chengalpattu-site/enquiry-form" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Enquiry Form
                </a>
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link
                href="/chengalpattu-site/mandatory-public-disclosures"
                legacyBehavior
              >
                <a className="nav__link" aria-current="page">
                  Mandatory Public Disclosures
                </a>
              </Link>
            </li> */}
            <li className="nav__item">
              <Link href="/chengalpattu-site/events" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Events
                </a>
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link href="/chengalpattu-site/contact" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Contact Us
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/chengalpattu-site/careers" legacyBehavior>
                <a className="nav__link" aria-current="page">
                  Career
                </a>
              </Link>
            </li> */}
          </ul>
        ) : (
          ""
          // <ul className="nav">
          //   <li className="nav__item">
          //     <Link href="/" legacyBehavior>
          //       <a className="nav__link" aria-current="page">
          //         Home
          //       </a>
          //     </Link>
          //   </li>
          //   <li className="nav__item">
          //     <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
          //       About{' '}
          //       <svg
          //         width="29px"
          //         height="27px"
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 24 24"
          //         strokeWidth={1.5}
          //         stroke="currentColor"
          //         className="w-6 h-6"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           d="M8.25 4.5l7.5 7.5-7.5 7.5"
          //         />
          //       </svg>
          //     </a>
          //     <ul className="nav__sub"
          // style={{
          // backgroundColor: subMenu?.bg || '#f5f5f5',
          // }}>
          //       <li className="nav__item">
          //         <a
          //           onClick={(e) => subClose(e)}
          //           className="nav__link sub__close hasDropdown"
          //           href="#"
          //         >
          //           Back
          //           <svg
          //             width="29px"
          //             height="27px"
          //             xmlns="http://www.w3.org/2000/svg"
          //             fill="none"
          //             viewBox="0 0 24 24"
          //             strokeWidth={1.5}
          //             stroke="currentColor"
          //             className="w-6 h-6"
          //           >
          //             <path
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          //             />
          //           </svg>
          //         </a>
          //       </li>
          //       <li className="nav__item">
          //         <Link href="/about" legacyBehavior>
          //           <a className="nav__link">About Vikas Mantra</a>
          //         </Link>
          //       </li>
          //       <li className="nav__item">
          //         <Link href="/about/vision-and-philosophy" legacyBehavior>
          //           <a className="nav__link">Our Vision & Philosophy</a>
          //         </Link>
          //       </li>

          //       <li className="nav__item">
          //         <Link href="/about/message-from-chairman" legacyBehavior>
          //           <a className="nav__link">Chairman’s Message</a>
          //         </Link>
          //       </li>

          //       <li className="nav__item">
          //         <Link href="/about/message-from-advisor" legacyBehavior>
          //           <a className="nav__link"> Our Advisor</a>
          //         </Link>
          //       </li>
          //     </ul>
          //   </li>
          //   <li className="nav__item">
          //     <Link href="/admissions" legacyBehavior>
          //       <a className="nav__link" aria-current="page">
          //         Admissions
          //       </a>
          //     </Link>
          //   </li>

          //   <li className="nav__item">
          //     <a className="nav__link hasDropdown" onClick={(e) => navLink(e)}>
          //       Learning{' '}
          //       <svg
          //         width="29px"
          //         height="27px"
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 24 24"
          //         strokeWidth={1.5}
          //         stroke="currentColor"
          //         className="w-6 h-6"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           d="M8.25 4.5l7.5 7.5-7.5 7.5"
          //         />
          //       </svg>
          //     </a>
          //     <ul className="nav__sub" style={{
          // backgroundColor: subMenu?.bg || '#f5f5f5',
          // }}>
          //       <li className="nav__item">
          //         <a
          //           onClick={(e) => subClose(e)}
          //           className="nav__link sub__close hasDropdown"
          //           href="#"
          //         >
          //           Back
          //           <svg
          //             width="29px"
          //             height="27px"
          //             xmlns="http://www.w3.org/2000/svg"
          //             fill="none"
          //             viewBox="0 0 24 24"
          //             strokeWidth={1.5}
          //             stroke="currentColor"
          //             className="w-6 h-6"
          //           >
          //             <path
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          //             />
          //           </svg>
          //         </a>
          //       </li>
          //       <li className="nav__item">
          //         <Link href="/learning" legacyBehavior>
          //           <a className="nav__link">Why VIKAS MANTRA PUBLIC SCHOOL</a>
          //         </Link>
          //       </li>
          //       <li className="nav__item">
          //         <Link href="/learning/curriculum" legacyBehavior>
          //           <a className="nav__link">Curriculum</a>
          //         </Link>
          //       </li>

          //       <li className="nav__item">
          //         <Link href="/learning/pre-primary-years" legacyBehavior>
          //           <a className="nav__link">Pre-Primary Years</a>
          //         </Link>
          //       </li>

          //       <li className="nav__item">
          //         <Link href="/learning/curriculum-framework" legacyBehavior>
          //           <a className="nav__link">Curriculum Framework</a>
          //         </Link>
          //       </li>
          //     </ul>
          //   </li>
          //   <li className="nav__item">
          //     <Link href="https://www.parentsalarmapp.com/" legacyBehavior>
          //       <a className="nav__link" target="_blank" aria-current="page">
          //         VMPS Login
          //       </a>
          //     </Link>
          //   </li>

          //   <li className="nav__item">
          //     <Link href="/contact" legacyBehavior>
          //       <a className="nav__link" aria-current="page">
          //         Contact Us
          //       </a>
          //     </Link>
          //   </li>
          //   <li className="nav__item">
          //     <Link href="/careers" legacyBehavior>
          //       <a className="nav__link" aria-current="page">
          //         Career
          //       </a>
          //     </Link>
          //   </li>
          // </ul>
        )}
      </div>
    </>
  );
};

export default MobileNav;
