import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Tab from "react-bootstrap/Tab";
import { Breadcrumb } from "/components/Breadcrumb/Breadcrumb";
import { EventsNav } from "/components/EventsNav";
// import { events } from '/data/events'
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export async function getServerSideProps() {
  const res = await fetch("https://vikasmantra.edu.in/api/eventsData");
  // const res = await fetch("http://localhost:3000/api/eventsData"); for dev

  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

const Events = ({ todos }) => {
  gsap.registerPlugin(ScrollTrigger);
  const lightboxRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState("all");
  const pageTitle = "Events";
  //
  useEffect(() => {
    // Initialize PhotoSwipeLightbox
    lightboxRef.current = new PhotoSwipeLightbox({
      gallery: ".event-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightboxRef.current.init();

    return () => lightboxRef.current.destroy();
  }, []);

  // Get unique years from your events
  const years = Array.from(new Set(todos.map((event) => event.year))).sort(
    (a, b) => b - a
  );

  const filteredEvents =
    selectedYear === "all"
      ? todos
      : todos.filter((event) => event.year === selectedYear);

  //animation-for-text
  useEffect(() => {
    const parentTrigger = document.querySelectorAll(".parentAnimeStarts");
    parentTrigger.forEach(staggerAnimeFunc);
    function staggerAnimeFunc(elem) {
      let text = elem.querySelectorAll(".bottomToTop");
      gsap.fromTo(
        text,
        {
          opacity: 0,
          x: -10,
        },
        {
          x: 0,
          duration: 0.6,
          delay: 0.5,
          opacity: 1,
          stagger: 0.2,
        }
      );
    }
    ScrollTrigger.refresh();
  }, []);

  //animation-for-gallery
  useEffect(() => {
    const parentTrigger2 = document.querySelectorAll(".parentAnimeStarts2");
    parentTrigger2.forEach(imageAnime);
    function imageAnime(elem) {
      let image = elem.querySelectorAll(".leftToRight");
      gsap.fromTo(
        image,
        {
          opacity: 0,
          x: 50,
        },
        {
          x: 0,
          duration: 0.5,
          delay: 0.5,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: elem,
            start: "left center",
            end: "right center",
            ease: Power2.easeOut,
            toggleActions: "play restart play none",
          },
        }
      );
    }
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt60">
        <div className="container">
          {/* Year Dropdown */}
          <div className="mb-4">
            <select
              className="form-select w-auto"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            {filteredEvents.map((event) => (
              <div key={event.id} className="col-md-3 mb-4">
                <div
                  className={`card ${styles.eventCard}`}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    const gallery =
                      e.currentTarget.querySelector(".event-gallery");
                    if (gallery) {
                      const firstLink = gallery.querySelector("a");
                      if (firstLink) firstLink.click();
                    }
                  }}>
                  <div className={styles.imgWrapper}>
                    <img
                      src={event.mainImage}
                      className="card-img-top"
                      alt={event.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{event.title} </h5>
                   <p className={styles.clickToView}>Click here to View</p>
                  </div>

                  {/* Hidden gallery for PhotoSwipe */}
                  <div className="event-gallery d-none">
                    {event.gallery.map((img, idx) => (
                      <a
                        key={idx}
                        href={img}
                        data-pswp-width="1200"
                        data-pswp-height="900">
                        <img src={img} alt={event.title} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
