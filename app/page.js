"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; 
import FilterSortComponent from '@/components/Filter';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from './API'; 
import Head from 'next/head';
import Link from 'next/link'; // Ensure Link is imported

const PAGE_SIZE = 20;

/**
 * ProductsPage component to display a list of products with filtering, sorting, and pagination.
 *
 * @component
 * @returns {JSX.Element} The rendered ProductsPage component.
 */
const ProductsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Deconstructing URL to get query parameters for category, sort, and search
  const category = searchParams.get('category') || ''; 
  const sortBy = searchParams.get('sortBy') || 'id'; 
  const order = searchParams.get('order') || 'asc'; 
  const search = searchParams.get('search') || ''; 

  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  /**
   * Fetches products data based on current filters and pagination.
 * 
 * @async
   * @param {number} page - The current page number.
   * @param {Object} filters - The filters for fetching products.
   * @param {string} filters.category - The selected category filter.
   * @param {string} filters.sortBy - The field to sort by.
   * @param {string} filters.order - The order of sorting ('asc' or 'desc').
   * @param {string} filters.search - The search term to filter products.
   */
  const fetchProductsData = async (page = 1, filters = {}) => {
    setLoading(true);
    setError(null); 

    try {
      const response = await fetchProducts({
        skip: (page - 1) * PAGE_SIZE,
        limit: PAGE_SIZE,
        search,
        category,
        sortBy,
        order
      });

      console.log("Fetched data:", response); // Log fetched data

      if (Array.isArray(response)) {
        setProducts(response);
        setTotalPages(Math.ceil(response.length / PAGE_SIZE));
      } else {
        console.error("Expected an array of products but got:", response);
        setProducts([]);
      }
    } catch (err) {
      console.error("Error fetching products:", err.message);
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Products</h1>

      {/* Render product grid */}
      <div className="product-grid grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination currentPage={page} totalItems={100} itemsPerPage={20} />
    </div>
  );
}
