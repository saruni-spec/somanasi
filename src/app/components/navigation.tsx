"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center space-x-2"
            >
              <Image
                width={64}
                height={64}
                src="/logo.png"
                alt="SomaNasi Logo"
                placeholder="empty"
                priority
                className="w-16 h-16"
              />
              <span className="text-2xl font-bold text-purple-600">
                SomaNasi
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/administrator"
              prefetch={false}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Administrators
            </Link>
            <Link
              href="/teacher"
              prefetch={false}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Teachers
            </Link>
            <Link
              href="/student"
              prefetch={false}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Students
            </Link>
            <Link
              href="/demo"
              prefetch={false}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 hover:shadow-lg"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 border-t">
            <Link
              href="/administrator"
              prefetch={false}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
            >
              Administrators
            </Link>
            <Link
              href="/teacher"
              prefetch={false}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
            >
              Teachers
            </Link>
            <Link
              href="/student"
              prefetch={false}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
            >
              Students
            </Link>
            <Link
              href="/demo"
              prefetch={false}
              className="block px-4 py-3 mt-4 mb-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-center shadow-md hover:shadow-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
