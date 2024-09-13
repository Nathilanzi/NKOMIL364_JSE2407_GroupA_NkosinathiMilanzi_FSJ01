import Link from 'next/link';
import ProductCarousel from './ProductCarousel';

export default function ProductCard({ product }) {
  return (
    <div className="product-card border rounded-md p-4 shadow hover:shadow-lg">
      <div className="cursor-pointer">
