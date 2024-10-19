'use client';

import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative w-full bg-opacity-50 h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('../images/background/bg-banner-home5.png')" }} // Đường dẫn đến hình ảnh banner
    >
      {/* Lớp phủ mờ trên ảnh nền */}
      <div className="absolute inset-0 bg-customDarkBlue flex items-center justify-between px-8 z-10">
        {/* Chữ Single Product ở bên trái */}
        <div className="text-white">
          <h1 className="text-white text-4xl font-bold">Single Product</h1>
        </div>

        {/* Đường dẫn Home > Shop > Single Product ở bên phải */}
        <div className="text-white">
          <p className="text-lg">
            <span className="text-gray-800 font-bold">HOME</span> {'>'} <span className="text-gray-800 font-bold">SHOP</span> {'>'} <span className="text-white font-bold">SINGLE PRODUCT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
