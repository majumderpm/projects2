import React from 'react'
import "./category.css";

const Category = () => {

  const infoItems = [
    { id: 1, icon: "assets/images/category/icon1.png", text: "NVR" },
    { id: 2, icon: "assets/images/category/icon2.png", text: "DVR" },
    { id: 3, icon: "assets/images/category/icon3.png", text: "IP CAMERA" },
    { id: 4, icon: "assets/images/category/icon4.png", text: "AHD CAMERA" },
    { id: 5, icon: "assets/images/category/icon5.png", text: "SMPS AND ADAPTORS" },
    { id: 6, icon: "assets/images/category/icon6.png", text: "STORAGE DEVICE" },
    { id: 7, icon: "assets/images/category/icon7.png", text: "CABLES" },
    { id: 8, icon: "assets/images/category/icon8.png", text: "WI FI CAMERA" },
    { id: 9, icon: "assets/images/category/icon9.png", text: "NETWORK DEVICES" },
    { id: 10, icon: "assets/images/category/icon10.png", text: "BIOMETRIC" },
    { id: 11, icon: "assets/images/category/icon11.png", text: "MONITORS" },
    { id: 12, icon: "assets/images/category/icon12.png", text: "SMART BOARD" },
    { id: 13, icon: "assets/images/category/icon13.png", text: "COMPUTER ACCESSORIES" },
  ];


  return (
    <>
      <div className="container">
        <div className="info-boxes-container">
          <div className="row m-0 divide-line">
            {infoItems.map((item) => (
              <div
                key={item.id}
                className="info-box info-box-icon-left col-lg-2 col-mb-3 col-sm-4 col-6"
              >
                <img src={item.icon} className={` text-primary iconImage`} alt={item.text}></img>
                <div className="info-box-content">
                  <h4 className="font1 line-height-1 ls-10">{item.text}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Category