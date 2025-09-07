"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./certificate.css";

const Certificates = () => {


    const brands = [

        {
            title: " ISO 14001:2015 Certificate",
            images: [
                "assets/images/certificates/certificates1.png",
            ],
        },
        {
            title: " ISO 9001:2015   Certificate",
            images: [
                "assets/images/certificates/certificates2.png",
            ],
        },
        {
            title: " ISO 27001:2013 Certificate",
            images: [
                "assets/images/certificates/certificates3.png",
            ],
        },
        {
            title: "ISO 45001:2018 Certificate",
            images: [
                "assets/images/certificates/certificates4.png",
            ],
        },
        {
            title: "ESC Member 2024-2025 Certificate",
            images: [
                "assets/images/certificates/certificates5.png",
            ],
        },
        {
            title: "Bureau of Indian Standards Certificate",
            images: [
                "assets/images/certificates/certificates6.png",
            ],
        },
        {
            title: "WPC Certificate",
            images: [
                "assets/images/certificates/certificates7.png",
            ],
        },
        {
            title: "CE Certificate",
            images: [
                "assets/images/certificates/certificates8.png",
            ],
        },
        {
            title: "FCC Certificate",
            images: [
                "assets/images/certificates/certificates9.png",
            ],
        },


    ];


    return (
        <>
            <div className="container py-8">
                {/* <hr classN  ame="mt-0 mb-5" /> */}

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    // autoplay={false}
                    // Navigation={true}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                    className="brands-slider"
                >
                    {brands.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="imagewrap">
                                <div className="imagBox">
                                    <img src={item.images} width="130" height="56" alt={`brand-${index + 1}`} />
                                </div>
                                <p className="img_title">{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <hr className="mt-4 mb-5" /> */}
            </div>
        </>
    )
}

export default Certificates