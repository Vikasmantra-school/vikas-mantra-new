"use client";

import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalFn from "/components/mambakkam/modal/ModalFn";
import gsap from "gsap";

const Blog = () => {
  return (
    <>
      <section className={styles.blogSection + " " + "pb60 pt60"}>
        <div className={styles.cust_container}>
          <div className="row">
            <h2 className={styles.blogTitle}>What’s Happening</h2>
          </div>
          <div className="position-relative"> 
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: ".swiper-prev-blog",
                nextEl: ".swiper-next-blog",
              }}>
              <SwiperSlide>
                <div className={styles.blogBlock}>
                  <img src="/assets/blogs/blog-11.JPG" />
                  <h2>
                    Nurturing Balance Through Yoga: A Path to Inner and Outer
                    Growth
                  </h2>

                  <div className={styles.block_bottom}>
                    <p>10-March-2025</p>

                    <button
                      className="outlineBtn btn bottomToTop"
                      style={{ border: "1px solid #ffcccc" }}>
                      <a href="/mambakkam-site/about/blog/blog11">Read more</a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blogBlock}>
                  <img src="/assets/blogs/blog-12.JPG" />
                  <h2>
                    Celebrations at Vikas Mantra Public School: Nurturing Joy,
                    Unity & Learning
                  </h2>

                  <div className={styles.block_bottom}>
                    <p>10-March-2025</p>

                    <button
                      className="outlineBtn btn bottomToTop"
                      style={{ border: "1px solid #ffcccc" }}>
                      <a href="/mambakkam-site/about/blog/blog12">Read more</a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blogBlock}>
                  <img src="/assets/blogs/blog-13.JPG" />
                  <h2>Discover Your Child's Unique Learning Style</h2>

                  <div className={styles.block_bottom}>
                    <p>10-March-2025</p>

                    <button
                      className="outlineBtn btn bottomToTop"
                      style={{ border: "1px solid #ffcccc" }}>
                      <a href="/mambakkam-site/about/blog/blog13">Read more</a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className={styles.customNav}>
              <button className={styles.customPrev + " " + "swiper-prev-blog"}>
                <svg
                  width="15"
                  height="23"
                  viewBox="0 0 15 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.3947 22.2324L0.674805 11.4882L12.3947 0.744049L14.3492 2.53454L4.58099 11.4882L14.3492 20.4419L12.3947 22.2324Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button className={styles.customNext + " " + "swiper-next-blog"}>
                <svg
                  width="15"
                  height="23"
                  viewBox="0 0 15 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.58279 22.2324L14.3027 11.4882L2.58279 0.744049L0.628316 2.53454L10.3965 11.4882L0.628316 20.4419L2.58279 22.2324Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="mt-5 d-flex align-items-end justify-content-end">
              <a
                className={styles.viewAllBtn}
                href="/mambakkam-site/about/blog">
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
