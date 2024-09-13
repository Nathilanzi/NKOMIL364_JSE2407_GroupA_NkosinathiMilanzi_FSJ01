// app/layout.js
import Navbar from '../components/Navbar';
import './globals.css'; // Ensure global styles are applied

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
