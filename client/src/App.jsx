import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to ShopHub
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover amazing products at great prices. Add items to your cart and enjoy a seamless shopping experience.
            </p>
          </div>
          <ProductGrid />
        </main>
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;