"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Branding */}
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-semibold"
        >
          GraphQL Apollo
        </Link>
      </div>
    </header>
  );
};

export default Header;
