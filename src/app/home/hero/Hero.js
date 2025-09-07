"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";

const Hero = () => {

    const slides = [
        {
            id: 1,
            title: "Keep Your Eye on Everything with Velvu",
            description:
                "Velvu is a reputable brand recognized for its latest technology, quality products, quick service, and supportive care. Our modern CCTV security solutions, such as IP cameras, HD surveillance cameras, and WiFi CCTV cameras, offer dependable home and business surveillance. Remain protected with Velvu's latest technologies and best-in-class customer care.",
            image: "assets/images/slider/slider1.jpg",
            btnText: "Shop Now!",
            btnLink: "/",
        },
        {
            id: 2,
            title: "24/7 Security with Velvu Low Light Dome & Bullet Cameras for Night-Time Clarity",
            description:
                "No more dark corners—Velvu Dome & Bullet Cameras give you crystal-clear footage, even in low light. With 24/7 surveillance and no blind spots, your security is always covered.",
            image: "assets/images/slider/slider2.jpg",
            btnText: "Explore",
            btnLink: "/",
        },
        {
            id: 3,
            title: "Vari-Focal Bullet Camera – Precision Surveillance with Adjustable Zoom",
            description:
                "Achieve the perfect view with a Vari-Focal Bullet Camera. Its adjustable lens offers flexible zoom and focus, ensuring detailed surveillance in homes, businesses, and outdoor areas.",
            image: "assets/images/slider/slider3.jpg",
            btnText: "Explore",
            btnLink: "/",
        },
        
        // Add more slides if needed
    ];


    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={false}
                // autoplay={{ delay: 5000, disableOnInteraction: false }}
                autoplay={false}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="home-slide banner" style={{ position: "relative" }}>
                            <img
                                src={slide.image}
                                alt="slider image"
                                style={{ width: "100%", height: "auto" }}
                            />
                            {/* <img src='assets/images/logo.jpg' alt=""  /> */}
                            <div
                                className="container d-flex align-items-center"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div className="banner-layer text-white">
                                    {slide.title && <h1 className="slider_h1">{slide.title}</h1>}
                                    {slide.description && <p>{slide.description}</p>}

                                    {slide.title1 && (
                                        <>
                                            <h4>{slide.title1}</h4>
                                            <h3>{slide.title2}</h3>
                                            <h3>{slide.title3}</h3>
                                            <h2>{slide.title4}</h2>
                                        </>
                                    )}

                                    <a href={slide.btnLink} className="custombtn mt-5">
                                        {slide.btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Hero