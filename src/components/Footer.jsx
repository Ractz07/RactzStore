import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-white">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ractz Store</h3>
            <p className="text-sm mb-4">
              astra lorem ipsum dolor sit amet consectetur adipiscing elit sed
              do.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white rounded-full"></a>
              <a href="#" className="w-8 h-8 bg-white rounded-full"></a>
              <a href="#" className="w-8 h-8 bg-white rounded-full"></a>
              <a href="#" className="w-8 h-8 bg-white rounded-full"></a>
            </div>
            <p className="text-sm mt-4">Ractz27@company.com</p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mobile Preview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blockchain Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Network Pointer
                </a>
              </li>
            </ul>
          </div>

          {/* Welcome Presentation Column */}
          <div>
            <h4 className="font-semibold mb-4">Welcome Presentation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  WordPress Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Magazine Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Protection Promotion
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  OpenSource Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  What's New
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Roadmaps
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Astra Security Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  WP Firewall
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Website Scanner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Attack Glossary
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security Checklist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© 2024 Company. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
