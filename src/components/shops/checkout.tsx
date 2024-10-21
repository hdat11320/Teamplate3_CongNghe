'use client'

import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="text-right text-sm mb-4">
        <a href="#" className="text-blue-600 hover:underline">
          Have a coupon? Click here to enter your code
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name *" className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Last name *" className="w-full p-2 border rounded-md" />
            </div>
            <input type="text" placeholder="Company name (optional)" className="w-full p-2 border rounded-md" />
            <select className="w-full p-2 border rounded-md">
              <option>Country / Region</option>
              <option>Vietnam</option>
            </select>
            <input type="text" placeholder="Street address *" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Postcode / ZIP (optional)" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Town / City *" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Phone *" className="w-full p-2 border rounded-md" />
            <input type="email" placeholder="Email address *" className="w-full p-2 border rounded-md" />
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Additional information</h2>
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full p-2 border rounded-md h-32"
          ></textarea>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-bold mb-4">Your order</h2>
        <table className="w-full bg-white rounded-lg shadow-md text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">Hoodie with Logo x 1</td>
              <td className="p-4 text-right">$39.99</td>
            </tr>
            <tr>
              <td className="p-4">Dark T-Shirt with Logo x 1</td>
              <td className="p-4 text-right">$59.99</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Subtotal</td>
              <td className="p-4 text-right font-bold">$99.98</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Total</td>
              <td className="p-4 text-right font-bold">$99.98</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-red-100 p-4 mb-6 rounded-lg">
        <p className="text-red-600">
          Sorry, it seems that there are no available payment methods for your state. Please contact us if you
          require assistance or wish to make alternate arrangements.
        </p>
      </div>

      <div className="text-right">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
