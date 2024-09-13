"use client"; // This is a Client Component because it uses state or client-side behavior

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const router = useRouter();
  const { id } = params; // Destructure the id from the params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://next-ecommerce-api.vercel.app/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
          setMainImage(data.images[0]); // Set the first image as the main image
        } else {
          console.error('Failed to fetch product');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-5 border rounded-lg shadow-lg">
      {/* Main product image */}
      <div className="grid gap-4 mb-4">
        <div>
          <img 
            src={mainImage} 
            alt={product.title} 
            className="h-64 rounded-lg" 
          />
        </div>
