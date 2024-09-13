"use client"; // This is a Client Component because it uses state or client-side behavior

import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage }) {
  const router = useRouter();

  // Function to handle page navigation
  const goToPage = (page) => {
    router.push(`/?page=${page}`);
  };

