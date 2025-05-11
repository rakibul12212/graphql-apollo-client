"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-600 text-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Branding */}
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-semibold"
        >
          rickandmorty
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#Character" className="text-xl font-semibold">
            Character
          </Link>
          <Link href="#Episode" className="text-xl font-semibold">
            Episode
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-700 px-4 py-4 flex flex-col gap-4 absolute w-full h-screen">
          <Link
            href="#Character"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Character
          </Link>
          <Link
            href="#Episode"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Episode
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
