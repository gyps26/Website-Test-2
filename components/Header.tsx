"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900">
              Stages Lawn & Landscape
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 font-medium text-sm text-gray-600">
            <Link href="#about" className="hover:text-green-600 transition-colors">About Us</Link>
            <Link href="#services" className="hover:text-green-600 transition-colors">Services</Link>
            <Link href="#process" className="hover:text-green-600 transition-colors">Process</Link>
            <Link href="#work" className="hover:text-green-600 transition-colors">Our Work</Link>
            <Link href="#reviews" className="hover:text-green-600 transition-colors">Reviews</Link>
            <Link href="#faq" className="hover:text-green-600 transition-colors">FAQ</Link>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="#quote" 
              className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow"
            >
              Get a quote
            </Link>
            <button 
              onClick={toggleMenu}
              className="xl:hidden p-2 text-gray-600 hover:text-green-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden shadow-black/5 animate-in slide-in-from-top-4 py-4 px-4 flex flex-col gap-4">
          <Link href="#about" onClick={closeMenu} className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-900 font-medium">About Us</Link>
          <Link href="#services" onClick={closeMenu} className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-900 font-medium">Services</Link>
          <Link href="#process" onClick={closeMenu} className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-900 font-medium">Process</Link>
          <Link href="#work" onClick={closeMenu} className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-900 font-medium">Our Work</Link>
          <Link href="#reviews" onClick={closeMenu} className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-900 font-medium">Reviews</Link>
          <Link href="#faq" onClick={closeMenu} className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-900 font-medium">FAQ</Link>
          <Link href="#quote" onClick={closeMenu} className="block px-4 py-3 mt-2 rounded-xl bg-green-600 text-white font-medium text-center">Get a quote</Link>
        </div>
      )}
    </header>
  );
}
