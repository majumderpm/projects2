"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./product.css"; // custom styles


const products = [
    {
        id: 1,
        title: " Velvu 4MP IP 2-Way Audio Dome Camera ST-VD IP4002DES (Supports External Speaker)",
        category: "Category",
        oldPrice: "$59.00",
        price: "$49.00",
        label: "HOT",
        images: [
            "/assets/images/products/products11.jpg",
            // "/assets/images/products/product-6-2.jpg",
        ],
    },
    {
        id: 2,
        title: "Velvu 8MP IP Low Light Color Bullet Camera ST-VB IP8002LL",
        category: "Category",
        oldPrice: "$59.00",
        price: "$49.00",
        label: "HOT",
        images: [
            "/assets/images/products/product2.jpg",
            // "/assets/images/products/product-7-2.jpg",
        ],
    },
    {
        id: 3,
        title: "Velvu 2MP HD 2-Way Audio Bullet Camera ST-VB HD2002WAS",
        category: "Category",
        oldPrice: "$59.00",
        price: "$49.00",
        label: "-20%",
        images: [
            "/assets/images/products/product3.jpg",
            // "/assets/images/products/product-8-2.jpg",
        ],
    },
    {
        id: 4,
        title: " Velvu 6MP IP Color Fisheye Bullet Camera ST-VB IP6002DL-FE  ",
        category: "Category",
        oldPrice: "$59.00",
        price: "$49.00",
        label: "-30%",
        images: [
            "/assets/images/products/product4.jpg",
            // "/assets/images/products/product-9-2.jpg",
        ],
    },
    {
        id: 5,
        title: " Velvu 6MP IP Color Fisheye Dome Camera ST-VD IP6002DL-FE ",
        category: "Category",
        // oldPrice: "$59.00",
        // price: "$49.00",
        label: "HOT",
        images: [
            "/assets/images/products/product5.jpg",
            // "/assets/images/products/product-10-2.jpg",
        ],
    },
];

const Product = () => {
    return (
        <>
            <section className="new-products-section">
                <div className="container">
                    <h2 className="section-title heading-border ls-20 border-0">
                        products
                    </h2>

                    {/* Products Swiper */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        pagination={false}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="product-default">
                                    <figure>
                                        <a href="/product">
                                            <img
                                                src={product.images[0]}
                                                alt={product.title}
                                                width="220"
                                                height="220"
                                            />
                                            {/* <img
                                                src={product.images[1]}
                                                alt={product.title}
                                                width="220"
                                                height="220"
                                            /> */}
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label">{product.label}</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a href="/category" className="product-category">
                                                {product.category}
                                            </a>
                                        </div>
                                        <h3 className="product-title mb-5">
                                            <a href="/product">{product.title}</a>
                                        </h3>
                                        {/* <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "80%" }}></span>
                                            </div>
                                        </div>
                                        <div className="price-box">
                                            <del className="old-price">{product.oldPrice}</del>
                                            <span className="product-price">{product.price}</span>
                                        </div> */}
                                        <div className="product-action">
                                            <a href="/wishlist" className="btn-icon-wish">
                                                <i className="fa-regular fa-heart"></i>
                                            </a>
                                            <a href="#" className="btn-icon btn-add-cart">
                                                <i className="icon-shopping-cart"></i>
                                                <span>ADD TO CART</span>
                                            </a>
                                            <a href="/quick-view" className="btn-quickview">
                                                <i className="fas fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
            </section>
        </>
    )
}

export default Product