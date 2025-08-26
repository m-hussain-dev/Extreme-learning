import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-20 text-gray-300 md:py-9 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-9">
        {/* Section 1: About */}
        <div>
          <h2 className="text-lg font-semibold text-white">About Us</h2>
          <p className="text-sm mt-2">
            We provide high-quality web solutions to help businesses grow
            online.
          </p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-sm mt-2">Email: support@example.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};
