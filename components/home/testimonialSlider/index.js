import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const cardsContent = [
    {
      id: 1,
      image: "/images/test-vikas.png",
      name: "John Doe",
      role: "Software Engineer",
      starRating: 4, // 1 to 5 scale
      description:
        "John is an experienced software engineer specializing in front-end development and UI/UX design.",
    },
    {
      id: 2,
      image: "/images/test-vikas.png",
      name: "Jane Smith",
      role: "Project Manager",
      starRating: 5,
      description:
        "Jane has managed several large-scale projects, leading cross-functional teams to success.",
    },
    {
      id: 3,
      image: "/images/test-vikas.png",
      name: "Alice Johnson",
      role: "UI/UX Designer",
      starRating: 3,
      description:
        "Alice specializes in creating seamless user interfaces and delivering memorable user experiences Alice specializes in creating seamless user interfaces and delivering memorable user experiences",
    },
    {
      id: 4,
      image: "/images/test-vikas.png",
      name: "Alice Johnson",
      role: "UI/UX Designer",
      starRating: 3,
      description:
        "Alice specializes in creating seamless user interfaces and delivering memorable user experiences Alice specializes in creating seamless user interfaces and delivering memorable user experiences",
    },
    {
      id: 5,
      image: "/images/test-vikas.png",
      name: "Alice Johnson",
      role: "UI/UX Designer",
      starRating: 3,
      description:
        "Alice specializes in creating seamless user interfaces and delivering memorable user experiences Alice specializes in creating seamless user interfaces and delivering memorable user experiences",
    },
    {
      id: 6,
      image: "/images/test-vikas.png",
      name: "Alice Johnson",
      role: "UI/UX Designer",
      starRating: 3,
      description:
        "Alice specializes in creating seamless user interfaces and delivering memorable user experiences Alice specializes in creating seamless user interfaces and delivering memorable user experiences",
    },
    {
      id: 7,
      image: "/images/test-vikas.png",
      name: "Alice Johnson",
      role: "UI/UX Designer",
      starRating: 3,
      description:
        "Alice specializes in creating seamless user interfaces and delivering memorable user experiences Alice specializes in creating seamless user interfaces and delivering memorable user experiences",
    },
  ];

  // Function to render the stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.90909 0.818115L10.1801 5.41964L15.2582 6.15753L11.5836 9.73932L12.4511 14.7969L7.90909 12.409L3.36711 14.7969L4.23455 9.73932L0.560016 6.15753L5.6381 5.41964L7.90909 0.818115Z"
            fill="#D9A215"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className={styles.testimonials}>
      <Container>
        <h2 className={styles.testimonialHeading}>What Parents Says</h2>
      </Container>
      <div
        className="position-relative"
        style={{ paddingInlineStart: "4.3vw" }}>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            navigation={{
              prevEl: ".swiper-prev-custom",
              nextEl: ".swiper-next-custom",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2, 
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2.2, 
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3.2, 
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4.2, 
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5.2,
                spaceBetween: 25,
              },
            }}>
            {cardsContent.map((card) => (
              <SwiperSlide className="py-4" key={card.id}>
                <Card className={styles.card}>
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={`${styles.cardTitle}`}>
                      {card.name}
                    </Card.Title>
                    <Card.Subtitle className={styles.cardRole}>
                      {card.role}
                    </Card.Subtitle>
                    <div className="d-flex mb-3">
                      {renderStars(card.starRating)}
                    </div>
                    <Card.Text>{card.description}</Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
