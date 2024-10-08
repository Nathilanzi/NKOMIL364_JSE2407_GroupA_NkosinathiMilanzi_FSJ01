import axios from 'axios';

const BASE_URL = 'https://next-ecommerce-api.vercel.app';

/**
 * Fetches products based on various filters and sorting options.
 *
 * @async
 * @param {Object} params - The parameters for fetching products.
 * @param {string} [params.sortBy='id'] - The field to sort by (default is 'id').
 * @param {string} [params.order='asc'] - The order of sorting (default is 'asc').
 * @param {number} [params.limit=20] - The maximum number of products to fetch (default is 20).
 * @param {number} [params.skip=0] - The number of products to skip (for pagination).
 * @param {string} [params.category=''] - The category to filter products by (default is an empty string).
 * @param {string} [params.search=''] - The search term to filter products by (default is an empty string).
 * @returns {Promise<Array>} A promise that resolves to an array of fetched products.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export const fetchProducts = async (params) => {
    // Build query parameters with handling for undefined values
    const queryParams = new URLSearchParams({
        sortBy: params.sortBy || 'id', // Default sort field
        order: params.order || 'asc', // Default order
        limit: params.limit || 20, // Default limit
        skip: params.skip || 0, // Default skip
        category: params.category || '', // Pass empty string if undefined
        search: params.search || '' // Pass empty string if undefined
    }).toString();

    console.log("Fetching products with params:", queryParams); // Log for debugging

    try {
        const response = await axios.get(`${BASE_URL}/products?${queryParams}`);
        console.log("Fetched products successfully:", response.data); // Log successful fetch
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
        throw error; // Rethrow the error for further handling
    }
};

/**
 * Fetches categories from the API.
 *
 * @async
 * @returns {Promise<Array>} A promise that resolves to an array of fetched categories.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        console.log("Fetched categories successfully:", response.data); // Log successful category fetch
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error.response ? error.response.data : error.message);
        throw error; // Rethrow the error for further handling
    }
};
