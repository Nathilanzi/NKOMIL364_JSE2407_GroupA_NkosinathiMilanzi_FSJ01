"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

