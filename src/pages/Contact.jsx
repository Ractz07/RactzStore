import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have a question or need assistance? Our team is here to help you.
              Fill out the form or reach us through the contact information
              below.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
                      📧
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">support@yourstore.com</p>
                    <p className="text-gray-600">info@yourstore.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
                      📞
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
                      📍
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-gray-600">123 Commerce Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
                      💬
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Live Chat
                    </h3>
                    <p className="text-gray-600">Available 24/7</p>
                    <p className="text-gray-600">Instant support online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your shipping times?
              </h3>
              <p className="text-gray-600">
                Standard shipping takes 3-5 business days. Express shipping is
                available for 1-2 business days delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Products must be
                in original condition with tags attached.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to over 100 countries worldwide. Shipping rates and
                times vary by location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                Once shipped, you'll receive a tracking number via email. Use it
                to track your order on our website or carrier's site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
