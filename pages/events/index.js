import React, { useEffect } from "react";
import styles from "./style.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Tab from "react-bootstrap/Tab";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { EventsNav } from "../../components/EventsNav";
// import { events } from '../../data/events'
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export async function getServerSideProps() {
  const res = await fetch("https://vikasmantra.edu.in/api/eventsData");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

function chunkArray(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}
const Events = ({ todos }) => {
  gsap.registerPlugin(ScrollTrigger);

  const pageTitle = "Events";

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

  console.log(todos, "apii");

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      {/* 
            {todos?.map((data) => (
                <div key={data.id}>

                    <p>{data.id + ' id'}</p>
                    <p>{data.title}</p>
                    <p>{data.dropdown}</p>

                </div>

            ))
            } */}

      <section className="pt60 ">
        <div className={"container-fluid" + " " + styles.tabSpace}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row pt-5">
              <div className={"col-md-5" + " " + styles.eventText}>
                <h2 className="bottomToTop">Gallery</h2>
                <EventsNav events={todos} />
              </div>
            </div>

            {todos.map((data, index) => {
              return (
                <Tab.Content key={index}>
                  <Tab.Pane eventKey={data.id}>
                    <section
                      id={data.id}
                      className="whitebg pt60 pb60 parentAnimeStarts ">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <h2 className="ulineRed bottomToTop ">
                              {data.title}
                            </h2>

                            <p className="pt-4 bottomToTop ">{data.desc}</p>
                          </div>

                          <div className="col-md-6">
                            <div className="imgUp imgBgColor pastelDarkBlue">
                              <img
                                src={data.mainImage}
                                alt="image"
                                className="img-fluid bottomToTop"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      className={
                        "greybg  VectorSpiralPink pt80 pb80 parentAnimeStarts2 " +
                        styles.eventGallery +
                        " " +
                        styles.eventSectionPdng
                      }>
                      <div className="container">
                        <div className="row vmpsslide">
                          <div className="col-md-12">
                            <Splide
                              options={{
                                rewind: true,
                                gap: "10rem",
                                perPage: 1,
                                autoplay: true,
                                pagination: false,
                                arrows: true,
                                breakpoints: {
                                  660: {
                                    perPage: 1,
                                  },
                                },
                              }}>
                              {chunkArray(data.gallery || [], 6).map(
                                (group, slideIndex) => {
                                  return (
                                    <SplideSlide
                                      className="eventGallery "
                                      key={slideIndex}>
                                      <div className="row">
                                        {group.map((img, i) => (
                                            <div className="col-6 col-md-4 mb-3">

                                          <img
                                            src={img}
                                            alt="image"
                                            className="img-fluid  leftToRight "
                                            />
                                            </div>
                                        ))}
                                      </div>
                                    </SplideSlide>
                                  );
                                }
                              )}
                            </Splide>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Tab.Pane>
                </Tab.Content>
              );
            })}
          </Tab.Container>
        </div>
      </section>
    </>
  );
};

export default Events;
