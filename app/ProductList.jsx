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

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="p-4 border rounded-lg text-center hover:scale-105 transition-transform">
              <img src={product.image} alt={product.title} className="w-full h-auto mb-4" />
              <h2 className="text-xl mb-2">{product.title}</h2>
              <p className="text-lg font-semibold text-green-600">${product.price}</p>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <p className="text-yellow-500">Rating: {product.rating.rate}</p>
            </div>
          </Link>
        ))}
      </div>

    <Pagination currentPage={currentPage} />
      {/* Pagination controls */}
      {/* <div className="flex justify-center space-x-4 my-10">
        {page > 1 && (
          <Link href={`?page=${page - 1}`} className="px-4 py-2 text-blue-500">
            Previous
          </Link>
        )}
        <span className="text-lg">Page {page}</span>
        <Link href={`?page=${page + 1}`} className="px-4 py-2 text-blue-500">
          Next
        </Link>
      </div> */}
    </div>
  );
}
