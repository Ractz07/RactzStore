import React, { useState } from "react";

const Help = () => {
  const [activeTab, setActiveTab] = useState("ordering");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = {
    ordering: [
      {
        question: "How do I place an order?",
        answer:
          "Browse our products, add items to your cart, proceed to checkout, fill in your shipping details, choose your payment method, and confirm your order. You'll receive an order confirmation email immediately.",
      },
      {
        question: "Can I modify my order after placing it?",
        answer:
          "You can modify your order within 1 hour of placing it. Contact our customer service immediately with your order number. Once the order is processed, modifications may not be possible.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for orders over $500.",
      },
      {
        question: "Is it safe to use my credit card on your site?",
        answer:
          "Absolutely! We use industry-standard SSL encryption to protect your payment information. Your credit card details are never stored on our servers.",
      },
    ],
    shipping: [
      {
        question: "What are your shipping options?",
        answer:
          "We offer Standard Shipping (3-5 business days), Express Shipping (1-2 business days), and Overnight Shipping for urgent orders. Shipping costs vary based on your location and order weight.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes! We ship to over 100 countries worldwide. International shipping times vary from 5-15 business days depending on the destination. Additional customs fees may apply.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly on the carrier's website using this number.",
      },
      {
        question: "What if my package is lost or damaged?",
        answer:
          "If your package is lost or arrives damaged, contact us immediately with photos (for damage claims). We'll work with the carrier to resolve the issue and ensure you receive your order or a full refund.",
      },
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy from the date of delivery. Items must be unused, in original packaging, with all tags attached. Final sale items and personalized products cannot be returned.",
      },
      {
        question: "How do I start a return?",
        answer:
          "Log into your account, go to Order History, select the order, click 'Return Items', choose the items and reason, and print the prepaid return label. Drop off the package at any authorized location.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed within 5-7 business days after we receive and inspect your return. The refund will be credited to your original payment method.",
      },
      {
        question: "Can I exchange an item?",
        answer:
          "Yes! You can exchange items for different sizes or colors. Select 'Exchange' instead of 'Return' when initiating the return process. Exchanges are subject to product availability.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer:
          "Click 'Sign Up' in the top navigation, fill in your email, create a password, and provide basic information. You can also sign up during checkout or use social login options.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
      },
      {
        question: "How do I update my account information?",
        answer:
          "Log into your account, go to 'Account Settings', and update your personal information, shipping addresses, or payment methods. Remember to save your changes.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can request account deletion by contacting our customer service. Please note this action is permanent and will remove all your order history and saved information.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl opacity-90">
            Find answers to common questions and get the help you need
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 pr-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <span className="text-2xl">🔍</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Order</h3>
            <p className="text-sm text-gray-600">Find your package</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer">
            <div className="text-4xl mb-3">↩️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Returns</h3>
            <p className="text-sm text-gray-600">Easy returns process</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Shipping Info</h3>
            <p className="text-sm text-gray-600">Delivery options</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-semibold text-gray-900 mb-2">Payment Help</h3>
            <p className="text-sm text-gray-600">Payment options</p>
          </div>
        </div>

        {/* FAQ Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("ordering")}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "ordering"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Ordering
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "shipping"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Shipping
            </button>
            <button
              onClick={() => setActiveTab("returns")}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "returns"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Returns & Refunds
            </button>
            <button
              onClick={() => setActiveTab("account")}
              className={`px-6 py-4 font-semibold whitespace-nowrap ${
                activeTab === "account"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Account
            </button>
          </div>

          {/* FAQ Content */}
          <div className="p-6">
            {faqData[activeTab].map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 flex justify-between items-center text-left hover:text-blue-600 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl flex-shrink-0">
                    {expandedFaq === index ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-6 opacity-90">
            Can't find what you're looking for? Our support team is here to help
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Live Chat
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-white border-opacity-30">
            <p className="text-sm opacity-90">
              Email: support@yourstore.com | Phone: +1 (555) 123-4567
            </p>
            <p className="text-sm opacity-90 mt-1">
              Monday - Friday: 9AM - 6PM EST
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Help Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-1">
                Order Status Updates
              </h3>
              <p className="text-sm text-gray-600">
                Learn how to check your order status
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-1">Size Guide</h3>
              <p className="text-sm text-gray-600">
                Find the perfect fit for your products
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-1">Gift Cards</h3>
              <p className="text-sm text-gray-600">
                How to purchase and redeem gift cards
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-1">Promo Codes</h3>
              <p className="text-sm text-gray-600">
                Apply discounts and promotional codes
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-1">Product Care</h3>
              <p className="text-sm text-gray-600">
                Tips for maintaining your products
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-1">
                Warranty Information
              </h3>
              <p className="text-sm text-gray-600">
                Understanding our warranty policies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
