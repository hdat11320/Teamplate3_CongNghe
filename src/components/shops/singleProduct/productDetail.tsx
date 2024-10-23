"use client"
import { useState } from 'react';
import React from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  // Hàm xử lý khi bấm "Add to Cart"
  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  return (
    <section className="container mx-auto py-16">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:w-1/2">
          <img
            src="/images/product/single-product-1.jpg"
            alt="T-Shirt with Logo"
            className="w-full max-w-md"
          />
          <div className="flex space-x-4 mt-4">
            <img
              src="/images/product/single-product-1.jpg"
              alt="Thumbnail 1"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-2.jpg"
              alt="Thumbnail 2"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-3.jpg"
              alt="Thumbnail 3"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-4.jpg"
              alt="Thumbnail 4"
              className="w-24 h-24 object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-2">T-Shirt with Logo</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl">
            <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="ml-2 text-gray-600">(1 customer review)</span>
          </div>
          <p className="text-xl font-semibold mb-4">$29.99</p>
          <p className="mb-6">
            In today’s online world, a brand’s success lies in combining
            technological planning and social strategies to draw customers in—
            and keep them coming back for more. Without a strong digital
            platform, time and money are wasted, content sits unnoticed, and
            prospective clients disappear.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-teal-600"
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-6">
            <hr />
            <p>
              <strong>SKU:</strong> 124224
            </p>
            <p>
              <strong>Categories:</strong> Case & Bags, Clothes
            </p>
            <p>
              <strong>Tags:</strong> accessories, business
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProductDetail;
