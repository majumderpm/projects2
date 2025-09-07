"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            text: "If you do the job badly enough, sometimes you don't get asked to do it again.",
            name: "Wisteria Ravenclaw",
            company: "Google Inc.",
        },
        {
            id: 2,
            text: "I'm killing time while I wait for life to shower me with meaning and happiness.",
            name: "Ursula Gurnmeister",
            company: "Facebook",
        },
        {
            id: 3,
            text: "The only skills I have the patience to learn are those that have no real application in life.",
            name: "Ingredia Nutrisha",
            company: "Twitter",
        },
        {
            id: 4,
            text: "The only skills I have the patience to learn are those that have no real application in life.",
            name: "Ingredia Nutrisha",
            company: "Twitter",
        },
        {
            id: 5,
            text: "The only skills I have the patience to learn are those that have no real application in life.",
            name: "Ingredia Nutrisha",
            company: "Twitter",
        },
        {
            id: 6,
            text: "The only skills I have the patience to learn are those that have no real application in life.",
            name: "Ingredia Nutrisha",
            company: "Twitter",
        },
    ];

    return (
        <>
            <section className="">
                <h2 className="section-title heading-border ls-20 border-0">
                    Happy Customers
                </h2>
                <div className="testimonials-section">
                    <div className="container">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}
                        >
                            {testimonials.map((t) => (
                                <SwiperSlide key={t.id}>
                                    <figure className="snip1533">
                                        <figcaption>
                                            <blockquote>
                                                <p>{t.text}</p>
                                            </blockquote>
                                            <h3>{t.name}</h3>
                                            <h4>{t.company}</h4>
                                        </figcaption>
                                    </figure>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials