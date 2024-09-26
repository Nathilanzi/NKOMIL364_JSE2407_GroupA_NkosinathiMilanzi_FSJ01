E-commerce Application
This project is a Next.js e-commerce application that showcases products with detailed views, a product carousel, and pagination. It includes components for displaying individual product details, product cards, a carousel for product images, and navigation elements like pagination and header. The application is designed with improved features for searching, filtering, sorting, and a more responsive user experience.

Features
Product Grid: Display products with their images, titles, prices, and categories.
Product Details Page: Shows detailed information about a product, including images, stock, availability, rating, tags, and reviews.
Product Carousel: Allows users to view multiple images of a product with navigation controls.
Pagination: Navigate through different pages of products.
Responsive Design: Optimized for various screen sizes.
Search Functionality: Users can search for products by entering a title or part of a title.
Filter by Categories: Products can be filtered by selected categories.
Sort by Price: Products can be sorted by price in ascending or descending order.
Persistent Filters: Retain current search, filter, and sort options when navigating between pages.
Reset Filters: Reset filtering, sorting, and searching to display default loaded products.
SEO Improvements: Dynamic meta tags are generated for products to enhance search engine visibility.
Image Optimization: Utilizes Next.js features for responsive image handling and optimization.
Components
ProductCard

Displays a summary of a product, including its title, price, category, and an optional carousel if multiple images are available.
File: components/ProductCard.jsx
Props:
product: An object containing product details such as id, title, price, category, and images.
ProductCarousel

Allows users to navigate through multiple images of a product.
File: components/ProductCarousel.jsx
Props:
images: An array of image URLs for the product.
Features:
Next and Previous buttons for image navigation.
Image indicators for the current image.
Pagination

Provides navigation buttons for moving between pages of products.
File: components/Pagination.jsx
Props:
currentPage: The current page number.
Header

A sticky navigation bar with links to the homepage, wishlist, cart, and login page.
File: components/Header.jsx
ProductDetail

Displays detailed information about a specific product, including main and thumbnail images, stock availability, rating, tags, and reviews.
File: app/products/[id]/page.jsx
Props:
params: Contains the id of the product to fetch and display.
ErrorMessage

Displays error messages when there is an issue with data fetching.
File: components/ErrorMessage.jsx
Loader

Shows a loading indicator while data is being fetched.
File: components/Loader.jsx

Installation
Clone the repository:

git clone <repository-url>
cd <repository-directory>
Install dependencies:

npm install
Start the development server:

npm run dev
Visit http://localhost:3000 in your browser to view the application.

Usage
ProductCard Component
The ProductCard component is used to display products in a grid. Example usage:


<ProductCard
  product={{
    id: 1,
    title: "Product Title",
    price: 99.99,
    category: "Category Name",
    images: ["image1.jpg", "image2.jpg"]
  }}
/>
ProductCarousel Component
The ProductCarousel component is used to display a carousel of images. Example usage:


<ProductCarousel
  images={["image1.jpg", "image2.jpg", "image3.jpg"]}
/>

Pagination Component
The Pagination component is used to navigate through pages of products. Example usage:

<Pagination currentPage={1} />
ProductDetail Page
The ProductDetail page displays detailed information about a product. Example route: /products/1.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.

Acknowledgements
Next.js: Framework used for server-side rendering and static site generation.
React Icons: Icons used for navigation buttons in the product carousel.
Flowbite: Image gallery in product details adapted from there.