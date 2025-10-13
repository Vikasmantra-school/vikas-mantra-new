import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Breadcrumb } from "/components/Breadcrumb/Breadcrumb";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "photoswipe/style.css";

export async function getServerSideProps() {
  const res = await fetch("https://vikasmantra.edu.in/api/eventsData");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

const Events = ({ todos }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [selectedYear, setSelectedYear] = useState("all");
  const pageTitle = "Events";

  // Get unique years
  const years = Array.from(new Set(todos.map((event) => event.year))).sort(
    (a, b) => b - a
  );

  const filteredEvents =
    selectedYear === "all"
      ? todos
      : todos.filter((event) => event.year === selectedYear);

  // Animate cards on scroll
  useEffect(() => {
    filteredEvents.forEach((event) => {
      const card = document.querySelector(`#event-card-${event.id}`);
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, [filteredEvents]);

  // Function to open PhotoSwipe dynamically
  const openGallery = async (gallery) => {
    const PhotoSwipeLightbox = (await import("photoswipe/lightbox")).default;
    const lightbox = new PhotoSwipeLightbox({
      dataSource: gallery.map((img) => ({
        src: img,
        width: 1200, // adjust according to your images
        height: 900,
      })),
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightbox.loadAndOpen(0); // open the first image immediately
  };

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
              onChange={(e) => setSelectedYear(e.target.value)}
            >
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
                  id={`event-card-${event.id}`}
                  className={`card ${styles.eventCard}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => openGallery(event.gallery)}
                >
                  <div className={styles.imgWrapper}>
                    <img
                      src={event.mainImage}
                      className="card-img-top"
                      alt={event.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className={styles.clickToView}>Click here to View</p>
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
