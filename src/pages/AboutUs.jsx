import React from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">
            Your trusted partner in online shopping
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to our e-commerce platform, where quality meets convenience.
            Founded with a passion for delivering exceptional products and
            service, we've grown into a trusted destination for online shoppers
            worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our journey began with a simple vision: to create a seamless
            shopping experience that brings the best products right to your
            doorstep. Today, we're proud to serve thousands of satisfied
            customers who trust us for their everyday needs.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide high-quality products at competitive prices while
              ensuring an exceptional shopping experience for every customer.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, quality, and customer satisfaction are at the heart of
              everything we do. We believe in building lasting relationships.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted and innovative e-commerce platform,
              continuously evolving to meet our customers' needs.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Guaranteed
                </h4>
                <p className="text-gray-600">
                  We carefully curate our product selection to ensure only the
                  best quality items reach our customers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Fast Shipping
                </h4>
                <p className="text-gray-600">
                  Get your orders delivered quickly with our reliable shipping
                  partners and tracking system.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure Payments
                </h4>
                <p className="text-gray-600">
                  Shop with confidence knowing your transactions are protected
                  by industry-leading security.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600">
                  Our dedicated customer support team is always ready to assist
                  you with any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            Have questions? We'd love to hear from you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
