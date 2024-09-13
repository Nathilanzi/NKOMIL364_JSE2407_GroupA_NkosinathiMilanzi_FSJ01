// app/products/page.jsx
"use client"
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import { useEffect } from 'react';

const PAGE_SIZE = 20;

// Fetch products on the server side in an async component
async function fetchProducts(page = 1) {
  const offset = (page - 1) * PAGE_SIZE;
  const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${PAGE_SIZE}&offset=${offset}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  useEffect(( ) => {
    fetchProducts(currentPage);
  }, [currentPage])

  let products = [];
  try {
    products = await fetchProducts(page);
  } catch (error) {
    return <p>Failed to load products. Please try again later.</p>;
  }
