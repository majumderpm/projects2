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
            <section className="testimonials-section">
                <div className="container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
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
            </section>
        </>
    )
}

export default Testimonials