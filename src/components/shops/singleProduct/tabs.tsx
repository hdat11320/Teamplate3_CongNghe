'use client'
import { useState } from "react";

const ProductDetailTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Tabs Header */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`${
            activeTab === "description"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-600"
          } py-2 px-6 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 hover:bg-blue-600 hover:text-white`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("information")}
          className={`${
            activeTab === "information"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-600"
          } py-2 px-6 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 hover:bg-blue-600 hover:text-white`}
        >
          Information
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`${
            activeTab === "review"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-600"
          } py-2 px-6 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 hover:bg-blue-600 hover:text-white`}
        >
          Review (01)
        </button>
      </div>

      {/* Tabs Content */}
      <div>
        {/* Description Tab Content */}
        {activeTab === "description" && (
          <div className="text-gray-700">
            <p>
              While integrating the security with the DevOps approach has always
              been of high demand, this requires a completely different range of
              processes and tools. DevOps is already known to boast of an agile
              development methodology. Now when the inputs of the security experts
              I’ll be brought in a collaborative environment, the project will have
              an array of effective security safeguards.
            </p>
            <p className="mt-4">
              In spite of disturbing the agile development process of the DevOps
              approach, the additional security inputs only enhance the safeguards and
              reliability of the project. So, in a way, DevSecOps will only extend the
              benefits of a DevOps approach further with security inputs.
            </p>
          </div>
        )}

        {/* Information Tab Content */}
        {activeTab === "information" && (
          <div className="text-gray-700">
            <table className="table-auto w-1/2">
              <tbody>
                <tr>
                  <td className="font-semibold py-2 w-1/6">SKU:</td>
                  <td className="py-2 w-5/6">124224</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Categories:</td>
                  <td className="py-2 w-5/6">Case & Bags, Clothes</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Tags:</td>
                  <td className="py-2 w-5/6">accessories, business</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Size:</td>
                  <td className="py-2 w-5/6">L, M, S</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Color:</td>
                  <td className="py-2 w-5/6">Blue, Red, Green</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Review Tab Content */}
        {activeTab === "review" && (
          <div className="text-gray-700">
            <p>1 review for T-Shirt with Logo</p>
            {/* Review Content */}
            <div className="container mx-auto px-6 py-10">
      {/* Reviews Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
      </div>

      {/* Existing Reviews */}
      <div className="mb-6 flex">
        {/* Review 1 */}
        <div className="flex items-start mb-6">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">John Doe</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600">This is a fantastic product! Highly recommended to all.</p>
          </div>
        </div>
      </div>
      <div className="items-center">
        <p>Add a preview</p>
        <p>Your email address will not be published. Required fields are marked *</p>
        </div>
       {/* Rating (Star) */}
       <div className="items-center">
            <label className="mr-2 text-gray-700">Your Rating:</label>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-500"
                >
                  ★
                </span>
              ))}
            </div>
          </div>
      {/* Add New Review Form */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>

        <form className="space-y-4">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          {/* Comment Section */}
          <div className="w-1/2">
            <textarea
              placeholder="Your Comment"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={5}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailTabs;
