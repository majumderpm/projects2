"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Feature from "@/component/feature/Feature";

const ProductDetails = () => {
    const [cartAdded, setCartAdded] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
        "assets/images/products/d-product1.jpg",
        "assets/images/products/d-product2.jpg",
        "assets/images/products/d-product3.jpg",
        "assets/images/products/d-product4.jpg",
        "assets/images/products/d-product5.jpg",
    ];

    const thumbs = [
        "assets/images/products/d-product1.jpg",
        "assets/images/products/d-product2.jpg",
        "assets/images/products/d-product3.jpg",
        "assets/images/products/d-product4.jpg",
        "assets/images/products/d-product5.jpg",
    ];

    const handleAddToCart = () => {
        setCartAdded(true);
        setTimeout(() => setCartAdded(false), 2000); // auto-hide after 2s
    };

    return (
        <>


            <nav aria-label="breadcrumb" className="breadcrumb-nav  mt-8 mb-5">
                <div className="container">
                    <ol className="breadcrumb d-flex justify-content-center align-items-center">
                        <li className="breadcrumb-item"><a href="/"><i class="fa-regular fa-house text-primary"></i></a></li>
                        <li className="breadcrumb-item active fw-medium" aria-current="page">Products</li>
                    </ol>
                </div>
            </nav>

            <div className="container mb-8">
                <div className="product-single-container product-single-default">
                    {/* Cart Message */}
                    <div className={`cart-message ${cartAdded ? "" : "d-none"}`}>
                        <strong className="single-cart-notice">Velvu 2MP HD 2-Way Audio Bullet Camera ST-VB HD2002WAS</strong>
                        <span> has been added to your cart.</span>
                    </div>

                    <div className="row">
                        {/* Gallery */}
                        <div className="col-lg-5 col-md-6 product-single-gallery">
                            <div className="product-slider-container">
                                <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                    <div className="product-label label-sale">-16%</div>
                                </div>

                                {/* Main Swiper */}
                                <Swiper
                                    modules={[Navigation, Thumbs]}
                                    navigation={false}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="product-single-carousel"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                className="product-single-image"
                                                src={img}
                                                width="468"
                                                height="468"
                                                alt={`product-${index}`}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Thumbnail Swiper */}
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    modules={[Thumbs]}
                                    watchSlidesProgress
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    className="prod-thumbnail"
                                >
                                    {thumbs.map((thumb, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={thumb}
                                                width="110"
                                                height="110"
                                                alt={`thumb-${index}`}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="col-lg-7 col-md-6 product-single-details ps-5">
                            <h1 className="product-title">Velvu 2MP HD 2-Way Audio Bullet Camera ST-VB HD2002WAS</h1>

                            <div className="ratings-container">
                                <div className="product-ratings">
                                    <span className="ratings" style={{ width: "60%" }}></span>
                                </div>
                                <a href="#" className="rating-link">( 6 Reviews )</a>
                            </div>

                            <hr className="short-divider" />

                            {/* <div className="price-box">
                                <span className="old-price">$1,999.00</span>
                                <span className="new-price">$1,699.00</span>
                            </div> */}

                            <div className="product-desc">
                                <p>
                                    TWO-WAY HD BULLET CAMERA Support on Velvu XVR
                                </p>
                            </div>

                            <ul className="single-info-list">
                                <li>
                                    Model: <strong>ST-VB HD2002WAS</strong>
                                </li>
                                <li>
                                    Type: <strong>HD Dome Camera</strong>
                                </li>
                                <li>
                                    Resolution: <strong>2MP</strong>
                                </li>
                                <li>
                                    Lens: <strong>3.6mm Fixed</strong>
                                </li>
                                <li>
                                    Color Night Vision: <strong>Yes</strong>
                                </li>
                                <li>
                                    Built-in Mic & Speaker: <strong>Two-way Audio</strong>
                                </li>
                                <li>
                                    Night Vision: <strong>20mtr</strong>
                                </li>
                                <li>
                                    Power Voltage: <strong>12V DC</strong>
                                </li>
                                <li>
                                    Field of View: <strong>85° Horizontal</strong>
                                </li>
                                <li>
                                    Bit Rate Control: <strong>VBR / CBR</strong>
                                </li>
                                <li>
                                    Warranty: <strong>1 Year Replacement + 1 Year Repair</strong>
                                </li>
                                <li>
                                    Make: <strong>Made in India</strong>
                                </li>
                            </ul>

                            <div className="product-action">
                                

                                <button
                                    className="btn btn-dark add-cart mr-2"
                                    onClick={handleAddToCart}
                                >
                                <i class="fa-regular fa-envelope me-2"></i>  Contact us for price
                                </button>

                                <button
                                    href="cart.html"
                                    className={`btn btn-gray view-cart`}
                                >
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Feature />
        </>
    )
}

export default ProductDetails