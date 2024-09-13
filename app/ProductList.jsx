import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const PRODUCTS_API = 'https://next-ecommerce-api.vercel.app/products';

export default function Home({ products, page }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState(products);

  const fetchProducts = async (page) => {
    try {
      setLoading(true);
      const res = await fetch(`${PRODUCTS_API}?skip=${(page - 1) * 20}&limit=20`);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProductData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 1) {
      fetchProducts(page);
    }
  }, [page]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
