"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="bg-gray-900 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-white">
          <img src="/online-shop.png" alt="Shop Logo" className="h-10 mr-2" />
          <span className="text-2xl font-bold">Doski General</span>
        </Link>

        <button onClick={toggleNavbar} className="text-white text-2xl">
          &#9776;
        </button>
