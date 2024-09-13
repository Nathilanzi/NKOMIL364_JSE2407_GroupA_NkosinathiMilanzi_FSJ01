import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import ProductCarousel from "@/components/ProductCarousel";

/**
 * Fetches products from the API.
 * 
 * @async
 * @function fetchProducts
 * @param {number} [page=1] - The current page number to fetch products for.
 * @returns {Promise<Array>} The list of products for the current page.
 * @throws {Error} If the fetch request fails.
 */
async function fetchProducts(page = 1) {
  const res = await fetch(`https://next-ecommerce-api.vercel.app/products?skip=${(page - 1) * 20}&limit=20`, {
    cache: 'no-store', // Ensure data is always fresh
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

/**
 * Main ProductsPage component that fetches and displays products, along with pagination.
 * 
 * @component
 * @param {Object} searchParams - The URL search parameters.
 * @param {string} [searchParams.page] - The current page number from the URL.
 * @returns {JSX.Element} The ProductsPage component, which includes a product grid, pagination, and error handling.
 */
export default async function ProductsPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1; // Get the current page from URL query (searchParams)
  let products;

  try {
    products = await fetchProducts(page); // Fetch products for the current page
  } catch (error) {
    return (
      <div>
        <h1>Failed to load products</h1>
        <p>{error.message}</p>
      </div>
    );
  }

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
